# README

## About

* This is to breifly test overhead of one way TLS or mTLS encryption
* Behind Nginx or Traefik, simple Go based http server (below) is running

```go
package main

import (
        "flag"
        "fmt"
        "math/rand"
        "net/http"
)

type Options struct {
        length int
}

var options Options
var s string

func makeRandomString(length int) string {
        src := []byte("abcdefghijklmnopqrstuvwxyz")
        result := make([]byte, length)
        for i := range result {
                result[i] = src[rand.Intn(len(src))]
        }
        return string(result)
}

func main() {
        flag.IntVar(&options.length, "length", 4*1024, "return string len")
        flag.Parse()

        s = makeRandomString(options.length)

        http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
                fmt.Fprintf(w, s)
        })
        http.ListenAndServe(":8080", nil)
}
```

## Test env

* Traefik/Nginx/Go: runs on lab2 with 6 vCPUs in Scott's lab
* k6: runs on lab4 with 2 vCPUs in Scott's lab

## How to test

* NGINX
  * Run NGINX v1.23.4 by `/sbin/nginx -c /home/scott/conf/nginx/nginx.conf` with a minimum SSL optimization + no logging
* Traefik
  * Run Traefik v2.9.9 by `./dist/traefik --configfile ~/conf/traefik/perf.yaml` with no logging

## Config

* See nginx and config files in `conf` dir


## Result Summary

* Requests/s for "hello"

| Item          | TLS      | Reqs/s   |
| ------------- | -------- | -------- |
| Direct Access | Disabled | 28,604/s |
| Nginx         | Disabled | 25,268/s |
| Traefik       | Disabled | 25,790/s |
| Nginx         | 1way     | 22,792/s |
| Traefik       | 1way     | 21,188/s |
| Nginx         | mTLS     | 22,011/s |
| Traefik       | mTLS     | 21,173/s |

* Requests/s for 4K ramdom string

| Item          | TLS      | Reqs/s   |
| ------------- | -------- | -------- |
| Direct Access | Disabled | 21,984/s |
| Nginx         | Disabled | 19,918/s |
| Traefik       | Disabled | 19,630/s |
| Nginx         | 1way     | 18,764/s |
| Traefik       | 1way     | 16,239/s |
| Nginx         | mTLS     | 18,674/s |
| Traefik       | mTLS     | 16,110/s |

* Requests/s for 256K ramdom string

| Item          | TLS      | Reqs/s   |
| ------------- | -------- | -------- |
| Direct Access | Disabled | 3,626/s  |
| Nginx         | Disabled | 3,294/s  |
| Traefik       | Disabled | 3,295/s  |
| Nginx         | 1way     | 2,923/s  |
| Traefik       | 1way     | 2,710/s  |
| Nginx         | mTLS     | 2,976/s  |
| Traefik       | mTLS     | 2,789/s  |


## Result Detail

* "hello" case [result.md](result.md)
* 4K/256K cases not attached

