export const pagesMap = {
  '/': 'Главная',
  '/history': 'История',
  '/practice': 'Practice',
  getPageName(path) {
    return this[path];
  }
};

export const getCurrentPageName = (pathname) => {
  return pagesMap.getPageName(pathname);
};