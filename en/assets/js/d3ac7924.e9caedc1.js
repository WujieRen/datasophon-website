"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[9082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,sidebar_label:"\u6dfb\u52a0HDFS"},i=void 0,s={unversionedId:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0HDFS",id:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0HDFS",title:"\u6dfb\u52a0HDFS",description:"\u6dfb\u52a0HDFS",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0HDFS.md",sourceDirName:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1",slug:"/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0HDFS",permalink:"/datasophon-website/en/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0HDFS",draft:!1,editUrl:"https://github.com/datasophon/datasophon-website/docs/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0HDFS.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u6dfb\u52a0HDFS"},sidebar:"docSidebar",previous:{title:"\u6dfb\u52a0ZooKeeper",permalink:"/datasophon-website/en/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0ZooKeeper"},next:{title:"\u6dfb\u52a0YARN",permalink:"/datasophon-website/en/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0YARN"}},c={},l=[{value:"\u6dfb\u52a0HDFS",id:"\u6dfb\u52a0hdfs",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6dfb\u52a0hdfs"},"\u6dfb\u52a0HDFS"),(0,a.kt)("p",null,"\u90e8\u7f72HDFS\uff0c\u5176\u4e2dJournalNode\u9700\u90e8\u7f72\u4e09\u53f0\uff0cNameNode\u90e8\u7f72\u4e24\u53f0\uff0cZKFC\u548cNameNode\u90e8\u7f72\u5728\u76f8\u540c\u673a\u5668\u4e0a\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221106221553593",src:n(2910).Z,width:"3197",height:"1638"})),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u4e0b\u4e00\u6b65\u3011\uff0c\u9009\u62e9DataNode\u90e8\u7f72\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221106221704101",src:n(5075).Z,width:"3191",height:"1494"})),(0,a.kt)("p",null,"\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u914d\u7f6e\uff0c\u4f8b\u5982\u4fee\u6539DataNode\u6570\u636e\u5b58\u50a8\u76ee\u5f55\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221106221847247",src:n(2639).Z,width:"3200",height:"1698"})),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u4e0b\u4e00\u6b65\u3011\uff0c\u5f00\u59cb\u5b89\u88c5Hdfs\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221106222043504",src:n(2170).Z,width:"3200",height:"1676"})),(0,a.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u5373\u53ef\u67e5\u770bHDFS\u670d\u52a1\u603b\u89c8\u9875\u9762\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221106222540788",src:n(4978).Z,width:"3177",height:"1663"})))}u.isMDXComponent=!0},2910:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221106221553593-f72746c607883f900c3bc28fe427260e.png"},5075:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221106221704101-b3e872ec394779fa837d58e7212ea9e1.png"},2639:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221106221847247-8bbc1733a47c77f7ffa7546e92d638fb.png"},2170:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221106222043504-df311a042e165860bb8be087fb967d41.png"},4978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221106222540788-e80ad98b06713ba28557ca05bdc059f6.png"}}]);