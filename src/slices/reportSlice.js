import { createSlice } from '@reduxjs/toolkit';
import { getReport } from '../api/endpoints';

const reportInitialState = {
  report: [],
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

const reports = createSlice({
  name: 'reports',
  initialState: reportInitialState,
  reducers: {
    getReportStart: startLoading,
    getReportSuccess: (state, { payload }) => {
      state.report = payload;
      state.isLoading = false;
      state.error = null;
    },
    getReportFailure: loadingFailed,
  },
});

export const { getReportStart, getReportSuccess, getReportFailure } =
  reports.actions;

export default reports.reducer;

export const generateReport =
  ({ projectId, gatewayId, from, to }) =>
  async (dispatch) => {
    try {
      dispatch(getReportStart());
      const result = await getReport({ projectId, gatewayId, from, to });
      dispatch(getReportSuccess(result.data.data));
    } catch (err) {
      dispatch(getReportFailure(err));
    }
  };
