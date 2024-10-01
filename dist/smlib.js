var te=Object.defineProperty;var re=(l,f,h)=>f in l?te(l,f,{enumerable:!0,configurable:!0,writable:!0,value:h}):l[f]=h;var o=(l,f,h)=>(re(l,typeof f!="symbol"?f+"":f,h),h),X=(l,f,h)=>{if(!f.has(l))throw TypeError("Cannot "+h)};var a=(l,f,h)=>(X(l,f,"read from private field"),h?h.call(l):f.get(l)),c=(l,f,h)=>{if(f.has(l))throw TypeError("Cannot add the same private member more than once");f instanceof WeakSet?f.add(l):f.set(l,h)},p=(l,f,h,g)=>(X(l,f,"write to private field"),g?g.call(l,h):f.set(l,h),h);var E=(l,f,h)=>(X(l,f,"access private method"),h);(function(l){typeof define=="function"&&define.amd?define(l):l()})(function(){var g,L,T,O,C,I,R,v,Y,x,Z,G,Q,$,A,z,J,ee,D,U,M,P,H,j,_,K,F,k,B,q;"use strict";class l{constructor(){c(this,I);c(this,v);c(this,x);c(this,Q);c(this,A);c(this,J);c(this,g,"YHWH");c(this,L,"\u{1F3C4}\u200D SMLOG:");c(this,T,!1);c(this,O,!1);c(this,C,void 0);o(this,"install",(e={src:"",name:"",type:"script",target:"normal",id:"",placement:"",rel:"",cb:null})=>{let{src:t,name:r,type:i,target:n,id:u,placement:d,rel:m,cb:w}=e;if(this.isObjEmpty(e))throw new Error("Looks like you entered an empty {} object!");if(!e||!t||!r)throw new Error("SMLib_Utils::install requires an {} object with required `src` and `name` properties.");if(w&&typeof w!="function")throw new Error("The callback must be a Function!");if(typeof t!="string"||typeof r!="string")throw new Error("src and name must be type string!");this.log("Installing: ",r);let s;i==="script"||!i?(s=document.createElement("script"),s.id=u||"_DefaultJS_",s.src=t):(s=document.createElement("link"),s.id=u||"_DefaultCSS_",s.rel=m||"stylesheet",s.href=t),w&&(s.onreadystatechange=function(){(s.readyState==="loaded"||s.readyState==="complete")&&(s.onreadystatechange=null,w())},s.onload=function(){w()}),n==="normal"||!n?document.documentElement.firstChild.appendChild(s):this.searchElement({el:`${n}`,cb:b=>{d&&d!=="before"?b.after(s):b.before(s)}}),this.log("Done installing: ",r)});o(this,"installInlineScript",(e={name:"",code:""})=>{let{name:t,code:r}=e;if(this.isObjEmpty(e))throw new Error("Looks like you entered an empty {} object!");if(!e||!t||!r)throw new Error("SMLib_Utils::installInlineScript requires an {} object with required `name` and `code` properties.");if(typeof t!="string"||typeof r!="string")throw new Error("name and code must be type string!");this.log("Installing: ",t);const i=document.createTextNode(r),n=document.createElement("script");n.type="text/javascript",n.appendChild(i),document.documentElement.firstChild.appendChild(n),this.log("Done installing: ",t)});o(this,"log",(...e)=>{if(a(this,O)){console.log(`${a(this,L)}force:`,...e);return}if(a(this,T)&&a(this,C)===a(this,g)){console.log(`${a(this,L)}`,...e);return}const t=localStorage.getItem("localsm");t&&t===a(this,g)&&!a(this,T)&&E(this,v,Y).call(this,!0,t),t&&t===a(this,g)&&console.log(`${a(this,L)}`,...e)});o(this,"genRandomID",(e=1)=>{if(typeof e!="number"||e<1)throw new Error("length must be a positive integer");return Math.floor(Math.random()*Math.pow(10,e))});o(this,"genUUID",()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)}));o(this,"readyStateInterval",(e,t=30,r=!0)=>{if(!e)throw new Error("A callback is required!");if(typeof t!="number")throw new Error("timeout must be a number!");if(typeof r!="boolean")throw new Error("complete must be a boolean!");if(e&&typeof e!="function")throw new Error("The callback must be a Function!");const i=setInterval(()=>{this.log("readyStateInterval: Waiting for readyState....",document.readyState);let n;r&&(n=document.readyState==="complete"),r||(n=document.readyState==="interactive"||document.readyState==="complete"),n&&(clearInterval(i),this.log("readyStateInterval for readyState \u{1F525} Done....."),e())},t)});o(this,"isObjEmpty",e=>{if(!e)throw new Error("Object {} is required!");if(e&&typeof e!="object")throw new Error("Argument must be an Object!");return Object.keys(e).length===0&&e.constructor===Object});o(this,"searchElement",(e={el:"",cb:null,fallback:null,all:!1,to:10,max:9e3})=>{let{el:t,cb:r,fallback:i,all:n,to:u,max:d}=e;if(this.isObjEmpty(e))throw new Error("Looks like you entered an empty {} object!");if(!e||!t)throw new Error("SMLib_Utils::searchElement requires an {} object with required `el` property.");if(r&&typeof r!="function"||i&&typeof i!="function")throw new Error("The callback or fallback must be Functions!");if(n!==void 0&&typeof n!="boolean")throw new Error("`all` must be boolean type");if(u&&typeof u!="number")throw new Error("`to` must be number type");if(d&&typeof d!="number")throw new Error("`max` must be number type");let m;const w=d||9e3,s=u||10;let b=!1,y=0;m=setInterval(()=>{if(b||y>w){this.log(`\u{1F31C}STOPINTERVALELEMENT -- ${t} ::::::: `,m),clearInterval(m),!b&&i&&i();return}this.log("\u26F1\uFE0F SEARCHINGelement -- ",t),y+=s;let S=n?document.querySelectorAll(t):document.querySelector(t);S&&(this.log("\u2705 FOUNDelement --",t),b=!0,r&&r(S))},s)});o(this,"extendedSearchElement",(e={parent:null,el:"",cb:null,fallback:null,all:!1,to:10,max:9e3})=>{let{parent:t,el:r,cb:i,fallback:n,all:u,to:d,max:m}=e;if(this.isObjEmpty(e))throw new Error("Looks like you entered an empty {} object!");if(!e||!r||!t)throw new Error("SMLib_Utils::extendedSearchElement requires an {} object with required `parent` and `el` property.");if(typeof t!="object")throw new Error("Parent property must be an object|node");if(i&&typeof i!="function"||n&&typeof n!="function")throw new Error("The callback or fallback must be Functions!");if(u!==void 0&&typeof u!="boolean")throw new Error("`all` must be boolean type");if(d&&typeof d!="number")throw new Error("`to` must be number type");if(m&&typeof m!="number")throw new Error("`max` must be number type");let w;const s=m||9e3,b=d||10;let y=!1,S=0,N=t||document;w=setInterval(()=>{if(y||S>s){this.log(`\u{1F31C}STOPINTERVALELEMENT -- ${r} ::::::: `,w),clearInterval(w),!y&&n&&n();return}this.log("\u26F1\uFE0F SEARCHINGelement -- ",r),S+=b;const V=u?N.querySelectorAll(r):N.querySelector(r);V&&(this.log("\u2705 FOUNDelement --",r),y=!0,i&&i(V))},b)});o(this,"searchModObject",(e={name:"",objToSearch:null,cb:null,fallback:null,assignCB:null,assign:!1,to:10,max:9e3})=>{let{name:t,objToSearch:r,cb:i,fallback:n,assignCB:u,assign:d,to:m,max:w}=e;if(this.isObjEmpty(e))throw new Error("Looks like you entered an empty {} object!");if(!e||!t)throw new Error("SMLib_Utils::extendedSearchElement requires an {} object with required `name` and `objToSearch` property.");if(i&&typeof i!="function"||n&&typeof n!="function"||u&&typeof u!="function")throw new Error("The callback or fallback or assignCB must be Functions!");if(m&&typeof m!="number")throw new Error("`to` must be number type");if(w&&typeof w!="number")throw new Error("`max` must be number type");let s;const b=w||9e3,y=m||10;let S=!1,N=0;s=setInterval(()=>{if(S||N>b){this.log(`\u{1F31C}STOPINTERVALMOD -- ${t} :::::: `,s),clearInterval(s),!S&&n&&n();return}N+=y;const V=typeof r=="function"?r():r;this.log("\u{1F9E9} SEARCHINGmod -- ",t),V&&(this.log(`\u2705 FOUNDmod -- ${t}`),S=!0,d&&u&&u(r),i&&i())},y)});o(this,"goto",(e,t="_self")=>{if(!e)throw new Error("URL is required!");if(typeof e!="string")throw new Error("url must be a string!");if(typeof t!="string")throw new Error("target must be a string!");window.open(e,t)});o(this,"duplicateChecker",(e,t=null)=>{if(!e)throw new Error("Target is required!");if(typeof e!="string")throw new Error("target must be a string!");if(t&&typeof t!="function")throw new Error("The callback must be a Function!");document.querySelector(e)||(this.log(`:NODUPS: ${e}`),t&&t())});o(this,"toNode",e=>{if(!e)throw new Error("The string to parse is required!");if(typeof e!="string")throw new Error("Argument must be a string!");return document.createRange().createContextualFragment(e)});o(this,"putBeforeElement",(e,t)=>{E(this,I,R).call(this,e,t,"beforebegin")});o(this,"putInsideElementFirst",(e,t)=>{E(this,I,R).call(this,e,t,"afterbegin")});o(this,"putInsideElementLast",(e,t)=>{E(this,I,R).call(this,e,t,"beforeend")});o(this,"putAfterElement",(e,t)=>{E(this,I,R).call(this,e,t,"afterend")});o(this,"enableTailwind",e=>{if(!e)throw new Error("Cannot enable tailwind. Please check argument!");if(e!=="scm_enable_tailwind")throw new Error("Cannot enable tailwind. Please check argument!");if(typeof e!="string")throw new Error("Tailwind `internal` type error!");this.install({src:"https://cdn.tailwindcss.com",name:"Tailwind",id:"_SMOwnTailwind_",cb:a(this,G)})});o(this,"getLogStates",()=>({enabled:a(this,T),key:a(this,C)}));o(this,"setLogPrependText",e=>{if(!e)throw new Error("A new string/text is required!");p(this,L,e)});o(this,"setForceDebug",e=>{if(typeof e!="boolean")throw new Error("New state must be a boolean!");p(this,O,e)});o(this,"scrollToElement",(e,t=0)=>{this.searchElement({el:`${e}`,cb:r=>{const i=r.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:i-t,behavior:"smooth"})}})});o(this,"detectMediaQuery",(e="max",t,r,i=!1)=>{let n;e==="max"&&(n=window.matchMedia(`(max-width: ${t}px)`)),e==="min"&&(n=window.matchMedia(`(min-width: ${t}px)`));function u(d){d.matches&&r&&r(!0),!d.matches&&r&&r(!1)}n&&n.removeEventListener("change",u),i&&n.addEventListener("change",u),u(n)});c(this,G,e=>{const t=e?{...e}:{};t.prefix="scm_",this.searchModObject({name:"Tailwind instance",objToSearch:E(this,Q,$),cb:()=>{tailwind.config=t,this.log("Done setting tailwind internal default config and external?")}})})}validateClientKeys(e,t){return E(this,J,ee).call(this,e,t)}}g=new WeakMap,L=new WeakMap,T=new WeakMap,O=new WeakMap,C=new WeakMap,I=new WeakSet,R=function(e,t,r){if(!e)throw new Error("element param is required!");if(e&&typeof e!="string"&&typeof e!="object")throw new Error("element param must be a string or a node object!");if(!t)throw new Error("stringObj param is required!");if(t&&typeof t!="string"&&typeof t!="object")throw new Error("stringObj param must be either a string or a node object!");if(!r)throw new Error("position param is required!");if(r&&r!=="beforebegin"&&r!=="afterbegin"&&r!=="beforeend"&&r!=="afterend")throw new Error("position param must be either beforebegin, afterbegin, beforeend, or afterend.");if(typeof e=="string")return this.searchElement({el:e,cb:i=>{E(this,x,Z).call(this,i,r,t)}}),null;E(this,x,Z).call(this,e,r,t)},v=new WeakSet,Y=function(e,t){!t||(p(this,T,e),p(this,C,t))},x=new WeakSet,Z=function(e,t,r){if(typeof r=="string"){e.insertAdjacentHTML(t,r);return}switch(t){case"beforebegin":e.before(r);break;case"afterbegin":e.prepend(r);break;case"beforeend":e.append(r);break;case"afterend":e.after(r);break;default:console.debug("Position param did not match!")}},G=new WeakMap,Q=new WeakSet,$=function(){return!!window.tailwind},A=new WeakSet,z=function(e=""){const t=(location==null?void 0:location.hostname)||e||"localhost";if(this.log("_hostname",t),t==="localhost")return"localhost";const r=t.split(".");if(r.length>2){const i=r[r.length-1];if(r[r.length-2].length<=3&&i.length<=3)return r[r.length-3]}return r[r.length-2]},J=new WeakSet,ee=function(e,t){const r=E(this,A,z).call(this);return e[r]?t===e[r]:!1};class f extends l{constructor(){super(...arguments);c(this,D,[]);c(this,U,"");c(this,M,"");c(this,P,void 0);o(this,"initiateApp",(t,r)=>{if(!t)throw new Error("A callback is required!");if(t&&typeof t!="function")throw new Error("runner must be a Function!");if(r&&typeof r!="string")throw new Error("dupcheck must be a String!");const i=()=>{(a(this,M)==="web"||a(this,M)==="lp")&&t(),a(this,M)==="spa"&&this.readyStateInterval(t)};r?this.duplicateChecker(r,i):i()});o(this,"setJQuery",t=>{if(!t)throw new Error("jQuery instance is required!");p(this,P,t)});o(this,"getJQuery",()=>a(this,P));o(this,"setModalIDs",t=>{p(this,D,[...a(this,D),...t])});o(this,"getModalIDs",()=>a(this,D));o(this,"setUniqueID",t=>{p(this,U,t)});o(this,"getUniqueID",()=>a(this,U));o(this,"setTestType",t=>{p(this,M,t)});o(this,"getTestType",()=>a(this,M))}}D=new WeakMap,U=new WeakMap,M=new WeakMap,P=new WeakMap;class h extends f{constructor(t={uniqueID:"",modalID:[],type:"web",cssOn:!1,tailwind:!1,initJQuery:!1,usingRequire:!1,key:""}){super();c(this,H,"Scale Messaging Dev Tool.");c(this,j,"0.4.1");c(this,_,"https://scalemessaging.com");c(this,K,"https://cdn.jsdelivr.net/gh/ScaleMessaging/SMLib-Dist@main/dist/smlib.css");c(this,F,void 0);c(this,k,void 0);c(this,B,{localhost:"SMCQILBBULZMUZMCGYUPMUCCMSLBFVOXVHGTVFCEIQVHMHTQANNRIGBQGLJEFRQC",sketchwow:"SMOTIIQFNIYLNRFSJPYLHADFLVJAFWCAWWMWUSEPZLJNCDWFUOHPLHMHZOEQRGVD",wipertech:"SMQRFRHAYPDTKXIFKGYYQJLXPKMMEMQTPHSLFAXNSOWLOWBFIBHKCARPHMOOODZN",portapottyrental:"SMMYTTIZILUGYMLEPUXTHKFFURKZJKSKBOPEQIUCYKFLABOIJHASHCZIEEBLGDHH",kitchenwarehouse:"SMVDTGFIXJVYERNCYJIJHNUBJQPFEXRJZXGGKONOSPAWBBGGTKCFHBTBBGKLIVDP",quotegoat:"SMMIXKKNASANLTLPGCCRPOGQFCRMTTTREOVHHCGPPDFECTJGZYZZOQGMHDETEFMV",solarquotes:"SMKGONZWWSERDQHAKYUYDHNAVSVWVFFBPLOWGYXVMQBHBSZKCNYWNDTESMLRJRUJ",trulybeauty:"SMUMUKZTNXFDXEOPPORSDZZBZORVBGBVQGWCAVZAJHCYZTXLSWMEJXYNAUMLORNK",myshopify:"SMXDLZVWNEOJQKJAYDGKLLBLEGJXWWMHPUTDUJSFOEIFGHHKGSGPBGJHVPRLOSKX",jumpflex:"SMMXCUPEZEWAEMNNGPOWPTLCNZSNSGBMOKUWBOGCEQAFNERWDIGNXJMWKRNCJGFY",canadiancontactlenses:"SMZGJFKLGOIDRZNCZJHIEVUNEKFUDAXLCOIDPTIOAREWQXFICUDULEHSZWRITYMF",ironembers:"SMPBLCXXXWVHSOTPSPOVQXSDCKGCJTNXLEKSHTQYISXBVQVRUWRGUBZULMWVBILP"});c(this,q,!1);o(this,"initiateJQuery",t=>{if(t){this.log("\u{1F4A1} Using Require"),window==null||window.requirejs(["jquery"],r=>{this.setJQuery(r),this.log("\u{1F4A1} Successfully attached RequireJS jquery")},r=>{this.log("Require_SetupError",r)});return}this.log("\u{1F4A1} Using Default JQuery"),this.searchModObject({name:"JQueryModule",objToSearch:(window==null?void 0:window.jQuery)||(window==null?void 0:window.convert),max:3e3,cb:()=>{var r;this.log(`\u{1F4A1} ActiveJQueries => Convert: ${!!((r=window.convert)!=null&&r.$)}, window.jQuery: ${!!window.jQuery}`),this.setJQuery(window.jQuery||window.convert.$)}})});o(this,"getInfo",()=>({info:a(this,H),version:a(this,j),docs:a(this,_),currentKey:a(this,k),instanceID:a(this,F),uniqueID:this.getUniqueID(),modalIDs:this.getModalIDs(),jquery:this.getJQuery(),testType:this.getTestType()}));const{uniqueID:r,modalID:i,type:n,cssOn:u,tailwind:d,initJQuery:m,usingRequire:w,key:s}=t;if(this.isObjEmpty(t))throw new Error("Looks like you entered an empty {} object!");if(n&&n!=="web"&&n!=="spa"&&n!=="lp")throw new Error("Type must be 'web' || 'spa' || 'lp' only!");if(r&&typeof r!="string")throw new Error("uniqueID must be string type");if(i&&typeof i!="object")throw new Error("modalID must be an array[] type");if(u!==void 0&&typeof u!="boolean")throw new Error("cssOn must be boolean type");if(d!==void 0&&typeof d!="boolean")throw new Error("tailwind must be boolean type");if(m!==void 0&&typeof m!="boolean")throw new Error("initJQuery must be boolean type");if(w!==void 0&&typeof w!="boolean")throw new Error("usingRequire must be boolean type");if(!s||s==="")throw new Error("Please provide your keys!");if(s&&typeof s=="string"&&s!==""&&!this.validateClientKeys(a(this,B),s))throw new Error("Not authorized to use dev lib!");const b=this.genUUID(),y=this.genRandomID(7);p(this,k,s),p(this,F,b),this.setUniqueID(r||`sm__unik-${y}`),this.setModalIDs(i&&i.length>0?i:[]),this.setTestType(n||"web"),u!==void 0&&typeof u=="boolean"&&u&&this.install({src:a(this,K),name:"SMLibCSS",type:"link",id:"_SMMainCustomCSS_",target:d?"#_SMOwnTailwind_":"",placement:"after"}),d&&this.enableTailwind("scm_enable_tailwind"),m&&this.initiateJQuery(w),a(this,q)||(this.log("smlib: SMLibLoaded"),window.dispatchEvent(new CustomEvent("SMLibLoaded")),p(this,q,!0)),console.debug("\u{1F4A1} SMLib is active!")}}H=new WeakMap,j=new WeakMap,_=new WeakMap,K=new WeakMap,F=new WeakMap,k=new WeakMap,B=new WeakMap,q=new WeakMap,function(W){W.SMLib=h}(window)});
