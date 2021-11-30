import axios from "axios";

const getBackendUrl = "https://api.ona.io/api/v1/data/";

const onaAPI = (() => {
  return {
    get: (path, param) => axios.get(`${getBackendUrl}${path}`, param),
    delete: (path, param) => axios.delete(`${getBackendUrl}${path}`, param),
    post: (path, param) => axios.post(`${getBackendUrl}${path}`, param),
    put: (path, param) => axios.put(`${getBackendUrl}${path}`, param),
  };
})();

export default onaAPI;
