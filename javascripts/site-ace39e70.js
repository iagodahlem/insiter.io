!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var i=n(1),r=function(t){return t&&t.__esModule?t:{default:t}}(i);document.addEventListener("DOMContentLoaded",function(){r.default.forEach(function(t){return t()})})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),a=n(3),s=i(a),l=n(4),c=i(l),u=n(6),d=i(u);e.default=[o.default,s.default,c.default,d.default]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=document.querySelector("html");(document.documentMode||/Edge/.test(navigator.userAgent))&&(-1===navigator.appVersion.indexOf("Trident")?t.className+="isEDGE":t.className+="isIE isIE11"),-1!==navigator.appVersion.indexOf("MSIE")&&(t.className+="isIE")};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(document.querySelector(".js-menu"),document.querySelector(".js-toggle"),function(){});e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=function(t){return t&&t.__esModule?t:{default:t}}(i),o=(0,r.default)(),a=[{selector:".hero-reveal",interval:500}],s=function(){a.forEach(function(t){o.reveal(t.selector,t.interval)})};e.default=s},function(t,e,n){var i;!function(){"use strict";function r(t){return void 0===this||Object.getPrototypeOf(this)!==r.prototype?new r(t):(F=this,F.version="3.3.6",F.tools=new S,F.isSupported()?(F.tools.extend(F.defaults,t||{}),F.defaults.container=o(F.defaults),F.store={elements:{},containers:[]},F.sequences={},F.history=[],F.uid=0,F.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),F)}function o(t){if(t&&t.container){if("string"==typeof t.container)return window.document.documentElement.querySelector(t.container);if(F.tools.isNode(t.container))return t.container;console.log('ScrollReveal: invalid container "'+t.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return F.defaults.container}function a(t,e){return"string"==typeof t?Array.prototype.slice.call(e.querySelectorAll(t)):F.tools.isNode(t)?[t]:F.tools.isNodeList(t)?Array.prototype.slice.call(t):[]}function s(){return++F.uid}function l(t,e,n){e.container&&(e.container=n),t.config?t.config=F.tools.extendClone(t.config,e):t.config=F.tools.extendClone(F.defaults,e),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X"}function c(t){var e=window.getComputedStyle(t.domEl);t.styles||(t.styles={transition:{},transform:{},computed:{}},t.styles.inline=t.domEl.getAttribute("style")||"",t.styles.inline+="; visibility: visible; ",t.styles.computed.opacity=e.opacity,e.transition&&"all 0s ease 0s"!==e.transition?t.styles.computed.transition=e.transition+", ":t.styles.computed.transition=""),t.styles.transition.instant=u(t,0),t.styles.transition.delayed=u(t,t.config.delay),t.styles.transform.initial=" -webkit-transform:",t.styles.transform.target=" -webkit-transform:",d(t),t.styles.transform.initial+="transform:",t.styles.transform.target+="transform:",d(t)}function u(t,e){var n=t.config;return"-webkit-transition: "+t.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; transition: "+t.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; "}function d(t){var e,n=t.config,i=t.styles.transform;e="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+e+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+t.styles.computed.opacity+";"}function f(t){var e=t.config.container;e&&-1===F.store.containers.indexOf(e)&&F.store.containers.push(t.config.container),F.store.elements[t.id]=t}function h(t,e,n){var i={target:t,config:e,interval:n};F.history.push(i)}function p(){if(F.isSupported()){g();for(var t=0;t<F.store.containers.length;t++)F.store.containers[t].addEventListener("scroll",m),F.store.containers[t].addEventListener("resize",m);F.initialized||(window.addEventListener("scroll",m),window.addEventListener("resize",m),F.initialized=!0)}return F}function m(){k(g)}function y(){var t,e,n,i;F.tools.forOwn(F.sequences,function(r){i=F.sequences[r],t=!1;for(var o=0;o<i.elemIds.length;o++)n=i.elemIds[o],e=F.store.elements[n],T(e)&&!t&&(t=!0);i.active=t})}function g(){var t,e;y(),F.tools.forOwn(F.store.elements,function(n){e=F.store.elements[n],t=E(e),b(e)?(e.config.beforeReveal(e.domEl),t?e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.delayed):e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.instant),v("reveal",e,t),e.revealing=!0,e.seen=!0,e.sequence&&w(e,t)):x(e)&&(e.config.beforeReset(e.domEl),e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.initial+e.styles.transition.instant),v("reset",e),e.revealing=!1)})}function w(t,e){var n=0,i=0,r=F.sequences[t.sequence.id];r.blocked=!0,e&&"onload"===t.config.useDelay&&(i=t.config.delay),t.sequence.timer&&(n=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,t.sequence.timer=null,m()},Math.abs(r.interval)+i-n)}function v(t,e,n){var i=0,r=0,o="after";switch(t){case"reveal":r=e.config.duration,n&&(r+=e.config.delay),o+="Reveal";break;case"reset":r=e.config.duration,o+="Reset"}e.timer&&(i=Math.abs(e.timer.started-new Date),window.clearTimeout(e.timer.clock)),e.timer={started:new Date},e.timer.clock=window.setTimeout(function(){e.config[o](e.domEl),e.timer=null},r-i)}function b(t){if(t.sequence){var e=F.sequences[t.sequence.id];return e.active&&!e.blocked&&!t.revealing&&!t.disabled}return T(t)&&!t.revealing&&!t.disabled}function E(t){var e=t.config.useDelay;return"always"===e||"onload"===e&&!F.initialized||"once"===e&&!t.seen}function x(t){if(t.sequence){return!F.sequences[t.sequence.id].active&&t.config.reset&&t.revealing&&!t.disabled}return!T(t)&&t.config.reset&&t.revealing&&!t.disabled}function A(t){return{width:t.clientWidth,height:t.clientHeight}}function M(t){if(t&&t!==window.document.documentElement){var e=O(t);return{x:t.scrollLeft+e.left,y:t.scrollTop+e.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function O(t){var e=0,n=0,i=t.offsetHeight,r=t.offsetWidth;do{isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent}while(t);return{top:e,left:n,height:i,width:r}}function T(t){var e=O(t.domEl),n=A(t.config.container),i=M(t.config.container),r=t.config.viewFactor,o=e.height,a=e.width,s=e.top,l=e.left,c=s+o,u=l+a;return function(){var e=s+o*r,d=l+a*r,f=c-o*r,h=u-a*r,p=i.y+t.config.viewOffset.top,m=i.x+t.config.viewOffset.left,y=i.y-t.config.viewOffset.bottom+n.height,g=i.x-t.config.viewOffset.right+n.width;return e<y&&f>p&&d<g&&h>m}()||function(){return"fixed"===window.getComputedStyle(t.domEl).position}()}function S(){}var F,k;r.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(t){},beforeReset:function(t){},afterReveal:function(t){},afterReset:function(t){}},r.prototype.isSupported=function(){var t=document.documentElement.style;return"WebkitTransition"in t&&"WebkitTransform"in t||"transition"in t&&"transform"in t},r.prototype.reveal=function(t,e,n,i){var r,u,d,m,y,g;if(void 0!==e&&"number"==typeof e?(n=e,e={}):void 0!==e&&null!==e||(e={}),r=o(e),u=a(t,r),!u.length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),F;n&&"number"==typeof n&&(g=s(),y=F.sequences[g]={id:g,interval:n,elemIds:[],active:!1});for(var w=0;w<u.length;w++)m=u[w].getAttribute("data-sr-id"),m?d=F.store.elements[m]:(d={id:s(),domEl:u[w],seen:!1,revealing:!1},d.domEl.setAttribute("data-sr-id",d.id)),y&&(d.sequence={id:y.id,index:y.elemIds.length},y.elemIds.push(d.id)),l(d,e,r),c(d),f(d),F.tools.isMobile()&&!d.config.mobile||!F.isSupported()?(d.domEl.setAttribute("style",d.styles.inline),d.disabled=!0):d.revealing||d.domEl.setAttribute("style",d.styles.inline+d.styles.transform.initial);return!i&&F.isSupported()&&(h(t,e,n),F.initTimeout&&window.clearTimeout(F.initTimeout),F.initTimeout=window.setTimeout(p,0)),F},r.prototype.sync=function(){if(F.history.length&&F.isSupported()){for(var t=0;t<F.history.length;t++){var e=F.history[t];F.reveal(e.target,e.config,e.interval,!0)}p()}else console.log("ScrollReveal: sync failed, no reveals found.");return F},S.prototype.isObject=function(t){return null!==t&&"object"==typeof t&&t.constructor===Object},S.prototype.isNode=function(t){return"object"==typeof window.Node?t instanceof window.Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},S.prototype.isNodeList=function(t){var e=Object.prototype.toString.call(t),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?t instanceof window.NodeList:t&&"object"==typeof t&&n.test(e)&&"number"==typeof t.length&&(0===t.length||this.isNode(t[0]))},S.prototype.forOwn=function(t,e){if(!this.isObject(t))throw new TypeError('Expected "object", but received "'+typeof t+'".');for(var n in t)t.hasOwnProperty(n)&&e(n)},S.prototype.extend=function(t,e){return this.forOwn(e,function(n){this.isObject(e[n])?(t[n]&&this.isObject(t[n])||(t[n]={}),this.extend(t[n],e[n])):t[n]=e[n]}.bind(this)),t},S.prototype.extendClone=function(t,e){return this.extend(this.extend({},t),e)},S.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},k=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},void 0!==(i=function(){return r}.call(e,n,e,t))&&(t.exports=i)}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),r=function(t){return t&&t.__esModule?t:{default:t}}(i),o=function(){return[].slice.call(document.querySelectorAll(".hero-icon")).map(function(t){return t.id})},a=function(){for(var t,e=document.querySelector(".hero-container"),n=e.clientWidth,i=e.clientHeight,r=document.querySelector(".hero-logo-container"),a={left:r.offsetLeft,top:r.offsetTop},s={width:r.clientWidth,height:r.clientHeight},l=document.querySelector(".hero-description-container"),c={left:l.offsetLeft,top:l.offsetTop},u={width:l.clientWidth,height:l.clientHeight},d=[],f=function(t,e,n,i,r,o,a,s){return Math.max(0,Math.min(n,a)-Math.max(t,r))*Math.max(0,Math.min(i,s)-Math.max(e,o))},h=0;h<o().length;h++){t={$elem:document.querySelectorAll(".hero-icon")[h],rotation:360*Math.random(),scale:n<650?.4:.75};var p=t.$elem.getBoundingClientRect();t.width=p.width,t.height=p.height;var m=function(t){for(var e,r=n<650?5:30,o=0;o<110&&(null==e||e.overlaps);)o++,e=function(){var e={x:r+Math.random()*(n-1.5*r),y:r+Math.random()*(i-1.5*r),overlaps:!1},o=f(e.x-r,e.y-r,e.x+t.width+r,e.y+t.height+r,a.left,a.top,a.left+s.width,a.top+s.height),l=f(e.x-r,e.y-r,e.x+t.width+r,e.y+t.height+r,c.left-r,c.top-r,c.left+u.width+r,c.top+u.height+r);return e.overlaps=l>0||o>0,e.overlaps||0===d.length?e:d.find(function(n){return f(e.x-r,e.y-r,e.x+t.width+r,e.y+t.height+r,n.x,n.y,n.x+n.width,n.y+n.height)>0})?(e.overlaps=!0,e):e}();return e}(t);null!=m&&(t.x=m.x,t.y=m.y,t.$elem.setAttribute("style","transform: translate("+m.x+"px, "+m.y+"px) rotate("+t.rotation+"deg) scale("+t.scale+")"),d.push(t))}},s=function(){var t=o();t=t.sort(function(){return.5-Math.random()}),t.forEach(function(t){var e=Math.floor(2e3*Math.random()+1e3),n=new r.default(t,{duration:180,type:"oneByOne",start:"manual"});setInterval(function(){n.play()},e)})},l=function(){a(),s()};e.default=l},function(t,e,n){"use strict";var i,r;/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.1
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
!function(){function n(t){if(void 0===t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function o(t,e,n){a(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}n.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],n.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],n.prototype.scan=function(t){for(var e,n,i,r,o=t.querySelectorAll(this.TYPES.join(",")),a=0;a<o.length;a++)n=o[a],e=this[n.tagName.toLowerCase()+"ToPath"],i=e(this.parseAttr(n.attributes)),r=this.pathMaker(n,i),n.parentNode.replaceChild(r,n)},n.prototype.lineToPath=function(t){var e={},n=t.x1||0,i=t.y1||0,r=t.x2||0,o=t.y2||0;return e.d="M"+n+","+i+"L"+r+","+o,e},n.prototype.rectToPath=function(t){var e={},n=parseFloat(t.x)||0,i=parseFloat(t.y)||0,r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;return e.d="M"+n+" "+i+" ",e.d+="L"+(n+r)+" "+i+" ",e.d+="L"+(n+r)+" "+(i+o)+" ",e.d+="L"+n+" "+(i+o)+" Z",e},n.prototype.polylineToPath=function(t){var e,n,i={},r=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var o=[];for(e=0;e<r.length;e+=2)o.push(r[e]+","+r[e+1]);r=o}for(n="M"+r[0],e=1;e<r.length;e++)-1!==r[e].indexOf(",")&&(n+="L"+r[e]);return i.d=n,i},n.prototype.polygonToPath=function(t){var e=n.prototype.polylineToPath(t);return e.d+="Z",e},n.prototype.ellipseToPath=function(t){var e={},n=parseFloat(t.rx)||0,i=parseFloat(t.ry)||0,r=parseFloat(t.cx)||0,o=parseFloat(t.cy)||0,a=r-n,s=o,l=parseFloat(r)+parseFloat(n),c=o;return e.d="M"+a+","+s+"A"+n+","+i+" 0,1,1 "+l+","+c+"A"+n+","+i+" 0,1,1 "+a+","+c,e},n.prototype.circleToPath=function(t){var e={},n=parseFloat(t.r)||0,i=parseFloat(t.cx)||0,r=parseFloat(t.cy)||0,o=i-n,a=r,s=parseFloat(i)+parseFloat(n),l=r;return e.d="M"+o+","+a+"A"+n+","+n+" 0,1,1 "+s+","+l+"A"+n+","+n+" 0,1,1 "+o+","+l,e},n.prototype.pathMaker=function(t,e){var n,i,r=document.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)i=t.attributes[n],-1===this.ATTR_WATCH.indexOf(i.name)&&r.setAttribute(i.name,i.value);for(n in e)r.setAttribute(n,e[n]);return r},n.prototype.parseAttr=function(t){for(var e,n={},i=0;i<t.length;i++){if(e=t[i],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");n[e.name]=e.value}return n};var a,s,l,c;o.LINEAR=function(t){return t},o.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},o.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},o.EASE_IN=function(t){return Math.pow(t,3)},o.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(t*(.5*Math.PI)),n=Math.pow(e,1.5),i=Math.pow(1-t,2);return 1-i+(1-Math.abs(Math.cos(n*(2.5*Math.PI))))*i},o.prototype.setElement=function(t,e){if(void 0===t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){var n=document.createElement("object");n.setAttribute("type","image/svg+xml"),n.setAttribute("data",e.file),n.setAttribute("built-by-vivus","true"),t.appendChild(n),t=n}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:var i,r;r=this,i=function(e){if(!r.isReady){if(r.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!r.el&&e)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return r.el?(t.getAttribute("built-by-vivus")&&(r.parentEl.insertBefore(r.el,t),r.parentEl.removeChild(t),r.el.setAttribute("width","100%"),r.el.setAttribute("height","100%")),r.isReady=!0,r.init(),!0):void 0}},i()||t.addEventListener("load",i);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},o.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=c(t.duration,120),this.delay=c(t.delay,null),this.dashGap=c(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||o.LINEAR,this.pathTimingFunction=t.pathTimingFunction||o.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},o.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},o.prototype.mapping=function(){var t,e,n,i,r,o,a,s;for(s=o=a=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)n=e[t],this.isInvisible(n)||(r={el:n,length:Math.ceil(n.getTotalLength())},isNaN(r.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(this.map.push(r),n.style.strokeDasharray=r.length+" "+(r.length+2*this.dashGap),n.style.strokeDashoffset=r.length+this.dashGap,r.length+=this.dashGap,o+=r.length,this.renderPath(t)));for(o=0===o?1:o,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(r=this.map[t],this.type){case"delayed":r.startAt=this.delayUnit*t,r.duration=this.duration-this.delay;break;case"oneByOne":r.startAt=a/o*this.duration,r.duration=r.length/o*this.duration;break;case"sync":case"async":case"nsync":r.startAt=0,r.duration=this.duration;break;case"scenario-sync":n=r.el,i=this.parseAttr(n),r.startAt=s+(c(i["data-delay"],this.delayUnit)||0),r.duration=c(i["data-duration"],this.duration),s=void 0!==i["data-async"]?r.startAt:r.startAt+r.duration,this.frameLength=Math.max(this.frameLength,r.startAt+r.duration);break;case"scenario":n=r.el,i=this.parseAttr(n),r.startAt=c(i["data-start"],this.delayUnit)||0,r.duration=c(i["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,r.startAt+r.duration)}a+=r.length,this.frameLength=this.frameLength||this.duration}},o.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=s(function(){t.drawer()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},o.prototype.trace=function(){var t,e,n,i;for(i=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)n=this.map[t],e=(i-n.startAt)/n.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),n.progress!==e&&(n.progress=e,n.el.style.strokeDashoffset=Math.floor(n.length*(1-e)),this.renderPath(t))},o.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],n=e.el.cloneNode(!0);e.el.parentNode.replaceChild(n,e.el),e.el=n}},o.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new n(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},o.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},o.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},o.prototype.reset=function(){return this.setFrameProgress(0)},o.prototype.finish=function(){return this.setFrameProgress(1)},o.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},o.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},o.prototype.stop=function(){return this.handle&&(l(this.handle),this.handle=null),this},o.prototype.destroy=function(){this.stop();var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},o.prototype.isInvisible=function(t){var e,n=t.getAttribute("data-ignore");return null!==n?"false"!==n:!!this.ignoreInvisible&&(e=t.getBoundingClientRect(),!e.width&&!e.height)},o.prototype.parseAttr=function(t){var e,n={};if(t&&t.attributes)for(var i=0;i<t.attributes.length;i++)e=t.attributes[i],n[e.name]=e.value;return n},o.prototype.isInViewport=function(t,e){var n=this.scrollY(),i=n+this.getViewportH(),r=t.getBoundingClientRect(),o=r.height,a=n+r.top,s=a+o;return e=e||0,a+o*e<=i&&s>=n},o.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},o.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},a=function(){o.prototype.docElem||(o.prototype.docElem=window.document.documentElement,s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),l=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}())},c=function(t,e){var n=parseInt(t,10);return n>=0?n:e},i=[],void 0!==(r=function(){return o}.apply(e,i))&&(t.exports=r)}()}]);