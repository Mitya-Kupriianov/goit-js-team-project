function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"7096b":"coctail-fav.03dc776c.js","jJiw4":"notice.d0fe06ce.png","j7y4M":"notice@2x.cc48e1f3.png","5UbS1":"coctail-fav.369a8f32.css","69vzq":"coctail-fav.0ad31d31.js","jRqaA":"coctail-fav.fa650fdc.js"}')),a("2kobL"),a("7iYvf"),a("fxXpI"),a("7iEdO"),a("7Mr9X"),a("cXZJr"),a("hR8LQ");const r={footerOpenBtn:document.querySelector("[data-modal-team-open]"),footerCloseBtn:document.querySelector("[data-modal-team-close]"),teamContainer:document.querySelector(".team__container"),modal:document.querySelector("[data-modal-team]")};function i(e){e.preventDefault(),document.body.classList.toggle("modal-open"),r.modal.classList.toggle("is-hidden")}r.footerOpenBtn.addEventListener("click",i),r.footerCloseBtn.addEventListener("click",i),document.addEventListener("keydown",(function(e){"Escape"===e.key&&r.modal.classList.add("is-hidden")})),window.addEventListener("click",(e=>{e.target===r.modal&&(r.modal.classList.toggle("is-hidden"),window.removeEventListener())})),a("bUb57"),a("htAJi"),a("hfCDr"),a("45Opc"),a("bysyV"),a("krGWQ"),a("l7kbu");var c=a("7Cc8g"),d=a("l7kbu");a("gdmV4");var l,s=a("bysyV");l=new URL(a("kyEFX").resolve("jJiw4"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("j7y4M"),import.meta.url).toString();const f=document.querySelector(".cocktails__list"),m=new(0,s.default);function g(e){const t=(0,c.createRandomMarkup)(e).join("");(0,c.renderMarkup)(f,t)}window.addEventListener("load",(function(){const e=(0,d.getCocktailStorageData)(m.KEY);e.length?async function(e){const t=[];e.forEach((e=>{const o=m.getCocktailsId(e);t.push(o)})),Promise.all(t).then(g)}(e):f.innerHTML=`<li class="garcon"> Sorry, we did not find any ingredient for you<img class="no-result" srcset = "${l}", srcset =  "${u}" src="${u}" alt="No Results"></img></li>`})),a("7Cc8g"),a("2YGUk"),e(a("lL5zp")).init();
//# sourceMappingURL=coctail-fav.03dc776c.js.map
