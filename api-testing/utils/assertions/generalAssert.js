import { check } from '../index.js';

//dynamic assertion, default expected status is 200, and default label is Response
export function generalAssert(res, expectedStatus = 200, label = 'Response') {
  //logging
  console.log(`\n\n\n${label} - Status Code: ${res.status}\n\n\n`);
  console.log(`\n\n\n${label} - Response Body:\n${res.body}\n\n\n`);
  console.log(`\n\n\n${label} - Response Time: ${res.timings.duration}\n\n\n`);

  //general assertion
  check(res, {
    [`${label} - status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
    [`${label} - body is not empty`]: (r) => r.body && r.body.length > 0,
    [`${label} - time ${res.timings.duration}`]: (r) => r.timings.duration <= 200,
  });
}