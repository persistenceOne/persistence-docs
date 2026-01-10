const fs = require('fs')
const path = require('path')

function findPages(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      findPages(filePath, fileList)
    } else if (file === 'page.tsx') {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

function fixPage(pagePath) {
  let content = fs.readFileSync(pagePath, 'utf-8')
  let modified = false
  
  // Fix missing closing Box tag - pattern: </Box>\n      </Box>\n  )
  // Should be: </Box>\n      </Box>\n    </Box>\n  )
  
  const wrongPattern = /<\/Box>\s*<\/Box>\s*\)\s*\}/
  
  if (wrongPattern.test(content)) {
    content = content.replace(
      /(<TableOfContents[^>]*\/>)\s*<\/Box>\s*<\/Box>\s*\)\s*\}/,
      '$1\n        </Box>\n      </Box>\n    </Box>\n  )\n}'
    )
    modified = true
  }
  
  if (modified) {
    fs.writeFileSync(pagePath, content, 'utf-8')
    return true
  }
  
  return false
}

function fixAllPages() {
  const appDir = path.join(process.cwd(), 'app')
  const pages = findPages(appDir)
  
  let fixed = 0
  
  for (const pagePath of pages) {
    try {
      if (fixPage(pagePath)) {
        fixed++
        const relativePath = path.relative(process.cwd(), pagePath)
        console.log(`Fixed: ${relativePath}`)
      }
    } catch (error) {
      console.error(`Error fixing ${pagePath}:`, error.message)
    }
  }
  
  console.log(`\nFixed ${fixed} pages`)
}

fixAllPages()

