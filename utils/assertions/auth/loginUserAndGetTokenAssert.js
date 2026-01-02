import { check } from '../../index.js';

export function loginUserAndGetTokenAssert(res, label, username){
    console.log(`${label} - username matches expected: ` + res.json().username);
    check(res, {
        [`${label} - username matches expected`]: (r) => r.json().username === username,
    });
}