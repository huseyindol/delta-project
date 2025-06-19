import HttpApi from './axios';

const getUsers = async () => {
  const response = await HttpApi.get('/users');
  return response;
};

const getUserById = async (id: string) => {
  const response = await HttpApi.get(`/users/${id}`);
  return response;
};

export { getUserById, getUsers };
