function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o.register("gdmV4",(function(t,n){var a,r,i,l;a=t.exports,r="refs",i=function(){return u},Object.defineProperty(a,r,{get:i,set:l,enumerable:!0,configurable:!0});var d=o("bysyV"),s=o("7Cc8g"),c=o("gBiQC"),m=o("afBUB");s=o("7Cc8g");const u={cocktailsList:document.querySelector(".cocktails__list"),backdropT:document.querySelectorAll("[data-inner-modal]"),modalContainer:document.querySelector(".modal-coctails"),modalIngrContainer:document.querySelector(".backdrop-modal-components"),backdrop:document.querySelector("[data-inner-modal]"),closeBtn:document.querySelector("[data-inner-modal-close]"),openModalIngrdients:document.querySelectorAll("[data-modal-open]"),scaleModal:document.querySelector("[data-modal-scale]")},g=new(0,d.default);function p(e){return null===e.strType?"Type is not mentioned :(":e.strType}async function f(t){try{const a=t.target.textContent,o=await g.getCocktailByIngredient(a),r=document.querySelector(".inner-modal-container"),i=(n=o,console.log(n),n.data.ingredients.map((t=>`<div class="ingredient-modal-wrap">\n  <img class="ingredient-modal-pic" src='https://www.thecocktaildb.com/images/ingredients/${t.strIngredient}-Small.png'\n  alt=${t.strIngredient}></div>\n      <div inner-modal-container dark--modal-back"><div class="ingr-modal-title-wrapper">\n  <h3 class="inner-modal-name dark--title">${p(t)}</h3>\n  <h4 class="inner-modal-passage dark--text">\n    ${t.strIngredient}\n\n  </h4>\n  <div class="border"></div>\n</div>\n<div class="modal-ingredients-desc">\n\n<p class="inner-modal-text dark--text">\n  ${function(e){return null===e.Description?"Sorry, description is not specified :(":e.strDescription}(t)}\n</p>\n<ul class="ingredients-modal-list">\n\n  <li class="inner-modal-ingredients dark--text"">\n    ✶ Type: ${p(t)}\n  </li>\n  <li class="inner-modal-ingredients dark--text">\n    ✶ Country of origin: Sorry, not specified\n  </li>\n  <li class="inner-modal-ingredients dark--text">✶ Alcohol : ${t.strAlcohol}</li>\n\n</ul>\n<button id=${t.idIngredient} type="button" data-modal-c class="ingredients-modal-btn cocktails__btn dark--btn-back transparent ${(0,s.shouldBeActivated)(t.idIngredient,"ingredients")}">\n              <span class="cocktails__button-text">Add to</span>  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${e(c)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${e(m)}" alt="" width="18" height="18"/> \n            </button>\n</div>`)).join(""));(0,s.renderMarkup)(r,i);document.querySelector("[data-inner-modal]").classList.remove("is-hidden-inner-modal")}catch(e){throw new Error(e.message)}var n}u.cocktailsList.addEventListener("click",(async function(e){if("cocktails__button-text"===e.target.className)try{g.id=e.target.id;const t=await g.getCocktailsId(),n=t.data.drinks.map((e=>`\n      <h2 class="modal-coctail-name dark--title">${e.strDrink}</h2>\n      <h3 class="modal-ingredients dark--title">Ingredients</h3>\n\n      <p class="modal-per dark--text">Per cocktail</p>     \n\n        <ul class="modal-coctail-components dark--text">\n        </ul>\n      <img src="${e.strDrinkThumb}" alt="cocktail" class="modal-img" />\n      <h3 class="modal-Instractions dark--title">Instructions:</h3>\n      <p class="modal-text dark--text">\n        ${e.strInstructions}\n      </p>\n       <button class="modal-button" data-modal-a>Add to favorite</button>\n      <button class="modal-button hidden_remove" data-modal-b>\n        Remove from favorite\n      </button>`)).join("");(0,s.renderMarkup)(u.modalContainer,n);const a=document.querySelector(".modal-coctail-components");document.querySelector("[data-modal]").classList.remove("is-hidden-modal-coctails");const o=await function(e){const t=e.data.drinks[0];console.log(t);const n=[];for(let e=1;e<=15;e+=1){let a=t["strIngredient"+e];if(!a)break;n.push(a),console.log(n)}return n.map((e=>`<li "${e}" class="modal-coctail-component" data-modal-open>${e}</li>`)).join("")}(t);(0,s.renderMarkup)(a,o),a.addEventListener("click",f),(()=>{const e={backdrop:document.querySelector("[data-modal]"),closeBtn:document.querySelector("[data-modal-close]")};e.closeBtn.addEventListener("click",(function(){e.backdrop.classList.add("is-hidden-modal-coctails")}))})()}catch(e){console.log(e.message)}}))})),o.register("gBiQC",(function(e,t){e.exports=new URL(o("kyEFX").resolve("hfjDg"),import.meta.url).toString()})),o.register("afBUB",(function(e,t){e.exports=new URL(o("kyEFX").resolve("3hIJm"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"jRqaA":"coctail-fav.104e5af4.js","hfjDg":"empty-heart.2d48ba79.png","3hIJm":"full-heart.cce94d73.png"}'));
//# sourceMappingURL=coctail-fav.104e5af4.js.map
