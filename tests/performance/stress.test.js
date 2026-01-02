import { 
    group,
    handleSummary
} from '../../utils/index.js';
import smokeApiTest from '../api/scenario/smoke.api.test.js';

export { handleSummary };

export const options = {
  stages: [
    { duration: '10m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '30m', target: 200 }, // stay at higher 200 users for 30 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  insecureSkipTLSVerify: true
};

export default function () {
  smokeApiTest()
}