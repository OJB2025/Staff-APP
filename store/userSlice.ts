import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  name: string;
  role: string;
  loggedIn: boolean;
};

const initialUser: UserState = {
  name: 'Jane Smith',
  role: 'Production Manager',
  loggedIn: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
    },
    logout: (state: UserState) => {
      state.loggedIn = false;
      state.name = '';
      state.role = '';
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;

export default userReducer;
