# Result Detail

## ReNo TLS (regular HTTP)

### Direct Access

```sh
scott@lab4:~/scripts/k6$ ~/repo/oss/k6/k6 run -u 100 -d 10s script_direct.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script_direct.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 40s max duration (incl. graceful stop):
           * default: 100 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 35 MB  3.5 MB/s
     data_sent......................: 22 MB  2.1 MB/s
     http_req_blocked...............: avg=3.02µs  min=600ns   med=800ns  max=18.39ms p(90)=1.4µs  p(95)=1.8µs
     http_req_connecting............: avg=1.7µs   min=0s      med=0s     max=11.42ms p(90)=0s     p(95)=0s
     http_req_duration..............: avg=3.45ms  min=105.2µs med=2.8ms  max=33.42ms p(90)=6.75ms p(95)=8.44ms
       { expected_response:true }...: avg=3.45ms  min=105.2µs med=2.8ms  max=33.42ms p(90)=6.75ms p(95)=8.44ms
     http_req_failed................: 0.00%  ✓ 0            ✗ 286122
     http_req_receiving.............: avg=24.24µs min=6.2µs   med=9.79µs max=22.58ms p(90)=19.4µs p(95)=27.5µs
     http_req_sending...............: avg=10.7µs  min=2.6µs   med=3.8µs  max=23.08ms p(90)=7.2µs  p(95)=12.7µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.42ms  min=93.5µs  med=2.78ms max=28.89ms p(90)=6.7ms  p(95)=8.35ms
     http_reqs......................: 286122 28604.791296/s
     iteration_duration.............: avg=3.48ms  min=137.6µs med=2.83ms max=33.45ms p(90)=6.78ms p(95)=8.48ms
     iterations.....................: 286122 28604.791296/s
     vus............................: 100    min=100        max=100
     vus_max........................: 100    min=100        max=100


running (10.0s), 000/100 VUs, 286122 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s
```

### NGINX

```sh
scott@lab4:~/scripts/k6$ ~/repo/oss/k6/k6 run -u 100 -d 10s script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 40s max duration (incl. graceful stop):
           * default: 100 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 42 MB  4.2 MB/s
     data_sent......................: 19 MB  1.9 MB/s
     http_req_blocked...............: avg=5.36µs  min=600ns   med=900ns  max=18.35ms p(90)=1.5µs  p(95)=1.9µs
     http_req_connecting............: avg=4.01µs  min=0s      med=0s     max=18.31ms p(90)=0s     p(95)=0s
     http_req_duration..............: avg=3.91ms  min=256.5µs med=3.17ms max=35.49ms p(90)=7.21ms p(95)=9.42ms
       { expected_response:true }...: avg=3.91ms  min=256.5µs med=3.17ms max=35.49ms p(90)=7.21ms p(95)=9.42ms
     http_req_failed................: 0.00%  ✓ 0            ✗ 252716
     http_req_receiving.............: avg=26.68µs min=6.6µs   med=11.2µs max=24.95ms p(90)=22.5µs p(95)=33.9µs
     http_req_sending...............: avg=11.59µs min=3µs     med=4.1µs  max=18.85ms p(90)=7.7µs  p(95)=13.4µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.87ms  min=239.2µs med=3.14ms max=35.47ms p(90)=7.15ms p(95)=9.33ms
     http_reqs......................: 252716 25268.289104/s
     iteration_duration.............: avg=3.95ms  min=273.1µs med=3.2ms  max=37.45ms p(90)=7.25ms p(95)=9.47ms
     iterations.....................: 252716 25268.289104/s
     vus............................: 100    min=100        max=100
     vus_max........................: 100    min=100        max=100


running (10.0s), 000/100 VUs, 252716 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s
```

### Traefik

```sh
scott@lab4:~/scripts/k6$ ~/repo/oss/k6/k6 run -u 100 -d 10s script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 40s max duration (incl. graceful stop):
           * default: 100 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 31 MB  3.1 MB/s
     data_sent......................: 20 MB  2.0 MB/s
     http_req_blocked...............: avg=2.53µs  min=600ns   med=900ns  max=6.35ms  p(90)=1.5µs  p(95)=1.9µs
     http_req_connecting............: avg=1.24µs  min=0s      med=0s     max=6.33ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=3.83ms  min=241.7µs med=3.09ms max=39.69ms p(90)=7.19ms p(95)=9.47ms
       { expected_response:true }...: avg=3.83ms  min=241.7µs med=3.09ms max=39.69ms p(90)=7.19ms p(95)=9.47ms
     http_req_failed................: 0.00%  ✓ 0            ✗ 257943
     http_req_receiving.............: avg=24.94µs min=6.4µs   med=10.4µs max=24.08ms p(90)=20.9µs p(95)=32.8µs
     http_req_sending...............: avg=10.89µs min=2.9µs   med=4µs    max=18.61ms p(90)=7.4µs  p(95)=13µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.8ms   min=225.1µs med=3.06ms max=36.6ms  p(90)=7.14ms p(95)=9.38ms
     http_reqs......................: 257943 25790.928295/s
     iteration_duration.............: avg=3.86ms  min=263.8µs med=3.12ms max=39.73ms p(90)=7.23ms p(95)=9.52ms
     iterations.....................: 257943 25790.928295/s
     vus............................: 100    min=100        max=100
     vus_max........................: 100    min=100        max=100


running (10.0s), 000/100 VUs, 257943 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s
```

