!function(e){var t={};function n(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(l,s,function(t){return e[t]}.bind(null,s));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelector(".clubs-list ul"),t=document.querySelector(".popup-menu"),n=document.querySelector("#free_visit_form"),l=document.querySelector("#callback_form"),s=document.querySelector(".fixed-gift"),o=document.querySelector("#gift"),c=document.querySelector("#thanks");document.addEventListener("click",r=>{const a=r.target;a.matches(".menu-btn-img")?t.style.display="flex":a.matches(".close-btn-img")||a.closest(".scroll")?t.style.display="none":a.matches(".club-select p")?e.classList.toggle("hidden"):a.closest(".free-visit")||a.matches(".open-popup")?n.style.display="block":a.closest("#gift .overlay")||a.closest("#gift .close_icon")||a.closest("#gift .close-btn")?o.style.display="none":a.closest("#thanks .overlay")||a.closest("#thanks .close_icon")||a.closest("#thanks .close-btn")?(c.style.display="none",n.style.display="none",l.style.display="none"):a.matches(".overlay")||a.matches(".close_icon")||a.closest(".close-btn")?(n.style.display="none",l.style.display="none"):a.closest("header .callback-btn")?l.style.display="block":a.closest(".fixed-gift")?(s.style.display="none",o.style.display="block"):a.closest(".club-select")||e.classList.add("hidden")})};var s=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{t>3?(t=0,e[t+4].style.display="none",e[t].style.display="flex"):(t++,e[t-1].style.display="none",e[t].style.display="flex")},3e3)};var o=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=document.querySelector(".slider-dots");let l,s,o=0;t.forEach(()=>{s=document.createElement("li"),n.append(s)});const c=document.querySelectorAll(".slider-dots li"),r=(e,t,n)=>{e[t].classList.remove(n)},a=(e,t,n)=>{e[t].classList.add(n)},i=()=>{r(t,o,"slide-change"),r(c,o,"slick-active"),o++,o>=t.length&&(o=0),a(t,o,"slide-change"),a(c,o,"slick-active")};t[0].classList.add("slide"),c[0].classList.add("slick-active");const d=()=>{l=setInterval(i,4e3)};e.addEventListener("click",e=>{e.preventDefault();const n=e.target;r(t,o,"slide-change"),r(c,o,"slick-active"),n.closest(".next")?o++:n.closest(".prev")?o--:n.matches(".slider-dots li")&&c.forEach((e,t)=>{e===n&&(o=t)}),o>=t.length&&(o=0),o<0&&(o=t.length-1),a(t,o,"slide-change"),a(c,o,"slick-active")}),e.addEventListener("mouseover",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".slider-dots li"))&&clearInterval(l)}),e.addEventListener("mouseout",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".slider-dots li.slider-dots li"))&&d()}),d()};var c=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide");let n=0;e.addEventListener("click",l=>{const s=l.target;s.closest(".prev")?(n>4&&(n=0),n<0&&(n=0),e.removeChild(t[n]),e.append(t[n]),n++):s.closest(".next")&&(n--,n<0&&(n=4),n>4&&(n=4),e.removeChild(t[n]),e.prepend(t[n]))})};var r=()=>{const e=document.querySelector("#card_order"),t=document.querySelector("#price-total"),n=document.querySelector(".price-message input");let l,s=1999,o=9990,c=13990,r=19990;const a=e=>Math.ceil(e-.3*e);e.addEventListener("change",e=>{const i=e.target;if(i.matches("#card_leto_schelkovo")){switch(s=2999,o=14990,c=21990,r=24990,l){case 2999:l=1999;break;case 14990:l=9990;break;case 21990:l=13990;break;case 24990:l=19990}switch(l){case 1999:"ТЕЛО2019"===n.value?t.textContent=a(s):t.textContent=s;break;case 9990:"ТЕЛО2019"===n.value?t.textContent=a(o):t.textContent=o;break;case 13990:"ТЕЛО2019"===n.value?t.textContent=a(c):t.textContent=c;break;case 19990:"ТЕЛО2019"===n.value?t.textContent=a(r):t.textContent=r}}else if(i.matches("#card_leto_mozaika")){switch(s=1999,o=9990,c=13990,r=19990,l){case 1999:l=2999;break;case 9990:l=14990;break;case 13990:l=21990;break;case 19990:l=24990}switch(l){case 2999:"ТЕЛО2019"===n.value?t.textContent=a(s):t.textContent=s;break;case 14990:"ТЕЛО2019"===n.value?t.textContent=a(o):t.textContent=o;break;case 21990:"ТЕЛО2019"===n.value?t.textContent=a(c):t.textContent=c;break;case 24990:"ТЕЛО2019"===n.value?t.textContent=a(r):t.textContent=r}}else i.closest(".price-message")&&"ТЕЛО2019"===n.value&&(t.textContent=a(t.textContent));"ТЕЛО2019"===n.value?i.closest("#m1")?(t.textContent=a(s),l=s):i.closest("#m2")?(t.textContent=a(o),l=o):i.closest("#m3")?(t.textContent=a(c),l=c):i.closest("#m4")&&(t.textContent=a(r),l=r):i.closest("#m1")?(t.textContent=s,l=s):i.closest("#m2")?(t.textContent=o,l=o):i.closest("#m3")?(t.textContent=c,l=c):i.closest("#m4")&&(t.textContent=r,l=r)})};var a=()=>{const e=document.querySelector("#totop"),t=document.querySelector(".menu-button"),n=document.querySelector(".top-menu"),l=document.querySelector(".head-slider");e.style.display="none",document.addEventListener("scroll",()=>{l.getBoundingClientRect().y<-400?e.style.display="block":e.style.display="none",document.documentElement.clientWidth<768&&(t.getBoundingClientRect().y<0&&(n.style.position="fixed"),l.getBoundingClientRect().y>0&&(n.style.position="relative"))})};var i=()=>{const e=document.createElement("div"),t=document.querySelector("#free_visit_form"),n=document.querySelector("#callback_form"),l=document.querySelector("#thanks");document.addEventListener("submit",s=>{s.preventDefault();const o=s.target,c=o.querySelectorAll("input");o.append(e),e.style.cssText="font-size: 2em; color: #ffffff;";const r=new FormData(o),a={};r.forEach((e,t)=>{a[t]=e}),console.log(o);e.textContent="Загрузка...",(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(a).then(s=>{200===s.status&&(c.forEach(e=>{e.value=""}),l.style.display="block",e.textContent="",setTimeout(()=>{l.style.display="none",t.style.display="none",n.style.display="none"},4e3))}).catch(()=>{e.textContent="Что-то пошло не так"})})};(function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function l(e){const n=e.keyCode,l=t,s=l.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let c=0,r=l.replace(/[_\d]/g,(function(e){return c<o.length?o.charAt(c++)||s.charAt(c):e}));c=r.indexOf("_"),-1!==c&&(r=r.slice(0,c));let a=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=r),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",l),e.addEventListener("focus",l),e.addEventListener("blur",l);document.addEventListener("input",e=>{const t=e.target;t.querySelector(".personal-data");"tel"===t.type?t.value.length<18?t.setCustomValidity("Введите корректный номер телефона"):t.setCustomValidity(""):"text"===t.type&&(t.value=t.value.replace(/[^а-я]/gi,""))})})(".phone"),i(),a(),r(),c(),o(),s(),l()}]);