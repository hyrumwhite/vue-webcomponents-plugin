window.VueWebcomponentsPlugin=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e){let t=e.indexOf("<script>")+"<script>".length,n=e.indexOf("<\/script>"),o=e.slice(t,n),i=(e.slice(0,t-"<script>".length),document.createElement("div"));i.innerHTML=e,document.body.appendChild(i);let r=document.createElement("script");r.textContent=o,document.body.appendChild(r)};const i=e=>e.replace(/([A-Z])/g,e=>"-"+e.toLowerCase()).replace(/^-/,""),r=(e,{template:t,elementClass:n,definition:i,async:l})=>{if(l)window.requestIdleCallback(()=>r(e,{template:t,elementClass:n,definition:i}));else if("string"==typeof i)o(i);else{if(t){let e=document.createElement("div");e.innerHTML=t,document.body.appendChild(e)}n&&customElements.define(e,n)}};t.default={install(e,t){e.config.ignoredElements=[],e.webComponent=function(e,t){"string"==typeof t?o(t):t.ELEMENT_NODE?customElements.define(e,t):"function"==typeof t||t.then?((e,t,n)=>{t.then?t.then(t=>n.webComponent(e,t.default||t)):n.webComponent(e,t())})(e,t,this):"object"==typeof t&&r(e,t),this.config.ignoredElements.push(e)}.bind(e),e.mixin({created(){const{webComponents:t}=this.$options;for(let n in t){let o=i(n),r=t[n];e.webComponent(o,r)}}})}}}]);