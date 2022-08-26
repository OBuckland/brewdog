const API_URL = "https://api.punkapi.com/v2/beers"


const getBeers = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
      });
  };

// const API_URL = "https://api.punkapi.com/v2/beers"

// const getBeers = async () => {
//     return fetch (API_URL)
//     .then((res) => res.json())
//     .then((jsonResponse) => {
//         console.log(jsonResponse)
//     })
// }

export default getBeers;