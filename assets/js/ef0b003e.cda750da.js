"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[6643],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:12,sidebar_label:"\u6dfb\u52a0StreamPark"},i="\u6dfb\u52a0StreamPark",s={unversionedId:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark",id:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark",title:"\u6dfb\u52a0StreamPark",description:"\u521d\u59cb\u5316StreamPark\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark.md",sourceDirName:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1",slug:"/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark",draft:!1,editUrl:"https://github.com/datasophon/datasophon-website/docs/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"\u6dfb\u52a0StreamPark"},sidebar:"docSidebar",previous:{title:"\u6dfb\u52a0DolphinScheduler",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler"},next:{title:"Alert Manage",permalink:"/datasophon-website/docs/current/category/alert-manage"}},c={},p=[],l={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6dfb\u52a0streampark"},"\u6dfb\u52a0StreamPark"),(0,n.kt)("p",null,"\u521d\u59cb\u5316StreamPark\u6570\u636e\u5e93\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE DATABASE streampark DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;\nGRANT ALL PRIVILEGES ON streampark.* TO 'streampark'@'%' IDENTIFIED BY 'streampark';\nGRANT ALL PRIVILEGES ON streampark.* TO 'streampark'@'localhost' IDENTIFIED BY 'streampark';\nflush privileges;\n")),(0,n.kt)("p",null,"\u6267\u884c/opt/datasophon/DDP/packages\u76ee\u5f55\u4e0b",(0,n.kt)("strong",{parentName:"p"},"streampark.sql"),"\u521b\u5efastreampark\u6570\u636e\u5e93\u8868\u3002"),(0,n.kt)("p",null,"\u6dfb\u52a0StreamPark\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20221128213117639",src:r(2200).Z,width:"3146",height:"1707"})),(0,n.kt)("p",null,"\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u914d\u7f6e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20221128213202009",src:r(6014).Z,width:"3152",height:"1685"})),(0,n.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\u53ef\u67e5\u770bStreamPark\u603b\u89c8\u9875\u9762\uff0c\u53ef\u901a\u8fc7WebUi\u8df3\u8f6c\u5230StreamPark\u7528\u6237\u9875\u9762\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20221128213744193",src:r(4256).Z,width:"3181",height:"1567"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20221128213402376",src:r(3215).Z,width:"3165",height:"1686"})))}m.isMDXComponent=!0},2200:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20221128213117639-6caa440102a0b25102e8e28037ad58e9.png"},6014:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20221128213202009-6de66987ae123b77d49f03d3a831740c.png"},3215:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20221128213402376-12f545fac33c6668554ac2bb81457cae.png"},4256:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20221128213744193-6e96838c9b2d4e8bf4ef25311ceba6ec.png"}}]);