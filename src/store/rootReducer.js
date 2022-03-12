import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import projectReducer from '../slices/projectSlice';
import gatewayReducer from '../slices/gatewaySlice';
import reportReducer from '../slices/reportSlice';

const rootReducer = combineReducers({
  users: userReducer,
  projects: projectReducer,
  gateways: gatewayReducer,
  reports: reportReducer,
});

export default rootReducer;
