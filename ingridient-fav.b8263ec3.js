function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"65OOG":"ingridient-fav.b8263ec3.js","hfjDg":"empty-heart.2d48ba79.png","3hIJm":"full-heart.cce94d73.png","jJiw4":"notice.d0fe06ce.png","j7y4M":"notice@2x.cc48e1f3.png","5UbS1":"coctail-fav.514accc1.css","69vzq":"coctail-fav.a24b1a47.js","6R1x9":"index.9df09adf.js"}')),i("2kobL"),i("7iYvf"),i("fxXpI"),i("7iEdO"),i("7Mr9X"),i("cXZJr"),i("hR8LQ");const o={footerOpenBtn:document.querySelector("[data-modal-team-open]"),footerCloseBtn:document.querySelector("[data-modal-team-close]"),teamContainer:document.querySelector(".team__container"),modal:document.querySelector("[data-modal-team]")};function s(e){e.preventDefault(),document.body.classList.toggle("modal-open"),o.modal.classList.toggle("is-hidden")}o.footerOpenBtn.addEventListener("click",s),o.footerCloseBtn.addEventListener("click",s),document.addEventListener("keydown",(function(e){"Escape"===e.key&&o.modal.classList.add("is-hidden")})),window.addEventListener("click",(e=>{e.target===o.modal&&(o.modal.classList.toggle("is-hidden"),window.removeEventListener())})),i("bUb57"),i("htAJi"),i("hfCDr"),i("45Opc"),i("bysyV"),i("krGWQ"),i("l7kbu"),i("iBKni");var d,l=i("l7kbu"),c=i("bysyV");d=new URL(i("kyEFX").resolve("hfjDg"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("3hIJm"),import.meta.url).toString();var g;g=new URL(i("kyEFX").resolve("jJiw4"),import.meta.url).toString();var m;m=new URL(i("kyEFX").resolve("j7y4M"),import.meta.url).toString();var f=i("eWCmQ");const v=new(0,c.default),p=document.querySelector(".favorite__list-card");function b(e){const n=(r=e,r.map((e=>function({strIngredient:e,strType:n,idIngredient:r}){return`\n      <li class="favorite__list-item cocktails__item card-set-item">\n      <p class="favorite__list-name dark--title">${e}</p>\n      <p class="favorite__list-type dark--text">${null===n?e:n}</p>\n      <div class="favorite__btn-wrap">\n        <button\n              type="button"\n              class="js-ingr cocktails__btn cocktails__button-text"\n              data-modal-ingredient-open\n               data-id=${r}\n            >Learn more\n            </button>\n            <button type="button" class="cocktails__button-text cocktails__btn dark--btn-back js-remove-btn transparent ${h(r,"ingredients")}" data-id="${r}">Remove\n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${t(d)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${t(u)}" alt="" width="18" height="18"/> \n            </button>\n      </div>\n    </li>`}(e.data.ingredients[0])))).join("");var r;k(p,n)}function y(e){return null===e.strType?e.strIngredient:e.strType}function h(e,t){return(0,l.getCocktailStorageData)(t)?localStorage.getItem(t).includes(e)?"activated":"":void 0}function _(){return`<li class="garcon"> Sorry, we did not find any ingredient for you<img class="no-result" srcset = "${g}", srcset =  "${m}" src="${m}" alt="No Results"></img></li>`}function k(e,t){e.innerHTML=t}function w(e){var n;const r=e.target.closest(".js-remove-btn"),a=(0,l.getCocktailStorageData)(v.INGREDIENTS),i=null===(n=e.target)||void 0===n?void 0:n.dataset.id;r&&a.includes(i)&&(t(f).Notify.failure("Ingredient was removed from Your favourites!"),(0,l.removeFromLocalStorage)(i,"ingredients"),r.classList.remove("activated"))}function S(e){var n;console.log(e);const r=e.target.closest(".js-remove-modal-btn"),a=null===(n=e.target)||void 0===n?void 0:n.dataset.id,i=(0,l.getCocktailStorageData)(v.INGREDIENTS);r&&i.includes(a)&&(t(f).Notify.failure("Ingredient was removed from Your favourites!"),(0,l.removeFromLocalStorage)(a,"ingredients"),r.classList.remove("activated"))}async function E(e){const n=e.target.closest(".js-ingr"),r=null==n?void 0:n.dataset.id,a=await v.getIngredientById(r),i=document.querySelector(".inner-modal-container"),o=a.data.ingredients.map((e=>`<div class="ingredient-modal-wrap">\n  <img class="ingredient-modal-pic" src='https://www.thecocktaildb.com/images/ingredients/${e.strIngredient}-Small.png'\n  alt=${e.strIngredient}></div>\n      <div inner-modal-container dark--modal-back"><div class="ingr-modal-title-wrapper">\n  <h3 class="inner-modal-name dark--title">${y(e)}</h3>\n  <h4 class="inner-modal-passage dark--text">\n    ${e.strIngredient}\n\n  </h4>\n  <div class="border"></div>\n</div>\n<div class="modal-ingredients-desc">\n\n<p class="inner-modal-text dark--text">\n  ${function(e){return null===e.strDescription?"Sorry, guys we do not have any info about that":e.strDescription}(e)}\n</p>\n<ul class="ingredients-modal-list">\n\n  <li class="inner-modal-ingredients dark--text"">\n    ✶ <b>Type</b>: ${y(e)}\n  </li>\n  <li class="inner-modal-ingredients dark--text">\n    ✶ <b>Country of origin</b>: Sorry, not specified\n  </li>\n  <li class="inner-modal-ingredients dark--text">✶ <b>Alcohol</b> : ${e.strAlcohol}</li>\n\n</ul>\n</div>\n<button data-id=${e.idIngredient} type="button" data-inner-modal-button class="cocktails__button-text ingredients-modal-btn cocktails__btn dark--btn-back js-remove-modal-btn transparent ${h(e.idIngredient,"ingredients")}">Remove  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${t(d)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${t(u)}" alt="" width="18" height="18"/> \n            </button>`)).join("");const s=document.querySelector("[data-inner-modal]");k(i,o),document.querySelector(".js-remove-modal-btn").addEventListener("click",S),s.classList.remove("is-hidden-inner-modal")}window.addEventListener("load",(function(){_();const e=(0,l.getCocktailStorageData)(v.INGREDIENTS);if(e.length){!async function(e){const t=[];e.forEach((e=>{const n=v.getIngredientById(e);t.push(n)})),Promise.all(t).then(b)}(e);const t=document.querySelector(".favorite__list-card");t.addEventListener("click",w),t.addEventListener("click",E)}else p.innerHTML=_()}));
//# sourceMappingURL=ingridient-fav.b8263ec3.js.map
