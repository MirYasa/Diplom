!function(e){var t={};function n(s){if(t[s])return t[s].exports;var l=t[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(s,l,function(t){return e[t]}.bind(null,l));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s=()=>{const e=document.querySelector(".clubs-list ul"),t=document.querySelector(".popup-menu"),n=document.querySelector("#free_visit_form"),s=document.querySelector("#callback_form"),l=document.querySelector(".fixed-gift"),o=document.querySelector("#gift"),c=document.querySelector("#thanks");document.addEventListener("click",r=>{const a=r.target;a.matches(".menu-btn-img")?t.style.display="flex":a.matches(".close-btn-img")||a.closest(".scroll")?t.style.display="none":a.matches(".club-select p")?e.classList.toggle("hidden"):a.closest(".free-visit")||a.matches(".open-popup")?n.style.display="block":a.closest("#gift .overlay")||a.closest("#gift .close_icon")||a.closest("#gift .close-btn")?o.style.display="none":a.closest("#thanks .overlay")||a.closest("#thanks .close_icon")||a.closest("#thanks .close-btn")?c.style.display="none":a.matches(".overlay")||a.matches(".close_icon")||a.closest(".close-btn")?(n.style.display="none",s.style.display="none"):a.closest("header .callback-btn")?s.style.display="block":a.closest(".fixed-gift")?(l.style.display="none",o.style.display="block"):a.closest(".club-select")||e.classList.add("hidden")})};var l=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{t>3?(t=0,e[t+4].style.display="none",e[t].style.display="flex"):(t++,e[t-1].style.display="none",e[t].style.display="flex")},3e3)};var o=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=document.querySelector(".slider-dots");let s,l,o=0;t.forEach(()=>{l=document.createElement("li"),n.append(l)});const c=document.querySelectorAll(".slider-dots li"),r=(e,t,n)=>{e[t].classList.remove(n)},a=(e,t,n)=>{e[t].classList.add(n)},i=()=>{r(t,o,"slide-change"),r(c,o,"slick-active"),o++,o>=t.length&&(o=0),a(t,o,"slide-change"),a(c,o,"slick-active")};t[0].classList.add("slide"),c[0].classList.add("slick-active");const d=()=>{s=setInterval(i,4e3)};e.addEventListener("click",e=>{e.preventDefault();const n=e.target;r(t,o,"slide-change"),r(c,o,"slick-active"),n.closest(".next")?o++:n.closest(".prev")?o--:n.matches(".slider-dots li")&&c.forEach((e,t)=>{e===n&&(o=t)}),o>=t.length&&(o=0),o<0&&(o=t.length-1),a(t,o,"slide-change"),a(c,o,"slick-active")}),e.addEventListener("mouseover",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".slider-dots li"))&&clearInterval(s)}),e.addEventListener("mouseout",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".slider-dots li.slider-dots li"))&&d()}),d()};var c=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide");let n=0;e.addEventListener("click",s=>{const l=s.target;l.closest(".prev")?(n>4&&(n=0),n<0&&(n=0),e.removeChild(t[n]),e.append(t[n]),n++):l.closest(".next")&&(n--,n<0&&(n=4),n>4&&(n=4),e.removeChild(t[n]),e.prepend(t[n]))})};var r=()=>{const e=document.querySelector("#card_order"),t=document.querySelector("#price-total"),n=document.querySelector(".price-message input");let s,l=1999,o=9990,c=13990,r=19990;const a=e=>Math.ceil(e-.3*e);e.addEventListener("change",e=>{const i=e.target;if(i.matches("#card_leto_schelkovo")){switch(l=2999,o=14990,c=21990,r=24990,s){case 2999:s=1999;break;case 14990:s=9990;break;case 21990:s=13990;break;case 24990:s=19990}switch(s){case 1999:"ТЕЛО2019"===n.value?t.textContent=a(l):t.textContent=l;break;case 9990:"ТЕЛО2019"===n.value?t.textContent=a(o):t.textContent=o;break;case 13990:"ТЕЛО2019"===n.value?t.textContent=a(c):t.textContent=c;break;case 19990:"ТЕЛО2019"===n.value?t.textContent=a(r):t.textContent=r}}else if(i.matches("#card_leto_mozaika")){switch(l=1999,o=9990,c=13990,r=19990,s){case 1999:s=2999;break;case 9990:s=14990;break;case 13990:s=21990;break;case 19990:s=24990}switch(s){case 2999:"ТЕЛО2019"===n.value?t.textContent=a(l):t.textContent=l;break;case 14990:"ТЕЛО2019"===n.value?t.textContent=a(o):t.textContent=o;break;case 21990:"ТЕЛО2019"===n.value?t.textContent=a(c):t.textContent=c;break;case 24990:"ТЕЛО2019"===n.value?t.textContent=a(r):t.textContent=r}}else i.closest(".price-message")&&"ТЕЛО2019"===n.value&&(t.textContent=a(t.textContent));"ТЕЛО2019"===n.value?i.closest("#m1")?(t.textContent=a(l),s=l):i.closest("#m2")?(t.textContent=a(o),s=o):i.closest("#m3")?(t.textContent=a(c),s=c):i.closest("#m4")&&(t.textContent=a(r),s=r):i.closest("#m1")?(t.textContent=l,s=l):i.closest("#m2")?(t.textContent=o,s=o):i.closest("#m3")?(t.textContent=c,s=c):i.closest("#m4")&&(t.textContent=r,s=r)})};var a=()=>{const e=document.querySelector("#totop"),t=document.querySelector(".menu-button"),n=document.querySelector(".top-menu"),s=document.querySelector(".head-slider");e.style.display="none",document.addEventListener("scroll",()=>{s.getBoundingClientRect().y<-400?e.style.display="block":e.style.display="none",document.documentElement.clientWidth<768&&(t.getBoundingClientRect().y<0&&(n.style.position="fixed"),s.getBoundingClientRect().y>0&&(n.style.position="relative"))})};var i=()=>{const e=document.createElement("div"),t=document.querySelector("#thanks");document.addEventListener("submit",n=>{n.preventDefault();const s=n.target;s.append(e),e.style.cssText="font-size: 2em; color: #ffffff;";var l;e.textContent="Загрузка...",(l=s,fetch("./server.php",{method:"POST",body:new FormData(l)})).then(n=>{200===n.status&&(s.closest(".popup")?(s.innerHTML='     \n                    <div class="overlay">\n                    </div>\n                    <div class="form-wrapper">\n                        <div class="close-form">\n                            <img src="images/close-icon.png" alt="close" class="close_icon">\n                        </div>\n                        <div class="form-content" style="color: #ffffff; font-size: 1.5em;">\n                            <h4>Спасибо!</h4>\n                            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n                            <button class="btn close-btn">OK</button>\n                        </div>\n                    </div>',e.textContent=""):(t.style.display="block",e.textContent=""))}).catch(()=>{e.textContent="Что-то пошло не так"})})};(function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function s(e){const n=e.keyCode,s=t,l=s.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let c=0,r=s.replace(/[_\d]/g,(function(e){return c<o.length?o.charAt(c++)||l.charAt(c):e}));c=r.indexOf("_"),-1!==c&&(r=r.slice(0,c));let a=s.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=r),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",s),e.addEventListener("focus",s),e.addEventListener("blur",s);document.addEventListener("input",e=>{const t=e.target;"text"===t.type&&(t.value=t.value.replace(/[^а-я]/gi,""))})})(".phone"),i(),a(),r(),c(),o(),l(),s()}]);