var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=l(e,n,r,c);t.p(o,a)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let y;function v(t){y=t}const b=[],x=[],_=[],k=[],j=Promise.resolve();let w=!1;function E(t){_.push(t)}let M=!1;const T=new Set;function q(){if(!M){M=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];v(e),A(e.$$)}for(v(null),b.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];T.has(e)||(T.add(e),e())}_.length=0}while(b.length);for(;k.length;)k.pop()();w=!1,M=!1,T.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const B=new Set;let C;function N(){C={r:0,c:[],p:C}}function S(){C.r||r(C.c),C=C.p}function O(t,e){t&&t.i&&(B.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),C.c.push((()=>{B.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function J(t,n,s,c){const{fragment:l,on_mount:a,on_destroy:i,after_update:u}=t.$$;l&&l.m(n,s),c||E((()=>{const n=a.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(E)}function L(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,j.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,o,s,c,l,a,i=[-1]){const u=y;v(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:o.context||[]),callbacks:n(),dirty:i,skip_bound:!1};let h=!1;if(m.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),h&&P(e,t)),n})):[],m.update(),h=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();o.intro&&O(e.$$.fragment),J(e,o.target,o.anchor,o.customElement),q()}v(u)}class W{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const z=t=>({}),F=t=>({}),G=t=>({}),I=t=>({});function K(t){let e,n,r,o,s,l,m;const d=t[2].lhs,y=c(d,t,t[1],I),v=t[2].rhs,b=c(v,t,t[1],F);return{c(){e=h("a"),n=h("div"),y&&y.c(),r=p(),o=h("div"),b&&b.c(),s=p(),l=h("div"),l.textContent="See More →",$(n,"class","lhs svelte-a0mqp5"),$(l,"class","button"),g(l,"position","absolute"),g(l,"bottom","20px"),g(l,"right","15px"),$(o,"class","rhs svelte-a0mqp5"),$(e,"href",t[0]),$(e,"class","section svelte-a0mqp5")},m(t,c){u(t,e,c),i(e,n),y&&y.m(n,null),i(e,r),i(e,o),b&&b.m(o,null),i(o,s),i(o,l),m=!0},p(t,[n]){y&&y.p&&(!m||2&n)&&a(y,d,t,t[1],n,G,I),b&&b.p&&(!m||2&n)&&a(b,v,t,t[1],n,z,F),(!m||1&n)&&$(e,"href",t[0])},i(t){m||(O(y,t),O(b,t),m=!0)},o(t){H(y,t),H(b,t),m=!1},d(t){t&&f(e),y&&y.d(t),b&&b.d(t)}}}function Q(t,e,n){let{$$slots:r={},$$scope:o}=e,{url:s}=e;return t.$$set=t=>{"url"in t&&n(0,s=t.url),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class R extends W{constructor(t){super(),D(this,t,Q,K,s,{url:0})}}var U={svelte:[{name:"aayush"},{name:"abu"},{name:"aditi"},{name:"anirudh"},{name:"shimpi"},{name:"avani"},{name:"sarvesh"},{name:"harsh"},{name:"mane"},{name:"pratyush"},{name:"shreeyash"},{name:"tanmayee"},{name:"vardhan"},{name:"vishesh"}],jekyll:[{name:"abhinav"},{name:"ansh"},{name:"dev"},{name:"akshit"},{name:"keshav"},{name:"noah"},{name:"piyush"},{name:"prakhar"},{name:"rishi"},{name:"saieesh"},{name:"shlok"},{name:"chauhan"},{name:"raj"}]};function V(t,e,n){const r=t.slice();return r[0]=e[n],r}function X(t,e,n){const r=t.slice();return r[3]=e[n],r}function Y(e){let n,r,o,s;return{c(){n=h("div"),r=h("iframe"),s=p(),$(r,"title","Web Demo by "+e[3].name),r.src!==(o="./"+e[0]+"/"+e[3].name)&&$(r,"src",o),$(r,"frameborder","0"),$(n,"slot","lhs")},m(t,e){u(t,n,e),i(n,r),i(n,s)},p:t,d(t){t&&f(n)}}}function Z(e){let n,r,o,s,c=e[3].name+"";return{c(){n=h("div"),r=h("strong"),r.textContent="By",o=d(": "),s=d(c),$(n,"slot","rhs")},m(t,e){u(t,n,e),i(n,r),i(n,o),i(n,s)},p:t,d(t){t&&f(n)}}}function tt(t){let e,n;return e=new R({props:{$$slots:{rhs:[Z],lhs:[Y]},$$scope:{ctx:t}}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,r){J(e,t,r),n=!0},p(t,n){const r={};64&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function et(t){let e,n,r,o,s,c,l=U[t[0]],a=[];for(let e=0;e<l.length;e+=1)a[e]=tt(X(t,l,e));const g=t=>H(a[t],1,1,(()=>{a[t]=null}));return{c(){e=h("h1"),n=d("Team "),r=d(t[0]),o=p();for(let t=0;t<a.length;t+=1)a[t].c();s=d(""),$(e,"id","svelte")},m(t,l){u(t,e,l),i(e,n),i(e,r),u(t,o,l);for(let e=0;e<a.length;e+=1)a[e].m(t,l);u(t,s,l),c=!0},p(t,e){if(0&e){let n;for(l=U[t[0]],n=0;n<l.length;n+=1){const r=X(t,l,n);a[n]?(a[n].p(r,e),O(a[n],1)):(a[n]=tt(r),a[n].c(),O(a[n],1),a[n].m(s.parentNode,s))}for(N(),n=l.length;n<a.length;n+=1)g(n);S()}},i(t){if(!c){for(let t=0;t<l.length;t+=1)O(a[t]);c=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)H(a[t]);c=!1},d(t){t&&f(e),t&&f(o),m(a,t),t&&f(s)}}}function nt(t){let e,n,r,o,s,c,l=["svelte","jekyll"],a=[];for(let e=0;e<2;e+=1)a[e]=et(V(t,l,e));const d=t=>H(a[t],1,1,(()=>{a[t]=null}));return{c(){e=h("main"),n=h("details"),n.innerHTML="<summary>Material</summary> \n\t\t<div></div>",r=p(),o=h("article"),o.innerHTML='<h2>Jump to</h2> \n\t\t<a href="#svelte" class="svelte-csge2j">Team Svelte</a>  <br/> \n\t\t<a href="#jekyll" class="svelte-csge2j">Team Jekyll</a>',s=p();for(let t=0;t<2;t+=1)a[t].c();$(e,"class","svelte-csge2j")},m(t,l){u(t,e,l),i(e,n),i(e,r),i(e,o),i(e,s);for(let t=0;t<2;t+=1)a[t].m(e,null);c=!0},p(t,[n]){if(0&n){let r;for(l=["svelte","jekyll"],r=0;r<2;r+=1){const o=V(t,l,r);a[r]?(a[r].p(o,n),O(a[r],1)):(a[r]=et(o),a[r].c(),O(a[r],1),a[r].m(e,null))}for(N(),r=2;r<2;r+=1)d(r);S()}},i(t){if(!c){for(let t=0;t<2;t+=1)O(a[t]);c=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<2;t+=1)H(a[t]);c=!1},d(t){t&&f(e),m(a,t)}}}return new class extends W{constructor(t){super(),D(this,t,null,nt,s,{})}}({target:document.body,props:{name:"world"}})}();
