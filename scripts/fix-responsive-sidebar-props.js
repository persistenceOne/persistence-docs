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
  
  // Fix Sidebar props - should be outside the flex container
  if (content.includes('useDisclosure') && content.includes('<Sidebar />')) {
    // Find the pattern: <Sidebar /> inside a flex container
    const pattern = /(<Box\s+display="flex"\s+flex="1"\s+overflow="hidden"[^>]*>)\s*<Sidebar\s+\/>/
    if (pattern.test(content)) {
      content = content.replace(
        /(<Box\s+display="flex"\s+flex="1"\s+overflow="hidden"[^>]*>)\s*<Sidebar\s+\/>/,
        '$1\n        <Sidebar isOpen={isOpen} onClose={onClose} />\n        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>'
      )
      modified = true
    }
  }
  
  // Fix Container padding if not already responsive
  if (content.includes('py={8} px={7}') && !content.includes('py={{')) {
    content = content.replace(
      /py={8}\s+px={7}/g,
      'py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}'
    )
    modified = true
  }
  
  // Close the extra Box tag if needed
  if (content.includes('flexDirection={{ base: "column", xl: "row" }}') && !content.match(/<\/Box>\s*<\/Box>\s*<\/Box>/)) {
    // Check if we need to add closing tag
    const closingPattern = /(<TableOfContents[^>]*\/>)\s*(<\/Box>)\s*(<\/Box>)\s*(<\/Box>)/
    if (!closingPattern.test(content)) {
      // Find where TableOfContents closes and add extra closing Box
      content = content.replace(
        /(<TableOfContents[^>]*\/>)\s*(<\/Box>)\s*(<\/Box>)/,
        '$1\n        </Box>\n      $2\n      $3'
      )
      modified = true
    }
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

