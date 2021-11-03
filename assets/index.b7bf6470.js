import{r as $,a as x,o as l,c,b as t,i as k,t as d,u as p,d as z,e as g,f as m,w,F as N,g as D,h as L,j,k as F}from"./vendor.97085157.js";const A=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}};A();const C={key:0,class:"flex justify-between bg-white shadow"},I={class:"px-4 py-6 max-w-7xl sm:px-6 lg:px-8"},O={class:"px-4 py-6 max-w-7xl sm:px-6 lg:px-8 text-3xl font-bold leading-tight text-gray-900"},V={setup(r){let s=$(0);setInterval(()=>{s.value++},1e3);let a=new Date().getDay(),o=new Date().getFullYear(),e=new Date().getMonth()+1,n=new Date().getDate(),_=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"][a],u=o+"\u5E74"+e+"\u6708"+n+"\u65E5";return(h,y)=>{const b=x("router-view");return l(),c("div",null,[h.$route.meta.title?(l(),c("header",C,[t("div",I,[t("h1",{onClick:y[0]||(y[0]=ue=>k(s)?s.value=0:s=0),class:"text-3xl font-bold leading-tight text-gray-900"},d(h.$route.meta.title)+" / "+d(p(s)),1)]),t("span",O,d(p(u))+"/"+d(p(_)),1)])):z("",!0),t("main",null,[g(b)])])}}};var f=(r,s)=>{for(const[a,o]of s)r[a]=o;return r};const B={data(){return{str_zr_arr:["\u95EB\u9022\u5409\u2014\u2014\u5F20\u6DD9\u946B","\u674E\u5148\u6D0B\u2014\u2014\u5F20\u5F66\u7956","\u5218\u51C7\u2014\u2014\u5B59\u667A\u8C6A"],str_zr_now:">>>Loading>>>",str_zr_nex:">>>Loading>>>"}},mounted(){var r=new Date().getTime(),s=1635638401e3,a=r-s,o=a/(1e3*3600*24);this.str_zr_now=this.str_zr_arr[parseInt(o)%3],this.str_zr_nex=this.str_zr_arr[parseInt(o+1)%3],console.log(this.str_zr_now),console.log(this.str_zr_nex)}},M={class:"bg-gray-50"},E={class:"max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},H={class:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},P=t("br",null,null,-1),R={class:"text-gray-400"},S=t("i",{class:"text-xl text-gray-500"},"8:00:01 AM\u5237\u65B0 ",-1),T={class:"flex mt-8 lg:flex-shrink-0 lg:mt-0"},q={class:"inline-flex rounded-md shadow"},K=m("\u6C34\u624B");function W(r,s,a,o,e,n){const i=x("router-link");return l(),c("div",M,[t("div",E,[t("h2",H,[m(" \u4ECA\u65E5\uFF1A"+d(e.str_zr_now)+" ",1),P,t("span",R,"\u4E0B\u6B21\uFF1A"+d(e.str_zr_nex),1)]),S,t("div",T,[t("div",q,[g(i,{to:"/about",class:"inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"},{default:w(()=>[K]),_:1})])])])])}var Y=f(B,[["render",W]]);const G={data(){return{str_arr:["\u95EB\u9022\u5409","\u5218\u51C7","\u5B59\u667A\u8C6A","\u674E\u5148\u6D0B","\u5F20\u5F66\u7956","\u5F20\u6DD9\u946B"]}}},J={class:"bg-gray-50"},Q={class:"max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},U={class:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},X=t("br",null,null,-1),Z={class:"flex mt-8 lg:flex-shrink-0 lg:mt-0"},ee={class:"inline-flex rounded-md shadow"},te=m("\u503C\u65E5");function se(r,s,a,o,e,n){const i=x("router-link");return l(),c("div",J,[t("div",Q,[t("h2",U,[t("span",null,[(l(!0),c(N,null,D(e.str_arr,(_,u)=>(l(),c("span",{class:"mx-4",key:u},d(_),1))),128))]),X]),t("div",Z,[t("div",ee,[g(i,{to:"/t313/",class:"inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"},{default:w(()=>[te]),_:1})])])])])}var ne=f(G,[["render",se]]);const oe={},re={class:"bg-white shadow"},ae=t("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[t("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1),ie=[ae];function le(r,s){return l(),c("header",re,ie)}var ce=f(oe,[["render",le]]);const de=[{path:"/t313",component:Y,meta:{title:"\u503C\u65E5"}},{path:"/about",meta:{title:"\u6C34\u624B"},component:ne},{path:"/:path(.*)",component:ce}],v=L(V),_e=j({history:F(),routes:de});v.use(_e);v.mount("#app");
