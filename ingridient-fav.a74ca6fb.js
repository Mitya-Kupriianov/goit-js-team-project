function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"65OOG":"ingridient-fav.a74ca6fb.js","hfjDg":"empty-heart.2d48ba79.png","3hIJm":"full-heart.cce94d73.png","jJiw4":"notice.d0fe06ce.png","j7y4M":"notice@2x.cc48e1f3.png","5UbS1":"coctail-fav.2bfcfd7a.css","69vzq":"coctail-fav.16a9695a.js","6R1x9":"index.9df09adf.js"}')),a("2kobL"),a("7iYvf"),a("fxXpI"),a("7iEdO"),a("7Mr9X"),a("cXZJr"),a("hR8LQ");const i={footerOpenBtn:document.querySelector("[data-modal-team-open]"),footerCloseBtn:document.querySelector("[data-modal-team-close]"),teamContainer:document.querySelector(".team__container"),modal:document.querySelector("[data-modal-team]")};function s(e){e.preventDefault(),document.body.classList.toggle("modal-open"),i.modal.classList.toggle("is-hidden")}i.footerOpenBtn.addEventListener("click",s),i.footerCloseBtn.addEventListener("click",s),document.addEventListener("keydown",(function(e){"Escape"===e.key&&i.modal.classList.add("is-hidden")})),window.addEventListener("click",(e=>{e.target===i.modal&&(i.modal.classList.toggle("is-hidden"),window.removeEventListener())})),a("bUb57"),a("htAJi"),a("hfCDr"),a("45Opc"),a("bysyV"),a("krGWQ"),a("l7kbu"),a("iBKni");var d,c=a("l7kbu"),l=a("bysyV"),u=a("iBKni");d=new URL(a("kyEFX").resolve("hfjDg"),import.meta.url).toString();var f;f=new URL(a("kyEFX").resolve("3hIJm"),import.meta.url).toString();var g;g=new URL(a("kyEFX").resolve("jJiw4"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("j7y4M"),import.meta.url).toString();var v=a("eWCmQ");const p=new(0,l.default),b=document.querySelector(".favorite__list-card");function _(e){const n=e.map((e=>function({strIngredient:e,strType:n,idIngredient:o}){return`\n      <li class="favorite__list-item card-set-item">\n      <p class="favorite__list-name">${e}</p>\n      <p class="favorite__list-type">${n}</p>\n      <div class="favorite__btn-wrap">\n        <button\n              type="button"\n              class="cocktails__btn cocktails__button-text"\n              data-modal-ingredient-open\n               data-id=${o}\n            >Learn more\n            </button>\n            <button type="button" class="cocktails__button-text cocktails__btn dark--btn-back js-remove-btn transparent ${r=o,a="ingredients",(0,c.getCocktailStorageData)(a)?localStorage.getItem(a).includes(r)?"activated":"":void 0}" data-id="${o}">Remove\n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${t(d)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${t(f)}" alt="" width="18" height="18"/> \n            </button>\n      </div>\n    </li>`;var r,a}(e.data.ingredients[0])));!function(e,t){e.innerHTML=t}(b,n)}function y(e){const n=e.target.closest(".js-remove-btn"),o=(0,c.getCocktailStorageData)(p.INGREDIENTS),r=e.target.dataset.id;n&&(o.includes(r)?(t(v).Notify.failure("Ingredient was removed from Your favourites!"),(0,c.removeFromLocalStorage)(r,"ingredients"),n.classList.remove("activated")):(t(v).Notify.success("Ingredient was added to Your favourites, Congrats!"),n.classList.add("activated"),setCocktailToLocalStorage(r,"ingredients")))}window.addEventListener("load",(function(){const e=(0,c.getCocktailStorageData)(p.INGREDIENTS);e||((0,u.onError)(),b.innerHTML=`<li class="garcon"> Sorry, we didn't find any ingredient for you<img class="no-result" srcset = "${g}", srcset =  "${m}" src="${m}" alt="No Results"></img></li>`),async function(e){const t=[];e.forEach((e=>{const n=p.getIngredientById(e);t.push(n)})),Promise.all(t).then(_)}(e),document.querySelector(".favorite__list-card").addEventListener("click",y)}));
//# sourceMappingURL=ingridient-fav.a74ca6fb.js.map
