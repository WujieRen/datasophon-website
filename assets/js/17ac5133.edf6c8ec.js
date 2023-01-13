"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[3485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:11,sidebar_label:"\u6dfb\u52a0DolphinScheduler"},l="\u6dfb\u52a0DolphinScheduler",o={unversionedId:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler",id:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler",title:"\u6dfb\u52a0DolphinScheduler",description:"\u521d\u59cb\u5316DolphinScheduler\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler.md",sourceDirName:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1",slug:"/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler",draft:!1,editUrl:"https://github.com/datasophon/datasophon-website/docs/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"\u6dfb\u52a0DolphinScheduler"},sidebar:"docSidebar",previous:{title:"\u6dfb\u52a0Ranger",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Ranger"},next:{title:"\u6dfb\u52a0StreamPark",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark"}},c={},p=[],s={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6dfb\u52a0dolphinscheduler"},"\u6dfb\u52a0DolphinScheduler"),(0,a.kt)("p",null,"\u521d\u59cb\u5316DolphinScheduler\u6570\u636e\u5e93\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE DATABASE dolphinscheduler DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;\nGRANT ALL PRIVILEGES ON dolphinscheduler.* TO 'dolphinscheduler'@'%' IDENTIFIED BY 'dolphinscheduler';\nGRANT ALL PRIVILEGES ON dolphinscheduler.* TO 'dolphinscheduler'@'localhost' IDENTIFIED BY 'dolphinscheduler';\nflush privileges;\n")),(0,a.kt)("p",null,"\u6267\u884c/opt/datasophon/DDP/packages\u76ee\u5f55\u4e0b",(0,a.kt)("strong",{parentName:"p"},"dolphinscheduler_mysql.sql"),"\u521b\u5efadolphinscheduler\u6570\u636e\u5e93\u8868\u3002"),(0,a.kt)("p",null,"\u6dfb\u52a0DolphinScheduler\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221128175432778",src:n(2847).Z,width:"3121",height:"1612"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221128175519219",src:n(7771).Z,width:"3150",height:"1672"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221128175551807",src:n(6109).Z,width:"3156",height:"1684"})),(0,a.kt)("p",null,"\u6839\u636e\u5b9e\u9645\u60c5\u51b5\uff0c\u4fee\u6539DolphinScheduler\u914d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221128175644449",src:n(2679).Z,width:"3139",height:"1629"})),(0,a.kt)("p",null,"\u5f00\u59cb\u5b89\u88c5DolphinScheduler\uff0c\u5b89\u88c5\u6210\u529f\u540e\u53ef\u4ee5\u770b\u5230DolphinScheduler\u603b\u89c8\u9875\u9762\uff0c\u53ef\u4ee5\u901a\u8fc7WebUi\u6253\u5f00DolphinScheduler\u9875\u9762\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221128180511535",src:n(5481).Z,width:"3165",height:"1600"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221128180038155",src:n(6404).Z,width:"3200",height:"1701"})))}d.isMDXComponent=!0},2847:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221128175432778-d84f548266cff6d5064bc4da602fbd14.png"},7771:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221128175519219-530e91ce5b4c09d794b20ebbb8a5aa17.png"},6109:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221128175551807-d764e934caf8abe2b00a48f7d064a321.png"},2679:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221128175644449-c91d1b5abcadffbbac88aff66a7b9e0a.png"},6404:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221128180038155-547ded211a5e2bdfa28ea89dde636e17.png"},5481:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221128180511535-d29056985f16d568512dd1f1bcf954c5.png"}}]);