import api from '.';

export const getUsers = () => {
  const url = '/users';
  return api.get(url);
};

export const getProjects = () => {
  const url = '/projects';
  return api.get(url);
};

export const getGateways = () => {
  const url = '/gateways';
  return api.get(url);
};

export const getReport = ({ from, to, projectId, gatewayId }) => {
  const url = '/report';
  return api.post(url, { from, to, projectId, gatewayId });
};
