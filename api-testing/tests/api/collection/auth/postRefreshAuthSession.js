import { get, post, config } from "../../../../utils/index.js";

export function postRefreshAuthSession(token) {
  let payload = JSON.stringify({
      expiresInMins: 1
  });
  
  const refreshAuthRes = post(`${config.base_url}/auth/refresh`, payload);
  let accessTokenNewObj = refreshAuthRes.json('accessToken'); //get new token from response body
  let refreshTokenNewObj = refreshAuthRes.json('refreshToken'); //get new refresh token from response body

  return { refreshAuthRes, accessTokenNewObj, refreshTokenNewObj };
}