"use strict";(self.webpackChunkgocondor_site=self.webpackChunkgocondor_site||[]).push([[7176,3047],{791:(e,n,a)=>{var t=a(3205);function o(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=o,o.displayName="ejs",o.aliases=["eta"]},3205:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,s){if(a.language===t){var r=a.tokenStack=[];a.code=a.code.replace(o,(function(e){if("function"==typeof s&&!s(e))return e;for(var o,i=r.length;-1!==a.code.indexOf(o=n(t,i));)++i;return r[i]=e,o})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var o=0,s=Object.keys(a.tokenStack);!function r(i){for(var u=0;u<i.length&&!(o>=s.length);u++){var g=i[u];if("string"==typeof g||g.content&&"string"==typeof g.content){var l=s[o],c=a.tokenStack[l],p="string"==typeof g?g:g.content,f=n(t,l),k=p.indexOf(f);if(k>-1){++o;var d=p.substring(0,k),m=new e.Token(t,e.tokenize(c,a.grammar),"language-"+t,c),h=p.substring(k+f.length),v=[];d&&v.push.apply(v,r([d])),v.push(m),h&&v.push.apply(v,r([h])),"string"==typeof g?i.splice.apply(i,[u,1].concat(v)):g.content=v}}else g.content&&r(g.content)}return i}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);