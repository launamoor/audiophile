import data from "@/data.json";

const requestProducts = () => {
  return data;
};

const requestProduct = (id) => {
  const product = data.filter((product) => product.id === id);
  return product;
};

export { requestProduct, requestProducts };