## TLS (SSL)

### NGINX

```sh
scott@lab4:~/scripts/k6$ ~/repo/oss/k6/k6 run -u 100 -d 10s  --insecure-skip-tls-verify script_tls.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script_tls.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 40s max duration (incl. graceful stop):
           * default: 100 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 45 MB  4.5 MB/s
     data_sent......................: 24 MB  2.4 MB/s
     http_req_blocked...............: avg=23.98µs min=600ns   med=900ns  max=38.19ms p(90)=1.5µs  p(95)=1.9µs
     http_req_connecting............: avg=4.73µs  min=0s      med=0s     max=10.86ms p(90)=0s     p(95)=0s
     http_req_duration..............: avg=4.32ms  min=306.7µs med=3.52ms max=36.44ms p(90)=8.02ms p(95)=10.32ms
       { expected_response:true }...: avg=4.32ms  min=306.7µs med=3.52ms max=36.44ms p(90)=8.02ms p(95)=10.32ms
     http_req_failed................: 0.00%  ✓ 0            ✗ 227968
     http_req_receiving.............: avg=29.58µs min=7.6µs   med=11.6µs max=27.66ms p(90)=23.6µs p(95)=37µs
     http_req_sending...............: avg=14.26µs min=3.1µs   med=4.2µs  max=23.61ms p(90)=7.8µs  p(95)=14.1µs
     http_req_tls_handshaking.......: avg=17.87µs min=0s      med=0s     max=32.71ms p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=4.28ms  min=285µs   med=3.49ms max=36.26ms p(90)=7.95ms p(95)=10.21ms
     http_reqs......................: 227968 22791.784098/s
     iteration_duration.............: avg=4.38ms  min=328.3µs med=3.55ms max=56.25ms p(90)=8.09ms p(95)=10.45ms
     iterations.....................: 227968 22791.784098/s
     vus............................: 100    min=100        max=100
     vus_max........................: 100    min=100        max=100


running (10.0s), 000/100 VUs, 227968 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s
```

### Traefik

```sh
scott@lab4:~/scripts/k6$ ~/repo/oss/k6/k6 run -u 100 -d 10s  --insecure-skip-tls-verify script_tls.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script_tls.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 40s max duration (incl. graceful stop):
           * default: 100 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 15 MB  1.5 MB/s
     data_sent......................: 7.7 MB 768 kB/s
     http_req_blocked...............: avg=16.25µs min=100ns   med=200ns  max=71.08ms p(90)=300ns  p(95)=300ns
     http_req_connecting............: avg=2.03µs  min=0s      med=0s     max=8.63ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=4.66ms  min=367.6µs med=3.75ms max=59.32ms p(90)=8.52ms p(95)=11.03ms
       { expected_response:true }...: avg=4.66ms  min=367.6µs med=3.75ms max=59.32ms p(90)=8.52ms p(95)=11.03ms
     http_req_failed................: 0.00%  ✓ 0            ✗ 211953
     http_req_receiving.............: avg=1.74ms  min=7.9µs   med=1.19ms max=26.13ms p(90)=3.78ms p(95)=5.29ms
     http_req_sending...............: avg=26.77µs min=6.5µs   med=13µs   max=20.56ms p(90)=23.9µs p(95)=32.7µs
     http_req_tls_handshaking.......: avg=13.91µs min=0s      med=0s     max=65ms    p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=2.89ms  min=0s      med=2.37ms max=51.87ms p(90)=5.21ms p(95)=6.83ms
     http_reqs......................: 211953 21187.865335/s
     iteration_duration.............: avg=4.71ms  min=392.3µs med=3.78ms max=72.42ms p(90)=8.56ms p(95)=11.08ms
     iterations.....................: 211953 21187.865335/s
     vus............................: 100    min=100        max=100
     vus_max........................: 100    min=100        max=100


running (10.0s), 000/100 VUs, 211953 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s
```

