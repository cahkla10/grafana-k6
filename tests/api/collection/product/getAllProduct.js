import { get, post, config } from "../../../../utils/index.js";

export function getAllProduct(token) {
  const allProductRes = get(`${config.base_url}/products`, token);
  return { allProductRes };
}