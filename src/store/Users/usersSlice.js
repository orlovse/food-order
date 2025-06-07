import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../mock';

const initialState = {
  ids: normalizedUsers.map(item => item.id),
  users: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {})
};

export const usersSlice = createSlice({
  name: 'userSlice',
  initialState,
  selectors: {
    selectUserById: (state, id) => state.users[id]
  }
});

export const { selectUserById } = usersSlice.selectors;