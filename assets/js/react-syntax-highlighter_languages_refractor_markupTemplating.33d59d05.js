"use strict";(self.webpackChunkgocondor_site=self.webpackChunkgocondor_site||[]).push([[3047],{3205:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var s=0;s<i.length&&!(o>=r.length);s++){var u=i[s];if("string"==typeof u||u.content&&"string"==typeof u.content){var g=r[o],l=t.tokenStack[g],p="string"==typeof u?u:u.content,f=n(a,g),k=p.indexOf(f);if(k>-1){++o;var d=p.substring(0,k),h=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),m=p.substring(k+f.length),y=[];d&&y.push.apply(y,c([d])),y.push(h),m&&y.push.apply(y,c([m])),"string"==typeof u?i.splice.apply(i,[s,1].concat(y)):u.content=y}}else u.content&&c(u.content)}return i}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);