!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("jzYhw");var i=e(o("WMajR")).template({1:function(e,t,n,r,o){var i=e.lambda,c=e.escapeExpression;return"  <li class='hero__item dark--grey-hero hero__item--"+c(i(t,t))+"'>\n    <a href='#' class='hero__link'>"+c(i(t,t))+"</a></li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var i,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(i=c(n,"each").call(null!=t?t:e.nullContext||{},null!=t?c(t,"letter"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:4,column:9}}}))?i:""},useData:!0});var c=e(o("WMajR")).template({1:function(e,t,n,r,o){var i=e.lambda,c=e.escapeExpression;return"  <li class='option' value='"+c(i(t,t))+'\'><span class="hero__option-text">'+c(i(t,t))+"</span></li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var i,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(i=c(n,"each").call(null!=t?t:e.nullContext||{},null!=t?c(t,"letter"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?i:""},useData:!0});const a={heroList:document.querySelector(".hero__list"),heroSelect:document.querySelector(".hero__select"),cocktailList:document.querySelector(".cocktails__list")},{heroList:l,heroSelect:u}=a,s={letter:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]};function d(e,t,n){const r=n(e);return t.insertAdjacentHTML("beforeend",r)}d(s,u,c),d(s,l,i),o("5TNNb"),o("kaXg8"),o("eY4ce"),o("eXJzG"),o("hPRuz"),o("puS1k"),o("lbBPH"),o("bAQGX"),o("i8Q71"),o("f7BAh"),o("1QCZU"),o("6TfQP"),o("c7MW5");var f=o("1QCZU");const{buttonLogin:p,selectMenuRef:y,selectBtnRef:m,optionsRef:h,heroSelectTextRef:v}=f.refs;h.forEach((e=>{e.addEventListener("click",(()=>{let t=e.querySelector(".hero__option-text").innerText;v.innerText=t,y.classList.remove("active")}))})),m.addEventListener("click",(function(e){console.dir(e),y.classList.toggle("active")})),o("lJqT5");var k=o("lJqT5"),g=o("kJ8Me"),_=o("iU1Pc"),w={},b="Expected a function",L=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,q=/^0o[0-7]+$/i,x=parseInt,S="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,E=S||j||Function("return this")(),J=Object.prototype.toString,O=Math.max,N=Math.min,P=function(){return E.Date.now()};function R(e,t,n){var r,o,i,c,a,l,u=0,s=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(b);function p(t){var n=r,i=o;return r=o=void 0,u=t,c=e.apply(i,n)}function y(e){return u=e,a=setTimeout(h,t),s?p(e):c}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=i}function h(){var e=P();if(m(e))return v(e);a=setTimeout(h,function(e){var n=t-(e-l);return d?N(n,i-(e-u)):n}(e))}function v(e){return a=void 0,f&&r?p(e):(r=o=void 0,c)}function k(){var e=P(),n=m(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return y(l);if(d)return a=setTimeout(h,t),p(l)}return void 0===a&&(a=setTimeout(h,t)),c}return t=B(t)||0,C(n)&&(s=!!n.leading,i=(d="maxWait"in n)?O(B(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),k.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=l=o=a=void 0},k.flush=function(){return void 0===a?c:v(P())},k}function C(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function B(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==J.call(e)}(e))return NaN;if(C(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=C(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(L,"");var n=T.test(e);return n||q.test(e)?x(e.slice(2),n?2:8):M.test(e)?NaN:+e}w=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(b);return C(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),R(e,t,{leading:r,maxWait:t,trailing:o})};const D={searchForm:document.querySelector(".search__input"),loadMoreBtn:document.querySelector(".load__more")},F=new(0,k.default);D.searchForm.addEventListener("input",w((async function(t){const n=document.querySelector(".cocktails__list");try{if(t.preventDefault(),F.query=t.target.value.trim(""),console.log(F.query),""===F.query)return e(_).Notify.failure("Please, enter the name of cocktail");F.resetPage();const r=await F.getCocktailByName(),o=(0,g.createListMarkup)(r.data),i=(0,g.markupFilter)(o);(0,g.renderMarkup)(n,i)}catch(e){console.log(e.text)}}),700)),D.loadMoreBtn.addEventListener("click",(function(){F.getCocktailByName()}));k=o("lJqT5");o("kJ8Me");var H=o("7kebh");let U=1;function W(){const e=Z,t=H.refs.cocktailsList.children.length;function n(n){return e.filter(((e,r)=>(r>t-1&&r<n*U&&console.log("index",r),r>t-1&&r<n*U))).join("")}U++;let r=[];r=window.screen.width<768?n(3):window.screen.width>=768&&window.screen.width<1280?n(6):n(9),H.refs.cocktailsList.insertAdjacentHTML("beforeend",r),function(){const e=Z;H.refs.cocktailsList.children.length===e.length&&($.classList.add("btn_is-hidden"),U=1)}()}g=o("kJ8Me");o("iU1Pc");var A=o("4i2Nx");g=o("kJ8Me");const Q=document.querySelector(".hero__list"),X=document.querySelector(".cocktails__list"),I=document.querySelector(".cocktails__first-title"),Y=document.querySelector(".hero__select"),$=document.querySelector(".load__more");document.querySelectorAll(".option");Q.addEventListener("click",G),Y.addEventListener("click",G);const z=new(0,k.default);function G(e){if(!e.target.innerHTML)return;!async function(e){z.letter=e;const t=[],n=await z.getCocktailByLetter();console.log(n),t.push(n),Promise.all(t).then((function(e){if(console.log(e),!e[0].data.drinks)return(0,A.onError)(),I.innerHTML="Sorry, we didn't find any cocktail for you",X.innerHTML=(0,g.noResultsMarkup)();const t=(0,g.createListMarkup)(e[0].data);Z=t;const n=(0,g.markupFilter)(Z);(0,g.renderMarkup)(X,n)}))}(e.target.innerHTML.toLowerCase()),$.classList.remove("btn_is-hidden"),$.addEventListener("click",W),U=1}let Z="";o("kJ8Me");k=o("lJqT5"),g=o("kJ8Me");var K=o("1aryJ");const V=document.querySelector(".cocktails__list"),ee=new(0,k.default);(0,K.getCocktailStorageData)(ee.KEY);window.addEventListener("load",(async function(){const e=await ee.getRandomCocktail(),t=(0,g.createRandomMarkup)(e),n=(0,g.markupFilter)(t);(0,g.renderMarkup)(V,n)})),o("4Nugj"),o("7kebh"),o("1aryJ"),o("j1Fxp");var te=o("iXDbJ");const ne=document.querySelector(".preloader"),re=()=>{setInterval((()=>{ne.style.opacity||(ne.style.opacity=1),ne.style.opacity>0?ne.style.opacity-=.1:(clearInterval(re),ne.remove())}),85)};window.addEventListener("load",re),e(te).init()}();
//# sourceMappingURL=index.130b9d26.js.map
