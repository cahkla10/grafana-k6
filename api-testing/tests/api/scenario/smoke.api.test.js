import { 
    group,
    htmlReport,
    textSummary,
    loginCredential,
    postLoginUserAndGetToken,
    getGetCurrentAuthUser,
    postRefreshAuthSession,
    setToken,
    getAllProduct,
    getGetASingleProduct,
    postAddANewProduct,
    generalAssert,
    loginUserAndGetTokenAssert,
    getCurrentAuthUserAssert,
    refreshAuthSessionAssert,
    addANewProductAssert,
    handleSummary
} from '../../../utils/index.js';

export { handleSummary };

export const options = {
  vus: 1,
  iterations: 1,
  insecureSkipTLSVerify: true
};

let getToken = null;

export default function () {
  group('AUTH', function () {
    const getUsername = loginCredential.username;
    const getPassword = loginCredential.password;

    // LOGIN USER AND GET TOKEN
    const { loginUserRes, accessToken, refreshToken, firstNameObj: firstNameLogin, lastNameObj: lastNameLogin, usernameObj: usernameLogin } = 
    // hit endpoint
    postLoginUserAndGetToken(getUsername, getPassword);
    // set token to global variable
    setToken(accessToken, refreshToken); 
    
    // assertion
    generalAssert(loginUserRes, 200, "Login User And Get Token"); 
    loginUserAndGetTokenAssert(loginUserRes, "Login User And Get Token", usernameLogin);

    // GET CURRENT AUTH USER
    // hit endpoint
    const { currentAuthRes } = getGetCurrentAuthUser(getToken); 

    // assertion
    generalAssert(currentAuthRes, 200, "Get Current Auth User");
    getCurrentAuthUserAssert(currentAuthRes, "Get Current Auth User", firstNameLogin, lastNameLogin, usernameLogin);

    // REFRESH AUTH SESSION
    // get access_token before setToken()
    let getTokenOld = loginCredential.access_token; 
    // hit endpoint
    const { refreshAuthRes, accessTokenNewObj, refreshTokenNewObj } = postRefreshAuthSession(getToken);
    // set new token to global variable
    setToken(accessTokenNewObj, refreshTokenNewObj); 
    //get access_token after setToken()
    let getTokenNew = loginCredential.access_token; 

    console.log(`Old token: ${getTokenOld}`);
    console.log(`New token: ${getTokenNew}`);

    // assertion
    generalAssert(refreshAuthRes, 200, "Refresh Auth Session");
    refreshAuthSessionAssert(refreshAuthRes, "Refresh Auth Session", getTokenOld);
  });

  group('PRODUCT', function () {
    // GET A SINGLE PRODUCT
    // hit endpoint
    const { singleProductRes } = getGetASingleProduct(getToken);
    
    // assertion
    generalAssert(singleProductRes, 200, "Get a Single Product"); 

    // ADD NEW PRODUCT
    // hit endpoint
    const { addNewProductRes, newProductName } = postAddANewProduct(getToken);
    
    // assertion
    generalAssert(addNewProductRes, 200, "Add New Product");
    addANewProductAssert(addNewProductRes, "Add New Product", newProductName);
  });
}