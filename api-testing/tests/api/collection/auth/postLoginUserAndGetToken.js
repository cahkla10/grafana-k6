import { get, post, config, loginCredential } from "../../../../utils/index.js";

let accessToken, refreshToken;

export function postLoginUserAndGetToken(getUsername, getPassword) {
  let payload = JSON.stringify({
      username: getUsername,
      password: getPassword,
      expiresInMins: 1
  });
  
  const loginUserRes = post(`${config.base_url}/auth/login`, payload);
  accessToken = loginUserRes.json('accessToken'); //get token from response body
  refreshToken = loginUserRes.json('refreshToken'); //get refresh token from response body
  const firstNameObj = loginUserRes.json('firstName'); //get firstName from response body
  const lastNameObj = loginUserRes.json('lastName'); //get lastName from response body
  const usernameObj = loginUserRes.json('username'); //get username from response body

  return { loginUserRes, accessToken, refreshToken, firstNameObj, lastNameObj, usernameObj };
}

export function setToken(){
  loginCredential.access_token = accessToken;
  loginCredential.refresh_token = refreshToken;
}