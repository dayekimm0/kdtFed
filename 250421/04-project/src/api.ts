export const fetchCoins = () => {
  return fetch(
    "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  ).then((response) => response.json());
};
