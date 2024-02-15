// this page is use to add the product into the cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
export const delCart = (product) => {
  return {
    type: "DETITEM",
    payload: product,
  };
};
