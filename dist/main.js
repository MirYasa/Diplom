!function(e){var t={};function s(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(l,n,function(t){return e[t]}.bind(null,n));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);var l=()=>{const e=document.querySelector(".clubs-list ul"),t=document.querySelector(".popup-menu"),s=document.querySelector("#free_visit_form"),l=document.querySelector("#callback_form"),n=document.querySelector(".fixed-gift"),o=document.querySelector("#gift");document.addEventListener("click",c=>{const r=c.target;r.matches(".menu-btn-img")?t.style.display="flex":r.matches(".close-btn-img")||r.closest(".scroll")?t.style.display="none":r.matches(".club-select p")?e.classList.toggle("hidden"):r.closest(".free-visit")||r.matches(".open-popup")?s.style.display="block":r.matches(".overlay")||r.matches(".close_icon")?(s.style.display="none",l.style.display="none"):r.matches("#gift .overlay")||r.closest("#gift .close_icon")||r.matches(".close-btn")?o.style.display="none":r.closest(".callback-btn")?l.style.display="block":r.closest(".fixed-gift")?(n.style.display="none",o.style.display="block"):r.closest(".club-select")||e.classList.add("hidden")})};var n=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{t>3?(t=0,e[t+4].style.display="none",e[t].style.display="flex"):(t++,e[t-1].style.display="none",e[t].style.display="flex")},3e3)};var o=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),s=document.querySelector(".slider-dots");let l,n,o=0;t.forEach(()=>{n=document.createElement("li"),s.append(n)});const c=document.querySelectorAll(".slider-dots li"),r=(e,t,s)=>{e[t].classList.remove(s)},a=(e,t,s)=>{e[t].classList.add(s)},i=()=>{r(t,o,"slide-change"),r(c,o,"slick-active"),o++,o>=t.length&&(o=0),a(t,o,"slide-change"),a(c,o,"slick-active")};t[0].classList.add("slide"),c[0].classList.add("slick-active");const d=()=>{l=setInterval(i,4e3)};e.addEventListener("click",e=>{e.preventDefault();const s=e.target;r(t,o,"slide-change"),r(c,o,"slick-active"),s.closest(".next")?o++:s.closest(".prev")?o--:s.matches(".slider-dots li")&&c.forEach((e,t)=>{e===s&&(o=t)}),o>=t.length&&(o=0),o<0&&(o=t.length-1),a(t,o,"slide-change"),a(c,o,"slick-active")}),e.addEventListener("mouseover",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".slider-dots li"))&&clearInterval(l)}),e.addEventListener("mouseout",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".slider-dots li.slider-dots li"))&&d()}),d()};var c=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide");let s=0;e.addEventListener("click",l=>{const n=l.target;n.closest(".prev")?(s>4&&(s=0),s<0&&(s=0),e.removeChild(t[s]),e.append(t[s]),s++):n.closest(".next")&&(s--,s<0&&(s=4),s>4&&(s=4),e.removeChild(t[s]),e.prepend(t[s]))})};var r=()=>{const e=document.querySelector("#card_order"),t=document.querySelector("#price-total"),s=document.querySelector(".price-message input");let l,n=1999,o=9990,c=13990,r=19990;const a=e=>Math.ceil(e-.3*e);e.addEventListener("change",e=>{const i=e.target;if(i.matches("#card_leto_schelkovo")){switch(n=2999,o=14990,c=21990,r=24990,l){case 2999:l=1999;break;case 14990:l=9990;break;case 21990:l=13990;break;case 24990:l=19990}switch(l){case 1999:"ТЕЛО2019"===s.value?t.textContent=a(n):t.textContent=n;break;case 9990:"ТЕЛО2019"===s.value?t.textContent=a(o):t.textContent=o;break;case 13990:"ТЕЛО2019"===s.value?t.textContent=a(c):t.textContent=c;break;case 19990:"ТЕЛО2019"===s.value?t.textContent=a(r):t.textContent=r}}else if(i.matches("#card_leto_mozaika")){switch(n=1999,o=9990,c=13990,r=19990,l){case 1999:l=2999;break;case 9990:l=14990;break;case 13990:l=21990;break;case 19990:l=24990}switch(l){case 2999:"ТЕЛО2019"===s.value?t.textContent=a(n):t.textContent=n;break;case 14990:"ТЕЛО2019"===s.value?t.textContent=a(o):t.textContent=o;break;case 21990:"ТЕЛО2019"===s.value?t.textContent=a(c):t.textContent=c;break;case 24990:"ТЕЛО2019"===s.value?t.textContent=a(r):t.textContent=r}}else i.closest(".price-message")&&"ТЕЛО2019"===s.value&&(t.textContent=a(t.textContent));"ТЕЛО2019"===s.value?i.closest("#m1")?(t.textContent=a(n),l=n):i.closest("#m2")?(t.textContent=a(o),l=o):i.closest("#m3")?(t.textContent=a(c),l=c):i.closest("#m4")&&(t.textContent=a(r),l=r):i.closest("#m1")?(t.textContent=n,l=n):i.closest("#m2")?(t.textContent=o,l=o):i.closest("#m3")?(t.textContent=c,l=c):i.closest("#m4")&&(t.textContent=r,l=r)})};(()=>{const e=document.querySelector("#totop"),t=document.querySelector(".menu-button"),s=document.querySelector(".top-menu"),l=document.querySelector(".head-slider");e.style.display="none",document.addEventListener("scroll",()=>{l.getBoundingClientRect().y<-400?e.style.display="block":e.style.display="none",t.getBoundingClientRect().y<0&&(s.style.position="fixed"),l.getBoundingClientRect().y>0&&(s.style.position="relative")})})(),r(),c(),o(),n(),l()}]);