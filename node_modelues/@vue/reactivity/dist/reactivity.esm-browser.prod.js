function t(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const e=()=>{},n=Object.assign,s=Object.prototype.hasOwnProperty,i=(t,e)=>s.call(t,e),r=Array.isArray,c=t=>"[object Map]"===l(t),o=t=>"symbol"==typeof t,u=t=>null!==t&&"object"==typeof t,h=Object.prototype.toString,l=t=>h.call(t),a=t=>"string"==typeof t&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,f=(t,e)=>!Object.is(t,e);let _;const d=[];class p{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&_&&(this.parent=_,this.index=(_.scopes||(_.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(d.push(this),_=this)}off(){this.active&&(d.pop(),_=d[d.length-1])}stop(t){if(this.active){if(this.effects.forEach((t=>t.stop())),this.cleanups.forEach((t=>t())),this.scopes&&this.scopes.forEach((t=>t.stop(!0))),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function v(t){return new p(t)}function g(t,e){(e=e||_)&&e.active&&e.effects.push(t)}function y(){return _}function w(t){_&&_.cleanups.push(t)}const b=t=>{const e=new Set(t);return e.w=0,e.n=0,e},R=t=>(t.w&O)>0,k=t=>(t.n&O)>0,m=new WeakMap;let j=0,O=1;const S=[];let E;const x=Symbol(""),P=Symbol("");class M{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],g(this,n)}run(){if(!this.active)return this.fn();if(!S.includes(this))try{return S.push(E=this),K(),O=1<<++j,j<=30?(({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=O})(this):z(this),this.fn()}finally{j<=30&&(t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];R(i)&&!k(i)?i.delete(t):e[n++]=i,i.w&=~O,i.n&=~O}e.length=n}})(this),O=1<<--j,B(),S.pop();const t=S.length;E=t>0?S[t-1]:void 0}}stop(){this.active&&(z(this),this.onStop&&this.onStop(),this.active=!1)}}function z(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function W(t,e){t.effect&&(t=t.effect.fn);const s=new M(t);e&&(n(s,e),e.scope&&g(s,e.scope)),e&&e.lazy||s.run();const i=s.run.bind(s);return i.effect=s,i}function V(t){t.effect.stop()}let A=!0;const N=[];function I(){N.push(A),A=!1}function K(){N.push(A),A=!0}function B(){const t=N.pop();A=void 0===t||t}function C(t,e,n){if(!L())return;let s=m.get(t);s||m.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=b()),q(i)}function L(){return A&&void 0!==E}function q(t,e){let n=!1;j<=30?k(t)||(t.n|=O,n=!R(t)):n=!t.has(E),n&&(t.add(E),E.deps.push(t))}function D(t,e,n,s,i,o){const u=m.get(t);if(!u)return;let h=[];if("clear"===e)h=[...u.values()];else if("length"===n&&r(t))u.forEach(((t,e)=>{("length"===e||e>=s)&&h.push(t)}));else switch(void 0!==n&&h.push(u.get(n)),e){case"add":r(t)?a(n)&&h.push(u.get("length")):(h.push(u.get(x)),c(t)&&h.push(u.get(P)));break;case"delete":r(t)||(h.push(u.get(x)),c(t)&&h.push(u.get(P)));break;case"set":c(t)&&h.push(u.get(x))}if(1===h.length)h[0]&&F(h[0]);else{const t=[];for(const e of h)e&&t.push(...e);F(b(t))}}function F(t,e){for(const n of r(t)?t:[...t])(n!==E||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const G=t("__proto__,__v_isRef,__isVue"),H=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(o)),J=Z(),Q=Z(!1,!0),T=Z(!0),U=Z(!0,!0),X=Y();function Y(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,i=this.length;e<i;e++)C(n,0,e+"");const s=n[e](...t);return-1===s||!1===s?n[e](...t.map(Ct)):s}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){I();const n=Ct(this)[e].apply(this,t);return B(),n}})),t}function Z(t=!1,e=!1){return function(n,s,c){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_raw"===s&&c===(t?e?Pt:xt:e?Et:St).get(n))return n;const h=r(n);if(!t&&h&&i(X,s))return Reflect.get(X,s,c);const l=Reflect.get(n,s,c);if(o(s)?H.has(s):G(s))return l;if(t||C(n,0,s),e)return l;if(Ht(l)){return!h||!a(s)?l.value:l}return u(l)?t?Vt(l):zt(l):l}}function $(t=!1){return function(e,n,s,c){let o=e[n];if(!t&&!Kt(s)&&(s=Ct(s),o=Ct(o),!r(e)&&Ht(o)&&!Ht(s)))return o.value=s,!0;const u=r(e)&&a(n)?Number(n)<e.length:i(e,n),h=Reflect.set(e,n,s,c);return e===Ct(c)&&(u?f(s,o)&&D(e,"set",n,s):D(e,"add",n,s)),h}}const tt={get:J,set:$(),deleteProperty:function(t,e){const n=i(t,e),s=Reflect.deleteProperty(t,e);return s&&n&&D(t,"delete",e,void 0),s},has:function(t,e){const n=Reflect.has(t,e);return o(e)&&H.has(e)||C(t,0,e),n},ownKeys:function(t){return C(t,0,r(t)?"length":x),Reflect.ownKeys(t)}},et={get:T,set:(t,e)=>!0,deleteProperty:(t,e)=>!0},nt=n({},tt,{get:Q,set:$(!0)}),st=n({},et,{get:U}),it=t=>t,rt=t=>Reflect.getPrototypeOf(t);function ct(t,e,n=!1,s=!1){const i=Ct(t=t.__v_raw),r=Ct(e);e!==r&&!n&&C(i,0,e),!n&&C(i,0,r);const{has:c}=rt(i),o=s?it:n?Dt:qt;return c.call(i,e)?o(t.get(e)):c.call(i,r)?o(t.get(r)):void(t!==i&&t.get(e))}function ot(t,e=!1){const n=this.__v_raw,s=Ct(n),i=Ct(t);return t!==i&&!e&&C(s,0,t),!e&&C(s,0,i),t===i?n.has(t):n.has(t)||n.has(i)}function ut(t,e=!1){return t=t.__v_raw,!e&&C(Ct(t),0,x),Reflect.get(t,"size",t)}function ht(t){t=Ct(t);const e=Ct(this);return rt(e).has.call(e,t)||(e.add(t),D(e,"add",t,t)),this}function lt(t,e){e=Ct(e);const n=Ct(this),{has:s,get:i}=rt(n);let r=s.call(n,t);r||(t=Ct(t),r=s.call(n,t));const c=i.call(n,t);return n.set(t,e),r?f(e,c)&&D(n,"set",t,e):D(n,"add",t,e),this}function at(t){const e=Ct(this),{has:n,get:s}=rt(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&D(e,"delete",t,void 0),r}function ft(){const t=Ct(this),e=0!==t.size,n=t.clear();return e&&D(t,"clear",void 0,void 0),n}function _t(t,e){return function(n,s){const i=this,r=i.__v_raw,c=Ct(r),o=e?it:t?Dt:qt;return!t&&C(c,0,x),r.forEach(((t,e)=>n.call(s,o(t),o(e),i)))}}function dt(t,e,n){return function(...s){const i=this.__v_raw,r=Ct(i),o=c(r),u="entries"===t||t===Symbol.iterator&&o,h="keys"===t&&o,l=i[t](...s),a=n?it:e?Dt:qt;return!e&&C(r,0,h?P:x),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:u?[a(t[0]),a(t[1])]:a(t),done:e}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return"delete"!==t&&this}}function vt(){const t={get(t){return ct(this,t)},get size(){return ut(this)},has:ot,add:ht,set:lt,delete:at,clear:ft,forEach:_t(!1,!1)},e={get(t){return ct(this,t,!1,!0)},get size(){return ut(this)},has:ot,add:ht,set:lt,delete:at,clear:ft,forEach:_t(!1,!0)},n={get(t){return ct(this,t,!0)},get size(){return ut(this,!0)},has(t){return ot.call(this,t,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:_t(!0,!1)},s={get(t){return ct(this,t,!0,!0)},get size(){return ut(this,!0)},has(t){return ot.call(this,t,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:_t(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{t[i]=dt(i,!1,!1),n[i]=dt(i,!0,!1),e[i]=dt(i,!1,!0),s[i]=dt(i,!0,!0)})),[t,n,e,s]}const[gt,yt,wt,bt]=vt();function Rt(t,e){const n=e?t?bt:wt:t?yt:gt;return(e,s,r)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get(i(n,s)&&s in e?n:e,s,r)}const kt={get:Rt(!1,!1)},mt={get:Rt(!1,!0)},jt={get:Rt(!0,!1)},Ot={get:Rt(!0,!0)},St=new WeakMap,Et=new WeakMap,xt=new WeakMap,Pt=new WeakMap;function Mt(t){return t.__v_skip||!Object.isExtensible(t)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>l(t).slice(8,-1))(t))}function zt(t){return t&&t.__v_isReadonly?t:Nt(t,!1,tt,kt,St)}function Wt(t){return Nt(t,!1,nt,mt,Et)}function Vt(t){return Nt(t,!0,et,jt,xt)}function At(t){return Nt(t,!0,st,Ot,Pt)}function Nt(t,e,n,s,i){if(!u(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const c=Mt(t);if(0===c)return t;const o=new Proxy(t,2===c?s:n);return i.set(t,o),o}function It(t){return Kt(t)?It(t.__v_raw):!(!t||!t.__v_isReactive)}function Kt(t){return!(!t||!t.__v_isReadonly)}function Bt(t){return It(t)||Kt(t)}function Ct(t){const e=t&&t.__v_raw;return e?Ct(e):t}function Lt(t){return((t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})})(t,"__v_skip",!0),t}const qt=t=>u(t)?zt(t):t,Dt=t=>u(t)?Vt(t):t;function Ft(t){L()&&((t=Ct(t)).dep||(t.dep=b()),q(t.dep))}function Gt(t,e){(t=Ct(t)).dep&&F(t.dep)}function Ht(t){return Boolean(t&&!0===t.__v_isRef)}function Jt(t){return Tt(t,!1)}function Qt(t){return Tt(t,!0)}function Tt(t,e){return Ht(t)?t:new Ut(t,e)}class Ut{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:qt(t)}get value(){return Ft(this),this._value}set value(t){t=this._shallow?t:Ct(t),f(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:qt(t),Gt(this))}}function Xt(t){Gt(t)}function Yt(t){return Ht(t)?t.value:t}const Zt={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ht(i)&&!Ht(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function $t(t){return It(t)?t:new Proxy(t,Zt)}class te{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:e,set:n}=t((()=>Ft(this)),(()=>Gt(this)));this._get=e,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function ee(t){return new te(t)}function ne(t){const e=r(t)?new Array(t.length):{};for(const n in t)e[n]=ie(t,n);return e}class se{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ie(t,e,n){const s=t[e];return Ht(s)?s:new se(t,e,n)}class re{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new M(t,(()=>{this._dirty||(this._dirty=!0,Gt(this))})),this.__v_isReadonly=n}get value(){const t=Ct(this);return Ft(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ce(t,n){let s,i;const r="function"==typeof t;r?(s=t,i=e):(s=t.get,i=t.set);return new re(s,i,r||!i)}var oe;const ue=Promise.resolve(),he=[];let le=!1;const ae=()=>{for(let t=0;t<he.length;t++)he[t]();he.length=0,le=!1};class fe{constructor(t){let e;this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this[oe]=!0;let n=!1,s=!1;this.effect=new M(t,(t=>{if(this.dep){if(t)e=this._value,n=!0;else if(!s){const t=n?e:this._value;s=!0,n=!1,he.push((()=>{this.effect.active&&this._get()!==t&&Gt(this),s=!1})),le||(le=!0,ue.then(ae))}for(const t of this.dep)t.computed&&t.scheduler(!0)}this._dirty=!0})),this.effect.computed=!0}_get(){return this._dirty?(this._dirty=!1,this._value=this.effect.run()):this._value}get value(){return Ft(this),Ct(this)._get()}}function _e(t){return new fe(t)}oe="__v_isReadonly";export{p as EffectScope,x as ITERATE_KEY,M as ReactiveEffect,ce as computed,ee as customRef,_e as deferredComputed,W as effect,v as effectScope,K as enableTracking,y as getCurrentScope,Bt as isProxy,It as isReactive,Kt as isReadonly,Ht as isRef,Lt as markRaw,w as onScopeDispose,I as pauseTracking,$t as proxyRefs,zt as reactive,Vt as readonly,Jt as ref,B as resetTracking,Wt as shallowReactive,At as shallowReadonly,Qt as shallowRef,V as stop,Ct as toRaw,ie as toRef,ne as toRefs,C as track,D as trigger,Xt as triggerRef,Yt as unref};
