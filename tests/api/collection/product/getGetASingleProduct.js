import { get, post, config } from "../../../../utils/index.js";

export function getGetASingleProduct(token) {
  const singleProductRes = get(`${config.base_url}/products/1`, token);
  return { singleProductRes };
}