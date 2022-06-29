(()=>{"use strict";var e={982:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/**\n * Body CSS\n */\n\n html,\n body {\n   height: 100%;\n }\n \n html,\n body,\n input,\n textarea,\n button {\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n }\n \n  /**\n  * Sidebar CSS\n  */\n \n #sidebar {\n   background-color: #2196F3;\n   padding: 15px;\n }\n \n .floating-btn {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n }\n\n\n @media (min-width: 768px) {\n   #sidebar {\n     position: fixed;\n     top: 0;\n     bottom: 0;\n     width: 180px;\n     height: 100%;\n     padding-top: 30px;\n   }\n }\n \n \n /**\n  * Content CSS\n  */\n @media (min-width: 768px) {\n   #content {\n     margin-left: 180px;\n   }\n }\n\n .modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background-color: #fff;\n }\n\n .modal > h1 {\n  text-align: center;\n }\n\n .modal .modal-content {\n  padding: 1rem;\n }\n\n .error {\n  color: red;\n }",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(982),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=e=>e.length>=10;function v(e,t){const n=document.createElement("div");n.classList.add("modal");const r=`\n    <h1>${e}</h1>\n    <div class="modal-content">${t}</div>\n    `;n.innerHTML=r,mui.overlay("on",n)}function b(e){const t=y();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function y(){return JSON.parse(localStorage.getItem("questions")||"[]")}class g{static create(e){return fetch("https://kan1988-questions-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>(e.id=t.name,e))).then(b).then(g.renderList)}static fetch(e){return e?fetch(`https://kan1988-questions-default-rtdb.firebaseio.com/questions.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve('<p class="error"> у Вас нет токена</p>')}static renderList(){const e=y(),t=e.length?e.map(x).join(""):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';document.querySelector(".list").innerHTML=t}static listToHtml(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function x(e){return`\n    <div class="mui--text-black-54">\n    ${new Date(e.date).toLocaleDateString()}\n    ${new Date(e.date).toLocaleTimeString()}\n    </div>\n    <div>${e.text}</div><br>\n    `}const S=document.querySelector(".mui-form"),w=S.querySelector(".mui-input"),T=S.querySelector(".mui-btn"),q=document.querySelector(".floating-btn");window.addEventListener("load",g.renderList),S.addEventListener("submit",(e=>{if(e.preventDefault(),h(w.value)){const e={text:w.value.trim(),date:(new Date).toJSON()};T.disabled=!0,g.create(e).then((()=>{w.value="",w.className="",T.disabled=!1})),console.log("Question",e)}})),q.addEventListener("click",(function(){v("Авторизация",'\n    <form class="auth-form">\n    <div class="mui-textfield mui-textfield--float-label">\n        <input type="email" id="email" class="email" required>\n        <label for="email">Email</label>\n    </div>\n    <div class="mui-textfield mui-textfield--float-label">\n    <input type="password" id="password" class="password" required>\n    <label for="email">Пароль</label>\n    </div>\n    <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>\n    </form>\n    '),document.querySelector(".auth-form").addEventListener("submit",L,{once:!0})})),w.addEventListener("input",(()=>{T.disabled=!h(w.value)}));const L=e=>{e.preventDefault();const t=e.target.querySelector("button"),n=e.target.querySelector(".email").value,r=e.target.querySelector(".password").value;t.disabled=!0,((e,t)=>fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyXWSvsDXK3R5UdtiXMlZynH77PYCdsEA",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken)))(n,r).then((e=>g.fetch(e))).then(C).then((()=>t.disabled=!1))};function C(e){"string"==typeof e?v("Ошибка",e):v("Список вопросов",g.listToHtml(e))}})()})();