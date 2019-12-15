const API =
  'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA'

export const requestPictureAPI = () => {
  return fetch(API)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`response status ${res.status}`);
      }
      return res.json();
    })
    .catch(error => error)
} 