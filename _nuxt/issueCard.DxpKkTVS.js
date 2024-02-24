import{f as i,o as s,c as r,a as t,t as a,b as l,d as p,h as d,i as m}from"./entry.CEWwMDFY.js";import u from"./Icon.CN_vgrHq.js";const f={class:"bg-primary-950 dark:bg-primary-900 px-16 py-16 w-full"},x={class:"text-white text-center text-3xl lg:text-4xl font-normal uppercase m-0"},V=i({__name:"HelpHeader",props:{title:{}},setup(n){return(e,c)=>(s(),r("div",f,[t("h2",x,a(e.title),1)]))}}),_={class:"flex flex-col max-w-300 lg:max-w-400 min-h-200 h-full p-6 gap-3 justify-between items-center bg-white dark:bg-neutral-dark dark:border dark:border-white/10 rounded-xl overflow-hidden"},h={class:"self-stretch hidden lg:flex items-center justify-center text-primary-400 bg-primary-950 dark:bg-primary-900 rounded-xl px-6 py-12 z-0"},b={class:"self-stretch flex flex-col gap-6 justify-between"},g={class:"flex flex-col gap-3"},y={class:"font-secundary font-bold text-lg lg:text-2xl uppercase text-primary-950 dark:text-white"},v={class:"font-secundary first-letter:capitalize text-base lg:text-md text-neutral-dark/75 dark:text-white/75"},k={class:"font-secundary font-semibold capitalize text-white flex p-3 lg:p-6 gap-3 justify-center items-center self-stretch bg-gradient-to-b from-primary-600 to-primary-700 hover:active:from-primary-700 hover:active:to-primary-800 rounded-sd pointer"},L=i({__name:"IssueSolution",props:{id:{},title:{},description:{},icon:{},ctaLabel:{},ctaIcon:{}},setup(n){return(e,c)=>{const o=u;return s(),r("div",_,[t("div",h,[l(o,{name:e.icon,class:"size-20"},null,8,["name"])]),t("div",b,[t("hgroup",g,[t("h3",y,a(e.title),1),t("span",v,a(e.description),1)]),t("button",k,[p(a(e.ctaLabel)+" ",1),e.ctaIcon?(s(),d(o,{key:0,class:"size-6",name:e.ctaIcon},null,8,["name"])):m("",!0)])])])}}}),z=[{id:0,title:"minha conta foi invadida",description:"tendo problemas com a sua conta? Vejá os possíveis soluções para este problema.",icon:"uil:user-circle",ctaLabel:"Exibir"},{id:1,title:"consigo logar na minha conta",description:"tendo problemas com a sua conta? Vejá os possíveis soluções para este problema.",icon:"uil:user-exclamation",ctaLabel:"Exibir"},{id:2,title:"vincular minha conta Google",description:"tendo problemas com a sua conta? Vejá os possíveis soluções para este problema.",icon:"uil:user-exclamation",ctaLabel:"Exibir"}];export{V as _,L as a,z as i};
