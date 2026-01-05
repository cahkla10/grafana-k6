# API & performance testing
API & performance testing skeleton example using Grafana K6

## Dummy 
I use https://dummyjson.com/docs for dummy

## Project Structure
| folder    | purpose                                   |
|-          |-                                          |
| config    | for configuration need                    |
| data      | for data testing                          |
| plugin    | for additional plugin or libs             |
| report    | for html report after executed            |
| tests     | for http request and scenario testing     |
| utils     | for utility need                          |

## Run for api testing
- Open `terminal` or `command prompt`
- Type `k6 run /tests/api/scenario/smoke.api.test.js`
- Press `Enter`

## Run for performance testing
- Open `terminal` or `command prompt`
- Type `k6 run /tests/performance/<js file>`
- Examples:
 `k6 run /tests/performance/smoke.test.js`<br>
 `k6 run /tests/performance/average.test.js`<br>
 `k6 run /tests/performance/stress.test.js`
- Press `Enter`