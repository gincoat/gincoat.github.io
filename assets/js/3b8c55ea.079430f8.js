(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(102)),c={title:"Installation"},i={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"To create a new GoCondor project you need to install the gocondor cli first",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/installation.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To create a new GoCondor project you need to install the ",Object(a.b)("inlineCode",{parentName:"p"},"gocondor cli")," first"),Object(a.b)("h4",{id:"install-gocondor-cli"},"Install GoCondor cli"),Object(a.b)("p",null,"To install the ",Object(a.b)("inlineCode",{parentName:"p"},"gocondor cli")," open up your terminal and run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gocondor/installer/gocondor\n")),Object(a.b)("h4",{id:"create-a-new-project"},"Create a new project:"),Object(a.b)("p",null,"The command for creating a new project is the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"gocondor new [project-name] [project-location]\n")),Object(a.b)("p",null,"where:\n",Object(a.b)("inlineCode",{parentName:"p"},"project-name")," is the name of your project\n",Object(a.b)("inlineCode",{parentName:"p"},"project-location")," is the remote repository that will host the project, usually people use ",Object(a.b)("inlineCode",{parentName:"p"},"github.com")),Object(a.b)("p",null,"Now let's create a project with the name ",Object(a.b)("inlineCode",{parentName:"p"},"todo")," and let's assume it's hosted on the repository ",Object(a.b)("inlineCode",{parentName:"p"},"github.com/my-organization/todo"),", here is the command to create that project"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"gocondor new todo github.com/my-organization/todo\n")))}u.isMDXComponent=!0}}]);