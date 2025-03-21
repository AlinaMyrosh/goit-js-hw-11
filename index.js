import{a as c,S as l,i as d}from"./assets/vendor-CZCqCKWq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const u="49461257-d92cdcbbc0ac75fcae3d36a6d",f="https://pixabay.com/api/";function p(e){return c.get(f,{params:{key:u,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const m=new l(".gallery a",{captionsData:"alt"});function g(e,r){y(r);const a=e.map(n=>`
    <a class="gallery-item" href="${n.largeImageURL}">
      <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
      <div class="info">
        <p><span>Likes:</span> ${n.likes}</p>
        <p><span>Views:</span> ${n.views}</p>
        <p><span>Comments:</span> ${n.comments}</p>
        <p><span>Downloads:</span> ${n.downloads}</p>
      </div>
    </a>
  `).join("");r.insertAdjacentHTML("beforeend",a),m.refresh()}function y(e){e.innerHTML=""}function i(e){d.error({title:"Error",message:e})}function h(){const e=document.createElement("div");e.className="loader",document.body.appendChild(e)}function L(){const e=document.querySelector(".loader");e&&document.body.removeChild(e)}const b=document.querySelector(".form"),v=document.querySelector(".gallery");b.addEventListener("submit",w);function w(e){e.preventDefault(),h();const r=e.target.elements["search-text"].value.trim();if(!r){i("You forgot important data");return}p(r).then(a=>{a.length||i("Sorry, there are no images matching your search query. Please try again!"),L(),g(a,v)}).catch(a=>console.log(a))}
//# sourceMappingURL=index.js.map
