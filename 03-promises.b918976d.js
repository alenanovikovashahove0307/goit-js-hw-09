!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function u(e,n){var t={position:e,delay:n},o=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){o?e(t):r(t)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),r=document.querySelector('input[name="amount"]'),a=parseInt(t.value),l=parseInt(o.value),c=parseInt(r.value),d=a,f=1;f<=c;f++)u(f,d).then((function(n){var t=n.position,o=n.delay;e(i).Notify.info("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.info("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),d+=l;t.value="",o.value="",r.value=""}))}();
//# sourceMappingURL=03-promises.b918976d.js.map
