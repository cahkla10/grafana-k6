const envName = __ENV.ENV || 'prod';
const configPath = `../config/env/${envName}.json`;
const config = JSON.parse(open(configPath));

export default config;