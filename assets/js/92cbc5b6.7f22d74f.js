(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{102:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var r=a.a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return a.a.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=u(n),b=t,m=l["".concat(s,".").concat(b)]||l[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:r},d),{},{components:n})):a.a.createElement(m,c({ref:r},d))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var d=2;d<o;d++)s[d]=n[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return u}));var t=n(3),a=n(7),o=(n(0),n(102)),s={title:"CRUD Operations"},c={unversionedId:"database-crud",id:"database-crud",isDocsHomePage:!1,title:"CRUD Operations",description:"To perform operations on your database first make sure Database is enabled in the Features struct which is located at config/features.go, then add the database connection information in the .env file.",source:"@site/docs/database-crud.md",slug:"/database-crud",permalink:"/docs/database-crud",editUrl:"https://github.com/gocondor/gocondor.github.io/edit/source/docs/database-crud.md",version:"current",sidebar:"docs",previous:{title:"Models",permalink:"/docs/database-models"},next:{title:"Relationships (Associations)",permalink:"/docs/database-relationships"}},i=[{value:"Creating records",id:"creating-records",children:[]},{value:"Reading records",id:"reading-records",children:[]},{value:"Updating Records",id:"updating-records",children:[]},{value:"Deleting Records",id:"deleting-records",children:[]}],d={toc:i};function u(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To perform operations on your database first make sure ",Object(o.b)("inlineCode",{parentName:"p"},"Database")," is enabled in the ",Object(o.b)("inlineCode",{parentName:"p"},"Features")," struct which is located at ",Object(o.b)("inlineCode",{parentName:"p"},"config/features.go"),", then add the database connection information in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file.\nAll operations are performed with a database variable named ",Object(o.b)("inlineCode",{parentName:"p"},"DB")," which is available to all your handlers and middlewares since it's set in deps files ",Object(o.b)("inlineCode",{parentName:"p"},"http/handlers/deps.go")," and ",Object(o.b)("inlineCode",{parentName:"p"},"http/middlewares/deps.go")),Object(o.b)("h2",{id:"creating-records"},"Creating records"),Object(o.b)("p",null,"Here is an example of how you can create a database record "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    user := User{Name: "Jack", Age: 28, Birthday: time.Now()}\n    result := DB.Create(&user) // pass pointer of data to Create\n\n    user.ID             // returns inserted data\'s primary key\n    result.Error        // returns error\n    result.RowsAffected // returns inserted records count\n}\n')),Object(o.b)("h2",{id:"reading-records"},"Reading records"),Object(o.b)("p",null,"Here is how you can read records"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    var user User\n    DB.First(&user, 1) // find user with integer primary key\n\n    DB.Where("email = ?", "jack@mail.com").First(&user),  // find the first user with email jack@mail.com\n\n    // Get the first record ordered by primary key\n    DB.First(&user)\n    // SELECT * FROM users ORDER BY id LIMIT 1;\n\n    // Get one record, no specified order\n    DB.Take(&user)\n    // SELECT * FROM users LIMIT 1;\n\n    // Get last record, order by primary key desc\n    DB.Last(&user)\n    // SELECT * FROM users ORDER BY id DESC LIMIT 1;\n\n    result := DB.First(&user)\n    result.RowsAffected // returns found records count\n    result.Error        // returns error\n\n    // check error ErrRecordNotFound\n    errors.Is(result.Error, gorm.ErrRecordNotFound)\n\n    // Get all records\n    var users []User\n    result := DB.Find(&users)\n    // SELECT * FROM users;\n\n    result.RowsAffected // returns found records count, equals `len(users)`\n    result.Error        // returns error\n\n}\n')),Object(o.b)("p",null,"For more advanced queries check ",Object(o.b)("a",{parentName:"p",href:"https://gorm.io/docs/advanced_query.html"},"GORM advanced queries docs")),Object(o.b)("h2",{id:"updating-records"},"Updating Records"),Object(o.b)("p",null,"Here is how you can update a record "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    var user User\n    DB.First(&user)\n\n    user.Name = "Joe"\n    user.Age = 100\n    DB.Save(&user) // Note: save creates the record if missing\n}\n')),Object(o.b)("h2",{id:"deleting-records"},"Deleting Records"),Object(o.b)("p",null,"Here is how you can delete records:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'func SomeHandler(c *gin.Context) {\n    DB.Delete(&User{}, 10)\n    // DELETE FROM users WHERE id = 10;\n\n    DB.Delete(&User{}, "10")\n    // DELETE FROM users WHERE id = 10;\n\n    DB.Delete(&users, []int{1,2,3})\n    // DELETE FROM users WHERE id IN (1,2,3);\n}\n')))}u.isMDXComponent=!0}}]);