import http from 'k6/http';
import config from './envLoaderUtil.js';

//default token param is null
function buildHeaders(accessToken = null, refreshToken = null) {
  const headers = { ...config.headers };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  if (refreshToken) {
    headers['UserRefreshToken'] = refreshToken;
  }

  return headers;
}

//http method get
export function get(endpoint, accessToken = null, refreshToken = null) {
  const headers = buildHeaders(accessToken, refreshToken);
  return http.get(endpoint, { headers });
}

//http method post
export function post(endpoint, payload, accessToken = null, refreshToken = null) {
  const headers = buildHeaders(accessToken, refreshToken);
  return http.post(endpoint, payload, { headers });
}

//http method put
export function put(endpoint, payload, accessToken = null, refreshToken = null) {
    const headers = buildHeaders(accessToken, refreshToken);
    return http.put(endpoint, payload, { headers });
}