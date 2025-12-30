# Performance testing
Performance testing skeleton example using Grafana K6

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

## Run
- Open `terminal` or `command prompt`
- Type `k6 run /tests/performance/smoke.test.js`
- Press `Enter`