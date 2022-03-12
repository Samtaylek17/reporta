import { createSlice } from '@reduxjs/toolkit';
import { getGateways } from '../api/endpoints';

const gatewayInitialState = {
  currentgateway: null,
  gatewayList: [],
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

const gateways = createSlice({
  name: 'gateways',
  initialState: gatewayInitialState,
  reducers: {
    getGatewaysStart: startLoading,
    getGatewaysSuccess: (state, { payload }) => {
      state.gatewayList = payload;
      state.isLoading = false;
      state.error = false;
    },
    getGatewaysFailure: loadingFailed,
  },
});

export const { getGatewaysStart, getGatewaysSuccess, getGatewaysFailure } =
  gateways.actions;

export default gateways.reducer;

export const fetchGateways = () => async (dispatch) => {
  try {
    dispatch(getGatewaysStart());
    const result = await getGateways();
    dispatch(getGatewaysSuccess(result.data.data));
  } catch (err) {
    dispatch(getGatewaysFailure(err));
  }
};
