(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,V=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),G=new WeakMap;let at=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=G.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&G.set(e,t))}return t}toString(){return this.cssText}};const $t=o=>new at(typeof o=="string"?o:o+"",void 0,q),F=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new at(e,o,q)},mt=(o,t)=>{if(V)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},Q=V?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return $t(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:yt,getOwnPropertyDescriptor:vt,getOwnPropertyNames:At,getOwnPropertySymbols:bt,getPrototypeOf:wt}=Object,$=globalThis,X=$.trustedTypes,St=X?X.emptyScript:"",j=$.reactiveElementPolyfillSupport,E=(o,t)=>o,M={toAttribute(o,t){switch(t){case Boolean:o=o?St:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},K=(o,t)=>!_t(o,t),tt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...At(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:M).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:M;this._$Em=s,this[s]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??K)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,j==null||j({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,z=P.trustedTypes,et=z?z.createPolicy("lit-html",{createHTML:o=>o}):void 0,ht="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,ct="?"+f,Et=`<${ct}>`,v=document,x=()=>v.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",dt=Array.isArray,Pt=o=>dt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",I=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,m=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,rt=/"/g,pt=/^(?:script|style|textarea|title)$/i,xt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),J=xt(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),nt=new WeakMap,_=v.createTreeWalker(v,129);function ut(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const Ct=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=S;for(let a=0;a<e;a++){const l=o[a];let c,p,h=-1,u=0;for(;u<l.length&&(n.lastIndex=u,p=n.exec(l),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=st:p[1]!==void 0?n=it:p[2]!==void 0?(pt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=m):p[3]!==void 0&&(n=m):n===m?p[0]===">"?(n=s??S,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?m:p[3]==='"'?rt:ot):n===rt||n===ot?n=m:n===st||n===it?n=S:(n=m,s=void 0);const g=n===m&&o[a+1].startsWith("/>")?" ":"";r+=n===S?l+Et:h>=0?(i.push(c),l.slice(0,h)+ht+l.slice(h)+f+g):l+f+(h===-2?a:g)}return[ut(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,l=this.parts,[c,p]=Ct(t,e);if(this.el=O.createElement(c,i),_.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=_.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ht)){const u=p[n++],g=s.getAttribute(h).split(f),H=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:H[2],strings:g,ctor:H[1]==="."?Ut:H[1]==="?"?Tt:H[1]==="@"?Ht:k}),s.removeAttribute(h)}else h.startsWith(f)&&(l.push({type:6,index:r}),s.removeAttribute(h));if(pt.test(s.tagName)){const h=s.textContent.split(f),u=h.length-1;if(u>0){s.textContent=z?z.emptyScript:"";for(let g=0;g<u;g++)s.append(h[g],x()),_.nextNode(),l.push({type:2,index:++r});s.append(h[u],x())}}}else if(s.nodeType===8)if(s.data===ct)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(f,h+1))!==-1;)l.push({type:7,index:r}),h+=f.length-1}r++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function w(o,t,e=o,i){var n,a;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const r=C(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(o,s._$AS(o,t.values),s,i)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);_.currentNode=s;let r=_.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new T(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Nt(r,this,t)),this._$AV.push(c),l=i[++a]}n!==(l==null?void 0:l.index)&&(r=_.nextNode(),n++)}return _.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),C(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(ut(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new Ot(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new O(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new T(this.S(x()),this.S(x()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=w(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=w(this,a[i+l],e,l),c===b&&(c=this._$AH[l]),n||(n=!C(c)||c!==this._$AH[l]),c===d?t=d:t!==d&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Tt extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ht extends k{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===b)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const B=P.litHtmlPolyfillSupport;B==null||B(O,T),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.2");const Mt=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new T(t.insertBefore(x(),r),r,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var lt;y._$litElement$=!0,y.finalized=!0,(lt=globalThis.litElementHydrateSupport)==null||lt.call(globalThis,{LitElement:y});const W=globalThis.litElementPolyfillSupport;W==null||W({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:K},Rt=(o=zt,t,e)=>{const{kind:i,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,o),i==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,o)},init(a){return a!==void 0&&this.P(n,void 0,o),a}}}if(i==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,o)}}throw Error("Unsupported decorator location: "+i)};function D(o){return(t,e)=>typeof e=="object"?Rt(o,t,e):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(o,t,e)}var Lt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Z=(o,t,e,i)=>{for(var s=i>1?void 0:i?kt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Lt(t,e,s),s};let U=class extends y{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){const o=this.align==="left"?"":"--position-left: auto; --position-right: 0;";return J`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open} />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu" style=${o}>
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(o){const t=o.target;this._toggle(t.checked)}_toggle(o){this.open=o,this._toggleClickAway(o)}_toggleClickAway(o){const t=e=>{e.composedPath().includes(this)?e.stopPropagation():this._toggle(!1)};o?document.addEventListener("click",t):document.removeEventListener("click",t)}};U.styles=F`
    :host {
      --position-left: 0;
      --position-right: auto;

      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: var(--position-left);
      right: var(--position-right);
      background-color: #F0E2CE;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
      z-index: 1;
      padding: 1em;
      margin: 0.5em;
      width: max-content;
      height: max-content;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }
  `;Z([D({reflect:!0,type:Boolean})],U.prototype,"open",2);Z([D()],U.prototype,"align",2);U=Z([Y("drop-down")],U);var Dt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,gt=(o,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Dt(t,e,s),s};let R=class extends y{constructor(){super(...arguments),this.avatar=""}render(){return J`
      <ul>
        <li class="header">
          <img src=${this.avatar} />

          <h1>
            <a href="/app/profile/index.html"><slot name="name">Your Name</slot></a>
          </h1>
        </li>

        <li>
          <toggle-switch @change=${this._toggleLightMode}>
            Light Mode
          </toggle-switch>
        </li>
        <!-- <li>
          <preset-buttons
            name="font-size"
            .options=${[12,14,16,20,24]}
            value="16"
            @change=${this._selectFontSize}>
            Font Size
          </preset-buttons>
        </li> -->
        <slot></slot>
        <li><span slot="settings">Settings</span></li>
        <li>
          <slot name="logout">Sign Out</slot>
        </li>
      </ul>
    `}_toggleLightMode(o){const t=o.target,e=document.body;console.log("Toggling Dark mode",o),t!=null&&t.on?e.classList.add("light-mode"):e.classList.remove("light-mode")}_selectFontSize(o){const t=o.target,e=document.body;if(console.log("Selecting Font Size",o),t){const i=t.value?t.value.toString()+"px":"initial";e.style.fontSize=i}}};R.styles=F`
    * {
      margin: 0;
      box-sizing: border-box;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-page);
      color: var(--color-text);
      border: 1px solid var(--color-accent);
      border-radius: var(--size-corner-medium);
      padding: var(--size-spacing-small);
      width: 12em;
      box-shadow: var(--shadow-dropdown);
    }
    li {
      white-space: nowrap;
      border-color: var(--color-accent);
      border-width: var(--line-weight-superfine);
      text-align: left;
      padding: 0.5em;
    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: end;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
    img {
      display: inline;
      height: var(--size-icon-large);
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: right;
    }
    .header h1 a {
      text-decoration: none;
      color: inherit;
    }
  `;gt([D()],R.prototype,"avatar",2);R=gt([Y("user-panel")],R);var It=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,ft=(o,t,e,i)=>{for(var s=i>1?void 0:i?Bt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&It(t,e,s),s};let L=class extends y{constructor(){super(...arguments),this.on=!1}render(){return J`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(o){const t=o.target,e=new Event(o.type,{bubbles:!0,composed:!0});this.on=t==null?void 0:t.checked,this.dispatchEvent(e)}};L.styles=F`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: var(--size-spacing-medium);
      line-height: 2em;
      cursor: pointer;
    }
    .slider {
      display: inline-block;
      border: 2px solid var(--color-border-control);
      border-radius: 0.75em;
      background-color: var(--color-background-control);
      height: 1.25em;
      width: 2.25em;
      position: relative;
      transition: background-color
        var(--time-transition-control);
      margin: 0.25em;
    }
    .slider:has(input:checked) {
      background-color: var(--color-background-control);
      border: 2px solid var(--color-border-control);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: var(--color-foreground-control);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--time-transition-control);
    }
    input:checked {
      left: 1.5em;
    }
  `;ft([D({reflect:!0,type:Boolean})],L.prototype,"on",2);L=ft([Y("toggle-switch")],L);export{F as i,D as n,y as s,Y as t,J as x};
