import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../api/endpoints';

const userIntialState = {
  currentUser: null,
  userList: [],
  isLoading: false,
  error: null,
};

function startLoading(state) {
  state.isLoading = true;
}

function loadingFailed(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const users = createSlice({
  name: 'users',
  initialState: userIntialState,
  reducers: {
    getUsersStart: startLoading,
    getUsersSuccess: (state, { payload }) => {
      state.userList = payload;
      state.isLoading = false;
      state.error = null;
    },
    getUsersFailure: loadingFailed,
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } =
  users.actions;

export default users.reducer;

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const result = await getUsers();
    dispatch(getUsersSuccess(result.data.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};
