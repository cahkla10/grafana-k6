import { check } from '../../index.js';

export function getCurrentAuthUserAssert(res, label, firstName, lastName, username){
    console.log(`${label} - firstname matches expected: ` + res.json().firstName);
    console.log(`${label} - lastname matches expected: ` + res.json().lastName);
    console.log(`${label} - username matches expected: ` + res.json().username);
    check(res, {
        [`${label} - firstname matches expected`]: (r) => r.json().firstName === firstName,
        [`${label} - lastname matches expected`]: (r) => r.json().lastName === lastName,
        [`${label} - username matches expected`]: (r) => r.json().username === username,
    });
}