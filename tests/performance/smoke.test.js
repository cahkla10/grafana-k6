import { 
    group,
    handleSummary
} from '../../utils/index.js';
import smokeApiTest from '../api/scenario/smoke.api.test.js';

export { handleSummary };

export const options = {
  vus: 3,
  duration: '30s',
  //iterations: 1,
  insecureSkipTLSVerify: true
};

export default function () {
  smokeApiTest()
}