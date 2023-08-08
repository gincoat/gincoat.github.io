---
title: TLS
---

GoCondor gives you the ability to run your app in `tls` mode `(https)`, you just need to copy your tls certificates `my-server-cert.cert` and `my-server-cert.key` to the directory `tls` at the root directory of the project, next update the `tls` config in the `.env` file or inject them to the environment with an external tool
```bash
#################################
###            TLS            ###
#################################
App_USE_HTTPS=true
App_USE_LETSENCRYPT=false
APP_LETSENCRYPT_EMAIL=mail@example.com
App_HTTPS_HOSTS=example.com, www.example.com
App_CERT_FILE_PATH=tls/my-server-cert.crt
App_KEY_FILE_PATH=tls/my-server-cert.key
```
Finally, run the app and it will be served in `https` mode.

## Let's encrypt auto certificates 
Using `let's encrypt` is fully automated including the renewal of the certificates, you just need to set the config variables in the `.env` or inject them into the environment with an external tool
Below is a sample of the config that will run your app in the `https` mode using `let's encrypt`
```bash
App_USE_HTTPS=true
App_USE_LETSENCRYPT=true
APP_LETSENCRYPT_EMAIL=mail@example.com
App_HTTPS_HOSTS=example.com, www.example.com
App_CERT_FILE_PATH=tls/my-server-cert.crt
App_KEY_FILE_PATH=tls/my-server-cert.key
```
