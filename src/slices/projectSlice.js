import { createSlice } from '@reduxjs/toolkit';
import { getProjects } from '../api/endpoints';

const projectInitialState = {
  currentProject: null,
  projectList: [],
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

const projects = createSlice({
  name: 'projects',
  initialState: projectInitialState,
  reducers: {
    getProjectsStart: startLoading,
    getProjectsSuccess: (state, { payload }) => {
      state.projectList = payload;
      state.isLoading = false;
      state.error = false;
    },
    getProjectsFailure: loadingFailed,
  },
});

export const { getProjectsStart, getProjectsSuccess, getProjectsFailure } =
  projects.actions;

export default projects.reducer;

export const fetchProjects = () => async (dispatch) => {
  try {
    dispatch(getProjectsStart());
    const result = await getProjects();
    dispatch(getProjectsSuccess(result.data.data));
  } catch (err) {
    dispatch(getProjectsFailure(err));
  }
};
