/*!
 * 
 *   Name: tfs-front-end/vendor
 *   Version: 1.3.15
 *   Contributors: Martin D Marriott <martind@kainos.com>, James Nelson <j.nelson@kainos.com>, Tameem Safi <https://github.com/tameemsafi>
 *   Timestamp: August 2nd 2021, 12:14:51 pm
 *   Source: https://github.com/dvsa/front-end
 * 
 */
!function(n){function t(r){if(o[r])return o[r].exports;var e=o[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,t),e.l=!0,e.exports}var r=window.webpackJsonp;window.webpackJsonp=function(o,u,i){for(var c,a,f,p=0,s=[];p<o.length;p++)a=o[p],e[a]&&s.push(e[a][0]),e[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(n[c]=u[c]);for(r&&r(o,u,i);s.length;)s.shift()();if(i)for(p=0;p<i.length;p++)f=t(t.s=i[p]);return f};var o={},e={3:0};t.m=n,t.c=o,t.d=function(n,r,o){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t.oe=function(n){throw console.error(n),n}}({57:function(n,t){function r(n,t){var r=n[1]||"",e=n[3];if(!e)return r;if(t&&"function"==typeof btoa){var u=o(e);return[r].concat(e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"})).concat([u]).join("\n")}return[r].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var o=r(t,n);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},e=0;e<this.length;e++){var u=this[e][0];"number"==typeof u&&(o[u]=!0)}for(e=0;e<n.length;e++){var i=n[e];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}}});