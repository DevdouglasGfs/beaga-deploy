import{_ as z}from"./nuxt-img.Sg0jf9o6.js";import{_ as C}from"./nuxt-link.DS0XSLuU.js";import B from"./Icon.CxuoU4Q4.js";import{b as V,p as T}from"./networks.DT5uzyYQ.js";import{f as I,k as j,o as a,c as l,a as e,b as n,w as u,F as x,r as h,g as d,n as y,d as i,t as m,h as v,j as $,i as b,m as L,J as M,p as O,e as P}from"./entry.Y67jQ8Xo.js";import{A}from"./auth.SkWpm5US.js";import{a as F,b as q}from"./index.BE1q25l2.js";import{_ as E}from"./_plugin-vue_export-helper.DlAUqK2U.js";var U=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(U||{}),W=(s=>(s[s.Pointer=0]="Pointer",s[s.Other=1]="Other",s))(W||{});const G={class:"z-10 isolate w-full bg-white dark:bg-neutral-dark px-6 lg:px-16 justify-between items-center inline-flex gap-3 lg:gap-8 py-1"},H={class:"items-center gap-3 flex"},J={class:"items-center gap-2 flex overflow-hidden"},X=e("p",{class:"font-secundary font-medium hidden md:landscape:block lg:block m-0 text-neutral-dark/90 dark:text-white/90 text-sm lg:text-base"},[i(" Copyright ©Beaga"),e("br"),i(" Todos Direitos Reservados. 2024")],-1),Z={class:"max-[400px]:hidden flex-auto bg-secundary-500 pr-2 text-secundary-950 rounded-tr rounded-br flex items-center gap-2 overflow-hidden shadow-[8px_2px_12px_-3px] shadow-secundary-500"},K=e("svg",{class:"fill-white dark:fill-neutral-dark block size-11 drop-shadow-[4px_0px_16px] shadow-secundary-700/30"},[e("path",{d:"m 0,0 l 0,100 100,0"})],-1),Q=e("span",{class:"sr-only"},"Mostrar redes sociais",-1),Y={class:"inline-flex gap-8 h-full"},ee={class:"hidden h-full self-stretch lg:block overflow-hidden"},te={class:"flex h-full justify-center items-center gap-3"},se={class:"flex pl-3 items-center gap-2 lg:gap-8 self-stretch h-full"},ae=e("span",{class:"sr-only"},"Mudar esquema de cor",-1),re={key:0,class:"flex items-center gap-2 self-stretch"},oe={class:"items-center gap-3 flex"},ne=e("div",{class:"scroll self-stretch py-1 lg:py-2 bg-neutral-dark"},[e("p",{class:"m-0 font-secundary font-bold text-sm lg:text-base text-white/80"}," Produto X com desconto de 20% ")],-1),N=[{name:"Loja",url:"/store"},{name:"Punimentos",url:"/punishments"},{name:"Votar",url:"/vote"},{name:"Ajuda",url:"/help"}],Te=I({__name:"Header",props:{source:{},baseRouteName:{},baseRoute:{},breadcrumb:{type:Boolean},breadcrumbColor:{default:"secundary"},shoppingBag:{type:Boolean,default:!0}},emits:["toggle-shopping-list","header-height","toggle-menu"],setup(s,{emit:k}){new A(!1).UserCollection.getUsers()[0];const w=j(),f=V({attribute:"theme"}),p=F(f),_=q(0);return j(!1),(t,r)=>{const c=B,D=z,g=C;return a(),l("header",{ref_key:"header",ref:w,class:"min-h-20 w-full inline-flex flex-col shadow dark:shadow-neutral-lightgray/5 fixed top-0 left-0 z-[1000] isolate"},[e("div",G,[e("div",H,[e("div",J,[e("div",{onClick:r[1]||(r[1]=o=>t.$emit("toggle-menu")),class:"p-1 rounded text-secundary-600 lg:hidden"},[n(c,{name:"uil:bars",size:"24px"}),e("span",{onClick:r[0]||(r[0]=o=>t.$emit("toggle-menu")),class:"sr-only"},"Mostrar menu")]),n(g,{class:"block size-[60px]",to:"/"},{default:u(()=>[n(D,{class:"object-contain size-full",src:"/assets/images/brand/logo__mages.png",format:"avif",placeholder:"/assets/images/brand/logo__mages.png"})]),_:1}),X]),e("ul",Z,[K,(a(!0),l(x,null,h(d(T),o=>(a(),l("li",{key:o.url,class:"limit-2"},[n(g,{class:"flex justify-center items-center hover:active:bg-secundary-600 p-2 text-current rounded-xsm",to:o.url,target:"_blank"},{default:u(()=>[n(c,{name:o.name,class:"size-4 lg:size-6"},null,8,["name"])]),_:2},1032,["to"])]))),128)),e("button",{onClick:r[2]||(r[2]=o=>("navigateTo"in t?t.navigateTo:d(y))("#footer")),class:"flex justify-center items-center bg-secundary-100 hover:active:bg-secundary-200 p-2 text-current rounded-xsm"},[n(c,{name:"uil:angle-down",class:"size-4 lg:size-6"}),Q])])]),e("div",Y,[e("nav",ee,[e("ul",te,[(a(),l(x,null,h(N,o=>e("li",{class:"block",key:o.url},[n(g,{to:o.url,class:"block font-secundary px-3 py-xsm text-base capitalize text-center rounded text-neutral-dark/90 dark:text-white/90 hover:active:text-neutral-dark dark:hover:active:text-white"},{default:u(()=>[i(m(o.name),1)]),_:2},1032,["to"])])),64))])]),e("div",se,[e("div",{onClick:r[3]||(r[3]=o=>d(p)()),class:"p-2 text-neutral-dark bg-secundary-500 hover:active:bg-secundary-600 rounded-sd flex justify-center"},[d(f)?(a(),v(c,{key:0,name:"uil:moon",class:"size-6"})):(a(),v(c,{key:1,name:"uil:sun",class:"size-6"})),ae]),(a(),l("div",re,[e("button",{onClick:r[4]||(r[4]=o=>("navigateTo"in t?t.navigateTo:d(y))("/register")),class:"hidden text-base lg:text-lg md:flex justify-center items-center gap-3 text-center font-secundary font-semibold px-3 py-2 rounded-lg text-neutral-dark/90 dark:text-white/90 bg-none hover:active:text-neutral-dark dark:hover:active:text-white min-h-max h-full hover:active:underline hover:active:underline-offset-2",type:"button"}," Registrar "),e("button",{onClick:r[5]||(r[5]=o=>("navigateTo"in t?t.navigateTo:d(y))("/login")),class:"text-base lg:text-lg flex justify-center items-center gap-3 text-center font-secundary font-semibold px-3 py-2 bg-gradient-to-r from-secundary-500 to-secundary-600 hover:active:from-secundary-600 hover:active:to-secundary-700 rounded-xl text-white/90 hover:active:text-white min-h-max h-full"},[i(" Entrar "),n(c,{name:"uil:arrow-right"})])]))])])]),t.source&&t.breadcrumb&&t.breadcrumbColor?(a(),l("div",{key:0,class:$(["self-stretch px-6 lg:px-16 py-2 justify-between items-center inline-flex",[t.breadcrumbColor==="primary"?"bg-primary-600":"bg-secundary-600"]])},[e("div",oe,[t.baseRoute?(a(),v(g,{key:0,to:t.baseRoute.fullPath,class:"text-sm capitalize m-0 px-2 py-1 items-center gap-2.5 font-secundary font-semibold text-white"},{default:u(()=>[i(m(t.baseRoute.name),1)]),_:1},8,["to"])):b("",!0)]),t.shoppingBag?(a(),l("button",{key:0,onClick:r[6]||(r[6]=o=>t.$emit("toggle-shopping-list")),class:$(["pointer px-2 py-1 bg-white rounded-sd justify-center items-center gap-2 flex text-sm lg:text-base font-secundary font-medium capitalize",[t.breadcrumbColor==="primary"?"text-primary-950":"text-secundary-950"]])},[n(c,{class:"size-4 lg:size-6",name:"uil:shopping-bag"}),i(" Carrinho ("+m(d(_).count)+") ",1)],2)):b("",!0)],2)):b("",!0),ne],512)}}}),R=s=>(O("data-v-e9fd516a"),s=s(),P(),s),le={id:"footer",class:"w-full max-w-full overflow-hidden px-6 py-10 bg-white dark:bg-neutral-dark flex-col justify-center gap-16 inline-flex"},de={class:"self-stretch flex flex-col md:landscape:flex-row justify-center gap-6 md:landscape:justify-evenly"},ie=M('<div class="self-stretch flex-col gap-2 flex md:landscape:max-w-400" data-v-e9fd516a><h4 class="uppercase text-neutral-dark dark:text-white text-lg lg:text-2xl font-normal" data-v-e9fd516a>Seja Inalcançável</h4><p class="font-secundary font-medium m-0 text-neutral-dark dark:text-white text-sm lg:text-md" data-v-e9fd516a><strong class="text-secundary-600 dark:text-secundary-500" data-v-e9fd516a>Faça parte da Beaga</strong> para adquirir experiência de jogo com jogadores experiêntes e <strong class="text-secundary-600 dark:text-secundary-500" data-v-e9fd516a> triplique a sua experiência no jogo </strong></p></div>',1),ce=["src"],ue={class:"inline-flex flex-col self-stretch justify-center items-center flex-wrap gap-2"},pe={class:"flex flex-col md:landscape:flex-row justify-center items-center gap-3"},me={class:"self-stretch justify-center items-center flex-col md:landscape:flex-row gap-2 lg:gap-3 flex"},fe=R(()=>e("p",{class:"font-secundary font-medium text-center md:landscape:text-left m-0 text-neutral-dark/90 dark:text-white/90 text-sm lg:text-md"},[i(" Copyright @Beaga"),e("br"),i(" Todos Direitos Reservados. 2024")],-1)),ge={class:"bg-secundary-500 pr-2 text-secundary-950 rounded-tr rounded-br flex items-center gap-2 shadow-[8px_2px_12px_-3px] shadow-secundary-500 overflow-hidden"},xe=R(()=>e("svg",{class:"size-11 fill-white dark:fill-neutral-dark drop-shadow-[4px_0px_8px] shadow-secundary-700"},[e("path",{d:"m 0,0 l 0,100 100,0"})],-1)),he={class:"sr-only"},_e={class:"w-full flex-auto"},ye={class:"rounded-tr rounded-br items-center justify-center gap-3 flex flex-wrap"},ve=I({__name:"Footer",setup(s){const k=L("DISCORD_WIDGET_URL");return(S,w)=>{const f=z,p=C,_=B;return a(),l("footer",le,[e("div",de,[ie,e("iframe",{src:d(k),class:"self-stretch rounded-xl w-full md:landscape:max-w-400 h-300 md:landscape:h-200",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"},null,8,ce)]),e("div",ue,[e("div",pe,[e("div",me,[n(p,{to:"/"},{default:u(()=>[n(f,{class:"block size-[60px] object-contain",src:"/assets/images/brand/logo__mages.png",format:"avif",placeholder:"/assets/images/brand/logo__mages.png"})]),_:1}),fe]),e("ul",ge,[xe,(a(!0),l(x,null,h(d(T),t=>(a(),l("li",{key:t.url},[n(p,{class:"text-neutral-dark block hover:active:bg-secundary-600 p-2 rounded-sd",to:t.url},{default:u(()=>[n(_,{class:"size-6",name:t.name},null,8,["name"])]),_:2},1032,["to"]),e("span",he," Acessar nosso "+m(t.name.split(":").at(1)),1)]))),128))])]),e("nav",_e,[e("ul",ye,[(a(!0),l(x,null,h(d(N),t=>(a(),l("li",null,[n(p,{class:"active relative z-0 isolate capitalize block p-2 text-center font-secundary font-medium px-3 py-2 rounded text-neutral-dark/90 hover:active:text-neutral-dark dark:text-white/90 dark:hover:active:text-white after:absolute after:rounded after:left-0 after:bottom-0 after:w-[0px] after:block hover:after:w-full transition-all duration-1000 ease after:h-0.5 after:bg-neutral-dark dark:after:bg-white",to:t.url},{default:u(()=>[i(m(t.name),1)]),_:2},1032,["to"])]))),256))])])])])}}}),Ie=E(ve,[["__scopeId","data-v-e9fd516a"]]);export{Te as _,Ie as a};
