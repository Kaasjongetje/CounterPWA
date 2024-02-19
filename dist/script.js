var F=Object.defineProperty;var K=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>(K(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function m(){}function B(e){return e()}function C(){return Object.create(null)}function g(e){e.forEach(B)}function M(e){return typeof e=="function"}function R(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function T(e){return Object.keys(e).length===0}function $(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function P(){return W(" ")}function S(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function U(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function V(e){return Array.from(e.childNodes)}function z(e,t){t=""+t,e.data!==t&&(e.data=t)}let O;function _(e){O=e}const h=[],j=[];let p=[];const I=[],D=Promise.resolve();let k=!1;function G(){k||(k=!0,D.then(q))}function E(e){p.push(e)}const x=new Set;let a=0;function q(){if(a!==0)return;const e=O;do{try{for(;a<h.length;){const t=h[a];a++,_(t),H(t.$$)}}catch(t){throw h.length=0,a=0,t}for(_(null),h.length=0,a=0;j.length;)j.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];x.has(n)||(x.add(n),n())}p.length=0}while(h.length);for(;I.length;)I.pop()();k=!1,x.clear(),_(e)}function H(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}function J(e){const t=[],n=[];p.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),p=t}const Q=new Set;function X(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function Y(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),E(()=>{const i=e.$$.on_mount.map(B).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...i):g(i),e.$$.on_mount=[]}),r.forEach(E)}function Z(e,t){const n=e.$$;n.fragment!==null&&(J(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(h.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,r,i,f=null,d=[-1]){const l=O;_(e);const c=e.$$={fragment:null,ctx:[],props:i,update:m,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:C(),dirty:d,skip_bound:!1,root:t.target||l.$$.root};f&&f(c.root);let u=!1;if(c.ctx=n?n(e,t.props||{},(s,L,...N)=>{const A=N.length?N[0]:L;return c.ctx&&r(c.ctx[s],c.ctx[s]=A)&&(!c.skip_bound&&c.bound[s]&&c.bound[s](A),u&&ee(e,s)),L}):[],c.update(),u=!0,g(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const s=V(t.target);c.fragment&&c.fragment.l(s),s.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&X(e.$$.fragment),Y(e,t.target,t.anchor),q()}_(l)}class ne{constructor(){w(this,"$$");w(this,"$$set")}$destroy(){Z(this,1),this.$destroy=m}$on(t,n){if(!M(n))return m;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!T(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const re="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);function oe(e){let t,n,o,r,i,f,d,l,c;return{c(){t=y("span"),n=W(e[0]),o=P(),r=y("div"),i=y("button"),i.textContent="-",f=P(),d=y("button"),d.textContent="+",U(r,"class","button-container")},m(u,s){v(u,t,s),$(t,n),v(u,o,s),v(u,r,s),$(r,i),$(r,f),$(r,d),l||(c=[S(i,"click",e[2]),S(d,"click",e[1])],l=!0)},p(u,[s]){s&1&&z(n,u[0])},i:m,o:m,d(u){u&&(b(t),b(o),b(r)),l=!1,g(c)}}}function ie(e,t,n){let o=0;function r(){n(0,o++,o)}function i(){n(0,o--,o)}return[o,r,i]}class ce extends ne{constructor(t){super(),te(this,t,ie,oe,R,{})}}new ce({target:document.body});"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js");
