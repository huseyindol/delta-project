import HttpApi from './axios';

export const getCategories = async () => {
  const response = await HttpApi.get('/categories');
  return response;
};
