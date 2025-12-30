import { check, loginCredential } from '../../index.js';

export function refreshAuthSessionAssert(res, label, tokenOld){
    console.log(`${label} - token old: ` + tokenOld);
    console.log(`${label} - token new: ` + res.json().accessToken);
    check(res, {
        [`${label} - access_token is refreshed`]: (r) => r.json().accessToken !== tokenOld,
    });
}