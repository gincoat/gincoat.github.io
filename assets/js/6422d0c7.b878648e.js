(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||s[b]||a;return n?o.a.createElement(h,c(c({ref:t},d),{},{components:n})):o.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(104)),i={title:"JWT Tokens"},c={unversionedId:"jwt",id:"jwt",isDocsHomePage:!1,title:"JWT Tokens",description:"JWT tokens are used for authentication, GoCondor provides you with ways to generate jwt tokens, refresh tokens and validatation of them.",source:"@site/docs/jwt.md",slug:"/jwt",permalink:"/docs/jwt",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/jwt.md",version:"current",sidebar:"docs",previous:{title:"Redirect",permalink:"/docs/redirect"},next:{title:"Auth package",permalink:"/docs/auth"}},l=[{value:"Generate JWT token",id:"generate-jwt-token",children:[]},{value:"Extract authorization token from header",id:"extract-authorization-token-from-header",children:[]},{value:"Decode a token",id:"decode-a-token",children:[]},{value:"Generate JWT refresh token",id:"generate-jwt-refresh-token",children:[]},{value:"Validate a token",id:"validate-a-token",children:[]}],d={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"JWT tokens are used for authentication, GoCondor provides you with ways to generate ",Object(a.b)("inlineCode",{parentName:"p"},"jwt tokens"),", ",Object(a.b)("inlineCode",{parentName:"p"},"refresh tokens")," and validatation of them.\nThe configuration for JWT can be found in the ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file, this is where you can set things like the ",Object(a.b)("inlineCode",{parentName:"p"},"secret")," key and the ",Object(a.b)("inlineCode",{parentName:"p"},"validity")," of the tokens"),Object(a.b)("h3",{id:"generate-jwt-token"},"Generate JWT token"),Object(a.b)("p",null,"To generate a ",Object(a.b)("inlineCode",{parentName:"p"},"jwt token")," you can simply use the method ",Object(a.b)("inlineCode",{parentName:"p"},"CreateToken")," in the variable ",Object(a.b)("inlineCode",{parentName:"p"},"JWT"),", the variable ",Object(a.b)("inlineCode",{parentName:"p"},"JWT")," is available to the all your handlers, it's set in the file ",Object(a.b)("inlineCode",{parentName:"p"},"http/handlers/deps.go"),". here is how you can generate a token with the payload having the user id:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    payload := map[string]string{"userId": "123"}\n    token, err := JWT.CreateToken(payload)\n}\n')),Object(a.b)("h3",{id:"extract-authorization-token-from-header"},"Extract authorization token from header"),Object(a.b)("p",null,"To extract the token you use the method ",Object(a.b)("inlineCode",{parentName:"p"},"JWT.ExtractToken(context)")," it accepts the context variable, it assumes the token is set in the header with the key ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization")," and the value is in this format ",Object(a.b)("inlineCode",{parentName:"p"},"bearer: your-token-here"),", here is how you can do it:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},"func SomeHandler(c *gin.Context) {\n    token, error := JWT.ExtractToken(c)\n}\n")),Object(a.b)("h3",{id:"decode-a-token"},"Decode a token"),Object(a.b)("p",null,"To decode a token and extract the encoded information, you can do it like below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},"func SomeHandler(c *gin.Context) {\n    // first let's extract the token from the request header\n    token, error := JWT.ExtractToken(c)\n\n    // decode\n    payload, err := JWT.DecodeToken(token)\n}\n")),Object(a.b)("h3",{id:"generate-jwt-refresh-token"},"Generate JWT refresh token"),Object(a.b)("p",null,"You can generate a jwt refresh token using the method ",Object(a.b)("inlineCode",{parentName:"p"},"CreateRefreshToken"),", here is how:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    payload := map[string]string{"userId": "123"}\n    token, err := JWT.CreateRefreshToken(payload)\n}\n')),Object(a.b)("h3",{id:"validate-a-token"},"Validate a token"),Object(a.b)("p",null,"To check if a token is valid or not you can do it like below: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},"func SomeHandler(c *gin.Context) {\n    // first let's extract the token from the request header\n    token, error := JWT.ExtractToken(c)\n\n    // validate\n    ok, err := JWT.ValidateToken(token)\n}\n")))}u.isMDXComponent=!0}}]);