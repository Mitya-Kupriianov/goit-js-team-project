function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},e.parcelRequired7c6=o),o.register("gdmV4",(function(e,n){var a,r,i,l;a=e.exports,r="refs",i=function(){return u},Object.defineProperty(a,r,{get:i,set:l,enumerable:!0,configurable:!0});var d=o("bysyV"),s=o("7Cc8g"),c=o("gBiQC"),m=o("afBUB");s=o("7Cc8g");const u={cocktailsList:document.querySelector(".cocktails__list"),backdropT:document.querySelectorAll("[data-inner-modal]"),modalContainer:document.querySelector(".modal-coctails"),modalIngrContainer:document.querySelector(".backdrop-modal-components"),backdrop:document.querySelector("[data-inner-modal]"),closeBtn:document.querySelector("[data-inner-modal-close]"),openModalIngrdients:document.querySelectorAll("[data-modal-open]"),scaleModal:document.querySelector("[data-modal-scale]")},g=new(0,d.default);function p(t){return null===t.strType?"Cannot say anything about its type":t.strType}async function h(e){try{const a=e.target.textContent,o=await g.getCocktailByIngredient(a),r=document.querySelector(".inner-modal-container"),i=(n=o,console.log(n),n.data.ingredients.map((e=>`<div class="ingredient-modal-wrap">\n  <img class="ingredient-modal-pic" src='https://www.thecocktaildb.com/images/ingredients/${e.strIngredient}-Small.png'\n  alt=${e.strIngredient}></div>\n      <div inner-modal-container dark--modal-back"><div class="ingr-modal-title-wrapper">\n  <h3 class="inner-modal-name dark--title">${p(e)}</h3>\n  <h4 class="inner-modal-passage dark--text">\n    ${e.strIngredient}\n\n  </h4>\n  <div class="border"></div>\n</div>\n<div class="modal-ingredients-desc">\n\n<p class="inner-modal-text dark--text">\n  ${function(t){return null===t.Description?"Sorry, guys we do not know anything about that":t.strDescription}(e)}\n</p>\n<ul class="ingredients-modal-list">\n\n  <li class="inner-modal-ingredients dark--text"">\n    ✶ <b>Type</b>: ${p(e)}\n  </li>\n  <li class="inner-modal-ingredients dark--text">\n    ✶ <b>Country of origin</b>: Sorry, not specified\n  </li>\n  <li class="inner-modal-ingredients dark--text">✶ <b>Alcohol</b> : ${e.strAlcohol}</li>\n\n</ul>\n</div>\n<button id=${e.idIngredient} type="button" data-modal-c class="ingredients-modal-btn cocktails__btn dark--btn-back transparent ${(0,s.shouldBeActivated)(e.idIngredient,"ingredients")}">\n              <span class="cocktails__button-text">Add to</span>  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${t(c)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${t(m)}" alt="" width="18" height="18"/> \n            </button>`)).join(""));(0,s.renderMarkup)(r,i);document.querySelector("[data-inner-modal]").classList.remove("is-hidden-inner-modal")}catch(t){throw new Error(t.message)}var n}u.cocktailsList.addEventListener("click",(async function(e){if("cocktails__button-text"===e.target.className)try{g.id=e.target.id;const n=await g.getCocktailsId(),a=n.data.drinks.map((e=>`\n      <h2 class="modal-coctail-name dark--title">${e.strDrink}</h2>\n      <h3 class="modal-ingredients dark--title">Ingredients</h3>\n\n      <p class="modal-per dark--text">Per cocktail</p>     \n\n        <ul class="modal-coctail-components dark--text">\n        </ul>\n      <img src="${e.strDrinkThumb}" alt="cocktail" class="modal-img" />\n      <h3 class="modal-Instractions dark--title">Instructions:</h3>\n      <p class="modal-text dark--text">\n        ${e.strInstructions}\n      </p>\n       <button type="button" class="modal-button cocktails__btn dark--btn-back js-add-btn-modal transparent ${(0,s.shouldBeActivated)(e.idDrink,"cocktails")}" data-id="${e.idDrink}">\n              <span class="cocktails__button-text">Add to</span>  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${t(c)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${t(m)}" alt="" width="18" height="18"/> \n            </button>`)).join("");(0,s.renderMarkup)(u.modalContainer,a);const o=document.querySelector(".modal-coctail-components");document.querySelector("[data-modal]").classList.remove("is-hidden-modal-coctails");const r=await function(t){const e=t.data.drinks[0];console.log(e);const n=[];for(let t=1;t<=15;t+=1){let a=e["strIngredient"+t];if(!a)break;n.push(a),console.log(n)}return n.map((t=>`<li "${t}" class="modal-coctail-component" data-modal-open>${t}</li>`)).join("")}(n);(0,s.renderMarkup)(o,r),o.addEventListener("click",h),(()=>{const t={backdrop:document.querySelector("[data-modal]"),closeBtn:document.querySelector("[data-modal-close]")};t.closeBtn.addEventListener("click",(function(){t.backdrop.classList.add("is-hidden-modal-coctails")}))})()}catch(t){console.log(t.message)}}))})),o.register("gBiQC",(function(t,e){t.exports=new URL(o("kyEFX").resolve("hfjDg"),import.meta.url).toString()})),o.register("afBUB",(function(t,e){t.exports=new URL(o("kyEFX").resolve("3hIJm"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"jRqaA":"coctail-fav.343d0c04.js","hfjDg":"empty-heart.2d48ba79.png","3hIJm":"full-heart.cce94d73.png"}'));
//# sourceMappingURL=coctail-fav.343d0c04.js.map
