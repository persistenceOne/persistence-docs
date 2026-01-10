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

function updatePage(pagePath) {
  let content = fs.readFileSync(pagePath, 'utf-8')
  let modified = false
  
  // Skip if already updated (has useDisclosure for menu)
  if (content.includes('useDisclosure') && content.includes('onMenuClick')) {
    return false
  }
  
  // Add useDisclosure import if not present
  if (content.includes("from '@chakra-ui/react'") && !content.includes('useDisclosure')) {
    const importMatch = content.match(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]@chakra-ui\/react['"]/)
    if (importMatch) {
      const imports = importMatch[1]
      if (!imports.includes('useDisclosure')) {
        content = content.replace(
          /import\s+{\s*([^}]+)\s*}\s+from\s+['"]@chakra-ui\/react['"]/,
          `import { ${imports}, useDisclosure } from '@chakra-ui/react'`
        )
        modified = true
      }
    }
  }
  
  // Add useDisclosure hook
  if (content.includes('useState') && !content.includes('const { isOpen, onOpen, onClose }')) {
    const useStateMatch = content.match(/(const\s+\[headings, setHeadings\]\s*=\s*useState<HeadingItem\[\]>\(\[\]\))/)
    if (useStateMatch) {
      content = content.replace(
        useStateMatch[0],
        `const { isOpen, onOpen, onClose } = useDisclosure()\n  ${useStateMatch[0]}`
      )
      modified = true
    }
  }
  
  // Update Header component to include onMenuClick
  if (content.includes('<Header />') && !content.includes('onMenuClick')) {
    content = content.replace(/<Header\s+\/>/g, '<Header onMenuClick={onOpen} />')
    modified = true
  }
  
  // Update Sidebar component to include isOpen and onClose
  if (content.includes('<Sidebar />') && !content.includes('isOpen')) {
    content = content.replace(/<Sidebar\s+\/>/g, '<Sidebar isOpen={isOpen} onClose={onClose} />')
    modified = true
  }
  
  // Update Container padding to be responsive
  if (content.includes('px={7}') || content.includes('px={8}')) {
    content = content.replace(
      /py={8}\s+px={7}/g,
      'py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}'
    )
    content = content.replace(
      /py={8}\s+px={8}/g,
      'py={{ base: 4, md: 8 }} px={{ base: 4, md: 8 }}'
    )
    modified = true
  }
  
  // Update heading size to be responsive
  if (content.includes('size="2xl"') && !content.includes('size={{')) {
    content = content.replace(
      /size="2xl"/g,
      'size={{ base: "xl", md: "2xl" }}'
    )
    modified = true
  }
  
  // Update flex direction for main content area
  if (content.includes('display="flex" flex="1" overflow="hidden">') && !content.includes('flexDirection={{')) {
    // Find the Box that contains both content and TOC
    const flexBoxMatch = content.match(/(<Box\s+display="flex"\s+flex="1"\s+overflow="hidden">[\s\S]*?<TableOfContents)/)
    if (flexBoxMatch) {
      content = content.replace(
        /(<Box\s+display="flex"\s+flex="1"\s+overflow="hidden")>/,
        '$1 flexDirection={{ base: "column", xl: "row" }}>'
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

function updateAllPages() {
  const appDir = path.join(process.cwd(), 'app')
  const pages = findPages(appDir)
  
  let updated = 0
  let skipped = 0
  
  for (const pagePath of pages) {
    try {
      const wasUpdated = updatePage(pagePath)
      if (wasUpdated) {
        updated++
        const relativePath = path.relative(process.cwd(), pagePath)
        console.log(`Updated: ${relativePath}`)
      } else {
        skipped++
      }
    } catch (error) {
      console.error(`Error updating ${pagePath}:`, error.message)
    }
  }
  
  console.log(`\nUpdated ${updated} pages, skipped ${skipped} pages`)
}

updateAllPages()

