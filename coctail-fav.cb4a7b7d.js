!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},n.parcelRequired7c6=r),r.register("iE7OH",(function(e,n){var o,a;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return a}),(function(t){return a=t}));var r={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},a=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("aNJCr",(function(e,n){var o;t(e.exports,"getBundleURL",(function(){return o}),(function(t){return o=t}));var a={};function r(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(t){var e=a[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return r(t[2])}return"/"}(),a[t]=e),e}})),r("iE7OH").register(JSON.parse('{"EVgbq":"coctail-fav.cb4a7b7d.js","ezHLX":"empty-heart.2d48ba79.png","1vr8H":"full-heart.cce94d73.png","hKhij":"coctail-fav.d9e6be7f.js"}')),r("jzYhw");var i=e(r("WMajR")).template({1:function(t,e,n,o,a){var r=t.lambda,i=t.escapeExpression;return"  <li class='hero__item dark--grey-hero hero__item--"+i(r(e,e))+"'>\n    <a href='#' class='hero__link'>"+i(r(e,e))+"</a></li>\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,o,a){var r,i=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return null!=(r=i(n,"each").call(null!=e?e:t.nullContext||{},null!=e?i(e,"letter"):e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a,loc:{start:{line:1,column:0},end:{line:4,column:9}}}))?r:""},useData:!0});var l=e(r("WMajR")).template({1:function(t,e,n,o,a){var r=t.lambda,i=t.escapeExpression;return"  <li class='option' value='"+i(r(e,e))+'\'><span class="hero__option-text">'+i(r(e,e))+"</span></li>\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,o,a){var r,i=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return null!=(r=i(n,"each").call(null!=e?e:t.nullContext||{},null!=e?i(e,"letter"):e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?r:""},useData:!0});const c={heroList:document.querySelector(".hero__list"),heroSelect:document.querySelector(".hero__select"),cocktailList:document.querySelector(".cocktails__list")},{heroList:s,heroSelect:u}=c,d={letter:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]};function f(t,e,n){const o=n(t);return e.insertAdjacentHTML("beforeend",o)}f(d,u,l),f(d,s,i),r("5TNNb"),r("kaXg8"),r("eY4ce"),r("eXJzG"),r("hPRuz"),r("puS1k"),r("lbBPH"),r("bAQGX"),r("i8Q71"),r("f7BAh"),r("1QCZU"),r("6TfQP"),r("c7MW5");var m=r("1QCZU");const{buttonLogin:p,selectMenuRef:h,selectBtnRef:b,optionsRef:k,heroSelectTextRef:v}=m.refs;k.forEach((t=>{t.addEventListener("click",(()=>{let e=t.querySelector(".hero__option-text").innerText;v.innerText=e,h.classList.remove("active")}))})),b.addEventListener("click",(function(t){console.dir(t),h.classList.toggle("active")})),r("lJqT5");var g=r("lJqT5");var _=e(r("WMajR")).template({1:function(t,e,n,o,a){var r,i=null!=e?e:t.nullContext||{},l=t.hooks.helperMissing,c="function",s=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"  <li class='cocktails__item card-set-item'>\n    <img src='"+s(typeof(r=null!=(r=u(n,"strDrinkThumb")||(null!=e?u(e,"strDrinkThumb"):e))?r:l)===c?r.call(i,{name:"strDrinkThumb",hash:{},data:a,loc:{start:{line:3,column:14},end:{line:3,column:31}}}):r)+"' alt='"+s(typeof(r=null!=(r=u(n,"strDrink")||(null!=e?u(e,"strDrink"):e))?r:l)===c?r.call(i,{name:"strDrink",hash:{},data:a,loc:{start:{line:3,column:38},end:{line:3,column:50}}}):r)+"' />\n    <div class='cocktails__box'>\n      <h2 class='cocktails__second-title'>"+s(typeof(r=null!=(r=u(n,"strDrink")||(null!=e?u(e,"strDrink"):e))?r:l)===c?r.call(i,{name:"strDrink",hash:{},data:a,loc:{start:{line:5,column:42},end:{line:5,column:54}}}):r)+"</h2>\n      <div class='cocktails__button-box' id="+s(typeof(r=null!=(r=u(n,"idDrink")||(null!=e?u(e,"idDrink"):e))?r:l)===c?r.call(i,{name:"idDrink",hash:{},data:a,loc:{start:{line:6,column:44},end:{line:6,column:55}}}):r)+">\n        <button type='button' class='cocktails__btn' data-modal-cocktail-open>\n          <span class='cocktails__button-text'>Learn more</span>\n        </button>\n        <button type='button' class='cocktails__btn transparent'>\n          <span class='cocktails__button-text'>Add to</span>\n          <svg class='cocktails__btn-icon' width='18' height='18'>\n            <use href='./images/icon.svg#icon-redlike'></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,o,a){var r,i=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return null!=(r=i(n,"each").call(null!=e?e:t.nullContext||{},null!=(r=null!=e?i(e,"data"):e)?i(r,"drinks"):r,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?r:""},useData:!0}),y={},w="Expected a function",x=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,T=/^0o[0-7]+$/i,S=parseInt,j="object"==typeof n&&n&&n.Object===Object&&n,q="object"==typeof self&&self&&self.Object===Object&&self,D=j||q||Function("return this")(),O=Object.prototype.toString,C=Math.max,$=Math.min,R=function(){return D.Date.now()};function H(t,e,n){var o,a,r,i,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError(w);function m(e){var n=o,r=a;return o=a=void 0,s=e,i=t.apply(r,n)}function p(t){return s=t,l=setTimeout(b,e),u?m(t):i}function h(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-s>=r}function b(){var t=R();if(h(t))return k(t);l=setTimeout(b,function(t){var n=e-(t-c);return d?$(n,r-(t-s)):n}(t))}function k(t){return l=void 0,f&&o?m(t):(o=a=void 0,i)}function v(){var t=R(),n=h(t);if(o=arguments,a=this,c=t,n){if(void 0===l)return p(c);if(d)return l=setTimeout(b,e),m(c)}return void 0===l&&(l=setTimeout(b,e)),i}return e=N(e)||0,M(n)&&(u=!!n.leading,r=(d="maxWait"in n)?C(N(n.maxWait)||0,e):r,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),s=0,o=c=a=l=void 0},v.flush=function(){return void 0===l?i:k(R())},v}function M(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(M(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=M(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(x,"");var n=E.test(t);return n||T.test(t)?S(t.slice(2),n?2:8):L.test(t)?NaN:+t}y=function(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(w);return M(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),H(t,e,{leading:o,maxWait:e,trailing:a})},refs={searchForm:document.querySelector(".search__input"),loadMoreBtn:document.querySelector(".load__more"),cocktailsList:document.querySelector(".cocktails__list")};const B=new(0,g.default);function J(t){const e=_(t);refs.cocktailsList.innerHTML=e}refs.searchForm.addEventListener("input",y((function(t){t.preventDefault(),B.query=t.target.value.trim(""),console.log(B.query),B.query||alert("notify alert");B.resetPage(),B.getCocktailByName().then(J)}),700)),refs.loadMoreBtn.addEventListener("click",(function(){B.getCocktailByName()}));g=r("lJqT5"),g=r("lJqT5");var P,A=r("1aryJ");P=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("ezHLX");var F;F=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("1vr8H");m=r("1QCZU");const U=new(0,g.default),{addToFavBtn:I,imgRef:W,RemoveCocktailBtnRef:z}=m.refs;function Q(t){return t.data.drinks.map((({strDrink:t,strDrinkThumb:n,idDrink:o})=>`\n\n      <li class="cocktails__item card-set-item">\n        <img\n          src="${n}"\n          alt="${t}"\n        />\n        <div class="cocktails__box">\n\n          <h2 class="cocktails__second-title dark--title">${t}</h2>\n          <div class="cocktails__button-box" id=${o}>\n            <button\n              type="button"\n              class="cocktails__btn"\n              data-modal-cocktail-open\n               data-id=${o}\n            >\n              <span class="cocktails__button-text">Learn more</span>\n            </button>\n            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent">\n              <span class="cocktails__button-text">Add to</span>\n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${e(P)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${e(F)}" alt="" width="18" height="18"/> \n            </button>\n          </div>\n        </div>\n      </li>`))}function X(t,e){t.innerHTML=e}function Y(t){return window.screen.width<768?t.filter(((t,e)=>e<3)).join(""):window.screen.width>=768&&window.screen.width<1280?t.filter(((t,e)=>e<6)).join(""):t.filter(((t,e)=>e<9)).join("")}document.querySelector(".cocktails__list").addEventListener("click",(function(t){const e=t.target.closest(".js-add-btn");if(e){const t=(0,A.getCocktailStorageData)(U.KEY);if(console.log(e),console.log(t),t||(e.classList.add("activated"),(0,A.setCocktailToLocalStorage)(e.dataset.id)),t.includes(e.dataset.id))return alert("This cocktail is already included!");e.classList.add("activated"),(0,A.setCocktailToLocalStorage)(e.dataset.id)}}));const K=document.querySelector(".hero__list"),V=document.querySelector(".cocktails__list"),Z=document.querySelectorAll(".option");K.addEventListener("click",(function(t){console.log(t.target.Node);!async function(t){G.letter=t;const e=await G.getCocktailByLetter(),n=Y(Q(e));X(V,n),X(Z,n)}(t.target.innerHTML.toLowerCase())}));const G=new(0,g.default);g=r("lJqT5"),A=r("1aryJ");const tt=document.querySelector(".cocktails__list"),et=new(0,g.default);(0,A.getCocktailStorageData)(et.KEY);window.addEventListener("load",(async function(){const t=Y((await et.getRandomCocktail()).map((t=>{const{strDrink:n,strDrinkThumb:o,idDrink:a}=t.data.drinks[0];return`\n      <li class="cocktails__item card-set-item">\n        <img\n          src="${o}"\n          alt="${n}"\n        />\n        <div class="cocktails__box">\n\n          <h2 class="cocktails__second-title">${n}</h2>\n          <div class="cocktails__button-box">\n\n            <button\n              type="button"\n              class="cocktails__btn"\n              data-modal-cocktail-open\n               data-id=${a}\n            >\n              <span class="cocktails__button-text" id=${a} >Learn more</span>\n            </button>\n\n            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent" data-id="${a}">\n              <span class="cocktails__button-text">Add to</span>  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="${e(P)}" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="${e(F)}" alt="" width="18" height="18"/> \n\n            </button>\n          </div>\n        </div>\n      </li>`})));X(tt,t)})),r("4Nugj");g=r("lJqT5");const nt={cocktailsList:document.querySelector(".cocktails__list"),backdrop:document.querySelector("[data-modal]"),modalOpenBtn:document.querySelectorAll("[data-modal-cocktail-open]"),modalContainer:document.querySelector(".modal-coctails ")};function ot(t){"Escape"===t.code&&(document.body.classList.remove("modal-open"),backdrop.classList.add("is-hidden"),cocktailModalMain.classList.remove("is-hidden"),document.removeEventListener("keydown",ot))}console.log(nt),nt.cocktailsList.addEventListener("click",(async function(t){if("cocktails__button-text"===t.target.className)try{const e=new(0,g.default);e.id=t.target.id;const n=await e.getCocktailsId(),o=n.data.drinks.map((t=>`<div class="container">\n    <div class="modal-coctails dark--modal-back" data-modal-open>\n      <h2 class="modal-coctail-name dark--title">${t.strDrink}</h2>\n      <h3 class="modal-ingredients dark--title">ingredients</h3>\n      <p class="modal-per dark--text">Per cocktail</p>     \n        <ul class="modal-coctail-components dark--text">\n        </ul>\n      </a>\n      <img src="${t.strDrinkThumb}" alt="cocktail" class="modal-img" />\n      <h3 class="modal-Instractions dark--title">Instractions:</h3>\n      <p class="modal-text dark--text">\n        ${t.strInstructions}\n      </p>\n      <button class="modal-button" data-modal-a>Add to favorite</button>\n      <button class="modal-button hidden_remove" data-modal-b>\n        Remove from favorite\n      </button>\n      <button\n        type="button"\n        class="modal-menu__close"\n        aria-label="Mobile menu closed"\n        data-modal-close\n      >\n        <svg class="btn-menu__icon dark--fill" width="32px" height="32px">\n          <use href="./images/icon.svg#icon-close"></use>\n        </svg>\n      </button>\n    </div>\n  </div>`)).join("");console.log(o),X(nt.modalContainer,o),nt.backdrop.classList.remove("is-hidden-modal-coctails"),document.addEventListener("keydown",ot)}catch(t){console.log(t.message)}})),r("1aryJ");const at=document.querySelector(".preloader"),rt=()=>{setInterval((()=>{at.style.opacity||(at.style.opacity=1),at.style.opacity>0?at.style.opacity-=.1:(clearInterval(rt),at.remove())}),300)};window.addEventListener("load",rt)}();
//# sourceMappingURL=coctail-fav.cb4a7b7d.js.map
