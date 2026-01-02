//========= config ============

//========= data ============
export { default as loginCredential } from "../data/loginCredential.js";

//========= plugin ============
export { htmlReport } from "../plugin/k6Reporter.js";
export { textSummary } from "../plugin/k6Summary.js";

//========= tests ============
//--------- collection -------
export { postLoginUserAndGetToken, setToken } from '../tests/api/collection/auth/postLoginUserAndGetToken.js';
export { getGetCurrentAuthUser } from '../tests/api/collection/auth/getGetCurrentAuthUser.js';
export { postRefreshAuthSession } from '../tests/api/collection/auth/postRefreshAuthSession.js';
export { getAllProduct } from '../tests/api/collection/product/getAllProduct.js';
export { getGetASingleProduct } from '../tests/api/collection/product/getGetASingleProduct.js';
export { postAddANewProduct } from '../tests/api/collection/product/postAddANewProduct.js';

//-------- scenario ---------


//========= utils ============
export { post, get, put } from "./httpMethodUtil.js";
export { default as config } from "./envLoaderUtil.js";
export { generalAssert } from "./assertions/generalAssert.js";
export { handleSummary } from "./reporterUtil.js";

//--- assertions ---
export { loginUserAndGetTokenAssert } from "./assertions/auth/loginUserAndGetTokenAssert.js";
export { getCurrentAuthUserAssert } from "./assertions/auth/getCurrentAuthUserAssert.js";
export { refreshAuthSessionAssert } from "./assertions/auth/refreshAuthSessionAssert.js";
export { addANewProductAssert } from "./assertions/product/addANewProductAssert.js";

//========= k6 ============
export { check, group } from "k6";