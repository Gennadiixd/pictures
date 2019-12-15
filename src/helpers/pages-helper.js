export const pagesMap = {
  '/': 'Главная',
  '/history': 'История',
  getPageName(path) {
    return this[path];
  }
}

export const getCurrentPageName = (pathname) => {
  return pagesMap.getPageName(pathname);
}