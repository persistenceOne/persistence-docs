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
  
  // Fix structure: Sidebar should be outside the flexDirection container
  // Pattern to fix:
  // <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
  //   <Sidebar isOpen={isOpen} onClose={onClose} />
  //   <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
  
  // Should be:
  // <Box display="flex" flex="1" overflow="hidden">
  //   <Sidebar isOpen={isOpen} onClose={onClose} />
  //   <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
  
  const wrongPattern = /<Box\s+display="flex"\s+flex="1"\s+overflow="hidden"\s+flexDirection=\{\{\s*base:\s*"column",\s*xl:\s*"row"\s*\}\}>\s*<Sidebar/
  
  if (wrongPattern.test(content)) {
    // Replace the outer Box to remove flexDirection
    content = content.replace(
      /<Box\s+display="flex"\s+flex="1"\s+overflow="hidden"\s+flexDirection=\{\{\s*base:\s*"column",\s*xl:\s*"row"\s*\}\}>/,
      '<Box display="flex" flex="1" overflow="hidden">'
    )
    modified = true
  }
  
  // Fix Container padding if not responsive
  if (content.includes('py={8} px={7}') && !content.includes('py={{')) {
    content = content.replace(
      /py={8}\s+px={7}/g,
      'py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}'
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

