import { REST_API } from "./API_Routes";
import axiosInstance from "./AxiosInstance";

// all public api's
export const allProducts = () => {
  let url = REST_API.ALL_PRODUCTS;
  return axiosInstance.get(url);
};
