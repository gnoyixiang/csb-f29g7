parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";function n(n,e,t,r,i,a,l){try{var u=n[a](l),o=u.value}catch(c){return void t(c)}u.done?e(o):Promise.resolve(o).then(r,i)}function e(e){return function(){var t=this,r=arguments;return new Promise(function(i,a){var l=e.apply(t,r);function u(e){n(l,i,a,u,o,"next",e)}function o(e){n(l,i,a,u,o,"throw",e)}u(void 0)})}}function t(n){return r.apply(this,arguments)}function r(){return(r=e(regeneratorRuntime.mark(function n(e){var t,r,i,a,l,u,o,c,s,d,f,m,p,v,h,b,x,y=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=y.length>1&&void 0!==y[1]&&y[1],r=y.length>2&&void 0!==y[2]?y[2]:"spiral",i=y.length>3&&void 0!==y[3]?y[3]:50,a=0,(u=[0,0])[l=t?1:0]=-1,o=Array(e).fill().map(function(){return Array(e).fill(null)}),(c=document.getElementById(r))&&(c.innerHTML=o.map(function(n){return"<div>"+n.map(function(){return"<div></div>"}).join("")+"</div>"}).join("")),s=Array(Math.ceil(e/2)).fill(null).map(function(n,t){var r=e-2*t;return{dim:r,dir:r>2?4:r>1?3:1}}),d=0;case 12:if(!(d<s.length)){n.next=39;break}f=s[d],m=0;case 15:if(!(m<f.dir)){n.next=36;break}p=m>2?2:m>0?1:0,v=m>1?-1:1,h=0;case 19:if(!(h<f.dim-p)){n.next=32;break}if(u[l]=u[l]+v,b=u[0],x=u[1],o[x][b]=++a,!c){n.next=29;break}if(c.childNodes[x].childNodes[b].innerHTML=o[x][b],!i){n.next=29;break}return n.next=29,new Promise(function(n){setTimeout(function(){return n()},i)});case 29:h++,n.next=19;break;case 32:l=0===l?1:0;case 33:m++,n.next=15;break;case 36:d++,n.next=12;break;case 39:return n.abrupt("return",o);case 40:case"end":return n.stop()}},n)}))).apply(this,arguments)}require("./styles.css"),document.getElementById("app").innerHTML='\n<h1>Hello Spiral!</h1>\n<style>\n  #spiral > div {\n    display: flex;\n  }\n  #spiral > div > div {\n    width: 36px;\n    height: 36px;\n    border: 1px solid #aaa;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n  }\n</style>\n<form id="form">\n  <label for="num">Dimension</label>\n  <input name="num" type="number" max="99" min="1" required />\n  <input name="anticlockwise" type="checkbox" />\n  <label for="anticlockwise">Anti-clockwise spiral</label>\n  <br />\n  <input type="submit" value="Spiral it!" />\n</form>\n<div id="spiral"></div>\n',document.getElementById("form").addEventListener("submit",function(n){n.preventDefault(),t(Number(n.target.num.value),n.target.anticlockwise.checked)});
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-f29g7/src.87a2355d.js.map