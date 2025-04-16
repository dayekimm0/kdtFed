import { productActions } from "../reducers/productReducer";

const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/Divjason/reactshop/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(productActions.getAllProducts({ data }));
  };
};

export const productAction = { getProduct };
