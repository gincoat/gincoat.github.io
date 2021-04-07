(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(96)),i={title:"Environment Variables"},c={unversionedId:"environment-variables",id:"environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"Enviroment Variables are defined in the file .env at the root, the automatically get set into the os enviroment variables, you can access them using os.Getenv(key-name) function by passing the key name, here is a sample of the file content:",source:"@site/docs/environment-variables.md",slug:"/environment-variables",permalink:"/docs/environment-variables",editUrl:"https://github.com/gocondor/condor.github.io/edit/source/docs/environment-variables.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Features Control",permalink:"/docs/features-control"}},s=[],l={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Enviroment Variables are defined in the file ",Object(a.b)("inlineCode",{parentName:"p"},".env")," at the root, the automatically get set into the os enviroment variables, you can access them using ",Object(a.b)("inlineCode",{parentName:"p"},"os.Getenv(key-name)")," function by passing the key name, here is a sample of the file content:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#################################\n###                           ###\n#################################\nAPP_NAME=Condor\nAPP_MODE=debug  # debug | release | test\nAPP_HTTP_HOST=localhost\nAPP_HTTP_PORT=8000\n\n#################################\n###            TLS            ###\n#################################\nAPP_HTTPS_ON=false\nAPP_REDIRECT_HTTP_TO_HTTPS=false\nAPP_HTTPS_HOST=localhost\nAPP_HTTPS_CERT_FILE_PATH=ssl/server.crt\nAPP_HTTPS_KEY_FILE_PATH=ssl/server.key\n\n#################################\n###            JWT            ###\n#################################\nJWT_SECRET=jwt-secret-key\nJWT_LIFESPAN_MINUTES=60\nJWT_REFRESH_TOKEN_SECRET=jwt-refresh-token-secret\nJWT_REFRESH_TOKEN_LIFESPAN_HOURS=24\n\n\n#################################\n###            DATABASE       ###\n#################################\nDB_DRIVER=sqlite  # mysql | sqlite\n\n# MYSQL\nMYSQL_HOST=localhost\nMYSQL_DB_NAME=condor\nMYSQL_PORT=3306\nMYSQL_USERNAME=root\nMYSQL_PASSWORD=\nMYSQL_CHARSET=utf8mb4\n\n# SQLITE\nSQLITE_DB=database/db.sqlite\n\n\n#################################\n###            CACHE          ###\n#################################\nCACHE_DRIVER=redis\n\nREDIS_HOST=localhost\nREDIS_PORT=6379\nREDIS_PASSWORD=\nREDIS_TTL_SECONDS=0\nREDIS_DB_NAME=\n")))}u.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,b=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);