import { get, post, config } from "../../../../utils/index.js";

export function postAddANewProduct(token) {
  let newProductName = "New Product Added";  
  let payload = JSON.stringify({
      title: newProductName
  });
  
  const addNewProductRes = post(`${config.base_url}/products/add`, payload, token);

  return { addNewProductRes, newProductName };
}