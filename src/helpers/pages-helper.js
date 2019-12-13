export const pagesMap = {
  '/': 'main',
  '/history': 'history',
  getPageName(path) {
    return this[path];
  }
}

export const getCurrentPageName = (pathname, routesConfig) => {
  const pageNow = pagesMap.getPageName(pathname);
  return routesConfig[pageNow].name;
}