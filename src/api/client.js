import axios from 'axios';

const api = (value) => {
  return axios.get(`http://localhost:3000/search`)
    .then(function(response) {
      const searchterms = response.data.suggestions;
      const termsFiltered = searchterms.filter(term => term.searchterm.indexOf(value) !== -1)

      return termsFiltered;
    })
    .catch(error => console.log(error))
  };

export default api;