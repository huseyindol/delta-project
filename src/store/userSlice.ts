import type { RootState } from '@/utils/store/store';
import type { User, UserState } from '@/utils/type/userType';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserState = {
  users: [],
  usersTemp: [],
  searchTerm: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.usersTemp = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.usersTemp = state.users;
    },
    filterUsers: (state, action: PayloadAction<{ searchTerm: string }>) => {
      state.searchTerm = action.payload.searchTerm;
      state.usersTemp = state.users.filter(user =>
        user.fullName
          .toLowerCase()
          .includes(action.payload.searchTerm.toLowerCase())
      );
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map(user =>
        Number(user.id) === Number(action.payload.id) ? action.payload : user
      );
      state.usersTemp = state.users;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users = [
        ...state.users,
        { ...action.payload, id: state.users.length + 1 },
      ];
      state.usersTemp = state.users;
    },
  },
});

export const { setUsers, deleteUser, filterUsers, updateUser, addUser } =
  userSlice.actions;

export const selectUsers = (state: RootState) => state.user;

export default userSlice.reducer;
