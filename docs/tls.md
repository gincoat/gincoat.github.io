---
title: TLS
---

GoCondor gives you the ability to run your app in `ssl` mode, you just need to copy your ssl certificates `server.cert` and `server.key` to the directory `ssl` at the root directory, next update the `TLS` section in the `.env` file by adding to it the paths of these files and domain name, and don't forget to set `APP_HTTPS_ON` to true, here is a sample of that section:
```bash
#################################
###            TLS            ###
#################################
APP_HTTPS_ON=tue
APP_REDIRECT_HTTP_TO_HTTPS=true
APP_HTTPS_HOST=mydomain.com
APP_HTTPS_CERT_FILE_PATH=ssl/server.crt
APP_HTTPS_KEY_FILE_PATH=ssl/server.key
```
Finally, run the app and it will be served in ssl mode.

## Let's encrypt auto certificates 
Using let's encrypt auto certificates is very simple, you just need to set three environment variables, and you will be good to go, here they are:
```bash
APP_HTTPS_ON=true
APP_HTTPS_USE_LETSENCRYPT=true
APP_HTTPS_HOST=mydomain.com
```
Then run your app