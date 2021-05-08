(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=i,h=b["".concat(o,".").concat(d)]||b[d]||p[d]||r;return n?a.a.createElement(h,c(c({ref:t},u),{},{components:n})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),r=(n(0),n(104)),o={title:"Authentication"},c={unversionedId:"auth",id:"auth",isDocsHomePage:!1,title:"Authentication",description:"GoCondor comes with a built-in users' authentication feature, you can turn it on by setting the flag authentication in config.features.go to true, it comes with registration, login, and logout routes plus a package auth to help you check authenticated users and perform other actions on them.",source:"@site/docs/auth.md",slug:"/auth",permalink:"/docs/auth",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/auth.md",version:"current",sidebar:"docs",previous:{title:"JWT Tokens",permalink:"/docs/jwt"},next:{title:"Cache",permalink:"/docs/cache"}},l=[{value:"Using the authentication feature",id:"using-the-authentication-feature",children:[]},{value:"Routes",id:"routes",children:[]},{value:"Adding fields to the registration",id:"adding-fields-to-the-registration",children:[]},{value:"Updating the logic",id:"updating-the-logic",children:[]},{value:"Check if a user is logged in",id:"check-if-a-user-is-logged-in",children:[]},{value:"Get logged-in user&#39;s ID",id:"get-logged-in-users-id",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"GoCondor comes with a built-in users' authentication feature, you can turn it on by setting the flag ",Object(r.b)("inlineCode",{parentName:"p"},"authentication")," in ",Object(r.b)("inlineCode",{parentName:"p"},"config.features.go")," to true, it comes with ",Object(r.b)("inlineCode",{parentName:"p"},"registration"),", ",Object(r.b)("inlineCode",{parentName:"p"},"login"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"logout")," routes plus a package ",Object(r.b)("inlineCode",{parentName:"p"},"auth")," to help you check authenticated users and perform other actions on them."),Object(r.b)("h3",{id:"using-the-authentication-feature"},"Using the authentication feature"),Object(r.b)("p",null,"to use the authentication feature to need to set the following flags in ",Object(r.b)("inlineCode",{parentName:"p"},"config/features.go")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"Database")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"Sessions")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"Authentication"))),Object(r.b)("h3",{id:"routes"},"Routes"),Object(r.b)("p",null,"There are 3 routes defined with their logic"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Post => ",Object(r.b)("inlineCode",{parentName:"li"},"/register"),", to perform users registration, it accepts the following fields:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"password"))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Post => ",Object(r.b)("inlineCode",{parentName:"li"},"/login"),", to log users in, it accepts:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"password"))),Object(r.b)("p",null,"It returns ",Object(r.b)("inlineCode",{parentName:"p"},"jwt")," token and ",Object(r.b)("inlineCode",{parentName:"p"},"jwt refresh token")," in the response, the ",Object(r.b)("inlineCode",{parentName:"p"},"jwt")," token has to be sent in every request that needs to be authenticated, it has to be present in headers in the format: ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," as the key and ",Object(r.b)("inlineCode",{parentName:"p"},"bearer: the-user-token")," as the value."),Object(r.b)("p",null,"Sample response:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "refreshToken": "eyJhbGciSiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjA1MDUwMjMsInVzZXJJRCI6NX0.JuIzV3it-FyK-yXkFUB4PfxX0zqFACFuG-ysfGvOWJE",\n        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MjA0MjIyMjMsInVzZXcJRCI6NX0.56GjsF9Px9nAlfbYVBMmphLMEDRVI5NeqJ9NghWksI8"\n    }\n}\n')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Get => ",Object(r.b)("inlineCode",{parentName:"li"},"/logout"),", to log users out, it accepts ",Object(r.b)("inlineCode",{parentName:"li"},"jwt")," token in the header")),Object(r.b)("h3",{id:"adding-fields-to-the-registration"},"Adding fields to the registration"),Object(r.b)("p",null,"To add fields to the registration you just need to make one simple change, you just need to add your fields with their validation tags to the user's model ",Object(r.b)("inlineCode",{parentName:"p"},"models/user.go")," and every thing will be taken care of for you automatically."),Object(r.b)("h3",{id:"updating-the-logic"},"Updating the logic"),Object(r.b)("p",null,"If you ever needed to make changes to the logic, the files are located in ",Object(r.b)("inlineCode",{parentName:"p"},"http/authentication")),Object(r.b)("h3",{id:"check-if-a-user-is-logged-in"},"Check if a user is logged in"),Object(r.b)("p",null,"Here is how you can check if a user is logged in:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"func SomeHandler(c *gin.Context) {\n    Auth := auth.Resolve()\n    ok, err := Auth.Check(c)\n    if ok {\n        // user is logged in\n    }\n}\n")),Object(r.b)("h3",{id:"get-logged-in-users-id"},"Get logged-in user's ID"),Object(r.b)("p",null,"Here is how you get the authenticated user's ID"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"func SomeHandler(c *gin.Context) {\n    Auth := auth.Resolve()\n    userID, err := Auth.UserID(c)\n}\n")))}s.isMDXComponent=!0}}]);