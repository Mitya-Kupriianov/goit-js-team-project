!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var a,r;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var a;e(t.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=t),t}})),i("iE7OH").register(JSON.parse('{"haGuf":"ingridient-fav.3aba2442.js","ezHLX":"empty-heart.2d48ba79.png","1vr8H":"full-heart.cce94d73.png","eEwPo":"notice.d0fe06ce.png","4mEM4":"notice@2x.cc48e1f3.png","5UbS1":"coctail-fav.2bfcfd7a.css","3h8sG":"coctail-fav.b015471e.js","hKhij":"index.86e9cb33.js"}')),i("jzYhw"),i("5TNNb"),i("kaXg8"),i("eY4ce"),i("eXJzG"),i("hPRuz"),i("puS1k");const o={footerOpenBtn:document.querySelector("[data-modal-team-open]"),footerCloseBtn:document.querySelector("[data-modal-team-close]"),teamContainer:document.querySelector(".team__container"),modal:document.querySelector("[data-modal-team]")};function d(e){e.preventDefault(),document.body.classList.toggle("modal-open"),o.modal.classList.toggle("is-hidden")}o.footerOpenBtn.addEventListener("click",d),o.footerCloseBtn.addEventListener("click",d),document.addEventListener("keydown",(function(e){"Escape"===e.key&&o.modal.classList.add("is-hidden")})),window.addEventListener("click",(e=>{e.target===o.modal&&(o.modal.classList.toggle("is-hidden"),window.removeEventListener())})),i("i8Q71"),i("f7BAh"),i("6TfQP"),i("c7MW5"),i("lJqT5"),i("4Nugj"),i("1aryJ"),i("4i2Nx");var s,l=i("1aryJ"),c=i("lJqT5"),u=i("4i2Nx");s=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("ezHLX");var g;g=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("1vr8H");var f;f=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("eEwPo");var m;m=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("4mEM4");var v=i("iU1Pc");const p=new(0,c.default),h=document.querySelector(".favorite__list-card");function b(e){const n=e.map((e=>function({strIngredient:e,strType:n,idIngredient:a}){return`\n      <li class="favorite__list-item card-set-item">\n      <p class="favorite__list-name">${e}</p>\n      <p class="favorite__list-type">${n}</p>\n      <div class="favorite__btn-wrap">\n        <button\n              type="button"\n              class="js-split cocktails__btn cocktails__button-text"\n              data-modal-ingredient-open\n               data-id=${a}\n            >Learn more\n            </button>\n            <button type="button" class="cocktails__button-text cocktails__btn dark--btn-back js-remove-btn transparent ${r=a,i="ingredients",(0,l.getCocktailStorageData)(i)?localStorage.getItem(i).includes(r)?"activated":"":void 0}" data-id="${a}">Remove\n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${t(s)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${t(g)}" alt="" width="18" height="18"/> \n            </button>\n      </div>\n    </li>`;var r,i}(e.data.ingredients[0])));!function(e,t){e.innerHTML=t}(h,n)}function y(e){const n=e.target.closest(".js-remove-btn"),a=(0,l.getCocktailStorageData)(p.INGREDIENTS),r=e.target.dataset.id;n&&(a.includes(r)?(t(v).Notify.failure("Ingredient was removed from Your favourites!"),(0,l.removeFromLocalStorage)(r,"ingredients"),n.classList.remove("activated")):(t(v).Notify.success("Ingredient was added to Your favourites, Congrats!"),n.classList.add("activated"),setCocktailToLocalStorage(r,"ingredients")))}async function _(e){try{e.target.closest(".js-split ");const n=e.target.textContent,a=await p.getCocktailByIngredient(n),r=document.querySelector(".inner-modal-container"),i=a.data.ingredients.map((e=>`<div class="ingredient-modal-wrap">\n  <img class="ingredient-modal-pic" src='https://www.thecocktaildb.com/images/ingredients/${e.strIngredient}-Small.png'\n  alt=${e.strIngredient}></div>\n      <div inner-modal-container dark--modal-back"><div class="ingr-modal-title-wrapper">\n  <h3 class="inner-modal-name dark--title">${toIdentifyStrType(e)}</h3>\n  <h4 class="inner-modal-passage dark--text">\n    ${e.strIngredient}\n\n  </h4>\n  <div class="border"></div>\n</div>\n<div class="modal-ingredients-desc">\n\n<p class="inner-modal-text dark--text">\n  ${toMakeDescriptionText(e)}\n</p>\n<ul class="ingredients-modal-list">\n\n  <li class="inner-modal-ingredients dark--text"">\n    ✶ <b>Type</b>: ${toIdentifyStrType(e)}\n  </li>\n  <li class="inner-modal-ingredients dark--text">\n    ✶ <b>Country of origin</b>: Sorry, not specified\n  </li>\n  <li class="inner-modal-ingredients dark--text">✶ <b>Alcohol</b> : ${e.strAlcohol}</li>\n\n</ul>\n</div>\n<button id=${e.idIngredient} type="button" data-inner-modal-button class="cocktails__button-text ingredients-modal-btn cocktails__btn dark--btn-back transparent ${shouldBeActivated(e.idIngredient,"ingredients")}">Add to  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${t(s)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${t(g)}" alt="" width="18" height="18"/> \n            </button>`)).join("");renderMarkup(r,i),document.querySelector("[data-inner-modal-button]").addEventListener("click",onClickInnerModal);document.querySelector("[data-inner-modal]").classList.remove("is-hidden-inner-modal")}catch(e){throw new Error(e.message)}}window.addEventListener("load",(function(){const e=(0,l.getCocktailStorageData)(p.INGREDIENTS);e||((0,u.onError)(),h.innerHTML=`<li class="garcon"> Sorry, we didn't find any ingredient for you<img class="no-result" srcset = "${f}", srcset =  "${m}" src="${m}" alt="No Results"></img></li>`),async function(e){const t=[];e.forEach((e=>{const n=p.getIngredientById(e);t.push(n)})),Promise.all(t).then(b)}(e);const t=document.querySelector(".favorite__list-card");t.addEventListener("click",y),t.addEventListener("click",_)}))}();
//# sourceMappingURL=ingridient-fav.3aba2442.js.map
