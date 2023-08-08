"use strict";(self.webpackChunkgocondor_site=self.webpackChunkgocondor_site||[]).push([[8804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"TLS"},a=void 0,c={unversionedId:"tls",id:"tls",title:"TLS",description:"GoCondor gives you the ability to run your app in tls mode (https), you just need to copy your tls certificates my-server-cert.cert and my-server-cert.key to the directory tls at the root directory of the project, next update the tls config in the .env file or inject them to the environment with an external tool",source:"@site/docs/tls.md",sourceDirName:".",slug:"/tls",permalink:"/docs/tls",draft:!1,editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/tls.md",tags:[],version:"current",frontMatter:{title:"TLS"},sidebar:"docsSidebar",previous:{title:"Cache",permalink:"/docs/cache"},next:{title:"Contribute",permalink:"/docs/contribute"}},l={},p=[{value:"Let&#39;s encrypt auto certificates",id:"lets-encrypt-auto-certificates",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GoCondor gives you the ability to run your app in ",(0,o.kt)("inlineCode",{parentName:"p"},"tls")," mode ",(0,o.kt)("inlineCode",{parentName:"p"},"(https)"),", you just need to copy your tls certificates ",(0,o.kt)("inlineCode",{parentName:"p"},"my-server-cert.cert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"my-server-cert.key")," to the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"tls")," at the root directory of the project, next update the ",(0,o.kt)("inlineCode",{parentName:"p"},"tls")," config in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file or inject them to the environment with an external tool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#################################\n###            TLS            ###\n#################################\nApp_USE_HTTPS=true\nApp_USE_LETSENCRYPT=false\nAPP_LETSENCRYPT_EMAIL=mail@example.com\nApp_HTTPS_HOSTS=example.com, www.example.com\nApp_CERT_FILE_PATH=tls/my-server-cert.crt\nApp_KEY_FILE_PATH=tls/my-server-cert.key\n")),(0,o.kt)("p",null,"Finally, run the app and it will be served in ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," mode."),(0,o.kt)("h2",{id:"lets-encrypt-auto-certificates"},"Let's encrypt auto certificates"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"let's encrypt")," is fully automated including the renewal of the certificates, you just need to set the config variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," or inject them into the environment with an external tool\nBelow is a sample of the config that will run your app in the ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," mode using ",(0,o.kt)("inlineCode",{parentName:"p"},"let's encrypt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"App_USE_HTTPS=true\nApp_USE_LETSENCRYPT=true\nAPP_LETSENCRYPT_EMAIL=mail@example.com\nApp_HTTPS_HOSTS=example.com, www.example.com\nApp_CERT_FILE_PATH=tls/my-server-cert.crt\nApp_KEY_FILE_PATH=tls/my-server-cert.key\n")))}m.isMDXComponent=!0}}]);