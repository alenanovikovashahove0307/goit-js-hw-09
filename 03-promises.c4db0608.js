!function(){var e=document.querySelector(".form");function n(e,n){var o={position:e,delay:n},t=Math.random()>.3;return new Promise((function(e,a){setTimeout((function(){t?e(o):a(o)}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();for(var t=Number(e.delay.value),a=1;a<=e.amount.value;a+=1)n(a,t).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),t+=Number(e.step.value)}))}();
//# sourceMappingURL=03-promises.c4db0608.js.map