---
title: TLS
---

Gincoat gives you the ability to run your app in `ssl` mode, you just need to copy your ssl certificates `server.cert` and `server.key` to the directory `ssl` at the root, next update the `TLS` section in the `.env` file by adding to it the paths of these files and domain name, here is a sample of that section:
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
