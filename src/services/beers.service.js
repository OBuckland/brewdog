const API_URL = "https://api.punkapi.com/v2/beers";
// const APi_URL2 = `https://api.punkapi.com/v2/beers${getBeersByName}${getClassicBeers}`;

// const getBeersByName = searchTerm ? `?beer_name=${searchTerm}` : "";
// const getClassicBeers = classicBeers ? `?brewed-before=2011`: "";

// fetches data from the API
export const getBeers = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

// fetches data from the API and filters by search term
export const getFilteredBeers = (searchTerm) => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      const searchedBeers = jsonResponse.filter((beer) =>
        beer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return searchedBeers;
    });
};

// fetches data using in-built extension to return only high ABV beers
export const getAbvBeers = () => {
  return fetch(`${API_URL}/?abv_gt=6`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

// fetches data using in-built extension to return only beers brewed before 2010
export const getClassicBeers = () => {
  return fetch(`${API_URL}/?brewed_before=012010`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

// fetches data from the API and filters by ph level
export const getAcidicBeers = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      const acidicBeers = jsonResponse.filter((beer) => beer.ph < 4);
      return acidicBeers;
    });
};
