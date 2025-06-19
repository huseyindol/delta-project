import HttpApi from './axios';

const getProducts = async () => {
  const response = await HttpApi.get('/products');
  return response;
};

const getProductById = async (id: string) => {
  const response = await HttpApi.get(`/products/${id}`);
  return response;
};

export { getProductById, getProducts };
