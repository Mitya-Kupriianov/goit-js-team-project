function t(t,e,o,a){Object.defineProperty(t,e,{get:o,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=o.parcelRequired7c6;null==r&&((r=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},o.parcelRequired7c6=r),r.register("kyEFX",(function(e,o){var a,n;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return n}),(function(t){return n=t}));var r={};a=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)r[e[o]]=t[e[o]]},n=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("7Cc8g",(function(o,a){t(o.exports,"onAddModalBtnClick",(function(){return g})),t(o.exports,"onClickInnerModal",(function(){return k})),t(o.exports,"shouldBeActivated",(function(){return _})),t(o.exports,"createListMarkup",(function(){return m})),t(o.exports,"createRandomMarkup",(function(){return v})),t(o.exports,"markupFilter",(function(){return b})),t(o.exports,"renderMarkup",(function(){return w})),t(o.exports,"noResultsMarkup",(function(){return h}));var n=r("bysyV"),i=r("l7kbu"),s=r("gBiQC"),c=r("afBUB"),l=r("eWCmQ"),d=r("2Y53f"),u=r("jgdfF");const f=new(0,n.default);function g(t){const o=t.target.closest(".js-add-btn-modal"),a=(0,i.getCocktailStorageData)(f.KEY),n=t.target.id;console.log(t),o&&(a||(o.classList.add("activated"),(0,i.setCocktailToLocalStorage)(n,"cocktails")),a.includes(n)?(e(l).Notify.failure("Cocktail was deleted from favourites!"),(0,i.removeFromLocalStorage)(n,"cocktails"),o.classList.remove("activated")):(e(l).Notify.success("Cocktail was added to favourites, Congrats!"),o.classList.add("activated"),(0,i.setCocktailToLocalStorage)(n,"cocktails")))}function k(t){console.log(t);const o=t.target.closest("[data-inner-modal-button]"),a=(0,i.getCocktailStorageData)(f.INGREDIENTS),n=t.target.id;o&&(a||(o.classList.add("activated"),(0,i.setCocktailToLocalStorage)(n,"ingredients")),a.includes(n)?(e(l).Notify.failure("Ingredient was deleted from favourites!"),(0,i.removeFromLocalStorage)(n,"ingredients"),o.classList.remove("activated")):(e(l).Notify.success("Ingredient was added to favourites, Congrats!"),o.classList.add("activated"),(0,i.setCocktailToLocalStorage)(n,"ingredients")))}function p({strDrink:t,strDrinkThumb:o,idDrink:a}){return`\n      <li class="cocktails__item card-set-item"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-offset="200">\n        <img\n          src="${o}"\n          alt="${t}"\n        />\n        <div class="cocktails__box">\n          <h2 class="cocktails__second-title dark--title">${t}</h2>\n          <div class="cocktails__button-box">\n            <button\n              type="button"\n              class="cocktails__btn"\n              data-modal-cocktail-open\n               data-id=${a}\n            >\n              <span class="cocktails__button-text" id=${a} >Learn more</span>\n            </button>\n            <button id="${a}" type="button" class="cocktails__btn dark--btn-back js-add-btn transparent ${_(a,"cocktails")}" data-id="${a}">\n              <span class="cocktails__button-text">Add to</span>  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${e(s)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${e(c)}" alt="" width="18" height="18"/> \n            </button>\n          </div>\n        </div>\n      </li>`}function m(t){return t.drinks.map((t=>p(t)))}function v(t){return console.log(t),t.map((t=>p(t.data.drinks[0])))}function b(t){return window.screen.width<768?t.filter(((t,e)=>e<3)).join(""):window.screen.width>=768&&window.screen.width<1280?t.filter(((t,e)=>e<6)).join(""):t.filter(((t,e)=>e<9)).join("")}function w(t,e){t.innerHTML=e}function h(){return`<li class="garcon"><img class="no-result" srcset = "${d}", srcset =  "${u}" src="${u}" alt="No Results"></img></li>`}function _(t,e){return(0,i.getCocktailStorageData)(e)?localStorage.getItem(e).includes(t)?"activated":"":void 0}document.querySelector(".cocktails__list").addEventListener("click",(function(t){const o=t.target.closest(".js-add-btn"),a=(0,i.getCocktailStorageData)(f.KEY),n=o.dataset.id;o&&(a||(o.classList.add("activated"),(0,i.setCocktailToLocalStorage)(n,"cocktails")),a.includes(n)?(e(l).Notify.failure("Cocktail was deleted from favourites!"),(0,i.removeFromLocalStorage)(n,"cocktails"),o.classList.remove("activated")):(e(l).Notify.success("Cocktail was added to favourites, Congrats!"),o.classList.add("activated"),(0,i.setCocktailToLocalStorage)(n,"cocktails")))}))})),r.register("gBiQC",(function(t,e){t.exports=new URL(r("kyEFX").resolve("hfjDg"),import.meta.url).toString()})),r.register("afBUB",(function(t,e){t.exports=new URL(r("kyEFX").resolve("3hIJm"),import.meta.url).toString()})),r.register("2Y53f",(function(t,e){t.exports=new URL(r("kyEFX").resolve("jJiw4"),import.meta.url).toString()})),r.register("jgdfF",(function(t,e){t.exports=new URL(r("kyEFX").resolve("j7y4M"),import.meta.url).toString()})),r.register("2YGUk",(function(t,e){document.querySelector("[data-scroll-home-body]").addEventListener("click",(function(){window.scrollTo({top:0,left:100,behavior:"smooth"})}))})),r("kyEFX").register(JSON.parse('{"jRqaA":"coctail-fav.fdb0c947.js","hfjDg":"empty-heart.2d48ba79.png","3hIJm":"full-heart.cce94d73.png","jJiw4":"notice.d0fe06ce.png","j7y4M":"notice@2x.cc48e1f3.png"}'));
//# sourceMappingURL=coctail-fav.fdb0c947.js.map
