const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let r=null;function n(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){r=setInterval(n,1e3),t.toggleAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.92a3f528.js.map
