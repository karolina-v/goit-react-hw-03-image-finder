function fetchImages(newValue) {
    const API = {
        KEY_API: '25854357-73cc9e97f6c573caedd14922c',
        BASE_URL: 'https://pixabay.com/api/',
        page: 1,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
      }

    const searchURL = `${API.BASE_URL}?q=${newValue}&page=${API.page}&key=${API.KEY_API}&image_type=${API.image_type}&orientation=${API.orientation}&per_page=${API.per_page}`;    
    fetch(searchURL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('По вашему запросу ничего не найдено!'));
      })
}

const api = {
    fetchImages
}
export default { fetchImages };