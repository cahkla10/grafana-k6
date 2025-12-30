import { check, loginCredential } from '../../index.js';

export function addANewProductAssert(res, label, newProductAdded){
    console.log(`${label} - new product: ` + newProductAdded);
    console.log(`${label} - new product object: ` + res.json().title);
    check(res, {
        [`${label} - new product is equal`]: (r) => r.json().title === newProductAdded,
    });
}