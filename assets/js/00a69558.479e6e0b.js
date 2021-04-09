(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,y=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(y,c(c({ref:t},l),{},{components:n})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(101)),i={title:"TLS"},c={unversionedId:"tls",id:"tls",isDocsHomePage:!1,title:"TLS",description:"GoCondor gives you the ability to run your app in ssl mode, you just need to copy your ssl certificates server.cert and server.key to the directory ssl at the root, next update the TLS section in the .env file by adding to it the paths of these files and domain name, here is a sample of that section:",source:"@site/docs/tls.md",slug:"/tls",permalink:"/docs/tls",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/tls.md",version:"current",sidebar:"docs",previous:{title:"Gin Context",permalink:"/docs/gin-context"},next:{title:"Contribute",permalink:"/docs/contribute"}},s=[{value:"Let&#39;s encrypt auto certificates",id:"lets-encrypt-auto-certificates",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GoCondor gives you the ability to run your app in ",Object(a.b)("inlineCode",{parentName:"p"},"ssl")," mode, you just need to copy your ssl certificates ",Object(a.b)("inlineCode",{parentName:"p"},"server.cert")," and ",Object(a.b)("inlineCode",{parentName:"p"},"server.key")," to the directory ",Object(a.b)("inlineCode",{parentName:"p"},"ssl")," at the root, next update the ",Object(a.b)("inlineCode",{parentName:"p"},"TLS")," section in the ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file by adding to it the paths of these files and domain name, here is a sample of that section:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#################################\n###            TLS            ###\n#################################\nAPP_HTTPS_ON=tue\nAPP_REDIRECT_HTTP_TO_HTTPS=true\nAPP_HTTPS_HOST=mydomain.com\nAPP_HTTPS_CERT_FILE_PATH=ssl/server.crt\nAPP_HTTPS_KEY_FILE_PATH=ssl/server.key\n")),Object(a.b)("p",null,"Finally, run the app and it will be served in ssl mode."),Object(a.b)("h2",{id:"lets-encrypt-auto-certificates"},"Let's encrypt auto certificates"),Object(a.b)("p",null,"using let's encrypt auto certificates is very simple, you just need to set three environment variables to true and you will be good to go, here they are:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"APP_HTTPS_ON=true\nAPP_HTTPS_USE_LETSENCRYPT=true\nAPP_HTTPS_HOST=mydomain.com\n")),Object(a.b)("p",null,"then run your app"))}u.isMDXComponent=!0}}]);