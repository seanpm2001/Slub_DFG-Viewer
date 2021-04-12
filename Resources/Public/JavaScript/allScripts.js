/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-csstransitions-objectfit-touchevents-domprefixes-prefixed-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function o(e,t){return typeof e===t}function i(){var e,t,n,i,r,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?x[a[0]]=i:(!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]])),x[a[0]][a[1]]=i),w.push((i?"":"no-")+a.join("-"))}}function r(e){var t=k.className,n=x._config.classPrefix||"";if(S&&(t=t.baseVal),x._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?k.className.baseVal=t:k.className=t)}function s(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function a(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function c(){var e=t.body;return e||(e=l(S?"svg":"body"),e.fake=!0),e}function u(e,n,o,i){var r,s,a,u,d="modernizr",f=l("div"),p=c();if(parseInt(o,10))for(;o--;)a=l("div"),a.id=i?i[o]:d+(o+1),f.appendChild(a);return r=l("style"),r.type="text/css",r.id="s"+d,(p.fake?p:f).appendChild(r),p.appendChild(f),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=u,k.offsetHeight):f.parentNode.removeChild(f),!!s}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var i;for(var r in e)if(e[r]in t)return n===!1?e[r]:(i=t[e[r]],o(i,"function")?d(i,n||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function m(t,n,o){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var r=e.console;if(null!==i)o&&(i=i.getPropertyValue(o));else if(r){var s=r.error?"error":"log";r[s].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[o];return i}function v(t,o){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];i--;)r.push("("+p(t[i])+":"+o+")");return r=r.join(" or "),u("@supports ("+r+") { #modernizr { position: absolute; } }",(function(e){return"absolute"==m(e,null,"position")}))}return n}function g(e,t,i,r){function c(){d&&(delete D.style,delete D.modElem)}if(r=o(r,"undefined")?!1:r,!o(i,"undefined")){var u=v(e,i);if(!o(u,"undefined"))return u}for(var d,f,p,m,g,h=["modernizr","tspan","samp"];!D.style&&h.length;)d=!0,D.modElem=l(h.shift()),D.style=D.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],g=D.style[m],a(m,"-")&&(m=s(m)),D.style[m]!==n){if(r||o(i,"undefined"))return c(),"pfx"==t?m:!0;try{D.style[m]=i}catch(e){}if(D.style[m]!=g)return c(),"pfx"==t?m:!0}return c(),!1}function h(e,t,n,i,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?g(a,t,i,r):(a=(e+" "+T.join(s+" ")+s).split(" "),f(a,t,n))}function b(e,t,o){return h(e,n,n,t,o)}var w=[],C=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},x=function(){};x.prototype=y,x=new x;var $=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=$;var k=t.documentElement,S="svg"===k.nodeName.toLowerCase(),z="Moz O ms Webkit",T=y._config.usePrefixes?z.toLowerCase().split(" "):[];y._domPrefixes=T;var j="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;x.addTest("supports",j||_);var E=y._config.usePrefixes?z.split(" "):[];y._cssomPrefixes=E;var P=function(t){var o,i=$.length,r=e.CSSRule;if("undefined"==typeof r)return n;if(!t)return!1;if(t=t.replace(/^@/,""),o=t.replace(/-/g,"_").toUpperCase()+"_RULE",o in r)return"@"+t;for(var s=0;i>s;s++){var a=$[s],l=a.toUpperCase()+"_"+o;if(l in r)return"@-"+a.toLowerCase()+"-"+t}return!1};y.atRule=P;var F=y.testStyles=u;x.addTest("touchevents",(function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",$.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");F(o,(function(e){n=9===e.offsetTop}))}return n}));var M={elem:l("modernizr")};x._q.push((function(){delete M.elem}));var D={style:M.elem.style};x._q.unshift((function(){delete D.style}));y.testProp=function(e,t,o){return g([e],n,t,o)};y.testAllProps=h;var q=y.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=s(e)),t?h(e,t,n):h(e,"pfx"))};y.testAllProps=b,x.addTest("csstransforms3d",(function(){var e=!!b("perspective","1px",!0),t=x._config.usePrefixes;if(e&&(!t||"webkitPerspective"in k.style)){var n,o="#modernizr{width:0;height:0}";x.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",F(o+n,(function(t){e=7===t.offsetWidth&&18===t.offsetHeight}))}return e})),x.addTest("csstransitions",b("transition","all",!0)),x.addTest("objectfit",!!q("objectFit"),{aliases:["object-fit"]}),i(),r(w),delete y.addTest,delete y.addAsyncTest;for(var A=0;A<x._q.length;A++)x._q[A]();e.Modernizr=x}(window,document);(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?module.exports=t():typeof define==="function"&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies;var o=e.Cookies=t();o.noConflict=function(){e.Cookies=n;return o}}())})(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){e[o]=n[o]}}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(o,i){function r(t,n,r){if(typeof document==="undefined"){return}r=e({},i,r);if(typeof r.expires==="number"){r.expires=new Date(Date.now()+r.expires*864e5)}if(r.expires){r.expires=r.expires.toUTCString()}t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);n=o.write(n,t);var s="";for(var a in r){if(!r[a]){continue}s+="; "+a;if(r[a]===true){continue}s+="="+r[a].split(";")[0]}return document.cookie=t+"="+n+s}function s(e){if(typeof document==="undefined"||arguments.length&&!e){return}var n=document.cookie?document.cookie.split("; "):[];var i={};for(var r=0;r<n.length;r++){var s=n[r].split("=");var a=s.slice(1).join("=");if(a[0]==='"'){a=a.slice(1,-1)}try{var l=t.read(s[0]);i[l]=o.read(a,l);if(e===l){break}}catch(e){}}return e?i[e]:i}return Object.create({set:r,get:s,remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(o)}})}var o=n(t,{path:"/"});return o}));
/*!

    Custom scripts
    ------------------------
    DFG viewer script for cookies, sidebar adaption eg.

!*/
$(document).ready((function(){function e(){var e=false;(function(t){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=true})(navigator.userAgent||navigator.vendor||window.opera);return e}var t=e()?"touchend":"click";$(".offcanvas-toggle").on(t,(function(e){$(this).parent().toggleClass("open")}));$(".document-functions li.submenu > a").on(t,(function(e){$("li.submenu.open a").not(this).parent().removeClass("open");$(this).parent().toggleClass("open");return false}));$("nav .nav-toggle").on(t,(function(e){$(this).toggleClass("active");$("nav .viewer-nav").toggleClass("open")}));$(".calendar-view .contains-issues").on(t,(function(e){$(".calendar-view table td.open").not($(this).parent()).removeClass("open");$(this).parent().toggleClass("open")}));$(".tx-dfgviewer-newspaper-calendar").parents("body").addClass("calendar");$(".tx-dfgviewer-newspaper-calendar .calendar-list-selection a.select-calendar-view, .tx-dfgviewer-newspaper-calendar .calendar-view").addClass("active");$(".tx-dfgviewer-newspaper-calendar .calendar-list-selection a").on(t,(function(e){if(!$(this).hasClass("active")){var t="."+$(this).attr("class").replace("select-","");$(".tx-dfgviewer-newspaper-calendar .active").removeClass("active");$(this).addClass("active");$(t).addClass("active")}}));$(".provider img").each((function(){if(typeof this.naturalWidth!="undefined"&&this.naturalWidth==0||this.readyState=="uninitialized"){$(this).parents(".document-functions").addClass("missing-provider-image")}}));if($(".pages select option[selected]")[0]){$("dl.mobile-meta").append('<dt class="mobile-page-number">No.</dt><dd class="mobile-page-number">'+$(".pages select option[selected]").text()+"</dd>")}shortenMobileMetaElement=$(".provider dl.mobile-meta dd.tx-dlf-title a");shortenMobileMetaTitle=shortenMobileMetaElement.text();if(shortenMobileMetaTitle.length>140){shortenMobileMetaTitle=shortenMobileMetaTitle.substr(0,140)+"...";shortenMobileMetaElement.text(shortenMobileMetaTitle)}if(!$(".submenu.downloads ul li")[0]){$("#tab-downloads").replaceWith((function(){return $('<span title="'+$(this).attr("title")+'" class="'+$(this).attr("class")+'" id="'+$(this).attr("id")+'">'+$(this).html()+"</span>")}))}if(Cookies.get("tx-dlf-pageview-zoomFullscreen")==="true"){$("body").addClass("fullscreen static");$("a.fullscreen").addClass("active")}$("a.fullscreen").on(t,(function(){if($("body.fullscreen")[0]){exitFullscreen()}else{enterFullscreen()}}));if(Modernizr.touchevents){$(".fwds, .backs").on("touchstart",(function(){$(this).addClass("over");triggeredElement=$(this);setTimeout((function(){triggeredElement.addClass("enable-touchevent")}),250)})).on("touchend",(function(){localStorage.txDlfFromPage=$(this).attr("class").split(" ")[0]}));$("body").on("touchstart",(function(e){target=$(e.target);if(!target.closest(".page-control")[0]){$(".fwds, .backs").removeClass("over enable-touchevent");localStorage.clear()}}));if(localStorage.txDlfFromPage){$("."+localStorage.txDlfFromPage).addClass("no-transition over enable-touchevent");localStorage.clear()}}else{$(".fwds, .backs").on("mouseenter",(function(){$(this).addClass("over")})).on("mouseleave",(function(){$(this).removeClass("over")})).on("click",(function(){localStorage.txDlfFromPage=$(this).attr("class").split(" ")[0]}));if(localStorage.txDlfFromPage){$("."+localStorage.txDlfFromPage).addClass("no-transition over");localStorage.clear()}}if(Cookies.get("tx-dlf-pageview-hidebrowseralert")==="true"){$("#browser-hint").addClass("hidden")}setTimeout((function(){localStorage.clear();$(".fwds, .backs").removeClass("no-transition");$("body").removeClass("static")}),1e3)}));$(document).keyup((function(e){if(e.keyCode==27){if($("body.fullscreen")[0]){return exitFullscreen()}if($(".document-functions .search.open")[0]){$(".document-functions .search").removeClass("open")}}if(e.keyCode==70&&!$("#tx-dfgviewer-sru-query").is(":focus")){return enterFullscreen()}}));function enterFullscreen(){setTimeout((function(){window.dispatchEvent(new Event("resize"))}),220);$("body").addClass("fullscreen");$("a.fullscreen").addClass("active");Cookies.set("tx-dlf-pageview-zoomFullscreen","true",{sameSite:"lax"})}function exitFullscreen(){setTimeout((function(){window.dispatchEvent(new Event("resize"))}),220);$("body").removeClass("fullscreen");$("a.fullscreen").removeClass("active");Cookies.remove("tx-dlf-pageview-zoomFullscreen")}function hideBrowserAlert(){$("#browser-hint").addClass("hidden");Cookies.set("tx-dlf-pageview-hidebrowseralert","true",{sameSite:"lax"})}