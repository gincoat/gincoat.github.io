(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,h=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(102)),l={title:"Validation and Input Binding"},s={unversionedId:"validation",id:"validation",isDocsHomePage:!1,title:"Validation and Input Binding",description:"Validation takes place when you fill (bind) a given struct with your request data, this struct could be any of your database models which live in the directory models, or any of your input model which lives in httpd/input/input.go, the input models are simply an intermediate structs used only for validation, you can use them when you don't want to fill your database models with the request data.",source:"@site/docs/validation.md",slug:"/validation",permalink:"/docs/validation",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/validation.md",version:"current",sidebar:"docs",previous:{title:"Gin Context",permalink:"/docs/gin-context"},next:{title:"Middlewares",permalink:"/docs/middlewares"}},o=[{value:"How to define validation rules",id:"how-to-define-validation-rules",children:[]},{value:"Execute the validation",id:"execute-the-validation",children:[]},{value:"Validation rules",id:"validation-rules",children:[]}],c={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Validation takes place when you fill (bind) a given struct with your request data, this struct could be any of your database models which live in the directory ",Object(i.b)("inlineCode",{parentName:"p"},"models"),", or any of your input model which lives in ",Object(i.b)("inlineCode",{parentName:"p"},"httpd/input/input.go"),", the input models are simply an intermediate structs used only for validation, you can use them when you don't want to fill your database models with the request data.\nthe Validation is based on the package ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/gopkg.in/go-playground/validator.v8"},"go-playground/validator.v8")),Object(i.b)("h3",{id:"how-to-define-validation-rules"},"How to define validation rules"),Object(i.b)("p",null,"Validation rules are defined using the struct tag ",Object(i.b)("inlineCode",{parentName:"p"},"binding"),", here is an example of how you can define them for a user struct"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `json: "name" form: "name" binding:"required,alphanum"`\n    Age  int    `json: "age"  form: "age"  binding:"required,numeric,gte=18"`\n}\n')),Object(i.b)("p",null,"Note: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the tags ",Object(i.b)("inlineCode",{parentName:"li"},"json")," and ",Object(i.b)("inlineCode",{parentName:"li"},"form")," indicate the type of content of the input (the request) that we are binding from, for the above example it means, if the content type of the input is ",Object(i.b)("inlineCode",{parentName:"li"},"json")," populate the struct's variable ",Object(i.b)("inlineCode",{parentName:"li"},"Name")," with the value from the json's key ",Object(i.b)("inlineCode",{parentName:"li"},"name"),", and the same thing for ",Object(i.b)("inlineCode",{parentName:"li"},"Age")),Object(i.b)("li",{parentName:"ul"},"the tag ",Object(i.b)("inlineCode",{parentName:"li"},"binding")," indicates the validation rules.")),Object(i.b)("h3",{id:"execute-the-validation"},"Execute the validation"),Object(i.b)("p",null,"To execute the validation you simply need to bind the request data to your struct using the method ",Object(i.b)("inlineCode",{parentName:"p"},"ShouldBind(&var)"),", or if you are sure what is the type of content of the request, you can use the proper method which is one of these ShouldBindJSON(&var), ShouldBindXML(&var), ShouldBindQuery(&var), ShouldBindYAML(&var), ShouldBindHeader(&var).\nAs you can see all these methods a pointer to a declared variable of the type of your struct.\nIf validation failed, an error will be returned, here is an example of how we can bind and validate the request data to the above struct "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'func SomeHander(c *gin.Context) {\n    var user User\n    err := c.ShouldBindJSON(&user)\n    if err != nil {\n        // validation failed\n        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})\n        return\n    }\n\n    // validation passed, the variable user is filled with the request data\n    fmt.Println(user)\n}\n')),Object(i.b)("h3",{id:"validation-rules"},"Validation rules"),Object(i.b)("p",null,"here is a list of supported validation rules"),Object(i.b)("h4",{id:"required"},"required"),Object(i.b)("p",null,'This validates that the value is not the data types default zero value. For numbers ensures value is not zero. For strings ensures value is not "". For slices, maps, pointers, interfaces, channels and functions ensures the value is not nil.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"required"`\n}\n')),Object(i.b)("h4",{id:"len"},"len"),Object(i.b)("p",null,"For numbers, max will ensure that the value is equal to the parameter given. For strings, it checks that the string length is exactly that number of characters. For slices, arrays, and maps, validates the number of items."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"len=10"`\n}\n')),Object(i.b)("h4",{id:"maximum"},"Maximum"),Object(i.b)("p",null,"For numbers, max will ensure that the value is less than or equal to the parameter given. For strings, it checks that the string length is at most that number of characters. For slices, arrays, and maps, validates the number of items."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"max=10"`\n}\n')),Object(i.b)("h4",{id:"mininum"},"Mininum"),Object(i.b)("p",null,"For numbers, min will ensure that the value is greater or equal to the parameter given. For strings, it checks that the string length is at least that number of characters. For slices, arrays, and maps, validates the number of items."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"min=10"`\n}\n')),Object(i.b)("h4",{id:"equals"},"Equals"),Object(i.b)("p",null,"For strings & numbers, eq will ensure that the value is equal to the parameter given. For slices, arrays, and maps, validates the number of items."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"eq=10"`\n}\n')),Object(i.b)("h4",{id:"not-equal"},"Not Equal"),Object(i.b)("p",null,"For strings & numbers, ne will ensure that the value is not equal to the parameter given. For slices, arrays, and maps, validates the number of items."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"ne=10"`\n}\n')),Object(i.b)("h4",{id:"greater-than"},"Greater Than"),Object(i.b)("p",null,"For numbers, this will ensure that the value is greater than the parameter given. For strings, it checks that the string length is greater than that number of characters. For slices, arrays and maps it validates the number of items."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"gt=10"`\n}\n')),Object(i.b)("h4",{id:"greater-than-or-equal"},"Greater Than or Equal"),Object(i.b)("p",null,"Same as 'min' above. Kept both to make terminology with 'len' easier."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"gte=10"`\n}\n')),Object(i.b)("h4",{id:"less-than"},"Less Than"),Object(i.b)("p",null,"For numbers, this will ensure that the value is less than the parameter given. For strings, it checks that the string length is less than that number of characters. For slices, arrays, and maps it validates the number of items."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"lt=10"`\n}\n')),Object(i.b)("h4",{id:"less-than-or-equal"},"Less Than or Equal"),Object(i.b)("p",null,"Same as 'max' above. Kept both to make terminology with 'len' easier."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"lte=10"`\n}\n')),Object(i.b)("h4",{id:"field-equals-another-field"},"Field Equals Another Field"),Object(i.b)("p",null,"This will validate the field value against another fields value either within a struct or passed in field."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Password string `binding:"eqfield=ConfirmPassword"`\n}\n')),Object(i.b)("h4",{id:"alpha-only"},"Alpha Only"),Object(i.b)("p",null,"This validates that a string value contains alpha characters only"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"alpha"`\n}\n')),Object(i.b)("h4",{id:"alphanumeric"},"Alphanumeric"),Object(i.b)("p",null,"This validates that a string value contains alphanumeric characters only"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"alphanum"`\n}\n')),Object(i.b)("h4",{id:"numeric"},"Numeric"),Object(i.b)("p",null,"This validates that a string value contains a basic numeric value. basic excludes exponents etc..."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Name string `binding:"numeric"`\n}\n')),Object(i.b)("h4",{id:"rgb-string"},"RGB String"),Object(i.b)("p",null,"This validates that a string value contains a valid rgb color"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    ProfileColor string `binding:"rgb"`\n}\n')),Object(i.b)("h4",{id:"rgba-string"},"RGBA String"),Object(i.b)("p",null,"This validates that a string value contains a valid rgba color"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    ProfileColor string `binding:"rgba"`\n}\n')),Object(i.b)("h4",{id:"e-mail-string"},"E-mail String"),Object(i.b)("p",null,"This validates that a string value contains a valid email This may not conform to all possibilities of any rfc standard, but neither does any email provider accept all posibilities."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Email string `binding:"email"`\n}\n')),Object(i.b)("h4",{id:"url-string"},"URL String"),Object(i.b)("p",null,"This validates that a string value contains a valid url This will accept any url the golang request uri accepts but must contain a schema for example http:// or rtmp://"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Website string `binding:"url"`\n}\n')),Object(i.b)("p",null,"For more validation rules please check the ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/gopkg.in/go-playground/validator.v8#hdr-Baked_In_Validators_and_Tags"},"Validatior package docs")))}u.isMDXComponent=!0}}]);