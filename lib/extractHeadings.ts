export interface HeadingItem {
  id: string
  text: string
  level: number
}

export function extractHeadings(content: string): HeadingItem[] {
  const headings: HeadingItem[] = []
  const lines = content.split('\n')
  
  for (const line of lines) {
    // Match markdown headings (# ## ### etc.)
    const match = line.match(/^(#{1,6})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      let text = match[2].trim()
      
      // Strip HTML tags (including images) from text for display in TOC
      // This removes <img> tags but keeps the heading text
      let displayText = text.replace(/<[^>]+>/g, '').trim()
      
      // Decode HTML entities (like &#x20; for space)
      displayText = displayText
        .replace(/&#x20;/g, ' ')
        .replace(/&#160;/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#32;/g, ' ')
        .trim()
      
      // Generate ID from text (remove HTML tags and entities for ID generation)
      const id = text
        .toLowerCase()
        .replace(/<[^>]+>/g, '') // Remove HTML tags
        .replace(/&#x20;/g, ' ') // Decode HTML entities
        .replace(/&#160;/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#32;/g, ' ')
        .replace(/[^\w\s-]/g, '') // Remove special chars except hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim()
      
      // Only add if we have a valid ID and display text (after removing images)
      if (id && displayText) {
        headings.push({ id, text: displayText, level } as HeadingItem)
      }
    }
  }
  
  // Make IDs unique by appending numbers if needed
  const idCounts: Record<string, number> = {}
  headings.forEach((heading) => {
    const baseId = heading.id
    if (idCounts[baseId]) {
      idCounts[baseId]++
      heading.id = `${baseId}-${idCounts[baseId]}`
    } else {
      idCounts[baseId] = 1
    }
  })
  
  return headings
}
