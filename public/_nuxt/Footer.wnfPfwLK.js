import{_ as ue}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{_ as ie}from"./nuxt-img.V27qFp3C.js";import{_ as ce}from"./nuxt-link.YH15dfVz.js";import de from"./Icon.BeZjWSQ3.js";import{m as F,J as T,I as A,k,q as P,L as fe,M as pe,N as $e,O as Me,F as N,f as j,P as Pe,o as _,c as S,a as v,b as x,w as I,r as R,d as M,t as D,u as $,h as V,n as ne,T as Te,j as K,i as W,p as me,e as ve,g as De}from"./entry.Gjo7gIn_.js";import{b as Ne}from"./index.BxUKQI54.js";import{a as je,b as Re}from"./index.BShuePCU.js";let Oe=Symbol("headlessui.useid"),Fe=0;function Q(){return F(Oe,()=>`${++Fe}`)()}function y(e){var t;if(e==null||e.value==null)return null;let r=(t=e.value.$el)!=null?t:e.value;return r instanceof Node?r:null}function z(e,t,...r){if(e in t){let u=t[e];return typeof u=="function"?u(...r):u}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(u=>`"${u}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,z),l}var Ae=Object.defineProperty,Ce=(e,t,r)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,re=(e,t,r)=>(Ce(e,typeof t!="symbol"?t+"":t,r),r);let Le=class{constructor(){re(this,"current",this.detect()),re(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Y=new Le;function Z(e){if(Y.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=y(e);if(t)return t.ownerDocument}return document}let G=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var X=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(X||{}),Be=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Be||{}),ze=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ze||{});function ge(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(G)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var ee=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ee||{});function te(e,t=0){var r;return e===((r=Z(e))==null?void 0:r.body)?!1:z(t,{0(){return e.matches(G)},1(){let l=e;for(;l!==null;){if(l.matches(G))return!0;l=l.parentElement}return!1}})}function he(e){let t=Z(e);T(()=>{t&&!te(t.activeElement,0)&&Ue(e)})}var He=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(He||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Ue(e){e==null||e.focus({preventScroll:!0})}let Ve=["textarea","input"].join(",");function Ke(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ve))!=null?r:!1}function be(e,t=r=>r){return e.slice().sort((r,l)=>{let u=t(r),a=t(l);if(u===null||a===null)return 0;let n=u.compareDocumentPosition(a);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function We(e,t){return qe(ge(),t,{relativeTo:e})}function qe(e,t,{sorted:r=!0,relativeTo:l=null,skipElements:u=[]}={}){var a;let n=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?r?be(e):e:ge(e);u.length>0&&o.length>1&&(o=o.filter(i=>!u.includes(i))),l=l??n.activeElement;let c=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(l))-1;if(t&4)return Math.max(0,o.indexOf(l))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=t&32?{preventScroll:!0}:{},p=0,s=o.length,d;do{if(p>=s||p+s<=0)return 0;let i=f+p;if(t&16)i=(i+s)%s;else{if(i<0)return 3;if(i>=s)return 1}d=o[i],d==null||d.focus(h),p+=c}while(d!==n.activeElement);return t&6&&Ke(d)&&d.select(),2}function Ge(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Xe(){return/Android/gi.test(window.navigator.userAgent)}function Je(){return Ge()||Xe()}function B(e,t,r){Y.isServer||A(l=>{document.addEventListener(e,t,r),l(()=>document.removeEventListener(e,t,r))})}function Qe(e,t,r){Y.isServer||A(l=>{window.addEventListener(e,t,r),l(()=>window.removeEventListener(e,t,r))})}function Ye(e,t,r=P(()=>!0)){function l(a,n){if(!r.value||a.defaultPrevented)return;let o=n(a);if(o===null||!o.getRootNode().contains(o))return;let c=function f(h){return typeof h=="function"?f(h()):Array.isArray(h)||h instanceof Set?h:[h]}(e);for(let f of c){if(f===null)continue;let h=f instanceof HTMLElement?f:y(f);if(h!=null&&h.contains(o)||a.composed&&a.composedPath().includes(h))return}return!te(o,ee.Loose)&&o.tabIndex!==-1&&a.preventDefault(),t(a,o)}let u=k(null);B("pointerdown",a=>{var n,o;r.value&&(u.value=((o=(n=a.composedPath)==null?void 0:n.call(a))==null?void 0:o[0])||a.target)},!0),B("mousedown",a=>{var n,o;r.value&&(u.value=((o=(n=a.composedPath)==null?void 0:n.call(a))==null?void 0:o[0])||a.target)},!0),B("click",a=>{Je()||u.value&&(l(a,()=>u.value),u.value=null)},!0),B("touchend",a=>l(a,()=>a.target instanceof HTMLElement?a.target:null),!0),Qe("blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ae(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Ze(e,t){let r=k(ae(e.value.type,e.value.as));return fe(()=>{r.value=ae(e.value.type,e.value.as)}),A(()=>{var l;r.value||y(t)&&y(t)instanceof HTMLButtonElement&&!((l=y(t))!=null&&l.hasAttribute("type"))&&(r.value="button")}),r}let le=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function oe(e){var t,r;let l=(t=e.innerText)!=null?t:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return l;let a=!1;for(let o of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))o.remove(),a=!0;let n=a?(r=u.innerText)!=null?r:"":l;return le.test(n)&&(n=n.replace(le,"")),n}function et(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let l=r.split(" ").map(u=>{let a=document.getElementById(u);if(a){let n=a.getAttribute("aria-label");return typeof n=="string"?n.trim():oe(a).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return oe(e).trim()}function tt(e){let t=k(""),r=k("");return()=>{let l=y(e);if(!l)return"";let u=l.innerText;if(t.value===u)return r.value;let a=et(l).trim().toLowerCase();return t.value=u,r.value=a,a}}function se(e){return[e.screenX,e.screenY]}function nt(){let e=k([-1,-1]);return{wasMoved(t){let r=se(t);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(t){e.value=se(t)}}}function rt({container:e,accept:t,walk:r,enabled:l}){A(()=>{let u=e.value;if(!u||l!==void 0&&!l.value)return;let a=Z(e);if(!a)return;let n=Object.assign(c=>t(c),{acceptNode:t}),o=a.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,n,!1);for(;o.nextNode();)r(o.currentNode)})}let xe=Symbol("Context");var O=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(O||{});function at(){return F(xe,null)}function lt(e){pe(xe,e)}var w=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(w||{});function ot(e){throw new Error("Unexpected object: "+e)}var E=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(E||{});function st(e,t){let r=t.resolveItems();if(r.length<=0)return null;let l=t.resolveActiveIndex(),u=l??-1;switch(e.focus){case 0:{for(let a=0;a<r.length;++a)if(!t.resolveDisabled(r[a],a,r))return a;return l}case 1:{u===-1&&(u=r.length);for(let a=u-1;a>=0;--a)if(!t.resolveDisabled(r[a],a,r))return a;return l}case 2:{for(let a=u+1;a<r.length;++a)if(!t.resolveDisabled(r[a],a,r))return a;return l}case 3:{for(let a=r.length-1;a>=0;--a)if(!t.resolveDisabled(r[a],a,r))return a;return l}case 4:{for(let a=0;a<r.length;++a)if(t.resolveId(r[a],a,r)===e.id)return a;return l}case 5:return null;default:ot(e)}}var J=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(J||{}),ut=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ut||{});function H({visible:e=!0,features:t=0,ourProps:r,theirProps:l,...u}){var a;let n=we(l,r),o=Object.assign(u,{props:n});if(e||t&2&&n.static)return q(o);if(t&1){let c=(a=n.unmount)==null||a?0:1;return z(c,{0(){return null},1(){return q({...u,props:{...n,hidden:!0,style:{display:"none"}}})}})}return q(o)}function q({props:e,attrs:t,slots:r,slot:l,name:u}){var a,n;let{as:o,...c}=it(e,["unmount","static"]),f=(a=r.default)==null?void 0:a.call(r,l),h={};if(l){let p=!1,s=[];for(let[d,i]of Object.entries(l))typeof i=="boolean"&&(p=!0),i===!0&&s.push(d);p&&(h["data-headlessui-state"]=s.join(" "))}if(o==="template"){if(f=ye(f??[]),Object.keys(c).length>0||Object.keys(t).length>0){let[p,...s]=f??[];if(!ct(p)||s.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${u} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(t)).map(m=>m.trim()).filter((m,g,b)=>b.indexOf(m)===g).sort((m,g)=>m.localeCompare(g)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let d=we((n=p.props)!=null?n:{},c,h),i=$e(p,d,!0);for(let m in d)m.startsWith("on")&&(i.props||(i.props={}),i.props[m]=d[m]);return i}return Array.isArray(f)&&f.length===1?f[0]:f}return Me(o,Object.assign({},c,h),{default:()=>f})}function ye(e){return e.flatMap(t=>t.type===N?ye(t.children):[t])}function we(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let l of e)for(let u in l)u.startsWith("on")&&typeof l[u]=="function"?(r[u]!=null||(r[u]=[]),r[u].push(l[u])):t[u]=l[u];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(l=>[l,void 0])));for(let l in r)Object.assign(t,{[l](u,...a){let n=r[l];for(let o of n){if(u instanceof Event&&u.defaultPrevented)return;o(u,...a)}}});return t}function it(e,t=[]){let r=Object.assign({},e);for(let l of t)l in r&&delete r[l];return r}function ct(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var dt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(dt||{}),ft=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ft||{});function pt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let _e=Symbol("MenuContext");function U(e){let t=F(_e,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,U),r}return t}let mt=j({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let l=k(1),u=k(null),a=k(null),n=k([]),o=k(""),c=k(null),f=k(1);function h(s=d=>d){let d=c.value!==null?n.value[c.value]:null,i=be(s(n.value.slice()),g=>y(g.dataRef.domRef)),m=d?i.indexOf(d):null;return m===-1&&(m=null),{items:i,activeItemIndex:m}}let p={menuState:l,buttonRef:u,itemsRef:a,items:n,searchQuery:o,activeItemIndex:c,activationTrigger:f,closeMenu:()=>{l.value=1,c.value=null},openMenu:()=>l.value=0,goToItem(s,d,i){let m=h(),g=st(s===E.Specific?{focus:E.Specific,id:d}:{focus:s},{resolveItems:()=>m.items,resolveActiveIndex:()=>m.activeItemIndex,resolveId:b=>b.id,resolveDisabled:b=>b.dataRef.disabled});o.value="",c.value=g,f.value=i??1,n.value=m.items},search(s){let d=o.value!==""?0:1;o.value+=s.toLowerCase();let i=(c.value!==null?n.value.slice(c.value+d).concat(n.value.slice(0,c.value+d)):n.value).find(g=>g.dataRef.textValue.startsWith(o.value)&&!g.dataRef.disabled),m=i?n.value.indexOf(i):-1;m===-1||m===c.value||(c.value=m,f.value=1)},clearSearch(){o.value=""},registerItem(s,d){let i=h(m=>[...m,{id:s,dataRef:d}]);n.value=i.items,c.value=i.activeItemIndex,f.value=1},unregisterItem(s){let d=h(i=>{let m=i.findIndex(g=>g.id===s);return m!==-1&&i.splice(m,1),i});n.value=d.items,c.value=d.activeItemIndex,f.value=1}};return Ye([u,a],(s,d)=>{var i;p.closeMenu(),te(d,ee.Loose)||(s.preventDefault(),(i=y(u))==null||i.focus())},P(()=>l.value===0)),pe(_e,p),lt(P(()=>z(l.value,{0:O.Open,1:O.Closed}))),()=>{let s={open:l.value===0,close:p.closeMenu};return H({ourProps:{},theirProps:e,slot:s,slots:t,attrs:r,name:"Menu"})}}}),vt=j({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:l}){var u;let a=(u=e.id)!=null?u:`headlessui-menu-button-${Q()}`,n=U("MenuButton");l({el:n.buttonRef,$el:n.buttonRef});function o(p){switch(p.key){case w.Space:case w.Enter:case w.ArrowDown:p.preventDefault(),p.stopPropagation(),n.openMenu(),T(()=>{var s;(s=y(n.itemsRef))==null||s.focus({preventScroll:!0}),n.goToItem(E.First)});break;case w.ArrowUp:p.preventDefault(),p.stopPropagation(),n.openMenu(),T(()=>{var s;(s=y(n.itemsRef))==null||s.focus({preventScroll:!0}),n.goToItem(E.Last)});break}}function c(p){switch(p.key){case w.Space:p.preventDefault();break}}function f(p){e.disabled||(n.menuState.value===0?(n.closeMenu(),T(()=>{var s;return(s=y(n.buttonRef))==null?void 0:s.focus({preventScroll:!0})})):(p.preventDefault(),n.openMenu(),pt(()=>{var s;return(s=y(n.itemsRef))==null?void 0:s.focus({preventScroll:!0})})))}let h=Ze(P(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var p;let s={open:n.menuState.value===0},{...d}=e,i={ref:n.buttonRef,id:a,type:h.value,"aria-haspopup":"menu","aria-controls":(p=y(n.itemsRef))==null?void 0:p.id,"aria-expanded":n.menuState.value===0,onKeydown:o,onKeyup:c,onClick:f};return H({ourProps:i,theirProps:d,slot:s,attrs:t,slots:r,name:"MenuButton"})}}}),gt=j({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:l}){var u;let a=(u=e.id)!=null?u:`headlessui-menu-items-${Q()}`,n=U("MenuItems"),o=k(null);l({el:n.itemsRef,$el:n.itemsRef}),rt({container:P(()=>y(n.itemsRef)),enabled:P(()=>n.menuState.value===0),accept(s){return s.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}});function c(s){var d;switch(o.value&&clearTimeout(o.value),s.key){case w.Space:if(n.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),n.search(s.key);case w.Enter:if(s.preventDefault(),s.stopPropagation(),n.activeItemIndex.value!==null){let i=n.items.value[n.activeItemIndex.value];(d=y(i.dataRef.domRef))==null||d.click()}n.closeMenu(),he(y(n.buttonRef));break;case w.ArrowDown:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.Next);case w.ArrowUp:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.Previous);case w.Home:case w.PageUp:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.First);case w.End:case w.PageDown:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.Last);case w.Escape:s.preventDefault(),s.stopPropagation(),n.closeMenu(),T(()=>{var i;return(i=y(n.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case w.Tab:s.preventDefault(),s.stopPropagation(),n.closeMenu(),T(()=>We(y(n.buttonRef),s.shiftKey?X.Previous:X.Next));break;default:s.key.length===1&&(n.search(s.key),o.value=setTimeout(()=>n.clearSearch(),350));break}}function f(s){switch(s.key){case w.Space:s.preventDefault();break}}let h=at(),p=P(()=>h!==null?(h.value&O.Open)===O.Open:n.menuState.value===0);return()=>{var s,d;let i={open:n.menuState.value===0},{...m}=e,g={"aria-activedescendant":n.activeItemIndex.value===null||(s=n.items.value[n.activeItemIndex.value])==null?void 0:s.id,"aria-labelledby":(d=y(n.buttonRef))==null?void 0:d.id,id:a,onKeydown:c,onKeyup:f,role:"menu",tabIndex:0,ref:n.itemsRef};return H({ourProps:g,theirProps:m,slot:i,attrs:t,slots:r,features:J.RenderStrategy|J.Static,visible:p.value,name:"MenuItems"})}}}),ht=j({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:r,expose:l}){var u;let a=(u=e.id)!=null?u:`headlessui-menu-item-${Q()}`,n=U("MenuItem"),o=k(null);l({el:o,$el:o});let c=P(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===a:!1),f=tt(o),h=P(()=>({disabled:e.disabled,get textValue(){return f()},domRef:o}));fe(()=>n.registerItem(a,h)),Pe(()=>n.unregisterItem(a)),A(()=>{n.menuState.value===0&&c.value&&n.activationTrigger.value!==0&&T(()=>{var b,L;return(L=(b=y(o))==null?void 0:b.scrollIntoView)==null?void 0:L.call(b,{block:"nearest"})})});function p(b){if(e.disabled)return b.preventDefault();n.closeMenu(),he(y(n.buttonRef))}function s(){if(e.disabled)return n.goToItem(E.Nothing);n.goToItem(E.Specific,a)}let d=nt();function i(b){d.update(b)}function m(b){d.wasMoved(b)&&(e.disabled||c.value||n.goToItem(E.Specific,a,0))}function g(b){d.wasMoved(b)&&(e.disabled||c.value&&n.goToItem(E.Nothing))}return()=>{let{disabled:b}=e,L={active:c.value,disabled:b,close:n.closeMenu},{...Ee}=e;return H({ourProps:{id:a,ref:o,role:"menuitem",tabIndex:b===!0?void 0:-1,"aria-disabled":b===!0?!0:void 0,disabled:void 0,onClick:p,onFocus:s,onPointerenter:i,onMouseenter:i,onPointermove:m,onMousemove:m,onPointerleave:g,onMouseleave:g},theirProps:{...r,...Ee},slot:L,attrs:r,slots:t,name:"MenuItem"})}}});const C=e=>(me("data-v-1a33dccc"),e=e(),ve(),e),bt={class:"z-10 isolate w-full bg-white dark:bg-neutral-dark px-6 lg:px-16 justify-between items-center inline-flex gap-3 lg:gap-8 py-1"},xt={class:"items-center gap-3 flex"},yt={class:"items-center gap-2 flex overflow-hidden"},wt=C(()=>v("p",{class:"font-secundary font-medium hidden md:landscape:block lg:block m-0 text-neutral-dark/90 dark:text-white/90 text-sm lg:text-base"},[M(" Copyright ©Beaga"),v("br"),M(" Todos Direitos Reservados. 2024")],-1)),_t={class:"bg-secundary-500 pr-2 text-secundary-950 rounded-tr rounded-br flex items-center gap-2 overflow-hidden shadow-[8px_2px_12px_-3px] shadow-secundary-500"},kt=C(()=>v("svg",{class:"fill-white dark:fill-neutral-dark block size-11 drop-shadow-[4px_0px_16px] shadow-secundary-700/30"},[v("path",{d:"m 0,0 l 0,100 100,0"})],-1)),It={class:"inline-flex gap-8"},St={class:"hidden lg:block overflow-hidden"},Et={class:"flex items-center gap-3"},$t={class:"flex pl-3 items-center gap-2 lg:gap-8"},Mt=C(()=>v("span",{class:"sr-only"},"Mudar esquema de cor",-1)),Pt={key:0,class:"flex items-center gap-2"},Tt={key:1,class:"relative overflow-visible isolate z-0"},Dt={class:"hidden sm:block"},Nt=C(()=>v("span",{class:"sr-only"},"Menu da conta",-1)),jt={class:"items-center gap-3 flex"},Rt=C(()=>v("div",{class:"scroll self-stretch py-1 lg:py-2 bg-neutral-dark"},[v("p",{class:"m-0 font-secundary font-bold text-sm lg:text-base text-white/80"}," Produto X com desconto de 20% ")],-1)),ke=[{name:"uil:facebook",url:"#"},{name:"uil:instagram",url:"#"}],Ot=[{name:"profile",url:"",icon:"uil:user"},{name:"account",url:"",icon:"uil:setting"}],Ie=[{name:"Loja",url:"/store"},{name:"Punimentos",url:"/punishments"},{name:"Votar",url:"/vote"}],Ft=j({__name:"Header",props:{source:{},baseRouteName:{},baseRoute:{},breadcrumb:{type:Boolean},breadcrumbColor:{default:"secundary"},shoppingBag:{type:Boolean,default:!0}},emits:["toggle-shopping-list","header-height","toggle-menu"],setup(e,{emit:t}){const r=k(),l=Ne({attribute:"theme"}),u=je(l),a=F("USER_LOGGED",{logged:!1,name:"Matheus"}),n=Re(0);return(o,c)=>{const f=de,h=ie,p=ce,s=vt,d=ht,i=gt,m=mt;return _(),S("header",{ref_key:"header",ref:r,class:"min-h-20 w-full inline-flex flex-col shadow dark:shadow-neutral-lightgray/5 fixed top-0 left-0 z-[1000] isolate"},[v("div",bt,[v("div",xt,[v("div",yt,[v("div",{onClick:c[1]||(c[1]=g=>o.$emit("toggle-menu")),class:"p-1 rounded text-secundary-600 lg:hidden"},[x(f,{name:"uil:bars",size:"24px"}),v("span",{onClick:c[0]||(c[0]=g=>o.$emit("toggle-menu")),class:"sr-only"},"Mostrar menu")]),x(p,{class:"block size-[60px]",to:"/"},{default:I(()=>[x(h,{class:"object-contain size-full",src:"/assets/images/brand/logo__mages.png",format:"avif",placeholder:""})]),_:1}),wt]),v("ul",_t,[kt,(_(),S(N,null,R(ke,g=>v("li",{key:g.url},[x(p,{class:"flex justify-center items-center hover:active:bg-secundary-600 p-2 text-current rounded-xsm",to:g.url},{default:I(()=>[x(f,{name:g.name,class:"size-6"},null,8,["name"])]),_:2},1032,["to"])])),64))])]),v("div",It,[v("nav",St,[v("ul",Et,[(_(),S(N,null,R(Ie,g=>x(p,{key:g.url,to:g.url,class:"block font-secundary px-3 py-xsm text-lg capitalize text-center rounded text-neutral-dark/90 dark:text-white/90 hover:active:text-neutral-dark dark:hover:active:text-white"},{default:I(()=>[M(D(g.name),1)]),_:2},1032,["to"])),64))])]),v("div",$t,[v("div",{onClick:c[2]||(c[2]=g=>$(u)()),class:"p-2 text-neutral-dark dark:text-white bg-secundary-500 hover:active:bg-secundary-600 rounded-sd flex justify-center"},[$(l)?(_(),V(f,{key:0,name:"uil:moon",class:"size-5"})):(_(),V(f,{key:1,name:"uil:sun",class:"size-5"})),Mt]),$(a).logged?(_(),S("div",Tt,[x(m,{as:"div"},{default:I(()=>[v("div",null,[x(s,{class:"px-2 py-1 flex items-center gap-3 text-neutral-dark dark:text-white font-secundary font-bold text-base leading-5 lg:text-2xl lg:leading-7 hover:active:bg-neutral-lightgray/50 hover:active:bg-neutral-darken hover:active:ring-1 hover:active:ring-neutral-lightgray"},{default:I(()=>[x(h,{class:"size-12 lg:size-16 object-cover rounded-full shadow-inner aspect-square",src:"/assets/images/users/mock-image.jpg",format:"avif",placeholder:""}),v("span",Dt,D($(a).name),1),x(f,{name:"mdi:chevron-down"}),Nt]),_:1})]),x(Te,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:I(()=>[x(i,{class:"w-56 flex rounded-md flex-col p-2 divide-y divide-neutral-dark/20 dark:divide-neutral-lightgray/20 ring-1 ring-neutral-dark/5 absolute z-[900] isolate origin-top-right mt-2 top-full right-0 shadow-lg bg-white text-neutral-dark dark:bg-neutral-dark dark:text-white focus:outline-none"},{default:I(()=>[(_(),S(N,null,R(Ot,g=>x(d,{class:"hover:active:bg-neutral-lightgray/80 hover:active:text-neutral-dark dark:hover:active:bg-neutral-lightgray/10 dark:hover:active:text-white px-3 py-3"},{default:I(({active:b})=>[x(p,{class:K(["flex gap-2 space-between font-secundary text-base capitalize",{"bg-neutral-lightgray":b}]),to:g.url},{default:I(()=>[x(f,{class:"basis-4",name:g.icon},null,8,["name"]),M(" "+D(g.name),1)]),_:2},1032,["class","to"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})])):(_(),S("div",Pt,[v("button",{onClick:c[3]||(c[3]=g=>("navigateTo"in o?o.navigateTo:$(ne))("/register")),class:"hidden text-base lg:text-lg md:flex justify-center items-center gap-3 text-center font-secundary font-semibold px-3 py-2 rounded-lg text-neutral-dark/90 dark:text-white/90 bg-none hover:active:text-neutral-dark dark:hover:active:text-white",type:"button"}," Registrar "),v("button",{onClick:c[4]||(c[4]=g=>("navigateTo"in o?o.navigateTo:$(ne))("/login")),class:"text-base lg:text-lg flex justify-center items-center gap-3 text-center font-secundary font-semibold px-3 py-2 bg-gradient-to-r from-secundary-500 to-secundary-600 rounded-lg text-white/90 hover:active:text-white"},[M(" Entrar "),x(f,{name:"uil:arrow-right"})])]))])])]),o.source&&o.breadcrumb&&o.breadcrumbColor?(_(),S("div",{key:0,class:K(["self-stretch px-6 lg:px-16 py-2 justify-between items-center inline-flex",[o.breadcrumbColor==="primary"?"bg-primary-600":"bg-secundary-600"]])},[v("div",jt,[o.baseRoute?(_(),V(p,{key:0,to:o.baseRoute.fullPath,class:"text-sm capitalize m-0 px-2 py-1 items-center gap-2.5 font-secundary font-semibold text-white"},{default:I(()=>[M(D(o.baseRoute.name),1)]),_:1},8,["to"])):W("",!0)]),o.shoppingBag?(_(),S("button",{key:0,onClick:c[5]||(c[5]=g=>o.$emit("toggle-shopping-list")),class:K(["pointer px-2 py-1 bg-white rounded-sd justify-center items-center gap-2 flex text-sm lg:text-base font-secundary font-medium capitalize",[o.breadcrumbColor==="primary"?"text-primary-950":"text-secundary-950"]])},[x(f,{class:"size-4 lg:size-6",name:"uil:shopping-bag"}),M(" Carrinho ("+D($(n).count)+") ",1)],2)):W("",!0)],2)):W("",!0),Rt],512)}}}),an=ue(Ft,[["__scopeId","data-v-1a33dccc"]]),Se=e=>(me("data-v-b350f767"),e=e(),ve(),e),At={class:"w-full max-w-full overflow-hidden px-6 py-10 bg-white dark:bg-neutral-dark flex-col justify-center gap-16 inline-flex"},Ct={class:"self-stretch flex flex-col lg:flex-row justify-center gap-6 lg:justify-between"},Lt=De('<div class="self-stretch flex-col gap-3 flex" data-v-b350f767><h4 class="uppercase text-neutral-dark dark:text-white text-2xl lg:text-3xl font-normal" data-v-b350f767>Seja Inalcançável</h4><p class="font-secundary font-medium m-0 text-neutral-dark dark:text-white text-base lg:text-lg" data-v-b350f767><strong class="text-secundary-600 dark:text-secundary-500" data-v-b350f767>Faça parte da Beaga</strong> para adquirir experiência de jogo com jogadores experiêntes e <strong class="text-secundary-600 dark:text-secundary-500" data-v-b350f767> triplique a sua experiência no jogo </strong></p></div>',1),Bt=["src"],zt={class:"inline-flex flex-col self-stretch justify-center items-center flex-wrap gap-2"},Ht={class:"flex flex-col lg:flex-row justify-center items-center gap-3"},Ut={class:"self-stretch justify-center items-center flex-col lg:flex-row gap-2 lg:gap-3 flex"},Vt=Se(()=>v("p",{class:"font-secundary text-center lg:text-left m-0 text-neutral-dark/90 dark:text-white/90 text-base lg:text-md"},[M(" Copyright @Beaga"),v("br"),M(" Todos Direitos Reservados. 2024")],-1)),Kt={class:"bg-secundary-500 pr-2 text-secundary-950 rounded-tr rounded-br flex items-center gap-2 shadow-[8px_2px_12px_-3px] shadow-secundary-500 overflow-hidden"},Wt=Se(()=>v("svg",{class:"size-11 fill-white dark:fill-neutral-dark drop-shadow-[4px_0px_8px] shadow-secundary-700"},[v("path",{d:"m 0,0 l 0,100 100,0"})],-1)),qt={class:"w-full flex-auto"},Gt={class:"rounded-tr rounded-br items-center justify-center gap-3 flex flex-wrap"},Xt=j({__name:"Footer",setup(e){const t=F("DISCORD_WIDGET_URL");return(r,l)=>{const u=ie,a=ce,n=de;return _(),S("footer",At,[v("div",Ct,[Lt,v("iframe",{src:$(t),class:"self-stretch rounded-lg w-full h-300",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"},null,8,Bt)]),v("div",zt,[v("div",Ht,[v("div",Ut,[x(a,{to:"/"},{default:I(()=>[x(u,{class:"block size-[60px] object-contain",src:"/assets/images/brand/logo__mages.png",format:"avif",placeholder:""})]),_:1}),Vt]),v("ul",Kt,[Wt,(_(!0),S(N,null,R($(ke),o=>(_(),S("li",{key:o.url},[x(a,{class:"text-neutral-dark block hover:active:bg-secundary-600 p-2 rounded-sd",to:o.url},{default:I(()=>[x(n,{class:"size-6",name:o.name},null,8,["name"])]),_:2},1032,["to"])]))),128))])]),v("nav",qt,[v("ul",Gt,[(_(!0),S(N,null,R($(Ie),o=>(_(),S("li",null,[x(a,{class:"active relative z-0 isolate capitalize block p-2 text-center font-secundary font-medium px-3 py-2 rounded text-neutral-dark/90 hover:active:text-neutral-dark dark:text-white/90 dark:hover:active:text-white after:absolute after:rounded after:left-0 after:bottom-0 after:w-[0px] after:block hover:after:w-full transition-all duration-1000 ease after:h-0.5 after:bg-neutral-dark dark:after:bg-white",to:o.url},{default:I(()=>[M(D(o.name),1)]),_:2},1032,["to"])]))),256))])])])])}}}),ln=ue(Xt,[["__scopeId","data-v-b350f767"]]);export{an as _,ln as a};
