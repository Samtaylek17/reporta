import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import projectReducer from '../slices/projectSlice';
import gatewayReducer from '../slices/gatewaySlice';

const rootReducer = combineReducers({
  users: userReducer,
  projects: projectReducer,
  gateways: gatewayReducer,
});

export default rootReducer;
