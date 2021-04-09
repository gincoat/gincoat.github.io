(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=s(n),b=r,f=g["".concat(i,".").concat(b)]||g[b]||u[b]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(101)),i={title:"Package Integrator"},c={unversionedId:"package-integrator",id:"package-integrator",isDocsHomePage:!1,title:"Package Integrator",description:"Package integrators are functions to give you the ability to initiate the variables of third party packages and integrate them into gin context, the main goal behind it is to hide the complexity of initiating packages from your handlers and make them available to every part of your app that have access to gin context variable.",source:"@site/docs/package-integrator.md",slug:"/package-integrator",permalink:"/docs/package-integrator",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/package-integrator.md",version:"current",sidebar:"docs",previous:{title:"JWT Tokens",permalink:"/docs/jwt"},next:{title:"Cache",permalink:"/docs/cache"}},p=[],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Package integrators are functions to give you the ability to initiate the variables of third party packages and integrate them into gin context, the main goal behind it is to hide the complexity of initiating packages from your handlers and make them available to every part of your app that have access to gin context variable."),Object(o.b)("p",null,"Package integrators are located in the directory ",Object(o.b)("inlineCode",{parentName:"p"},"integrations")," at the root, to make it clear, let's integrate the package ",Object(o.b)("a",{parentName:"p",href:"https://github.com/spf13/afero"},"Afro filesystem"),".\nFirst we need to install the package by running ",Object(o.b)("inlineCode",{parentName:"p"},"go get github.com/spf13/afero"),",\nnext let's create the integrator file in the folder ",Object(o.b)("inlineCode",{parentName:"p"},"integrations"),", lets call it ",Object(o.b)("inlineCode",{parentName:"p"},"afero.go")," and let's add to it the content below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'package integrations\n\nimport (\n    "github.com/gin-gonic/gin"\n    "github.com/spf13/afero"\n)\n\nvar afero gin.HandlerFunc = func(c *gin.Context) {\n    var AppFs = afero.NewOsFs()\n\n    //set the package varialbe in gin context using c.Set(key, pkg-variable)\n    c.Set("afero", AppFs)\n\n    //continute execution\n    c.Next()\n}\n\n')),Object(o.b)("p",null,"Now let's register this integrator, we can do that in the file ",Object(o.b)("inlineCode",{parentName:"p"},"integrations/registrar.go"),", inside the function ",Object(o.b)("inlineCode",{parentName:"p"},"RegisterPKGIntegrations()")," you simply need to resolve the integrator variable and use it to attach our integrator, here is the code: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"func RegisterPKGIntegrations() {\n    pkgi := pkgintegrator.Resolve()\n\n    //add your packages here\n    pkgi.Integrate(afero)\n\n}\n\n")),Object(o.b)("p",null,"To retrieve the variable and start using it in your handlers, you can do it like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'afero := c.MustGet("afero").(afero.Fs)\n\nfile, err := afero.OpenFile(file-name, flag, perm)\n')),Object(o.b)("p",null,"Note:\nthe part ",Object(o.b)("inlineCode",{parentName:"p"},".(afero.Fs)")," is to validate the type of the retrieved variable "))}s.isMDXComponent=!0}}]);