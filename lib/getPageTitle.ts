import { navigation } from './navigation'

/**
 * Recursively search navigation to find the title for a given path
 */
function findTitleInNav(items: typeof navigation, path: string): string | null {
  for (const item of items) {
    if (item.path === path) {
      return item.title
    }
    if (item.children) {
      const found = findTitleInNav(item.children as typeof navigation, path)
      if (found) return found
    }
  }
  return null
}

/**
 * Get the page title from navigation based on the current path
 */
export function getPageTitle(pathname: string): string {
  // Normalize path - remove trailing slashes except for root
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  
  const title = findTitleInNav(navigation, normalizedPath)
  
  if (title) {
    return `${title} | Persistence Docs`
  }
  
  // Fallback: try to generate from path
  const pathParts = normalizedPath.split('/').filter(Boolean)
  if (pathParts.length > 0) {
    const lastPart = pathParts[pathParts.length - 1]
    const formatted = lastPart
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    return `${formatted} | Persistence Docs`
  }
  
  return 'Persistence Docs'
}

/**
 * Get metadata for a page based on pathname
 */
export function getPageMetadata(pathname: string) {
  const title = getPageTitle(pathname)
  return {
    title,
    description: 'Documentation for Persistence One ecosystem',
  }
}
