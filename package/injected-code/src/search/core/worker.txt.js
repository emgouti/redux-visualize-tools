!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e,t){if(!e||!t)return{length:0,sequence:"",offset:0};for(var n="",r=e.length,o=t.length,u=new Array(r),f=0,a=0,c=0;c<r;c++){for(var l=new Array(o),s=0;s<o;s++)l[s]=0;u[c]=l}var i=null;for(c=0;c<r;c++)for(s=0;s<o;s++)e[c]!==t[s]?u[c][s]=0:(u[c][s]=0===c||0===s?1:1+u[c-1][s-1],u[c][s]>f&&(f=u[c][s],a===(i=c-u[c][s]+1)?n+=e[c]:(a=i,n="",n+=e.substr(a,c+1-a))));return{length:f,sequence:n,offset:i}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);const u=e=>e.replace(/[\x00-\x1F\x7F-\x9F]/g,"").replace(/\s+/g,"").toLowerCase();self.onmessage=function(e){const{strings:t,searchText:n}=e.data;let r=Date.now();const f=function(e,t){return t=u(t),e.map(e=>(e=u(e),o()(e,t)))}(t,n);console.log("search took",Date.now()-r),self.postMessage(f)}}]);