import { get, post, config } from "../../../../utils/index.js";

export function getGetCurrentAuthUser(token) {
  const currentAuthRes = get(`${config.base_url}/auth/me`, token);
  const firstNameObj = currentAuthRes.json('firstName'); //get firstName from response body
  const lastNameObj = currentAuthRes.json('lastName'); //get lastName from response body
  const usernameObj = currentAuthRes.json('username'); //get username from response body

  return { currentAuthRes, firstNameObj, lastNameObj, usernameObj };
}