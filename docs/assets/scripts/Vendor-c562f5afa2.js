!function(s){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={exports:{},id:e,loaded:!1};return s[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}n.m=s,n.c=i,n.p="",n(0)}({0:function(e,t,s){"use strict";s(8),s(9)},8:function(de,fe,pe){var me,e,t,n,s,i,r,a,c,o;e=window,o=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),s=function(e){var t,s,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,s=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=s}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])},r=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){r(),a&&a.addListener&&a.addListener(r)},n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),r)),function(e,r,l){"use strict";var n,u,o;r.createElement("picture");var E={},a=!1,t=function(){},s=r.createElement("img"),d=s.getAttribute,f=s.setAttribute,p=s.removeAttribute,c=r.documentElement,i={},C={algorithm:""},m="data-pfsrc",h=m+"set",A=navigator.userAgent,x=/rident/.test(A)||/ecko/.test(A)&&A.match(/rv\:(\d+)/)&&35<RegExp.$1,S="currentSrc",g=/\s+\+?\d+(e\d+)?w/,v=/(\([^)]+\))?\s*(.+)/,y=e.picturefillCFG,z="font-size:100%!important;",w=!0,b={},T={},M=e.devicePixelRatio,R={px:1,in:96},L=r.createElement("a"),B=!1,D=/^[ \t\n\r\u000c]+/,P=/^[, \t\n\r\u000c]+/,W=/^[^ \t\n\r\u000c]+/,N=/[,]+$/,k=/^\d+$/,$=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,I=function(e,t,s,i){e.addEventListener?e.addEventListener(t,s,i||!1):e.attachEvent&&e.attachEvent("on"+t,s)},_=function(t){var s={};return function(e){return e in s||(s[e]=t(e)),s[e]}};function F(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var U,H,O,Q,G,q,j,V,K,J,X,Y,Z,ee,te,se,ie,ne,re,ae=(U=/^([\d\.]+)(em|vw|px)$/,H=_(function(e){return"return "+function(){for(var e=arguments,t=0,s=e[0];++t in e;)s=s.replace(e[t],e[++t]);return s}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var s;if(!(e in b))if(b[e]=!1,t&&(s=e.match(U)))b[e]=s[1]*R[s[2]];else try{b[e]=new Function("e",H(e))(R)}catch(e){}return b[e]}),ce=function(e,t){return e.w?(e.cWidth=E.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},oe=function(e){if(a){var t,s,i,n=e||{};if(n.elements&&1===n.elements.nodeType&&("IMG"===n.elements.nodeName.toUpperCase()?n.elements=[n.elements]:(n.context=n.elements,n.elements=null)),i=(t=n.elements||E.qsa(n.context||r,n.reevaluate||n.reselect?E.sel:E.selShort)).length){for(E.setupRun(n),B=!0,s=0;s<i;s++)E.fillImg(t[s],n);E.teardownRun(n)}}};function le(e,t){return e.res-t.res}function ue(e,t){var s,i,n;if(e&&t)for(n=E.parseSet(t),e=E.makeUrl(e),s=0;s<n.length;s++)if(e===E.makeUrl(n[s].url)){i=n[s];break}return i}e.console&&console.warn,S in s||(S="src"),i["image/jpeg"]=!0,i["image/gif"]=!0,i["image/png"]=!0,i["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),E.ns=("pf"+(new Date).getTime()).substr(0,9),E.supSrcset="srcset"in s,E.supSizes="sizes"in s,E.supPicture=!!e.HTMLPictureElement,E.supSrcset&&E.supPicture&&!E.supSizes&&(O=r.createElement("img"),s.srcset="data:,a",O.src="data:,a",E.supSrcset=s.complete===O.complete,E.supPicture=E.supSrcset&&E.supPicture),E.supSrcset&&!E.supSizes?(Q="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",G=r.createElement("img"),q=function(){2===G.width&&(E.supSizes=!0),u=E.supSrcset&&!E.supSizes,a=!0,setTimeout(oe)},G.onload=q,G.onerror=q,G.setAttribute("sizes","9px"),G.srcset=Q+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",G.src=Q):a=!0,E.selShort="picture>img,img[srcset]",E.sel=E.selShort,E.cfg=C,E.DPR=M||1,E.u=R,E.types=i,E.setSize=t,E.makeUrl=_(function(e){return L.href=e,L.href}),E.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},E.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?E.matchesMedia=function(e){return!e||matchMedia(e).matches}:E.matchesMedia=E.mMQ,E.matchesMedia.apply(this,arguments)},E.mMQ=function(e){return!e||ae(e)},E.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},E.supportsType=function(e){return!e||i[e]},E.parseSize=_(function(e){var t=(e||"").match(v);return{media:t&&t[1],length:t&&t[2]}}),E.parseSet=function(e){return e.cands||(e.cands=function(i,d){function e(e){var t,s=e.exec(i.substring(a));if(s)return t=s[0],a+=t.length,t}var f,p,t,s,n,r=i.length,a=0,m=[];function c(){var e,t,s,i,n,r,a,c,o,l=!1,u={};for(i=0;i<p.length;i++)r=(n=p[i])[n.length-1],a=n.substring(0,n.length-1),c=parseInt(a,10),o=parseFloat(a),k.test(a)&&"w"===r?((e||t)&&(l=!0),0===c?l=!0:e=c):$.test(a)&&"x"===r?((e||t||s)&&(l=!0),o<0?l=!0:t=o):k.test(a)&&"h"===r?((s||t)&&(l=!0),0===c?l=!0:s=c):l=!0;l||(u.url=f,e&&(u.w=e),t&&(u.d=t),s&&(u.h=s),s||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,m.push(u))}function o(){for(e(D),t="",s="in descriptor";;){if(n=i.charAt(a),"in descriptor"===s)if(F(n))t&&(p.push(t),t="",s="after descriptor");else{if(","===n)return a+=1,t&&p.push(t),void c();if("("===n)t+=n,s="in parens";else{if(""===n)return t&&p.push(t),void c();t+=n}}else if("in parens"===s)if(")"===n)t+=n,s="in descriptor";else{if(""===n)return p.push(t),void c();t+=n}else if("after descriptor"===s)if(F(n));else{if(""===n)return void c();s="in descriptor",a-=1}a+=1}}for(;;){if(e(P),r<=a)return m;f=e(W),p=[],","===f.slice(-1)?(f=f.replace(N,""),c()):o()}}(e.srcset,e)),e.cands},E.getEmValue=function(){var e;if(!n&&(e=r.body)){var t=r.createElement("div"),s=c.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",c.style.cssText=z,e.style.cssText=z,e.appendChild(t),n=t.offsetWidth,e.removeChild(t),n=parseFloat(n,10),c.style.cssText=s,e.style.cssText=i}return n||16},E.calcListLength=function(e){if(!(e in T)||C.uT){var t=E.calcLength(function(e){var t,s,i,n,r,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(s=function(e){var t,s="",i=[],n=[],r=0,a=0,c=!1;function o(){s&&(i.push(s),s="")}function l(){i[0]&&(n.push(i),i=[])}for(;;){if(""===(t=e.charAt(a)))return o(),l(),n;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(F(t)){if(e.charAt(a-1)&&F(e.charAt(a-1))||!s){a+=1;continue}if(0===r){o(),a+=1;continue}t=" "}else if("("===t)r+=1;else if(")"===t)r-=1;else{if(","===t){o(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}s+=t,a+=1}}}(e)).length,t=0;t<i;t++)if(r=(n=s[t])[n.length-1],c=r,o.test(c)&&0<=parseFloat(c)||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=r,n.pop(),0===n.length)return a;if(n=n.join(" "),E.matchesMedia(n))return a}return"100vw"}(e));T[e]=t||R.width}return T[e]},E.setRes=function(e){var t;if(e)for(var s=0,i=(t=E.parseSet(e)).length;s<i;s++)ce(t[s],e.sizes);return t},E.setRes.res=ce,E.applySetCandidate=function(e,t){if(e.length){var s,i,n,r,a,c,o,l,u,d,f,p,m,h,A,g,v,y,z,w=t[E.ns],b=E.DPR;if(c=w.curSrc||t[S],(o=w.curCan||(d=t,f=c,!(p=e[0].set)&&f&&(p=(p=d[E.ns].sets)&&p[p.length-1]),(m=ue(f,p))&&(f=E.makeUrl(f),d[E.ns].curSrc=f,(d[E.ns].curCan=m).res||ce(m,m.set.sizes)),m))&&o.set===e[0].set&&((u=x&&!t.complete&&o.res-.1>b)||(o.cached=!0,o.res>=b&&(a=o))),!a)for(e.sort(le),a=e[(r=e.length)-1],i=0;i<r;i++)if((s=e[i]).res>=b){a=e[n=i-1]&&(u||c!==E.makeUrl(s.url))&&(h=e[n].res,A=s.res,g=b,v=e[n].cached,z=y=void 0,g<("saveData"===C.algorithm?2.7<h?g+1:(z=(A-g)*(y=Math.pow(h-.6,1.5)),v&&(z+=.1*y),h+z):1<g?Math.sqrt(h*A):h))?e[n]:s;break}a&&(l=E.makeUrl(a.url),w.curSrc=l,w.curCan=a,l!==c&&E.setSrc(t,a),E.setSize(t))}},E.setSrc=function(e,t){var s;e.src=t.url,"image/svg+xml"===t.set.type&&(s=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=s))},E.getSet=function(e){var t,s,i,n=!1,r=e[E.ns].sets;for(t=0;t<r.length&&!n;t++)if((s=r[t]).srcset&&E.matchesMedia(s.media)&&(i=E.supportsType(s.type))){"pending"===i&&(s=i),n=s;break}return n},E.parseSets=function(e,t,s){var i,n,r,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[E.ns];(o.src===l||s.src)&&(o.src=d.call(e,"src"),o.src?f.call(e,m,o.src):p.call(e,m)),(o.srcset===l||s.srcset||!E.supSrcset||e.srcset)&&(i=d.call(e,"srcset"),o.srcset=i,a=!0),o.sets=[],c&&(o.pic=!0,function(e,t){var s,i,n,r,a=e.getElementsByTagName("source");for(s=0,i=a.length;s<i;s++)(n=a[s])[E.ns]=!0,(r=n.getAttribute("srcset"))&&t.push({srcset:r,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,o.sets)),o.srcset?(n={srcset:o.srcset,sizes:d.call(e,"sizes")},o.sets.push(n),(r=(u||o.src)&&g.test(o.srcset||""))||!o.src||ue(o.src,n)||n.has1x||(n.srcset+=", "+o.src,n.cands.push({url:o.src,d:1,set:n}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=l,o.supported=!(c||n&&!E.supSrcset||r&&!E.supSizes),a&&E.supSrcset&&!o.supported&&(i?(f.call(e,h,i),e.srcset=""):p.call(e,h)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==E.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},E.fillImg=function(e,t){var s,i,n,r,a,c=t.reselect||t.reevaluate;(e[E.ns]||(e[E.ns]={}),s=e[E.ns],c||s.evaled!==o)&&(s.parsed&&!t.reevaluate||E.parseSets(e,e.parentNode,t),s.supported?s.evaled=o:(i=e,r=E.getSet(i),a=!1,"pending"!==r&&(a=o,r&&(n=E.setRes(r),E.applySetCandidate(n,i))),i[E.ns].evaled=a))},E.setupRun=function(){B&&!w&&M===e.devicePixelRatio||(w=!1,M=e.devicePixelRatio,b={},T={},E.DPR=M||1,R.width=Math.max(e.innerWidth||0,c.clientWidth),R.height=Math.max(e.innerHeight||0,c.clientHeight),R.vw=R.width/100,R.vh=R.height/100,o=[R.height,R.width,M].join("-"),R.em=E.getEmValue(),R.rem=R.em)},E.supPicture?(oe=t,E.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=r.readyState||"";te=setTimeout(ee,"loading"===e?200:999),r.body&&(E.fillImgs(),(j=j||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,r.body?9:99),se=c.clientHeight,I(e,"resize",(V=function(){w=Math.max(e.innerWidth||0,c.clientWidth)!==R.width||c.clientHeight!==se,se=c.clientHeight,w&&E.fillImgs()},K=99,Y=function(){var e=new Date-X;e<K?J=setTimeout(Y,K-e):(J=null,V())},function(){X=new Date,J||(J=setTimeout(Y,K))})),I(r,"readystatechange",ee)),E.picturefill=oe,E.fillImgs=oe,E.teardownRun=t,oe._=E,e.picturefillCFG={pf:E,push:function(e){var t=e.shift();"function"==typeof E[t]?E[t].apply(E,e):(C[t]=e[0],B&&E.fillImgs({reselect:!0}))}};for(;y&&y.length;)e.picturefillCFG.push(y.shift());e.picturefill=oe,"object"==typeof de&&"object"==typeof de.exports?de.exports=oe:(me=function(){return oe}.call(fe,pe,fe,de))===l||(de.exports=me),E.supPicture||(i["image/webp"]=(ie="image/webp",ne="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(re=new e.Image).onerror=function(){i[ie]=!1,oe()},re.onload=function(){i[ie]=1===re.width,oe()},re.src=ne,"pending"))}(window,document)},9:function(e,t){var s,i;s=window,i=function(i,u){"use strict";if(!u.getElementsByClassName)return;var d,f,p=u.documentElement,r=i.Date,n=i.HTMLPictureElement,a="addEventListener",m="getAttribute",t=i[a],h=i.setTimeout,s=i.requestAnimationFrame||h,c=i.requestIdleCallback,A=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],l={},g=Array.prototype.forEach,v=function(e,t){return l[t]||(l[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),l[t].test(e[m]("class")||"")&&l[t]},y=function(e,t){v(e,t)||e.setAttribute("class",(e[m]("class")||"").trim()+" "+t)},z=function(e,t){var s;(s=v(e,t))&&e.setAttribute("class",(e[m]("class")||"").replace(s," "))},w=function(t,s,e){var i=e?a:"removeEventListener";e&&w(t,s),o.forEach(function(e){t[i](e,s)})},b=function(e,t,s,i,n){var r=u.createEvent("Event");return s||(s={}),s.instance=d,r.initEvent(t,!i,!n),r.detail=s,e.dispatchEvent(r),r},E=function(e,t){var s;!n&&(s=i.picturefill||f.pf)?(t&&t.src&&!e[m]("srcset")&&e.setAttribute("srcset",t.src),s({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},x=function(e,t,s){for(s=s||e.offsetWidth;s<f.minSize&&t&&!e._lazysizesWidth;)s=t.offsetWidth,t=t.parentNode;return s},S=(L=[],B=[],D=L,P=function(){var e=D;for(D=L.length?B:L,R=!(M=!0);e.length;)e.shift()();M=!1},W=function(e,t){M&&!t?e.apply(this,arguments):(D.push(e),R||(R=!0,(u.hidden?h:s)(P)))},W._lsFlush=P,W),e=function(s,e){return e?function(){S(s)}:function(){var e=this,t=arguments;S(function(){s.apply(e,t)})}},T=function(e){var t,s,i=function(){t=null,e()},n=function(){var e=r.now()-s;e<99?h(n,99-e):(c||i)(i)};return function(){s=r.now(),t||(t=h(n,99))}};var M,R,L,B,D,P,W;!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in f=i.lazySizesConfig||i.lazysizesConfig||{},t)e in f||(f[e]=t[e]);i.lazySizesConfig=f,h(function(){f.init&&$()})}();var N=(le=/^img$/i,ue=/^iframe$/i,de="onscroll"in i&&!/(gle|ing)bot/.test(navigator.userAgent),fe=0,pe=0,me=-1,he=function(e){pe--,e&&e.target&&w(e.target,he),(!e||pe<0||!e.target)&&(pe=0)},Ae=function(e,t){var s,i=e,n="hidden"==C(u.body,"visibility")||"hidden"!=C(e.parentNode,"visibility")&&"hidden"!=C(e,"visibility");for(K-=t,Y+=t,J-=t,X+=t;n&&(i=i.offsetParent)&&i!=u.body&&i!=p;)(n=0<(C(i,"opacity")||1))&&"visible"!=C(i,"overflow")&&(s=i.getBoundingClientRect(),n=X>s.left&&J<s.right&&Y>s.top-1&&K<s.bottom+1);return n},ge=function(){var e,t,s,i,n,r,a,c,o,l=d.elements;if((G=f.loadMode)&&pe<8&&(e=l.length)){t=0,me++,null==ee&&("expand"in f||(f.expand=500<p.clientHeight&&500<p.clientWidth?500:370),Z=f.expand,ee=Z*f.expFactor),fe<ee&&pe<1&&2<me&&2<G&&!u.hidden?(fe=ee,me=0):fe=1<G&&1<me&&pe<6?Z:0;for(;t<e;t++)if(l[t]&&!l[t]._lazyRace)if(de)if((c=l[t][m]("data-expand"))&&(r=1*c)||(r=fe),o!==r&&(j=innerWidth+r*te,V=innerHeight+r,a=-1*r,o=r),s=l[t].getBoundingClientRect(),(Y=s.bottom)>=a&&(K=s.top)<=V&&(X=s.right)>=a*te&&(J=s.left)<=j&&(Y||X||J||K)&&(f.loadHidden||"hidden"!=C(l[t],"visibility"))&&(O&&pe<3&&!c&&(G<3||me<4)||Ae(l[t],r))){if(Ce(l[t]),n=!0,9<pe)break}else!n&&O&&!i&&pe<4&&me<4&&2<G&&(H[0]||f.preloadAfterLoad)&&(H[0]||!c&&(Y||X||J||K||"auto"!=l[t][m](f.sizesAttr)))&&(i=H[0]||l[t]);else Ce(l[t]);i&&!n&&Ce(i)}},se=ge,ne=0,re=f.throttleDelay,ae=f.ricTimeout,ce=function(){ie=!1,ne=r.now(),se()},oe=c&&49<ae?function(){c(ce,{timeout:ae}),ae!==f.ricTimeout&&(ae=f.ricTimeout)}:e(function(){h(ce)},!0),ve=function(e){var t;(e=!0===e)&&(ae=33),ie||(ie=!0,(t=re-(r.now()-ne))<0&&(t=0),e||t<9?oe():h(oe,t))},ye=function(e){y(e.target,f.loadedClass),z(e.target,f.loadingClass),w(e.target,we),b(e.target,"lazyloaded")},ze=e(ye),we=function(e){ze({target:e.target})},be=function(e){var t,s=e[m](f.srcsetAttr);(t=f.customMedia[e[m]("data-media")||e[m]("media")])&&e.setAttribute("media",t),s&&e.setAttribute("srcset",s)},Ee=e(function(e,t,s,i,n){var r,a,c,o,l,u;(l=b(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(s?y(e,f.autosizesClass):e.setAttribute("sizes",i)),a=e[m](f.srcsetAttr),r=e[m](f.srcAttr),n&&(c=e.parentNode,o=c&&A.test(c.nodeName||"")),u=t.firesLoad||"src"in e&&(a||r||o),l={target:e},u&&(w(e,he,!0),clearTimeout(Q),Q=h(he,2500),y(e,f.loadingClass),w(e,we,!0)),o&&g.call(c.getElementsByTagName("source"),be),a?e.setAttribute("srcset",a):r&&!o&&(ue.test(e.nodeName)?function(t,s){try{t.contentWindow.location.replace(s)}catch(e){t.src=s}}(e,r):e.src=r),n&&(a||o)&&E(e,{src:r})),e._lazyRace&&delete e._lazyRace,z(e,f.lazyClass),S(function(){(!u||e.complete&&1<e.naturalWidth)&&(u?he(l):pe--,ye(l))},!0)}),Ce=function(e){var t,s=le.test(e.nodeName),i=s&&(e[m](f.sizesAttr)||e[m]("sizes")),n="auto"==i;(!n&&O||!s||!e[m]("src")&&!e.srcset||e.complete||v(e,f.errorClass)||!v(e,f.lazyClass))&&(t=b(e,"lazyunveilread").detail,n&&k.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,pe++,Ee(e,t,n,i,s))},xe=function(){if(!O)if(r.now()-q<999)h(xe,999);else{var e=T(function(){f.loadMode=3,ve()});O=!0,f.loadMode=3,ve(),t("scroll",function(){3==f.loadMode&&(f.loadMode=2),e()},!0)}},{_:function(){q=r.now(),d.elements=u.getElementsByClassName(f.lazyClass),H=u.getElementsByClassName(f.lazyClass+" "+f.preloadClass),te=f.hFac,t("scroll",ve,!0),t("resize",ve,!0),i.MutationObserver?new MutationObserver(ve).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p[a]("DOMNodeInserted",ve,!0),p[a]("DOMAttrModified",ve,!0),setInterval(ve,999)),t("hashchange",ve,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){u[a](e,ve,!0)}),/d$|^c/.test(u.readyState)?xe():(t("load",xe),u[a]("DOMContentLoaded",ve),h(xe,2e4)),d.elements.length?(ge(),S._lsFlush()):ve()},checkElems:ve,unveil:Ce}),k=(_=e(function(e,t,s,i){var n,r,a;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),A.test(t.nodeName||""))for(n=t.getElementsByTagName("source"),r=0,a=n.length;r<a;r++)n[r].setAttribute("sizes",i);s.detail.dataAttr||E(e,s.detail)}),F=function(e,t,s){var i,n=e.parentNode;n&&(s=x(e,n,s),(i=b(e,"lazybeforesizes",{width:s,dataAttr:!!t})).defaultPrevented||(s=i.detail.width)&&s!==e._lazysizesWidth&&_(e,n,i,s))},U=T(function(){var e,t=I.length;if(t)for(e=0;e<t;e++)F(I[e])}),{_:function(){I=u.getElementsByClassName(f.autosizesClass),t("resize",U)},checkElems:U,updateElem:F}),$=function(){$.i||($.i=!0,k._(),N._())};var I,_,F,U;var H,O,Q,G,q,j,V,K,J,X,Y,Z,ee,te,se,ie,ne,re,ae,ce,oe,le,ue,de,fe,pe,me,he,Ae,ge,ve,ye,ze,we,be,Ee,Ce,xe;return d={cfg:f,autoSizer:k,loader:N,init:$,uP:E,aC:y,rC:z,hC:v,fire:b,gW:x,rAF:S}}(s,s.document),s.lazySizes=i,"object"==typeof e&&e.exports&&(e.exports=i)}});