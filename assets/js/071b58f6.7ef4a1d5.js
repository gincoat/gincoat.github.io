(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(101)),a={title:"Gin Context"},c={unversionedId:"gin-context",id:"gin-context",isDocsHomePage:!1,title:"Gin Context",description:"Gin Context is a struct that provides you with all the functionalities and information that you need to handle a request, it contains things like headers, request data, attachments and more, below are some methods provided in the context, for more check the Gin Context Docs:",source:"@site/docs/gin-context.md",slug:"/gin-context",permalink:"/docs/gin-context",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/gin-context.md",version:"current",sidebar:"docs",previous:{title:"Cache",permalink:"/docs/cache"},next:{title:"TLS",permalink:"/docs/tls"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Gin Context is a struct that provides you with all the functionalities and information that you need to handle a request, it contains things like ",Object(i.b)("inlineCode",{parentName:"p"},"headers"),", ",Object(i.b)("inlineCode",{parentName:"p"},"request data"),", ",Object(i.b)("inlineCode",{parentName:"p"},"attachments")," and more, below are some methods provided in the context, for more check the ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/gin-gonic/gin#Context"},"Gin Context Docs"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},"func SomeHandler(c *gin.Context) {\n    c.Abort()\n    c.AbortWithError(code int, err error) *Error\n    c.ClientIP() string\n    c.Cookie(name string) (string, error)\n    c.File(filepath string)\n    c.FileAttachment(filepath, filename string)\n    c.GetPostFormArray(key string) ([]string, bool)\n    c.Query(key string) string\n    c.SaveUploadedFile(file *multipart.FileHeader, dst string) error\n    // and more\n}\n")))}u.isMDXComponent=!0}}]);