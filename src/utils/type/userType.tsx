export type User = {
  id: number;
  fullName: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
};

export type UserState = {
  users: User[];
  usersTemp: User[];
  searchTerm: string;
};