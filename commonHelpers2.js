import"./assets/reset-34ab2c6f.js";import{i as l}from"./assets/vendor-651d7991.js";const t=document.querySelector(".form");document.querySelector("input");t.addEventListener("submit",i);function i(s){s.preventDefault();const m=t.elements.delay.value;(e=>new Promise((n,r)=>{setTimeout(o=>{t.elements.state.value==="fulfilled"?n(o):t.elements.state.value==="rejected"&&r(o)},e,e)}))(m).then(e=>l.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#fff",backgroundColor:"#59A10D"})).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers2.js.map
