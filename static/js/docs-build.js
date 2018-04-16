/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
    return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/*!

 Support JS for legacy browsers.
 Includes:

 HTML5 Shiv
 @afarkas @jdalton @jon_neal @rem
 MIT/GPL2 Licensed
 https://github.com/aFarkas/html5shiv

 matchMedia() polyfill
 (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license

 Respond.js
 min/max-width media query polyfill
 (c) Scott Jehl. MIT/GPLv2 Lic.
 http://j.mp/respondjs

 */
/*
 HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
    a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
    c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
    for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

window.matchMedia = window.matchMedia || (function( doc, undefined ) {

    "use strict";

    var bool,
        docElem = doc.documentElement,
        refNode = docElem.firstElementChild || docElem.firstChild,
    // fakeBody required for <FF4 when executed in <head>
        fakeBody = doc.createElement( "body" ),
        div = doc.createElement( "div" );

    div.id = "mq-test-1";
    div.style.cssText = "position:absolute;top:-100em";
    fakeBody.style.background = "none";
    fakeBody.appendChild(div);

    return function(q){

        div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

        docElem.insertBefore( fakeBody, refNode );
        bool = div.offsetWidth === 42;
        docElem.removeChild( fakeBody );

        return {
            matches: bool,
            media: q
        };

    };

}( document ));





/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function( win ){

    "use strict";

    //exposed namespace
    var respond = {};
    win.respond = respond;

    //define update even in native-mq-supporting browsers, to avoid errors
    respond.update = function(){};

    //expose media query support flag for external use
    respond.mediaQueriesSupported	= win.matchMedia && win.matchMedia( "only all" ).matches;

    //if media queries are supported, exit here
    if( respond.mediaQueriesSupported ){
        return;
    }

    //define vars
    var doc = win.document,
        docElem = doc.documentElement,
        mediastyles = [],
        rules = [],
        appendedEls = [],
        parsedSheets = {},
        resizeThrottle = 30,
        head = doc.getElementsByTagName( "head" )[0] || docElem,
        base = doc.getElementsByTagName( "base" )[0],
        links = head.getElementsByTagName( "link" ),
        requestQueue = [],

    //loop stylesheets, send text content to translate
        ripCSS = function(){

            for( var i = 0; i < links.length; i++ ){
                var sheet = links[ i ],
                    href = sheet.href,
                    media = sheet.media,
                    isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

                //only links plz and prevent re-parsing
                if( !!href && isCSS && !parsedSheets[ href ] ){
                    // selectivizr exposes css through the rawCssText expando
                    if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
                        translate( sheet.styleSheet.rawCssText, href, media );
                        parsedSheets[ href ] = true;
                    } else {
                        if( (!/^([a-zA-Z:]*\/\/)/.test( href ) && !base) ||
                            href.replace( RegExp.$1, "" ).split( "/" )[0] === win.location.host ){
                            requestQueue.push( {
                                href: href,
                                media: media
                            } );
                        }
                    }
                }
            }
            makeRequests();
        },

    //recurse through request queue, get css text
        makeRequests	= function(){
            if( requestQueue.length ){
                var thisRequest = requestQueue.shift();

                ajax( thisRequest.href, function( styles ){
                    translate( styles, thisRequest.href, thisRequest.media );
                    parsedSheets[ thisRequest.href ] = true;

                    // by wrapping recursive function call in setTimeout
                    // we prevent "Stack overflow" error in IE7
                    win.setTimeout(function(){ makeRequests(); },0);
                } );
            }
        },

    //find media blocks in css text, convert to style blocks
        translate = function( styles, href, media ){
            var qs = styles.match(  /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi ),
                ql = qs && qs.length || 0;

            //try to get CSS path
            href = href.substring( 0, href.lastIndexOf( "/" ) );

            var repUrls	= function( css ){
                    return css.replace( /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + href + "$2$3" );
                },
                useMedia = !ql && media;

            //if path exists, tack on trailing slash
            if( href.length ){ href += "/"; }

            //if no internal queries exist, but media attr does, use that
            //note: this currently lacks support for situations where a media attr is specified on a link AND
            //its associated stylesheet has internal CSS media queries.
            //In those cases, the media attribute will currently be ignored.
            if( useMedia ){
                ql = 1;
            }

            for( var i = 0; i < ql; i++ ){
                var fullq, thisq, eachq, eql;

                //media attr
                if( useMedia ){
                    fullq = media;
                    rules.push( repUrls( styles ) );
                }
                //parse for styles
                else{
                    fullq = qs[ i ].match( /@media *([^\{]+)\{([\S\s]+?)$/ ) && RegExp.$1;
                    rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
                }

                eachq = fullq.split( "," );
                eql	= eachq.length;

                for( var j = 0; j < eql; j++ ){
                    thisq = eachq[ j ];
                    mediastyles.push( {
                        media : thisq.split( "(" )[ 0 ].match( /(only\s+)?([a-zA-Z]+)\s?/ ) && RegExp.$2 || "all",
                        rules : rules.length - 1,
                        hasquery : thisq.indexOf("(") > -1,
                        minw : thisq.match( /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/ ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ),
                        maxw : thisq.match( /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/ ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
                    } );
                }
            }

            applyMedia();
        },

        lastCall,

        resizeDefer,

    // returns the value of 1em in pixels
        getEmValue = function() {
            var ret,
                div = doc.createElement('div'),
                body = doc.body,
                fakeUsed = false;

            div.style.cssText = "position:absolute;font-size:1em;width:1em";

            if( !body ){
                body = fakeUsed = doc.createElement( "body" );
                body.style.background = "none";
            }

            body.appendChild( div );

            docElem.insertBefore( body, docElem.firstChild );

            ret = div.offsetWidth;

            if( fakeUsed ){
                docElem.removeChild( body );
            }
            else {
                body.removeChild( div );
            }

            //also update eminpx before returning
            ret = eminpx = parseFloat(ret);

            return ret;
        },

    //cached container for 1em value, populated the first time it's needed
        eminpx,

    //enable/disable styles
        applyMedia = function( fromResize ){
            var name = "clientWidth",
                docElemProp = docElem[ name ],
                currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
                styleBlocks	= {},
                lastLink = links[ links.length-1 ],
                now = (new Date()).getTime();

            //throttle resize calls
            if( fromResize && lastCall && now - lastCall < resizeThrottle ){
                win.clearTimeout( resizeDefer );
                resizeDefer = win.setTimeout( applyMedia, resizeThrottle );
                return;
            }
            else {
                lastCall = now;
            }

            for( var i in mediastyles ){
                if( mediastyles.hasOwnProperty( i ) ){
                    var thisstyle = mediastyles[ i ],
                        min = thisstyle.minw,
                        max = thisstyle.maxw,
                        minnull = min === null,
                        maxnull = max === null,
                        em = "em";

                    if( !!min ){
                        min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
                    }
                    if( !!max ){
                        max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
                    }

                    // if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
                    if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
                        if( !styleBlocks[ thisstyle.media ] ){
                            styleBlocks[ thisstyle.media ] = [];
                        }
                        styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
                    }
                }
            }

            //remove any existing respond style element(s)
            for( var j in appendedEls ){
                if( appendedEls.hasOwnProperty( j ) ){
                    if( appendedEls[ j ] && appendedEls[ j ].parentNode === head ){
                        head.removeChild( appendedEls[ j ] );
                    }
                }
            }

            //inject active styles, grouped by media type
            for( var k in styleBlocks ){
                if( styleBlocks.hasOwnProperty( k ) ){
                    var ss = doc.createElement( "style" ),
                        css = styleBlocks[ k ].join( "\n" );

                    ss.type = "text/css";
                    ss.media = k;

                    //originally, ss was appended to a documentFragment and sheets were appended in bulk.
                    //this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
                    head.insertBefore( ss, lastLink.nextSibling );

                    if ( ss.styleSheet ){
                        ss.styleSheet.cssText = css;
                    }
                    else {
                        ss.appendChild( doc.createTextNode( css ) );
                    }

                    //push to appendedEls to track for later removal
                    appendedEls.push( ss );
                }
            }
        },
    //tweaked Ajax functions from Quirksmode
        ajax = function( url, callback ) {
            var req = xmlHttp();
            if (!req){
                return;
            }
            req.open( "GET", url, true );
            req.onreadystatechange = function () {
                if ( req.readyState !== 4 || req.status !== 200 && req.status !== 304 ){
                    return;
                }
                callback( req.responseText );
            };
            if ( req.readyState === 4 ){
                return;
            }
            req.send( null );
        },
    //define ajax obj
        xmlHttp = (function() {
            var xmlhttpmethod = false;
            try {
                xmlhttpmethod = new win.XMLHttpRequest();
            }
            catch( e ){
                xmlhttpmethod = new win.ActiveXObject( "Microsoft.XMLHTTP" );
            }
            return function(){
                return xmlhttpmethod;
            };
        })();

    //translate CSS
    ripCSS();

    //expose update for re-running respond later on
    respond.update = ripCSS;

    //adjust on resize
    function callMedia(){
        applyMedia( true );
    }
    if( win.addEventListener ){
        win.addEventListener( "resize", callMedia, false );
    }
    else if( win.attachEvent ){
        win.attachEvent( "onresize", callMedia );
    }
})(this);
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+http+less+php+twig */
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);s[o]=i[o]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var l,s,o=a;o&&!e.test(o.className);)o=o.parentNode;if(o&&(l=(o.className.match(e)||[,""])[1],s=t.languages[l]),s){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var u=a.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:a,language:l,grammar:s,code:u};if(t.hooks.run("before-highlight",g),r&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),l),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var l in i)n[l]=i[l];delete n.rest}e:for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s="Array"===t.util.type(s)?s:[s];for(var o=0;o<s.length;++o){var u=s[o],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),N=[p,1];b&&N.push(b);var O=new a(l,g?t.tokenize(m,g):m,h);N.push(O),w&&N.push(w),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}t.hooks.run("wrap",i);var s="";for(var o in i.attributes)s+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism);;
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));;
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}});;
Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/,inside:{property:/^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/,inside:{property:/[0-9]+[A-Z\s-]+$/i}},keyword:/^[\w-]+:(?=.+)/m};var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)\\n\\n[\\w\\W]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","keyword",options)};
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\w\W]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(\b|\B)(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","punctuation",{"function":Prism.languages.less.function}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});;
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*?(\r?\n|$)/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/(\?>|<\?php|<\?)/i,variable:/(\$\w+)\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(n){return e.tokenStack.push(n),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var n,a=0;n=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",Prism.highlight(n,e.grammar,"php"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/}));;
Prism.languages.twig={comment:/\{#[\s\S]*?#\}/,tag:{pattern:/(\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\})/,inside:{ld:{pattern:/^(\{\{\-?|\{%\-?\s*\w+)/,inside:{punctuation:/^(\{\{|\{%)\-?/,keyword:/\w+/}},rd:{pattern:/\-?(%\}|\}\})$/,inside:{punctuation:/.*/}},string:{pattern:/("|')(\\?.)*?\1/,inside:{punctuation:/^('|")|('|")$/}},keyword:/\b(if)\b/,"boolean":/\b(true|false|null)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/==|=|!=|<|>|>=|<=|\+|\-|~|\*|\/|\/\/|%|\*\*|\|/,"space-operator":{pattern:/(\s)(\b(not|b\-and|b\-xor|b\-or|and|or|in|matches|starts with|ends with|is)\b|\?|:|\?:)(?=\s)/,lookbehind:!0,inside:{operator:/.*/}},property:/\b[a-zA-Z_][a-zA-Z0-9_]*\b/,punctuation:/\(|\)|\[\]|\[|\]|\{|\}|:|\.|,/}},other:{pattern:/[\s\S]*/,inside:Prism.languages.markup}};;

//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//

//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//


//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//


//
// Showdown namespace
//
var Showdown = {extensions: {}};

//
// forEach
//
var forEach = Showdown.forEach = function (obj, callback) {
    if (typeof obj.forEach === 'function') {
        obj.forEach(callback);
    } else {
        var i, len = obj.length;
        for (i = 0; i < len; i++) {
            callback(obj[i], i, obj);
        }
    }
};

//
// Standard extension naming
//
var stdExtName = function (s) {
    return s.replace(/[_-]||\s/g, '').toLowerCase();
};

//
// converter
//
// Wraps all "globals" so that the only thing
// exposed is makeHtml().
//
Showdown.converter = function (converter_options) {

//
// Globals:
//

// Global hashes, used by various utility routines
    var g_urls;
    var g_titles;
    var g_html_blocks;

// Used to track when we're inside an ordered or unordered list
// (see _ProcessListItems() for details):
    var g_list_level = 0;

// Global extensions
    var g_lang_extensions = [];
    var g_output_modifiers = [];


//
// Automatic Extension Loading (node only):
//
    if (typeof module !== 'undefined' && typeof exports !== 'undefined' && typeof require !== 'undefined') {
        var fs = require('fs');

        if (fs) {
            // Search extensions folder
            var extensions = fs.readdirSync((__dirname || '.') + '/extensions').filter(function (file) {
                return ~file.indexOf('.js');
            }).map(function (file) {
                return file.replace(/\.js$/, '');
            });
            // Load extensions into Showdown namespace
            Showdown.forEach(extensions, function (ext) {
                var name = stdExtName(ext);
                Showdown.extensions[name] = require('./extensions/' + ext);
            });
        }
    }

    this.makeHtml = function (text) {
//
// Main function. The order in which other subs are called here is
// essential. Link and image substitutions need to happen before
// _EscapeSpecialCharsWithinTagAttributes(), so that any *'s or _'s in the <a>
// and <img> tags get encoded.
//

        // Clear the global hashes. If we don't clear these, you get conflicts
        // from other articles when generating a page which contains more than
        // one article (e.g. an index page that shows the N most recent
        // articles):
        g_urls = {};
        g_titles = {};
        g_html_blocks = [];

        // attacklab: Replace ~ with ~T
        // This lets us use tilde as an escape char to avoid md5 hashes
        // The choice of character is arbitray; anything that isn't
        // magic in Markdown will work.
        text = text.replace(/~/g, "~T");

        // attacklab: Replace $ with ~D
        // RegExp interprets $ as a special character
        // when it's in a replacement string
        text = text.replace(/\$/g, "~D");

        // Standardize line endings
        text = text.replace(/\r\n/g, "\n"); // DOS to Unix
        text = text.replace(/\r/g, "\n"); // Mac to Unix

        // Make sure text begins and ends with a couple of newlines:
        text = "\n\n" + text + "\n\n";

        // Convert all tabs to spaces.
        text = _Detab(text);

        // Strip any lines consisting only of spaces and tabs.
        // This makes subsequent regexen easier to write, because we can
        // match consecutive blank lines with /\n+/ instead of something
        // contorted like /[ \t]*\n+/ .
        text = text.replace(/^[ \t]+$/mg, "");

        // Run language extensions
        Showdown.forEach(g_lang_extensions, function (x) {
            text = _ExecuteExtension(x, text);
        });

        // Handle github codeblocks prior to running HashHTML so that
        // HTML contained within the codeblock gets escaped propertly
        text = _DoGithubCodeBlocks(text);

        // Turn block-level HTML blocks into hash entries
        text = _HashHTMLBlocks(text);

        // Strip link definitions, store in hashes.
        text = _StripLinkDefinitions(text);

        text = _RunBlockGamut(text);

        text = _UnescapeSpecialChars(text);

        // attacklab: Restore dollar signs
        text = text.replace(/~D/g, "$$");

        // attacklab: Restore tildes
        text = text.replace(/~T/g, "~");

        // Run output modifiers
        Showdown.forEach(g_output_modifiers, function (x) {
            text = _ExecuteExtension(x, text);
        });

        return text;
    };


//
// Options:
//

// Parse extensions options into separate arrays
    if (converter_options && converter_options.extensions) {

        var self = this;

        // Iterate over each plugin
        Showdown.forEach(converter_options.extensions, function (plugin) {
            var pluginName = plugin;

            // Assume it's a bundled plugin if a string is given
            if (typeof plugin === 'string') {
                plugin = Showdown.extensions[stdExtName(plugin)];
            }

            if (typeof plugin === 'function') {
                // Iterate over each extension within that plugin
                Showdown.forEach(plugin(self), function (ext) {
                    // Sort extensions by type
                    if (ext.type) {
                        if (ext.type === 'language' || ext.type === 'lang') {
                            g_lang_extensions.push(ext);
                        } else if (ext.type === 'output' || ext.type === 'html') {
                            g_output_modifiers.push(ext);
                        }
                    } else {
                        // Assume language extension
                        g_output_modifiers.push(ext);
                    }
                });
            } else {
                throw "Extension '" + pluginName + "' could not be loaded.  It was either not found or is not a valid extension.";
            }
        });
    }


    var _ExecuteExtension = function (ext, text) {
        if (ext.regex) {
            var re = new RegExp(ext.regex, 'g');
            return text.replace(re, ext.replace);
        } else if (ext.filter) {
            return ext.filter(text);
        }
    };

    var _StripLinkDefinitions = function (text) {
//
// Strips link definitions from text, stores the URLs and titles in
// hash references.
//

        // Link defs are in the form: ^[id]: url "optional title"

        /*
         var text = text.replace(/
         ^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1
         [ \t]*
         \n?				// maybe *one* newline
         [ \t]*
         <?(\S+?)>?			// url = $2
         [ \t]*
         \n?				// maybe one newline
         [ \t]*
         (?:
         (\n*)				// any lines skipped = $3 attacklab: lookbehind removed
         ["(]
         (.+?)				// title = $4
         [")]
         [ \t]*
         )?					// title is optional
         (?:\n+|$)
         /gm,
         function(){...});
         */

        // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "~0";

        text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,
            function (wholeMatch, m1, m2, m3, m4) {
                m1 = m1.toLowerCase();
                g_urls[m1] = _EncodeAmpsAndAngles(m2);  // Link IDs are case-insensitive
                if (m3) {
                    // Oops, found blank lines, so it's not a title.
                    // Put back the parenthetical statement we stole.
                    return m3 + m4;
                } else if (m4) {
                    g_titles[m1] = m4.replace(/"/g, "&quot;");
                }

                // Completely remove the definition from the text
                return "";
            }
        );

        // attacklab: strip sentinel
        text = text.replace(/~0/, "");

        return text;
    };

    var _HashHTMLBlocks = function (text) {
        // attacklab: Double up blank lines to reduce lookaround
        text = text.replace(/\n/g, "\n\n");

        // Hashify HTML blocks:
        // We only want to do this for block-level HTML tags, such as headers,
        // lists, and tables. That's because we still want to wrap <p>s around
        // "paragraphs" that are wrapped in non-block-level tags, such as anchors,
        // phrase emphasis, and spans. The list of tags we're looking for is
        // hard-coded:
        var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside";
        var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";

        // First, look for nested blocks, e.g.:
        //   <div>
        //     <div>
        //     tags for inner block must be indented.
        //     </div>
        //   </div>
        //
        // The outermost tags must start at the left margin for this to match, and
        // the inner nested divs must be indented.
        // We need to do this before the next, more liberal match, because the next
        // match will start at the first `<div>` and stop at the first `</div>`.

        // attacklab: This regex can be expensive when it fails.
        /*
         var text = text.replace(/
         (						// save in $1
         ^					// start of line  (with /m)
         <($block_tags_a)	// start tag = $2
         \b					// word break
         // attacklab: hack around khtml/pcre bug...
         [^\r]*?\n			// any number of lines, minimally matching
         </\2>				// the matching end tag
         [ \t]*				// trailing spaces/tabs
         (?=\n+)				// followed by a newline
         )						// attacklab: there are sentinel newlines at end of document
         /gm,function(){...}};
         */
        text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, hashElement);

        //
        // Now match more liberally, simply from `\n<tag>` to `</tag>\n`
        //

        /*
         var text = text.replace(/
         (						// save in $1
         ^					// start of line  (with /m)
         <($block_tags_b)	// start tag = $2
         \b					// word break
         // attacklab: hack around khtml/pcre bug...
         [^\r]*?				// any number of lines, minimally matching
         </\2>				// the matching end tag
         [ \t]*				// trailing spaces/tabs
         (?=\n+)				// followed by a newline
         )						// attacklab: there are sentinel newlines at end of document
         /gm,function(){...}};
         */
        text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, hashElement);

        // Special case just for <hr />. It was easier to make a special case than
        // to make the other regex more complicated.

        /*
         text = text.replace(/
         (						// save in $1
         \n\n				// Starting after a blank line
         [ ]{0,3}
         (<(hr)				// start tag = $2
         \b					// word break
         ([^<>])*?			//
         \/?>)				// the matching end tag
         [ \t]*
         (?=\n{2,})			// followed by a blank line
         )
         /g,hashElement);
         */
        text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, hashElement);

        // Special case for standalone HTML comments:

        /*
         text = text.replace(/
         (						// save in $1
         \n\n				// Starting after a blank line
         [ ]{0,3}			// attacklab: g_tab_width - 1
         <!
         (--[^\r]*?--\s*)+
         >
         [ \t]*
         (?=\n{2,})			// followed by a blank line
         )
         /g,hashElement);
         */
        text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, hashElement);

        // PHP and ASP-style processor instructions (<?...?> and <%...%>)

        /*
         text = text.replace(/
         (?:
         \n\n				// Starting after a blank line
         )
         (						// save in $1
         [ ]{0,3}			// attacklab: g_tab_width - 1
         (?:
         <([?%])			// $2
         [^\r]*?
         \2>
         )
         [ \t]*
         (?=\n{2,})			// followed by a blank line
         )
         /g,hashElement);
         */
        text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, hashElement);

        // attacklab: Undo double lines (see comment at top of this function)
        text = text.replace(/\n\n/g, "\n");
        return text;
    };

    var hashElement = function (wholeMatch, m1) {
        var blockText = m1;

        // Undo double lines
        blockText = blockText.replace(/\n\n/g, "\n");
        blockText = blockText.replace(/^\n/, "");

        // strip trailing blank lines
        blockText = blockText.replace(/\n+$/g, "");

        // Replace the element text with a marker ("~KxK" where x is its key)
        blockText = "\n\n~K" + (g_html_blocks.push(blockText) - 1) + "K\n\n";

        return blockText;
    };

    var _RunBlockGamut = function (text) {
//
// These are all the transformations that form block-level
// tags like paragraphs, headers, and list items.
//
        text = _DoHeaders(text);

        // Do Horizontal Rules:
        var key = hashBlock("<hr />");
        text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, key);
        text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, key);
        text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, key);

        text = _DoLists(text);
        text = _DoCodeBlocks(text);
        text = _DoBlockQuotes(text);

        // We already ran _HashHTMLBlocks() before, in Markdown(), but that
        // was to escape raw HTML in the original Markdown source. This time,
        // we're escaping the markup we've just created, so that we don't wrap
        // <p> tags around block-level tags.
        text = _HashHTMLBlocks(text);
        text = _FormParagraphs(text);

        return text;
    };

    var _RunSpanGamut = function (text) {
//
// These are all the transformations that occur *within* block-level
// tags like paragraphs, headers, and list items.
//

        text = _DoCodeSpans(text);
        text = _EscapeSpecialCharsWithinTagAttributes(text);
        text = _EncodeBackslashEscapes(text);

        // Process anchor and image tags. Images must come first,
        // because ![foo][f] looks like an anchor.
        text = _DoImages(text);
        text = _DoAnchors(text);

        // Make links out of things like `<http://example.com/>`
        // Must come after _DoAnchors(), because you can use < and >
        // delimiters in inline links like [this](<url>).
        text = _DoAutoLinks(text);
        text = _EncodeAmpsAndAngles(text);
        text = _DoItalicsAndBold(text);

        // Do hard breaks:
        text = text.replace(/  +\n/g, " <br />\n");

        return text;
    };

    var _EscapeSpecialCharsWithinTagAttributes = function (text) {
//
// Within tags -- meaning between < and > -- encode [\ ` * _] so they
// don't conflict with their use in Markdown for code, italics and strong.
//

        // Build a regex to find HTML tags and comments.  See Friedl's
        // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
        var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

        text = text.replace(regex, function (wholeMatch) {
            var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`");
            tag = escapeCharacters(tag, "\\`*_");
            return tag;
        });

        return text;
    };

    var _DoAnchors = function (text) {
//
// Turn Markdown link shortcuts into XHTML <a> tags.
//
        //
        // First, handle reference-style links: [link text] [id]
        //

        /*
         text = text.replace(/
         (							// wrap whole match in $1
         \[
         (
         (?:
         \[[^\]]*\]		// allow brackets nested one level
         |
         [^\[]			// or anything else
         )*
         )
         \]

         [ ]?					// one optional space
         (?:\n[ ]*)?				// one optional newline followed by spaces

         \[
         (.*?)					// id = $3
         \]
         )()()()()					// pad remaining backreferences
         /g,_DoAnchors_callback);
         */
        text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);

        //
        // Next, inline-style links: [link text](url "optional title")
        //

        /*
         text = text.replace(/
         (						// wrap whole match in $1
         \[
         (
         (?:
         \[[^\]]*\]	// allow brackets nested one level
         |
         [^\[\]]			// or anything else
         )
         )
         \]
         \(						// literal paren
         [ \t]*
         ()						// no id, so leave $3 empty
         <?(.*?)>?				// href = $4
         [ \t]*
         (						// $5
         (['"])				// quote char = $6
         (.*?)				// Title = $7
         \6					// matching quote
         [ \t]*				// ignore any spaces/tabs between closing quote and )
         )?						// title is optional
         \)
         )
         /g,writeAnchorTag);
         */
        text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);

        //
        // Last, handle reference-style shortcuts: [link text]
        // These must come last in case you've also got [link test][1]
        // or [link test](/foo)
        //

        /*
         text = text.replace(/
         (		 					// wrap whole match in $1
         \[
         ([^\[\]]+)				// link text = $2; can't contain '[' or ']'
         \]
         )()()()()()					// pad rest of backreferences
         /g, writeAnchorTag);
         */
        text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

        return text;
    };

    var writeAnchorTag = function (wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
        if (m7 === undefined) m7 = "";
        var whole_match = m1;
        var link_text = m2;
        var link_id = m3.toLowerCase();
        var url = m4;
        var title = m7;

        if (url === "") {
            if (link_id === "") {
                // lower-case and turn embedded newlines into spaces
                link_id = link_text.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + link_id;

            if (g_urls[link_id] !== undefined) {
                url = g_urls[link_id];
                if (g_titles[link_id] !== undefined) {
                    title = g_titles[link_id];
                }
            }
            else {
                if (whole_match.search(/\(\s*\)$/m) > -1) {
                    // Special case for explicit empty url
                    url = "";
                } else {
                    return whole_match;
                }
            }
        }

        url = escapeCharacters(url, "*_");
        var result = "<a href=\"" + url + "\"";

        if (title !== "") {
            title = title.replace(/"/g, "&quot;");
            title = escapeCharacters(title, "*_");
            result += " title=\"" + title + "\"";
        }

        result += ">" + link_text + "</a>";

        return result;
    };

    var _DoImages = function (text) {
//
// Turn Markdown image shortcuts into <img> tags.
//

        //
        // First, handle reference-style labeled images: ![alt text][id]
        //

        /*
         text = text.replace(/
         (						// wrap whole match in $1
         !\[
         (.*?)				// alt text = $2
         \]

         [ ]?				// one optional space
         (?:\n[ ]*)?			// one optional newline followed by spaces

         \[
         (.*?)				// id = $3
         \]
         )()()()()				// pad rest of backreferences
         /g,writeImageTag);
         */
        text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeImageTag);

        //
        // Next, handle inline images:  ![alt text](url "optional title")
        // Don't forget: encode * and _

        /*
         text = text.replace(/
         (						// wrap whole match in $1
         !\[
         (.*?)				// alt text = $2
         \]
         \s?					// One optional whitespace character
         \(					// literal paren
         [ \t]*
         ()					// no id, so leave $3 empty
         <?(\S+?)>?			// src url = $4
         [ \t]*
         (					// $5
         (['"])			// quote char = $6
         (.*?)			// title = $7
         \6				// matching quote
         [ \t]*
         )?					// title is optional
         \)
         )
         /g,writeImageTag);
         */
        text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeImageTag);

        return text;
    };

    var writeImageTag = function (wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
        var whole_match = m1;
        var alt_text = m2;
        var link_id = m3.toLowerCase();
        var url = m4;
        var title = m7;

        if (!title) title = "";

        if (url === "") {
            if (link_id === "") {
                // lower-case and turn embedded newlines into spaces
                link_id = alt_text.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + link_id;

            if (g_urls[link_id] !== undefined) {
                url = g_urls[link_id];
                if (g_titles[link_id] !== undefined) {
                    title = g_titles[link_id];
                }
            }
            else {
                return whole_match;
            }
        }

        alt_text = alt_text.replace(/"/g, "&quot;");
        url = escapeCharacters(url, "*_");
        var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

        // attacklab: Markdown.pl adds empty title attributes to images.
        // Replicate this bug.

        //if (title != "") {
        title = title.replace(/"/g, "&quot;");
        title = escapeCharacters(title, "*_");
        result += " title=\"" + title + "\"";
        //}

        result += " />";

        return result;
    };

    var _DoHeaders = function (text) {

        // Setext-style headers:
        //	Header 1
        //	========
        //
        //	Header 2
        //	--------
        //
        text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            function (wholeMatch, m1) {
                return hashBlock('<h1 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h1>");
            });

        text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
            function (matchFound, m1) {
                return hashBlock('<h2 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h2>");
            });

        // atx-style headers:
        //  # Header 1
        //  ## Header 2
        //  ## Header 2 with closing hashes ##
        //  ...
        //  ###### Header 6
        //

        /*
         text = text.replace(/
         ^(\#{1,6})				// $1 = string of #'s
         [ \t]*
         (.+?)					// $2 = Header text
         [ \t]*
         \#*						// optional closing #'s (not counted)
         \n+
         /gm, function() {...});
         */

        text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
            function (wholeMatch, m1, m2) {
                var h_level = m1.length;
                return hashBlock("<h" + h_level + ' id="' + headerId(m2) + '">' + _RunSpanGamut(m2) + "</h" + h_level + ">");
            });

        function headerId(m) {
            return m.replace(/[^\w]/g, '').toLowerCase();
        }

        return text;
    };

// This declaration keeps Dojo compressor from outputting garbage:
    var _ProcessListItems;

    var _DoLists = function (text) {
//
// Form HTML ordered (numbered) and unordered (bulleted) lists.
//

        // attacklab: add sentinel to hack around khtml/safari bug:
        // http://bugs.webkit.org/show_bug.cgi?id=11231
        text += "~0";

        // Re-usable pattern to match any entirel ul or ol list:

        /*
         var whole_list = /
         (									// $1 = whole list
         (								// $2
         [ ]{0,3}					// attacklab: g_tab_width - 1
         ([*+-]|\d+[.])				// $3 = first list item marker
         [ \t]+
         )
         [^\r]+?
         (								// $4
         ~0							// sentinel for workaround; should be $
         |
         \n{2,}
         (?=\S)
         (?!							// Negative lookahead for another list item marker
         [ \t]*
         (?:[*+-]|\d+[.])[ \t]+
         )
         )
         )/g
         */
        var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

        if (g_list_level) {
            text = text.replace(whole_list, function (wholeMatch, m1, m2) {
                var list = m1;
                var list_type = (m2.search(/[*+-]/g) > -1) ? "ul" : "ol";

                // Turn double returns into triple returns, so that we can make a
                // paragraph for the last item in a list, if necessary:
                list = list.replace(/\n{2,}/g, "\n\n\n");
                var result = _ProcessListItems(list);

                // Trim any trailing whitespace, to put the closing `</$list_type>`
                // up on the preceding line, to get it past the current stupid
                // HTML block parser. This is a hack to work around the terrible
                // hack that is the HTML block parser.
                result = result.replace(/\s+$/, "");
                result = "<" + list_type + ">" + result + "</" + list_type + ">\n";
                return result;
            });
        } else {
            whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
            text = text.replace(whole_list, function (wholeMatch, m1, m2, m3) {
                var runup = m1;
                var list = m2;

                var list_type = (m3.search(/[*+-]/g) > -1) ? "ul" : "ol";
                // Turn double returns into triple returns, so that we can make a
                // paragraph for the last item in a list, if necessary:
                list = list.replace(/\n{2,}/g, "\n\n\n");
                var result = _ProcessListItems(list);
                result = runup + "<" + list_type + ">\n" + result + "</" + list_type + ">\n";
                return result;
            });
        }

        // attacklab: strip sentinel
        text = text.replace(/~0/, "");

        return text;
    };

    _ProcessListItems = function (list_str) {
//
//  Process the contents of a single ordered or unordered list, splitting it
//  into individual list items.
//
        // The $g_list_level global keeps track of when we're inside a list.
        // Each time we enter a list, we increment it; when we leave a list,
        // we decrement. If it's zero, we're not in a list anymore.
        //
        // We do this because when we're not inside a list, we want to treat
        // something like this:
        //
        //    I recommend upgrading to version
        //    8. Oops, now this line is treated
        //    as a sub-list.
        //
        // As a single paragraph, despite the fact that the second line starts
        // with a digit-period-space sequence.
        //
        // Whereas when we're inside a list (or sub-list), that line will be
        // treated as the start of a sub-list. What a kludge, huh? This is
        // an aspect of Markdown's syntax that's hard to parse perfectly
        // without resorting to mind-reading. Perhaps the solution is to
        // change the syntax rules such that sub-lists must start with a
        // starting cardinal number; e.g. "1." or "a.".

        g_list_level++;

        // trim trailing blank lines:
        list_str = list_str.replace(/\n{2,}$/, "\n");

        // attacklab: add sentinel to emulate \z
        list_str += "~0";

        /*
         list_str = list_str.replace(/
         (\n)?							// leading line = $1
         (^[ \t]*)						// leading whitespace = $2
         ([*+-]|\d+[.]) [ \t]+			// list marker = $3
         ([^\r]+?						// list item text   = $4
         (\n{1,2}))
         (?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))
         /gm, function(){...});
         */
        list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
            function (wholeMatch, m1, m2, m3, m4) {
                var item = m4;
                var leading_line = m1;
                var leading_space = m2;

                if (leading_line || (item.search(/\n{2,}/) > -1)) {
                    item = _RunBlockGamut(_Outdent(item));
                }
                else {
                    // Recursion for sub-lists:
                    item = _DoLists(_Outdent(item));
                    item = item.replace(/\n$/, ""); // chomp(item)
                    item = _RunSpanGamut(item);
                }

                return "<li>" + item + "</li>\n";
            }
        );

        // attacklab: strip sentinel
        list_str = list_str.replace(/~0/g, "");

        g_list_level--;
        return list_str;
    };

    var _DoCodeBlocks = function (text) {
//
//  Process Markdown `<pre><code>` blocks.
//

        /*
         text = text.replace(text,
         /(?:\n\n|^)
         (								// $1 = the code block -- one or more lines, starting with a space/tab
         (?:
         (?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
         .*\n+
         )+
         )
         (\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
         /g,function(){...});
         */

        // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "~0";

        text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
            function (wholeMatch, m1, m2) {
                var codeblock = m1;
                var nextChar = m2;

                codeblock = _EncodeCode(_Outdent(codeblock));
                codeblock = _Detab(codeblock);
                codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
                codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace

                codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

                return hashBlock(codeblock) + nextChar;
            }
        );

        // attacklab: strip sentinel
        text = text.replace(/~0/, "");

        return text;
    };

    var _DoGithubCodeBlocks = function (text) {
//
//  Process Github-style code blocks
//  Example:
//  ```ruby
//  def hello_world(x)
//    puts "Hello, #{x}"
//  end
//  ```
//


        // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "~0";

        text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,
            function (wholeMatch, m1, m2) {
                var language = m1;
                var codeblock = m2;

                codeblock = _EncodeCode(codeblock);
                codeblock = _Detab(codeblock);
                codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
                codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace

                codeblock = "<pre><code" + (language ? " class=\"language-" + language + '"' : "") + ">" + codeblock + "\n</code></pre>";

                return hashBlock(codeblock);
            }
        );

        // attacklab: strip sentinel
        text = text.replace(/~0/, "");

        return text;
    };

    var hashBlock = function (text) {
        text = text.replace(/(^\n+|\n+$)/g, "");
        return "\n\n~K" + (g_html_blocks.push(text) - 1) + "K\n\n";
    };

    var _DoCodeSpans = function (text) {
//
//   *  Backtick quotes are used for <code></code> spans.
//
//   *  You can use multiple backticks as the delimiters if you want to
//	 include literal backticks in the code span. So, this input:
//
//		 Just type ``foo `bar` baz`` at the prompt.
//
//	   Will translate to:
//
//		 <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
//
//	There's no arbitrary limit to the number of backticks you
//	can use as delimters. If you need three consecutive backticks
//	in your code, use four for delimiters, etc.
//
//  *  You can use spaces to get literal backticks at the edges:
//
//		 ... type `` `bar` `` ...
//
//	   Turns to:
//
//		 ... type <code>`bar`</code> ...
//

        /*
         text = text.replace(/
         (^|[^\\])					// Character before opening ` can't be a backslash
         (`+)						// $2 = Opening run of `
         (							// $3 = The code block
         [^\r]*?
         [^`]					// attacklab: work around lack of lookbehind
         )
         \2							// Matching closer
         (?!`)
         /gm, function(){...});
         */

        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function (wholeMatch, m1, m2, m3, m4) {
                var c = m3;
                c = c.replace(/^([ \t]*)/g, "");	// leading whitespace
                c = c.replace(/[ \t]*$/g, "");	// trailing whitespace
                c = _EncodeCode(c);
                return m1 + "<code>" + c + "</code>";
            });

        return text;
    };

    var _EncodeCode = function (text) {
//
// Encode/escape certain characters inside Markdown code runs.
// The point is that in code, these characters are literals,
// and lose their special Markdown meanings.
//
        // Encode all ampersands; HTML entities are not
        // entities within a Markdown code span.
        text = text.replace(/&/g, "&amp;");

        // Do the angle bracket song and dance:
        text = text.replace(/</g, "&lt;");
        text = text.replace(/>/g, "&gt;");

        // Now, escape characters that are magic in Markdown:
        text = escapeCharacters(text, "\*_{}[]\\", false);

// jj the line above breaks this:
//---

//* Item

//   1. Subitem

//            special char: *
//---

        return text;
    };

    var _DoItalicsAndBold = function (text) {

        // <strong> must go first:
        text = text.replace(/(^|\s)(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\2/g,
            "$1<strong>$3</strong>");

        text = text.replace(/(^|\s)(\*|_)(?=\S)([^\r]*?\S)\2/g,
            "$1<em>$3</em>");

        return text;
    };

    var _DoBlockQuotes = function (text) {

        /*
         text = text.replace(/
         (								// Wrap whole match in $1
         (
         ^[ \t]*>[ \t]?			// '>' at the start of a line
         .+\n					// rest of the first line
         (.+\n)*					// subsequent consecutive lines
         \n*						// blanks
         )+
         )
         /gm, function(){...});
         */

        text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
            function (wholeMatch, m1) {
                var bq = m1;

                // attacklab: hack around Konqueror 3.5.4 bug:
                // "----------bug".replace(/^-/g,"") == "bug"

                bq = bq.replace(/^[ \t]*>[ \t]?/gm, "~0");	// trim one level of quoting

                // attacklab: clean up hack
                bq = bq.replace(/~0/g, "");

                bq = bq.replace(/^[ \t]+$/gm, "");		// trim whitespace-only lines
                bq = _RunBlockGamut(bq);				// recurse

                bq = bq.replace(/(^|\n)/g, "$1  ");
                // These leading spaces screw with <pre> content, so we need to fix that:
                bq = bq.replace(
                    /(\s*<pre>[^\r]+?<\/pre>)/gm,
                    function (wholeMatch, m1) {
                        var pre = m1;
                        // attacklab: hack around Konqueror 3.5.4 bug:
                        pre = pre.replace(/^  /mg, "~0");
                        pre = pre.replace(/~0/g, "");
                        return pre;
                    });

                return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
            });
        return text;
    };

    var _FormParagraphs = function (text) {
//
//  Params:
//    $text - string to process with html <p> tags
//

        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");

        var grafs = text.split(/\n{2,}/g);
        var grafsOut = [];

        //
        // Wrap <p> tags.
        //
        var end = grafs.length;
        for (var i = 0; i < end; i++) {
            var str = grafs[i];

            // if this is an HTML marker, copy it
            if (str.search(/~K(\d+)K/g) >= 0) {
                grafsOut.push(str);
            }
            else if (str.search(/\S/) >= 0) {
                str = _RunSpanGamut(str);
                str = str.replace(/^([ \t]*)/g, "<p>");
                str += "</p>";
                grafsOut.push(str);
            }

        }

        //
        // Unhashify HTML blocks
        //
        end = grafsOut.length;
        for (i = 0; i < end; i++) {
            // if this is a marker for an html block...
            while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
                var blockText = g_html_blocks[RegExp.$1];
                blockText = blockText.replace(/\$/g, "$$$$"); // Escape any dollar signs
                grafsOut[i] = grafsOut[i].replace(/~K\d+K/, blockText);
            }
        }

        return grafsOut.join("\n\n");
    };

    var _EncodeAmpsAndAngles = function (text) {
// Smart processing for ampersands and angle brackets that need to be encoded.

        // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
        //   http://bumppo.net/projects/amputator/
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");

        // Encode naked <'s
        text = text.replace(/<(?![a-z\/?\$!])/gi, "&lt;");

        return text;
    };

    var _EncodeBackslashEscapes = function (text) {
//
//   Parameter:  String.
//   Returns:	The string, with after processing the following backslash
//			   escape sequences.
//

        // attacklab: The polite way to do this is with the new
        // escapeCharacters() function:
        //
        // 	text = escapeCharacters(text,"\\",true);
        // 	text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
        //
        // ...but we're sidestepping its use of the (slow) RegExp constructor
        // as an optimization for Firefox.  This function gets called a LOT.

        text = text.replace(/\\(\\)/g, escapeCharacters_callback);
        text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, escapeCharacters_callback);
        return text;
    };

    var _DoAutoLinks = function (text) {

        text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, "<a href=\"$1\">$1</a>");

        // Email addresses: <address@domain.foo>

        /*
         text = text.replace(/
         <
         (?:mailto:)?
         (
         [-.\w]+
         \@
         [-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+
         )
         >
         /gi, _DoAutoLinks_callback());
         */
        text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
            function (wholeMatch, m1) {
                return _EncodeEmailAddress(_UnescapeSpecialChars(m1));
            }
        );

        return text;
    };

    var _EncodeEmailAddress = function (addr) {
//
//  Input: an email address, e.g. "foo@example.com"
//
//  Output: the email address as a mailto link, with each character
//	of the address encoded as either a decimal or hex entity, in
//	the hopes of foiling most address harvesting spam bots. E.g.:
//
//	<a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
//	   x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
//	   &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
//
//  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
//  mailing list: <http://tinyurl.com/yu7ue>
//

        var encode = [
            function (ch) {
                return "&#" + ch.charCodeAt(0) + ";";
            },
            function (ch) {
                return "&#x" + ch.charCodeAt(0).toString(16) + ";";
            },
            function (ch) {
                return ch;
            }
        ];

        addr = "mailto:" + addr;

        addr = addr.replace(/./g, function (ch) {
            if (ch == "@") {
                // this *must* be encoded. I insist.
                ch = encode[Math.floor(Math.random() * 2)](ch);
            } else if (ch != ":") {
                // leave ':' alone (to spot mailto: later)
                var r = Math.random();
                // roughly 10% raw, 45% hex, 45% dec
                ch = (
                    r > 0.9 ? encode[2](ch) :
                        r > 0.45 ? encode[1](ch) :
                            encode[0](ch)
                );
            }
            return ch;
        });

        addr = "<a href=\"" + addr + "\">" + addr + "</a>";
        addr = addr.replace(/">.+:/g, "\">"); // strip the mailto: from the visible part

        return addr;
    };

    var _UnescapeSpecialChars = function (text) {
//
// Swap back in all the special characters we've hidden.
//
        text = text.replace(/~E(\d+)E/g,
            function (wholeMatch, m1) {
                var charCodeToReplace = parseInt(m1);
                return String.fromCharCode(charCodeToReplace);
            }
        );
        return text;
    };

    var _Outdent = function (text) {
//
// Remove one level of line-leading tabs or spaces
//

        // attacklab: hack around Konqueror 3.5.4 bug:
        // "----------bug".replace(/^-/g,"") == "bug"

        text = text.replace(/^(\t|[ ]{1,4})/gm, "~0"); // attacklab: g_tab_width

        // attacklab: clean up hack
        text = text.replace(/~0/g, "");

        return text;
    };

    var _Detab = function (text) {
// attacklab: Detab's completely rewritten for speed.
// In perl we could fix it by anchoring the regexp with \G.
// In javascript we're less fortunate.

        // expand first n-1 tabs
        text = text.replace(/\t(?=\t)/g, "    "); // attacklab: g_tab_width

        // replace the nth with two sentinels
        text = text.replace(/\t/g, "~A~B");

        // use the sentinel to anchor our regex so it doesn't explode
        text = text.replace(/~B(.+?)~A/g,
            function (wholeMatch, m1, m2) {
                var leadingText = m1;
                var numSpaces = 4 - leadingText.length % 4;  // attacklab: g_tab_width

                // there *must* be a better way to do this:
                for (var i = 0; i < numSpaces; i++) leadingText += " ";

                return leadingText;
            }
        );

        // clean up sentinels
        text = text.replace(/~A/g, "    ");  // attacklab: g_tab_width
        text = text.replace(/~B/g, "");

        return text;
    };


//
//  attacklab: Utility functions
//


    var escapeCharacters = function (text, charsToEscape, afterBackslash) {
        // First we have to escape the escape characters so that
        // we can build a character class out of them
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";

        if (afterBackslash) {
            regexString = "\\\\" + regexString;
        }

        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharacters_callback);

        return text;
    };


    var escapeCharacters_callback = function (wholeMatch, m1) {
        var charCodeToEscape = m1.charCodeAt(0);
        return "~E" + charCodeToEscape + "E";
    };

}; // end of Showdown.converter


// export
if (typeof module !== 'undefined') module.exports = Showdown;

// stolen from AMD branch of underscore
// AMD define happens at the end for compatibility with AMD loaders
// that don't enforce next-turn semantics on modules.
if (typeof define === 'function' && define.amd) {
    define('showdown', function () {
        return Showdown;
    });
}
/*!
 * Flatdoc - (c) 2013, 2014 Rico Sta. Cruz
 * http://ricostacruz.com/flatdoc
 * @license MIT
 */

(function($) {
    var exports = this;

    var marked;

    /**
     * Basic Flatdoc module.
     *
     * The main entry point is `Flatdoc.run()`, which invokes the [Runner].
     *
     *     Flatdoc.run({
   *       fetcher: Flatdoc.github('rstacruz/backbone-patterns');
   *     });
     *
     * These fetcher functions are available:
     *
     *     Flatdoc.github('owner/repo')
     *     Flatdoc.github('owner/repo', 'API.md')
     *     Flatdoc.github('owner/repo', 'API.md', 'branch')
     *     Flatdoc.bitbucket('owner/repo')
     *     Flatdoc.bitbucket('owner/repo', 'API.md')
     *     Flatdoc.bitbucket('owner/repo', 'API.md', 'branch')
     *     Flatdoc.file('http://path/to/url')
     *     Flatdoc.file([ 'http://path/to/url', ... ])
     */

    var Flatdoc = exports.Flatdoc = {};

    /**
     * Creates a runner.
     * See [Flatdoc].
     */

    Flatdoc.run = function(options) {
        $(function() { (new Flatdoc.runner(options)).run(); });
    };

    /**
     * File fetcher function.
     *
     * Fetches a given `url` via AJAX.
     * See [Runner#run()] for a description of fetcher functions.
     */

    Flatdoc.file = function(url) {
        function loadData(locations, response, callback) {
            if (locations.length === 0) callback(null, response);

            else $.get(locations.shift())
                .fail(function(e) {
                    callback(e, null);
                })
                .done(function (data) {
                    if (response.length > 0) response += '\n\n';
                    response += data;
                    loadData(locations, response, callback);
                });
        }

        return function(callback) {
            loadData(url instanceof Array ?
                url : [url], '', callback);
        };
    };

    /**
     * Github fetcher.
     * Fetches from repo `repo` (in format 'user/repo').
     *
     * If the parameter `filepath` is supplied, it fetches the contents of that
     * given file in the repo's default branch. To fetch the contents of
     * `filepath` from a different branch, the parameter `ref` should be
     * supplied with the target branch name.
     *
     * See [Runner#run()] for a description of fetcher functions.
     *
     * See: http://developer.github.com/v3/repos/contents/
     */
    Flatdoc.github = function(opts) {
        if (typeof opts === 'string') {
            opts = {
                repo: arguments[0],
                filepath: arguments[1]
            };
        }
        var url;
        if (opts.filepath) {
            url = 'https://api.github.com/repos/'+opts.repo+'/contents/'+opts.filepath;
        } else {
            url = 'https://api.github.com/repos/'+opts.repo+'/readme';
        }
        var data = {};
        if (opts.token) {
            data.access_token = opts.token;
        }
        if (opts.ref) {
            data.ref = opts.ref;
        }
        return function(callback) {
            $.get(url, data)
                .fail(function(e) { callback(e, null); })
                .done(function(data) {
                    var markdown = exports.Base64.decode(data.content);
                    callback(null, markdown);
                });
        };
    };

    /**
     * Bitbucket fetcher.
     * Fetches from repo `repo` (in format 'user/repo').
     *
     * If the parameter `filepath` is supplied, it fetches the contents of that
     * given file in the repo.
     *
     * See [Runner#run()] for a description of fetcher functions.
     *
     * See: https://confluence.atlassian.com/display/BITBUCKET/src+Resources#srcResources-GETrawcontentofanindividualfile
     * See: http://ben.onfabrik.com/posts/embed-bitbucket-source-code-on-your-website
     * Bitbucket appears to have stricter restrictions on
     * Access-Control-Allow-Origin, and so the method here is a bit
     * more complicated than for Github
     *
     * If you don't pass a branch name, then 'default' for Hg repos is assumed
     * For git, you should pass 'master'. In both cases, you should also be able
     * to pass in a revision number here -- in Mercurial, this also includes
     * things like 'tip' or the repo-local integer revision number
     * Default to Mercurial because Git users historically tend to use GitHub
     */
    Flatdoc.bitbucket = function(opts) {
        if (typeof opts === 'string') {
            opts = {
                repo: arguments[0],
                filepath: arguments[1],
                branch: arguments[2]
            };
        }
        if (!opts.filepath) opts.filepath = 'readme.md';
        if (!opts.branch) opts.branch = 'default';

        var url = 'https://bitbucket.org/api/1.0/repositories/'+opts.repo+'/src/'+opts.branch+'/'+opts.filepath;

        return function(callback) {
            $.ajax({
                url: url,
                dataType: 'jsonp',
                error: function(xhr, status, error) {
                    alert(error);
                },
                success: function(response) {
                    var markdown = response.data;
                    callback(null, markdown);
                }
            });
        };
    };

    /**
     * Parser module.
     * Parses a given Markdown document and returns a JSON object with data
     * on the Markdown document.
     *
     *     var data = Flatdoc.parser.parse('markdown source here');
     *     console.log(data);
     *
     *     data == {
   *       title: 'My Project',
   *       content: '<p>This project is a...',
   *       menu: {...}
   *     }
     */

    var Parser = Flatdoc.parser = {};
    //
    ///**
    // * Parses a given Markdown document.
    // * See `Parser` for more info.
    // */
    //Parser.parse = function(source, highlight) {
    //    marked = exports.marked;
    //
    //    Parser.setMarkedOptions(highlight);
    //
    //    var html = $("<div>" + marked(source));
    //    var h1 = html.find('h1').eq(0);
    //    var title = h1.text();
    //
    //    // Mangle content
    //    Transformer.mangle(html);
    //    var menu = Transformer.getMenu(html);
    //
    //    return { title: title, content: html, menu: menu };
    //};
    //
    //Parser.setMarkedOptions = function(highlight) {
    //    marked.setOptions({
    //        langPrefix: "language-",
    //        highlight: function(code, lang) {
    //            if (lang) {
    //                return highlight(code, lang);
    //            }
    //            return code;
    //        }
    //    });
    //};

    /**
     * Parses a given Markdown document.
     * See `Parser` for more info.
     */
    Parser.parse = function(source, highlight) {

        converter = new Showdown.converter({ extensions: ['table','definition','github','badges'] });

        var html = $("<div>" + converter.makeHtml(source));
        var h1 = html.find('h1').eq(0);
        var title = h1.text();

        // Mangle content
        Transformer.mangle(html);
        var menu = Transformer.getMenu(html);

        //Prism.highlightAll();

        return { title: title, content: html, menu: menu };
    };

    /**
     * Transformer module.
     * This takes care of any HTML mangling needed.  The main entry point is
     * `.mangle()` which applies all transformations needed.
     *
     *     var $content = $("<p>Hello there, this is a docu...");
     *     Flatdoc.transformer.mangle($content);
     *
     * If you would like to change any of the transformations, decorate any of
     * the functions in `Flatdoc.transformer`.
     */

    var Transformer = Flatdoc.transformer = {};

    /**
     * Takes a given HTML `$content` and improves the markup of it by executing
     * the transformations.
     *
     * > See: [Transformer](#transformer)
     */
    Transformer.mangle = function($content) {
        this.addIDs($content);
        this.buttonize($content);
        this.smartquotes($content);
    };

    /**
     * Adds IDs to headings.
     */

    Transformer.addIDs = function($content) {
        var slugs = ['', '', ''];
        $content.find('h1, h2, h3').each(function() {
            var $el = $(this);
            var num = parseInt(this.nodeName[1]);
            var text = $el.text();
            var slug = Flatdoc.slugify(text);
            if (num > 1) slug = slugs[num - 2] + '-' + slug;
            slugs.length = num - 1;
            slugs = slugs.concat([slug, slug]);
            $el.attr('id', slug);
        });
    };

    /**
     * Returns menu data for a given HTML.
     *
     *     menu = Flatdoc.transformer.getMenu($content);
     *     menu == {
   *       level: 0,
   *       items: [{
   *         section: "Getting started",
   *         level: 1,
   *         items: [...]}, ...]}
     */

    Transformer.getMenu = function($content) {
        var root = {items: [], id: '', level: 0};
        var cache = [root];

        function mkdir_p(level) {
            cache.length = level + 1;
            var obj = cache[level];
            if (!obj) {
                var parent = (level > 1) ? mkdir_p(level-1) : root;
                obj = { items: [], level: level };
                cache = cache.concat([obj, obj]);
                parent.items.push(obj);
            }
            return obj;
        }

        $content.find('h1, h2, h3').each(function() {
            var $el = $(this);
            var level = +(this.nodeName.substr(1));

            var parent = mkdir_p(level-1);

            var obj = { section: $el.text(), items: [], level: level, id: $el.attr('id') };
            parent.items.push(obj);
            cache[level] = obj;
        });

        return root;
    };

    /**
     * Changes "button >" text to buttons.
     */

    Transformer.buttonize = function($content) {
        $content.find('a').each(function() {
            var $a = $(this);

            var m = $a.text().match(/^(.*) >$/);
            if (m) $a.text(m[1]).addClass('button');
        });
    };

    /**
     * Applies smart quotes to a given element.
     * It leaves `code` and `pre` blocks alone.
     */

    Transformer.smartquotes = function ($content) {
        var nodes = getTextNodesIn($content), len = nodes.length;
        for (var i=0; i<len; i++) {
            var node = nodes[i];
            node.nodeValue = quotify(node.nodeValue);
        }
    };

    /**
     * Syntax highlighters.
     *
     * You may add or change more highlighters via the `Flatdoc.highlighters`
     * object.
     *
     *     Flatdoc.highlighters.js = function(code) {
   *     };
     *
     * Each of these functions
     */

    var Highlighters = Flatdoc.highlighters = {};

    /**
     * JavaScript syntax highlighter.
     *
     * Thanks @visionmedia!
     */

    Highlighters.js = Highlighters.javascript = function(code) {
        var tokens = [],
            code = code
                .replace(/\/\/(.*)/gm, function(match, comment, offset, string) {
                    tokens.push('<span class="comment">//'+comment+'</span>');
                    return '__HIGHLIGHT_SCRIPT_TOKEN_'+(tokens.length-1)+'__';
                })
                .replace(/\/\*(.*)\*\//gm, function(match, comment, offset, string) {
                    tokens.push('<span class="comment">/*'+comment+'*/</span>');
                    return '__HIGHLIGHT_SCRIPT_TOKEN_'+(tokens.length-1)+'__';
                })
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/("[^\"]*?")/g, '<span class="string">$1</span>')
                .replace(/('[^\']*?')/g, '<span class="string">$1</span>')
                //.replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
                .replace(/\b(\d+\.\d+)\b/gm, '<span class="number">$1</span>')
                .replace(/\b(\d+)\b/gm, '<span class="number">$1</span>')
                .replace(/\bnew *([a-zA-Z0-9_.$]+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
                .replace(/\b(function|new|throw|return|var|if|else|try|case|switch|break|default|while|do)\b/gm, '<span class="keyword">$1</span>')
                .replace(/\b((document|window)(.[a-zA-Z0-9_.$]+)?)\b/gm, '<span class="class">$1</span>')
            ;

        tokens.forEach(function(token, i) {
            code = code.replace('__HIGHLIGHT_SCRIPT_TOKEN_'+i+'__', token);
        });

        return code;
    };

    Highlighters.html = function(code) {
        var tokens = [],
            code = code
            .replace(/(<script(.*?)>)([\s\S]*?)(<\/script>)/igm, function(match, tag, attributes, content, endTag, offset, string) {
                tokens.push(Highlighters.js(content));
                return tag+'{{HIGHLIGHT_TOKEN_'+(tokens.length-1)+'}}'+endTag;
            })
            //.replace(/(\s+)([a-zA-Z0-9\-]+)(\s*?)=/g, function(match, leadingSpace, name, trailingSpace, offset, string) {
            //        console.log(name);
            //    tokens.push(leadingSpace+'<span class="attribute">'+name+'</span>'+trailingSpace+'=');
            //    return '{{HIGHLIGHT_TOKEN_'+(tokens.length-1)+'}}';
            //})
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/([^\s]+?)=("[^"]*?")/gm, '<span class="attribute">$1</span>=<span class="string">$2</span>')
            //.replace(/("[^\"]*?")/g, '<span class="string">$1</span>')
            .replace(/('[^\']*?')/g, '<span class="string">$1</span>')
            .replace(/&lt;!--(.*)--&gt;/g, '<span class="comment">&lt;!--$1--&gt;</span>')
            .replace(/&lt;([^!][^\s&]*)/g, '&lt;<span class="entity">$1</span>')
        ;

        tokens.forEach(function(token, i) {
            code = code.replace('{{HIGHLIGHT_TOKEN_'+i+'}}', token);
        });

        //console.log(tokens);

        //console.log(code);
        return code;
    };

    Highlighters.generic = function(code) {
        return code
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/("[^\"]*?")/g, '<span class="string">$1</span>')
            .replace(/('[^\']*?')/g, '<span class="string">$1</span>')
            .replace(/(\/\/|#)(.*)/gm, '<span class="comment">$1$2</span>')
            .replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>')
            .replace(/(\d+)/gm, '<span class="number">$1</span>');
    };

    /**
     * Menu view. Renders menus
     */

    var MenuView = Flatdoc.menuView = function(menu) {
        var $el = $("<ul>");

        function process(node, $parent) {
            var id = node.id || 'root';

            var $li = $('<li>')
                .attr('id', id + '-item')
                .addClass('level-' + node.level)
                .appendTo($parent);

            if (node.section) {
                var $a = $('<a>')
                    .html(node.section)
                    .attr('id', id + '-link')
                    .attr('href', '#' + node.id)
                    .addClass('level-' + node.level)
                    .appendTo($li);
            }

            if (node.items.length > 0) {
                var $ul = $('<ul>')
                    .addClass('level-' + (node.level+1))
                    .attr('id', id + '-list')
                    .appendTo($li);

                node.items.forEach(function(item) {
                    process(item, $ul);
                });
            }
        }

        process(menu, $el);
        return $el;
    };

    /**
     * A runner module that fetches via a `fetcher` function.
     *
     *     var runner = new Flatdoc.runner({
   *       fetcher: Flatdoc.url('readme.txt')
   *     });
     *     runner.run();
     *
     * The following options are available:
     *
     *  - `fetcher` - a function that takes a callback as an argument and
     *    executes that callback when data is returned.
     *
     * See: [Flatdoc.run()]
     */

    var Runner = Flatdoc.runner = function(options) {
        this.initialize(options);
    };

    Runner.prototype.root    = '[role~="flatdoc"]';
    Runner.prototype.menu    = '[role~="flatdoc-menu"]';
    Runner.prototype.title   = '[role~="flatdoc-title"]';
    Runner.prototype.content = '[role~="flatdoc-content"]';

    Runner.prototype.initialize = function(options) {
        $.extend(this, options);
    };

    /**
     * Syntax highlighting.
     *
     * You may define a custom highlight function such as `highlight` from
     * the highlight.js library.
     *
     *     Flatdoc.run({
   *       highlight: function (code, value) {
   *         return hljs.highlight(lang, code).value;
   *       },
   *       ...
   *     });
     *
     */

    Runner.prototype.highlight = function(code, lang) {


        var grammar;
        switch(lang) {
            case "html":
            case "markup":
                grammar = Prism.languages.markup;
                break;

            case "js":
            case "json":
            case "javascript":
                grammar = Prism.languages.javascript;
                break;

            case "css":
                grammar = Prism.languages.css;
                break;

            case "clike":
                grammar = Prism.languages.clike;
                break;

            case "http":
                grammar = Prism.languages.http;
                break;

            case "less":
                grammar = Prism.languages.less;
                break;

            case "php":
                grammar = Prism.languages.php;
                break;

            case "twig":
                grammar = Prism.languages.twig;
                break;
        }

        if (grammar !== undefined) {
            return Prism.highlight(code, grammar);
        } else {
            var fn = Flatdoc.highlighters[lang] || Flatdoc.highlighters.generic;
            return fn(code);
        }
    };

    /**
     * Loads the Markdown document (via the fetcher), parses it, and applies it
     * to the elements.
     */

    Runner.prototype.run = function() {
        var doc = this;
        $(doc.root).trigger('flatdoc:loading');
        doc.fetcher(function(err, markdown) {
            if (err) {
                console.error('[Flatdoc] fetching Markdown data failed.', err);
                return;
            }
            var data = Flatdoc.parser.parse(markdown, doc.highlight);
            doc.applyData(data, doc);
            var id = location.hash.substr(1);
            if (id) {
                var el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView(true);
                    setTimeout(function(){
                        window.jumping = false;
                    }, 600);
                }
            }
            $(doc.root).trigger('flatdoc:ready');
        });
    };

    /**
     * Applies given doc data `data` to elements in object `elements`.
     */

    Runner.prototype.applyData = function(data) {
        var elements = this;

        elements.el('title').html(data.title);
        elements.el('content').html(data.content.find('>*'));
        elements.el('menu').html(MenuView(data.menu));

        this.updateCodeBlocks();
    };

    Runner.prototype.updateCodeBlocks = function() {

        var languageBlocks = $('pre code[class^=language]'),
            self = this;

        languageBlocks.each(function(i, block) {
            var classes = block.className.split(/\s+/);

            classes.forEach(function(name) {
                var m = name.match(/^language-(.*)$/);
                if (m) {
                    $(block).html(self.highlight($("<div/>").html($(block).html()).text(), m[1]));
                }
            });

        });

    }

    /**
     * Fetches a given element from the DOM.
     *
     * Returns a jQuery object.
     * @api private
     */

    Runner.prototype.el = function(aspect) {
        return $(this[aspect], this.root);
    };

    /*
     * Helpers
     */

    // http://stackoverflow.com/questions/298750/how-do-i-select-text-nodes-with-jquery
    function getTextNodesIn(el) {
        var exclude = 'iframe,pre,code';
        return $(el).find(':not('+exclude+')').andSelf().contents().filter(function() {
            return this.nodeType == 3 && $(this).closest(exclude).length === 0;
        });
    }

    // http://www.leancrew.com/all-this/2010/11/smart-quotes-in-javascript/
    function quotify(a) {
        //a = a.replace(/(^|[\-\u2014\s(\["])'/g, "$1\u2018");        // opening singles
        //a = a.replace(/'/g, "\u2019");                              // closing singles & apostrophes
        //a = a.replace(/(^|[\-\u2014\/\[(\u2018\s])"/g, "$1\u201c"); // opening doubles
        //a = a.replace(/"/g, "\u201d");                              // closing doubles
        a = a.replace(/\.\.\./g, "\u2026");                         // ellipses
        a = a.replace(/--/g, "\u2014");                             // em-dashes
        return a;
    }

})(jQuery);

/* jshint ignore:start */

/*!
 * marked - a markdown parser
 * Copyright (c) 2011-2013, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

(function(){var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:o,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:o,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};t.bullet=/(?:[*+-]|\d+\.)/;t.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;t.item=l(t.item,"gm")(/bull/g,t.bullet)();t.list=l(t.list)(/bull/g,t.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)();t._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b";t.html=l(t.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,t._tag)();t.paragraph=l(t.paragraph)("hr",t.hr)("heading",t.heading)("lheading",t.lheading)("blockquote",t.blockquote)("tag","<"+t._tag)("def",t.def)();t.normal=h({},t);t.gfm=h({},t.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});t.gfm.paragraph=l(t.paragraph)("(?!","(?!"+t.gfm.fences.source.replace("\\1","\\2")+"|")();t.tables=h({},t.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function e(e){this.tokens=[];this.tokens.links={};this.options=e||a.defaults;this.rules=t.normal;if(this.options.gfm){if(this.options.tables){this.rules=t.tables}else{this.rules=t.gfm}}}e.rules=t;e.lex=function(t,n){var s=new e(n);return s.lex(t)};e.prototype.lex=function(t){t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(t,true)};e.prototype.token=function(e,n){var e=e.replace(/^ +$/gm,""),s,i,r,l,o,h,a,u,p;while(e){if(r=this.rules.newline.exec(e)){e=e.substring(r[0].length);if(r[0].length>1){this.tokens.push({type:"space"})}}if(r=this.rules.code.exec(e)){e=e.substring(r[0].length);r=r[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?r.replace(/\n+$/,""):r});continue}if(r=this.rules.fences.exec(e)){e=e.substring(r[0].length);this.tokens.push({type:"code",lang:r[2],text:r[3]});continue}if(r=this.rules.heading.exec(e)){e=e.substring(r[0].length);this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});continue}if(n&&(r=this.rules.nptable.exec(e))){e=e.substring(r[0].length);h={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/\n$/,"").split("\n")};for(u=0;u<h.align.length;u++){if(/^ *-+: *$/.test(h.align[u])){h.align[u]="right"}else if(/^ *:-+: *$/.test(h.align[u])){h.align[u]="center"}else if(/^ *:-+ *$/.test(h.align[u])){h.align[u]="left"}else{h.align[u]=null}}for(u=0;u<h.cells.length;u++){h.cells[u]=h.cells[u].split(/ *\| */)}this.tokens.push(h);continue}if(r=this.rules.lheading.exec(e)){e=e.substring(r[0].length);this.tokens.push({type:"heading",depth:r[2]==="="?1:2,text:r[1]});continue}if(r=this.rules.hr.exec(e)){e=e.substring(r[0].length);this.tokens.push({type:"hr"});continue}if(r=this.rules.blockquote.exec(e)){e=e.substring(r[0].length);this.tokens.push({type:"blockquote_start"});r=r[0].replace(/^ *> ?/gm,"");this.token(r,n);this.tokens.push({type:"blockquote_end"});continue}if(r=this.rules.list.exec(e)){e=e.substring(r[0].length);l=r[2];this.tokens.push({type:"list_start",ordered:l.length>1});r=r[0].match(this.rules.item);s=false;p=r.length;u=0;for(;u<p;u++){h=r[u];a=h.length;h=h.replace(/^ *([*+-]|\d+\.) +/,"");if(~h.indexOf("\n ")){a-=h.length;h=!this.options.pedantic?h.replace(new RegExp("^ {1,"+a+"}","gm"),""):h.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&u!==p-1){o=t.bullet.exec(r[u+1])[0];if(l!==o&&!(l.length>1&&o.length>1)){e=r.slice(u+1).join("\n")+e;u=p-1}}i=s||/\n\n(?!\s*$)/.test(h);if(u!==p-1){s=h[h.length-1]==="\n";if(!i)i=s}this.tokens.push({type:i?"loose_item_start":"list_item_start"});this.token(h,false);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(r=this.rules.html.exec(e)){e=e.substring(r[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:r[1]==="pre"||r[1]==="script",text:r[0]});continue}if(n&&(r=this.rules.def.exec(e))){e=e.substring(r[0].length);this.tokens.links[r[1].toLowerCase()]={href:r[2],title:r[3]};continue}if(n&&(r=this.rules.table.exec(e))){e=e.substring(r[0].length);h={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(u=0;u<h.align.length;u++){if(/^ *-+: *$/.test(h.align[u])){h.align[u]="right"}else if(/^ *:-+: *$/.test(h.align[u])){h.align[u]="center"}else if(/^ *:-+ *$/.test(h.align[u])){h.align[u]="left"}else{h.align[u]=null}}for(u=0;u<h.cells.length;u++){h.cells[u]=h.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(h);continue}if(n&&(r=this.rules.paragraph.exec(e))){e=e.substring(r[0].length);this.tokens.push({type:"paragraph",text:r[1][r[1].length-1]==="\n"?r[1].slice(0,-1):r[1]});continue}if(r=this.rules.text.exec(e)){e=e.substring(r[0].length);this.tokens.push({type:"text",text:r[0]});continue}if(e){throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}}return this.tokens};var n={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:o,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};n._inside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/;n._href=/\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;n.link=l(n.link)("inside",n._inside)("href",n._href)();n.reflink=l(n.reflink)("inside",n._inside)();n.normal=h({},n);n.pedantic=h({},n.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});n.gfm=h({},n.normal,{escape:l(n.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(n.text)("]|","~]|")("|","|https?://|")()});n.breaks=h({},n.gfm,{br:l(n.br)("{2,}","*")(),text:l(n.gfm.text)("{2,}","*")()});function s(t,e){this.options=e||a.defaults;this.links=t;this.rules=n.normal;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=n.breaks}else{this.rules=n.gfm}}else if(this.options.pedantic){this.rules=n.pedantic}}s.rules=n;s.output=function(t,e,n){var i=new s(e,n);return i.output(t)};s.prototype.output=function(t){var e="",n,s,i,l;while(t){if(l=this.rules.escape.exec(t)){t=t.substring(l[0].length);e+=l[1];continue}if(l=this.rules.autolink.exec(t)){t=t.substring(l[0].length);if(l[2]==="@"){s=l[1][6]===":"?this.mangle(l[1].substring(7)):this.mangle(l[1]);i=this.mangle("mailto:")+s}else{s=r(l[1]);i=s}e+='<a href="'+i+'">'+s+"</a>";continue}if(l=this.rules.url.exec(t)){t=t.substring(l[0].length);s=r(l[1]);i=s;e+='<a href="'+i+'">'+s+"</a>";continue}if(l=this.rules.tag.exec(t)){t=t.substring(l[0].length);e+=this.options.sanitize?r(l[0]):l[0];continue}if(l=this.rules.link.exec(t)){t=t.substring(l[0].length);e+=this.outputLink(l,{href:l[2],title:l[3]});continue}if((l=this.rules.reflink.exec(t))||(l=this.rules.nolink.exec(t))){t=t.substring(l[0].length);n=(l[2]||l[1]).replace(/\s+/g," ");n=this.links[n.toLowerCase()];if(!n||!n.href){e+=l[0][0];t=l[0].substring(1)+t;continue}e+=this.outputLink(l,n);continue}if(l=this.rules.strong.exec(t)){t=t.substring(l[0].length);e+="<strong>"+this.output(l[2]||l[1])+"</strong>";continue}if(l=this.rules.em.exec(t)){t=t.substring(l[0].length);e+="<em>"+this.output(l[2]||l[1])+"</em>";continue}if(l=this.rules.code.exec(t)){t=t.substring(l[0].length);e+="<code>"+r(l[2],true)+"</code>";continue}if(l=this.rules.br.exec(t)){t=t.substring(l[0].length);e+="<br>";continue}if(l=this.rules.del.exec(t)){t=t.substring(l[0].length);e+="<del>"+this.output(l[1])+"</del>";continue}if(l=this.rules.text.exec(t)){t=t.substring(l[0].length);e+=r(l[0]);continue}if(t){throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}}return e};s.prototype.outputLink=function(t,e){if(t[0][0]!=="!"){return'<a href="'+r(e.href)+'"'+(e.title?' title="'+r(e.title)+'"':"")+">"+this.output(t[1])+"</a>"}else{return'<img src="'+r(e.href)+'" alt="'+r(t[1])+'"'+(e.title?' title="'+r(e.title)+'"':"")+">"}};s.prototype.smartypants=function(t){if(!this.options.smartypants)return t;return t.replace(/--/g,"—").replace(/\.{3}/g,"…")};s.prototype.mangle=function(t){var e="",n=t.length,s=0,i;for(;s<n;s++){i=t.charCodeAt(s);if(Math.random()>.5){i="x"+i.toString(16)}e+="&#"+i+";"}return e};function i(t){this.tokens=[];this.token=null;this.options=t||a.defaults}i.parse=function(t,e){var n=new i(e);return n.parse(t)};i.prototype.parse=function(t){this.inline=new s(t.links,this.options);this.tokens=t.reverse();var e="";while(this.next()){e+=this.tok()}return e};i.prototype.next=function(){return this.token=this.tokens.pop()};i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};i.prototype.parseText=function(){var t=this.token.text;while(this.peek().type==="text"){t+="\n"+this.next().text}return this.inline.output(t)};i.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return"<hr>\n"}case"heading":{return"<h"+this.token.depth+">"+this.inline.output(this.token.text)+"</h"+this.token.depth+">\n"}case"code":{if(this.options.highlight){var t=this.options.highlight(this.token.text,this.token.lang);if(t!=null&&t!==this.token.text){this.token.escaped=true;this.token.text=t}}if(!this.token.escaped){this.token.text=r(this.token.text,true)}return"<pre><code"+(this.token.lang?' class="'+this.options.langPrefix+this.token.lang+'"':"")+">"+this.token.text+"</code></pre>\n"}case"table":{var e="",n,s,i,l,o;e+="<thead>\n<tr>\n";for(s=0;s<this.token.header.length;s++){n=this.inline.output(this.token.header[s]);e+=this.token.align[s]?'<th align="'+this.token.align[s]+'">'+n+"</th>\n":"<th>"+n+"</th>\n"}e+="</tr>\n</thead>\n";e+="<tbody>\n";for(s=0;s<this.token.cells.length;s++){i=this.token.cells[s];e+="<tr>\n";for(o=0;o<i.length;o++){l=this.inline.output(i[o]);e+=this.token.align[o]?'<td align="'+this.token.align[o]+'">'+l+"</td>\n":"<td>"+l+"</td>\n"}e+="</tr>\n"}e+="</tbody>\n";return"<table>\n"+e+"</table>\n"}case"blockquote_start":{var e="";while(this.next().type!=="blockquote_end"){e+=this.tok()}return"<blockquote>\n"+e+"</blockquote>\n"}case"list_start":{var h=this.token.ordered?"ol":"ul",e="";while(this.next().type!=="list_end"){e+=this.tok()}return"<"+h+">\n"+e+"</"+h+">\n"}case"list_item_start":{var e="";while(this.next().type!=="list_item_end"){e+=this.token.type==="text"?this.parseText():this.tok()}return"<li>"+e+"</li>\n"}case"loose_item_start":{var e="";while(this.next().type!=="list_item_end"){e+=this.tok()}return"<li>"+e+"</li>\n"}case"html":{return!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text}case"paragraph":{return"<p>"+this.inline.output(this.token.text)+"</p>\n"}case"text":{return"<p>"+this.parseText()+"</p>\n"}}};function r(t,e){return t.replace(!e?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(t,e){t=t.source;e=e||"";return function n(s,i){if(!s)return new RegExp(t,e);i=i.source||i;i=i.replace(/(^|[^\[])\^/g,"$1");t=t.replace(s,i);return n}}function o(){}o.exec=o;function h(t){var e=1,n,s;for(;e<arguments.length;e++){n=arguments[e];for(s in n){if(Object.prototype.hasOwnProperty.call(n,s)){t[s]=n[s]}}}return t}function a(t,n,s){if(s||typeof n==="function"){if(!s){s=n;n=null}if(n)n=h({},a.defaults,n);var l=e.lex(l,n),o=n.highlight,u=0,p=l.length,g=0;if(!o||o.length<3){return s(null,i.parse(l,n))}var c=function(){delete n.highlight;var t=i.parse(l,n);n.highlight=o;return s(null,t)};for(;g<p;g++){(function(t){if(t.type!=="code")return;u++;return o(t.text,t.lang,function(e,n){if(n==null||n===t.text){return--u||c()}t.text=n;t.escaped=true;--u||c()})})(l[g])}return}try{if(n)n=h({},a.defaults,n);return i.parse(e.lex(t,n),n)}catch(f){f.message+="\nPlease report this to https://github.com/chjj/marked.";if((n||a.defaults).silent){return"<p>An error occured:</p><pre>"+r(f.message+"",true)+"</pre>"}throw f}}a.options=a.setOptions=function(t){h(a.defaults,t);return a};a.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-"};a.Parser=i;a.parser=i.parse;a.Lexer=e;a.lexer=e.lex;a.InlineLexer=s;a.inlineLexer=s.output;a.parse=a;if(typeof exports==="object"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}else{this.marked=a}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

/*!
 * base64.js
 * http://github.com/dankogai/js-base64
 */

(function(r){"use strict";if(r.Base64)return;var e="2.1.2";var t;if(typeof module!=="undefined"&&module.exports){t=require("buffer").Buffer}var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var a=function(r){var e={};for(var t=0,n=r.length;t<n;t++)e[r.charAt(t)]=t;return e}(n);var o=String.fromCharCode;var u=function(r){if(r.length<2){var e=r.charCodeAt(0);return e<128?r:e<2048?o(192|e>>>6)+o(128|e&63):o(224|e>>>12&15)+o(128|e>>>6&63)+o(128|e&63)}else{var e=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return o(240|e>>>18&7)+o(128|e>>>12&63)+o(128|e>>>6&63)+o(128|e&63)}};var c=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;var i=function(r){return r.replace(c,u)};var f=function(r){var e=[0,2,1][r.length%3],t=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),a=[n.charAt(t>>>18),n.charAt(t>>>12&63),e>=2?"=":n.charAt(t>>>6&63),e>=1?"=":n.charAt(t&63)];return a.join("")};var h=r.btoa||function(r){return r.replace(/[\s\S]{1,3}/g,f)};var d=t?function(r){return new t(r).toString("base64")}:function(r){return h(i(r))};var v=function(r,e){return!e?d(r):d(r).replace(/[+\/]/g,function(r){return r=="+"?"-":"_"}).replace(/=/g,"")};var g=function(r){return v(r,true)};var l=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");var A=function(r){switch(r.length){case 4:var e=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),t=e-65536;return o((t>>>10)+55296)+o((t&1023)+56320);case 3:return o((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return o((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}};var s=function(r){return r.replace(l,A)};var p=function(r){var e=r.length,t=e%4,n=(e>0?a[r.charAt(0)]<<18:0)|(e>1?a[r.charAt(1)]<<12:0)|(e>2?a[r.charAt(2)]<<6:0)|(e>3?a[r.charAt(3)]:0),u=[o(n>>>16),o(n>>>8&255),o(n&255)];u.length-=[0,0,2,1][t];return u.join("")};var C=r.atob||function(r){return r.replace(/[\s\S]{1,4}/g,p)};var b=t?function(r){return new t(r,"base64").toString()}:function(r){return s(C(r))};var B=function(r){return b(r.replace(/[-_]/g,function(r){return r=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};r.Base64={VERSION:e,atob:C,btoa:h,fromBase64:B,toBase64:v,utob:i,encode:v,encodeURI:g,btou:s,decode:B};if(typeof Object.defineProperty==="function"){var S=function(r){return{value:r,enumerable:false,writable:true,configurable:true}};r.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",S(function(){return B(this)}));Object.defineProperty(String.prototype,"toBase64",S(function(r){return v(this,r)}));Object.defineProperty(String.prototype,"toBase64URI",S(function(){return v(this,true)}))}}})(this);

/*!
 * node-parameterize 0.0.7
 * https://github.com/fyalavuz/node-parameterize
 * Exported as `Flatdoc.slugify`
 */

(function(r){var LATIN_MAP={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ő":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ű":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ő":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ű":"u","ý":"y","þ":"th","ÿ":"y"};var LATIN_SYMBOLS_MAP={"©":"(c)"};var GREEK_MAP={"α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"h","ώ":"w","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"H","Ώ":"W","Ϊ":"I","Ϋ":"Y"};var TURKISH_MAP={"ş":"s","Ş":"S","ı":"i","İ":"I","ç":"c","Ç":"C","ü":"u","Ü":"U","ö":"o","Ö":"O","ğ":"g","Ğ":"G"};var RUSSIAN_MAP={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya"};var UKRAINIAN_MAP={"Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g"};var CZECH_MAP={"č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z"};var POLISH_MAP={"ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"e","Ł":"L","Ń":"N","Ó":"o","Ś":"S","Ź":"Z","Ż":"Z"};var LATVIAN_MAP={"ā":"a","č":"c","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","š":"s","ū":"u","ž":"z","Ā":"A","Č":"C","Ē":"E","Ģ":"G","Ī":"i","Ķ":"k","Ļ":"L","Ņ":"N","Š":"S","Ū":"u","Ž":"Z"};var ALL_DOWNCODE_MAPS=new Array;ALL_DOWNCODE_MAPS[0]=LATIN_MAP;ALL_DOWNCODE_MAPS[1]=LATIN_SYMBOLS_MAP;ALL_DOWNCODE_MAPS[2]=GREEK_MAP;ALL_DOWNCODE_MAPS[3]=TURKISH_MAP;ALL_DOWNCODE_MAPS[4]=RUSSIAN_MAP;ALL_DOWNCODE_MAPS[5]=UKRAINIAN_MAP;ALL_DOWNCODE_MAPS[6]=CZECH_MAP;ALL_DOWNCODE_MAPS[7]=POLISH_MAP;ALL_DOWNCODE_MAPS[8]=LATVIAN_MAP;var Downcoder=new Object;Downcoder.Initialize=function(){if(Downcoder.map)return;Downcoder.map={};Downcoder.chars="";for(var i in ALL_DOWNCODE_MAPS){var lookup=ALL_DOWNCODE_MAPS[i];for(var c in lookup){Downcoder.map[c]=lookup[c];Downcoder.chars+=c}}Downcoder.regex=new RegExp("["+Downcoder.chars+"]|[^"+Downcoder.chars+"]+","g")};downcode=function(slug){Downcoder.Initialize();var downcoded="";var pieces=slug.match(Downcoder.regex);if(pieces){for(var i=0;i<pieces.length;i++){if(pieces[i].length==1){var mapped=Downcoder.map[pieces[i]];if(mapped!=null){downcoded+=mapped;continue}}downcoded+=pieces[i]}}else{downcoded=slug}return downcoded};Flatdoc.slugify=function(s,num_chars){s=downcode(s);s=s.replace(/[^-\w\s]/g,"");s=s.replace(/^\s+|\s+$/g,"");s=s.replace(/[-\s]+/g,"-");s=s.toLowerCase();return s.substring(0,num_chars)};})();

/* jshint ignore:end */
//
//  Github Extension (WIP)
//  ~~strike-through~~   ->  <del>strike-through</del>
//

(function(){
    var github = function(converter) {
        return [
            {
              // strike-through
              // NOTE: showdown already replaced "~" with "~T", so we need to adjust accordingly.
              type    : 'lang',
              regex   : '(~T){2}([^~]+)(~T){2}',
              replace : function(match, prefix, content, suffix) {
                  return '<del>' + content + '</del>';
              }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.github = github; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = github;
}());

/*global module:true*/
/*
 * Basic table support with re-entrant parsing, where cell content
 * can also specify markdown.
 *
 * Tables
 * ======
 *
 * | Col 1   | Col 2                                              |
 * |======== |====================================================|
 * |**bold** | ![Valid XHTML] (http://w3.org/Icons/valid-xhtml10) |
 * | Plain   | Value                                              |
 *
 */

(function(){
  var table = function(converter) {
    var tables = {}, style = 'text-align:left;', filter; 
    tables.th = function(header){
      if (header.trim() === "") { return "";}
      var id = header.trim().replace(/ /g, '_').toLowerCase();
      return '<th id="' + id + '" style="'+style+'">' + header + '</th>';
    };
    tables.td = function(cell) {
      return '<td style="'+style+'">' + converter.makeHtml(cell) + '</td>';
    };
    tables.ths = function(){
      var out = "", i = 0, hs = [].slice.apply(arguments);
      for (i;i<hs.length;i+=1) {
        out += tables.th(hs[i]) + '\n';
      }
      return out;
    };
    tables.tds = function(){
      var out = "", i = 0, ds = [].slice.apply(arguments);
      for (i;i<ds.length;i+=1) {
        out += tables.td(ds[i]) + '\n';
      }
      return out;
    };
    tables.thead = function() {
      var out, i = 0, hs = [].slice.apply(arguments);
      out = "<thead>\n";
      out += "<tr>\n";
      out += tables.ths.apply(this, hs);
      out += "</tr>\n";
      out += "</thead>\n";
      return out;
    };
    tables.tr = function() {
      var out, i = 0, cs = [].slice.apply(arguments);
      out = "<tr>\n";
      out += tables.tds.apply(this, cs);
      out += "</tr>\n";
      return out;
    };
    filter = function(text) {
      var i=0, lines = text.split('\n'), tbl = [], line, hs, rows, out = [];
      for (i; i<lines.length;i+=1) {
        line = lines[i];
        // looks like a table heading
        if (line.trim().match(/^[|]{1}.*[|]{1}$/)) {
          line = line.trim();
          tbl.push('<table>');
          hs = line.substring(1, line.length -1).split('|');
          tbl.push(tables.thead.apply(this, hs));
          line = lines[++i];
          if (!line.trim().match(/^[|]{1}[-=| ]+[|]{1}$/)) {
            // not a table rolling back
            line = lines[--i];
          }
          else {
            line = lines[++i];
            tbl.push('<tbody>');
            while (line.trim().match(/^[|]{1}.*[|]{1}$/)) {
              line = line.trim();
              tbl.push(tables.tr.apply(this, line.substring(1, line.length -1).split('|')));
              line = lines[++i];
            }
            tbl.push('</tbody>');
            tbl.push('</table>');
            // we are done with this table and we move along
            out.push(tbl.join('\n'));
            continue;
          }
        }
        out.push(line);
      }             
      return out.join('\n');
    };
    return [
    { 
      type: 'lang', 
      filter: filter
    }
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.table = table; }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = table;
  }
}());

/*global module:true*/
/*
 * Basic definition list support with re-entrant parsing
 *
 * Definition Lists
 * ======
 *
 * Apple
 * :   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
 * :   An american computer company.
 *
 * Orange
 * :   The fruit of an evergreen tree of the genus Citrus.
 *
 *
 * *** NOTE ****
 * My implementation is lazy so definition lines do not support multiple line breaks. SO SORRY!
 *
 *
 * ** CUSTOMIZATION **
 * Definition Lists whose first term starts with a code block (e.g. `term`) will include a class named 'inline-def',
 *  useful for inline definition  lists (e.g. float: left)
 *
 */



(function(){

    var definitionList = function(converter) {
        return [

            // @username syntax
            {
                type: 'lang',
                filter: function(text) {

                    var lastOffset = 0,
                        lastLength = 0,
                        lastIndex = 0,
                        lastDepth = 0,
                        divOpen = 0,
                        counter = 0,
                        sets = [];

                    text.replace(/([^\n]+)(\n([ ]{2,})?:[ ]{3,}[^\n]+)+/g, function(match, term, definition, prefix, offset, string) {
                        var isJoinedToLast = (lastOffset + lastLength + 1) === offset ;
                        lastOffset = offset;
                        lastLength = match.length;


                        // SPLIT IT UP
                        var parts = match.replace('\n','').split(':   '),
                            markup = '',
                            spaces =  parts[0].match(/^[ ]+/),
                            depth = spaces ? (spaces[0].length / 2) : 0;

                        if (depth > 0) {
                            parts[0] = parts[0].replace(/^[ ]+/, '');
                        }

                        if (depth > lastDepth) {
                            // we entered a child property
                            markup += '<div class="child-properties hidden"><a class="toggle" href="#" onClick="window.Showdown.extensions.definition.toggleChildren(event, this)">Show child properties</a>';
                            divOpen++;
                        } else if (depth < lastDepth && divOpen > 0) {
                            // we exited a child property
                            // markup += '</div>';
                            for (var d = (lastDepth - depth); d > 0; d--) {
                                sets[lastIndex] += '</div>';
                                divOpen--;
                            }
                        }

                        lastDepth = depth;


                        console.log({depth:depth, parts:parts, isJoinedToLast:isJoinedToLast, divOpen:divOpen});
                        // console.log({depth:depth, parts:parts});


                        for(var i = 0; i < parts.length; i++) {
                            if (i === 0) {
                                markup += '<dt class="depth-' + depth + '">'+converter.makeHtml(parts[i])+'</dt>';
                            } else {
                                markup += '<dd class="depth-' + depth + '">'+converter.makeHtml(parts[i])+'</dd>';
                            }
                        }


                        if (isJoinedToLast) {
                            sets[lastIndex] += markup;
                            sets[counter] = '';
                        } else {
                            sets[counter] = markup;
                            lastIndex = counter;
                        }

                        counter++;

                        //definition
                    });

                    // Close any open child groups
                    if (lastDepth > 0) {
                        for (var d = lastDepth; d > 0; d--) {
                            sets[lastIndex] += '</div>';
                            divOpen--;
                        }
                    }

                    var postCounter = 0;
                    if (sets.length > 0) {

                        text = text.replace(/([^\n]+)(\n([ ]{2,})?:[ ]{3,}[^\n]+)+/g, function(match, term, definition, prefix, offset, string) {

                           // console.log('replacing index ' +postCounter + ' with ' + sets[postCounter].substr(0, 13));

                            if (sets[postCounter].length > 0) {
                                return '<dl'+(sets[postCounter].substr(0, 13) == '<dt><p><code>' ? ' class="inline-def"' : '')+'>'+sets[postCounter++]+'</dl>';
                            } else {
                                postCounter++;
                                return '';
                            }

                        });
                    }

                    return text;

                }
            }
        ];
    };

    definitionList.toggleChildren = function(event, el) {
        event.preventDefault();
        var className = el.parentNode.className.replace(/ *hidden/g, '');
        if (className.length === el.parentNode.className.length) {
            // not hidden, so hide
            el.parentNode.className += ' hidden';
            el.innerHTML = 'Show child properties';
        } else {
            el.parentNode.className = className;
            el.innerHTML = 'Hide child properties';
        }
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.definition = definitionList; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = definitionList;

}());



(function(){

    var badges = function(converter) {
        return [

            // ((badge)) syntax
            { type: 'lang', regex: '\\B(\\\\)?\\(\\((([a-zA-Z]+)[^)]*)\\)\\)', replace: function(match, leadingSlash, entireThing, badgeName) {
                // Check if we matched the leading \ and return nothing changed if so
                if (leadingSlash === '\\') {
                    return match;
                } else {
                    return '<span class="badge ' + badgeName + '">'+entireThing+'</span>';
                }
            }},

        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.badges = badges; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = badges;

}());


function isElementInViewport (el, $sidebar) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

(function($) {
    var $window = $(window);
    var $document = $(document);
    var $sidebar = null;
    //var animating = false;
    var sidebarCatchup = null,
        sidebarCatchupEl = null;

    function putSideBarHeaderIntoView() {
        if ($sidebar && !isElementInViewport(sidebarCatchupEl, $sidebar) && $sidebar.hasClass('fixed')) {
            $sidebar.animate({scrollTop: $sidebar.scrollTop() + (sidebarCatchupEl.position().top - ($(window).height() / 2)) }, function () {
                //animating = false;
                sidebarCatchup = null;
            });
        }
    }


    /*
     * Scrollspy.
     */

    $document.on('flatdoc:ready', function() {
        $("h1, h2, h3").scrollagent(function(cid, pid, currentElement, previousElement) {
            if (pid) {
                $("[href='#"+pid+"']").removeClass('active');
            }
            if (cid) {
                sidebarCatchupEl = $("[href='#"+cid+"']").addClass('active');

                if (sidebarCatchup) {
                    clearTimeout(sidebarCatchup);
                }

                // Make sure the outline element is in view if
                sidebarCatchup = setTimeout(putSideBarHeaderIntoView, 1250);

            }
        });

        // if you're scrolling the sidebar, and move the page as result, then don't jump around all weird
        $sidebar.on('scroll', function() {
            if (sidebarCatchup) {
                clearTimeout(sidebarCatchup);
            }
            //console.log('currentTop', $sidebar.scrollTop())
        });

        // If that anchor is crap, we're not jumping
        if ($('*[id='+window.location.hash.replace(/^#/, '')+']').length === 0) {
            window.jumping = false;
        }
    });

    /*
     * Anchor jump links.
     */

    $document.on('flatdoc:ready', function() {
        $('.menu a').anchorjump();
    });

    /*
     * Title card.
     */

    $(function() {
        var $card = $('.title-card');
        if (!$card.length) return;

        var $header = $('.header');
        var headerHeight = $header.length ? $header.outerHeight() : 0;

        $window
            .on('resize.title-card', function() {
                var windowWidth = $window.width();

                if (windowWidth < 480) {
                    $card.css('height', '');
                } else {
                    var height = $window.height();
                    $card.css('height', height - headerHeight);
                }
            })
            .trigger('resize.title-card');
    });

    /*
     * Sidebar stick.
     */

    if (window.sideStick === undefined || window.sideStick === true) {
        $(function () {
            var elTop;
            $sidebar = $('.menubar');
            $window
                .on('resize.sidestick', function () {
                    $sidebar.removeClass('fixed');
                    elTop = $sidebar.offset().top;
                    $window.trigger('scroll.sidestick');
                })
                .on('scroll.sidestick', function () {
                    var scrollY = $window.scrollTop();
                    $sidebar.toggleClass('fixed', (scrollY >= elTop));
                })
                .trigger('resize.sidestick');
        });
    }

})(jQuery);
/*! jQuery.scrollagent (c) 2012, Rico Sta. Cruz. MIT License.
 *  https://github.com/rstacruz/jquery-stuff/tree/master/scrollagent */

// Call $(...).scrollagent() with a callback function.
//
// The callback will be called everytime the focus changes.
//
// Example:
//
//      $("h2").scrollagent(function(cid, pid, currentElement, previousElement) {
//        if (pid) {
//          $("[href='#"+pid+"']").removeClass('active');
//        }
//        if (cid) {
//          $("[href='#"+cid+"']").addClass('active');
//        }
//      });

(function($) {


    $body = $('html,body');

    $.fn.scrollagent = function(options, callback) {
        // Account for $.scrollspy(function)
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }

        var $sections = $(this);
        var $parent = options.parent || $(window);

        // Find the top offsets of each section
        var offsets = [];
        $sections.each(function(i) {
            var offset = $(this).attr('data-anchor-offset') ?
                parseInt($(this).attr('data-anchor-offset'), 10) :
                (options.offset || 0);

            offsets.push({
                id: $(this).attr('id'),
                index: i,
                el: this,
                offset: offset
            });
        });

        // State
        var current = null;
        var height = null;
        var range = null;

        // Save the height. Do this only whenever the window is resized so we don't
        // recalculate often.
        $(window).on('resize', function() {
            height = $parent.height();
            range = $(document).height();
        });

        // Find the current active section every scroll tick.
        $parent.on('scroll', function(e) {
            var y = $parent.scrollTop();
            y += height * (0.3 + 0.7 * Math.pow(y/range, 2));

            var latest = null;

            for (var i in offsets) {
                if (offsets.hasOwnProperty(i)) {
                    var offset = offsets[i];
                    if ($(offset.el).offset().top + offset.offset < y) latest = offset;
                }
            }

            if (latest && (!current || (latest.index !== current.index))) {
                callback.call($sections,
                    latest ? latest.id : null,
                    current ? current.id : null,
                    latest ? latest.el : null,
                    current ? current.el : null);
                current = latest;



                if (window.history.pushState && window.jumping === false) {
                    window.history.pushState(null,null,'#'+(current.id ? current.id : ''));
                }

            }
        });

        $(window).trigger('resize');
        $parent.trigger('scroll');

        return this;
    };

})(jQuery);
/*! Anchorjump (c) 2012, Rico Sta. Cruz. MIT License.
 *   http://github.com/rstacruz/jquery-stuff/tree/master/anchorjump */

// Makes anchor jumps happen with smooth scrolling.
//
//    $("#menu a").anchorjump();
//    $("#menu a").anchorjump({ offset: -30 });
//
//    // Via delegate:
//    $("#menu").anchorjump({ for: 'a', offset: -30 });
//
// You may specify a parent. This makes it scroll down to the parent.
// Great for tabbed views.
//
//     $('#menu a').anchorjump({ parent: '.anchor' });
//
// You can jump to a given area.
//
//     $.anchorjump('#bank-deposit', options);

(function($) {
    var defaults = {
        'speed': 500,
        'offset': 0,
        'for': null,
        'parent': null
    };

    $.fn.anchorjump = function(options) {
        options = $.extend({}, defaults, options);

        if (options['for']) {
            this.on('click', options['for'], onClick);
        } else {
            this.on('click', onClick);
        }

        function onClick(e) {
            var $a = $(e.target).closest('a');
            if (e.ctrlKey || e.metaKey || e.altKey || $a.attr('target')) return;

            e.preventDefault();
            var href = $a.attr('href');

            $.anchorjump(href, options);
        }
    };

    // Jump to a given area.
    $.anchorjump = function(href, options) {
        options = $.extend({}, defaults, options);

        var top = 0;
        if (href != '#') {
            var $area = $(href);
            // Find the parent
            if (options.parent) {
                var $parent = $area.closest(options.parent);
                if ($parent.length) { $area = $parent; }
            }
            if (!$area.length) { return; }

            // Determine the pixel offset; use the default if not available
            var offset =
                $area.attr('data-anchor-offset') ?
                    parseInt($area.attr('data-anchor-offset'), 10) :
                    options.offset;

            top = Math.max(0, $area.offset().top + offset);
        }

        window.jumping = true;
        $('html, body').animate({ scrollTop: top }, options.speed, function() {
            window.jumping = false;
        });
        $('body').trigger('anchor', href);

        // Add the location hash via pushState.
        if (window.history.pushState) {
            window.history.pushState({ href: href }, "", href);
        }
    };
})(jQuery);
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

    var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    var defaultMaxListeners = 10;

    function init() {
        this._events = {};
        if (this._conf) {
            configure.call(this, this._conf);
        }
    }

    function configure(conf) {
        if (conf) {

            this._conf = conf;

            conf.delimiter && (this.delimiter = conf.delimiter);
            conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
            conf.wildcard && (this.wildcard = conf.wildcard);
            conf.newListener && (this.newListener = conf.newListener);

            if (this.wildcard) {
                this.listenerTree = {};
            }
        }
    }

    function EventEmitter(conf) {
        this._events = {};
        this.newListener = false;
        configure.call(this, conf);
    }

    //
    // Attention, function return type now is array, always !
    // It has zero elements if no any matches found and one or more
    // elements (leafs) if there are matches
    //
    function searchListenerTree(handlers, type, tree, i) {
        if (!tree) {
            return [];
        }
        var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
            typeLength = type.length, currentType = type[i], nextType = type[i+1];
        if (i === typeLength && tree._listeners) {
            //
            // If at the end of the event(s) list and the tree has listeners
            // invoke those listeners.
            //
            if (typeof tree._listeners === 'function') {
                handlers && handlers.push(tree._listeners);
                return [tree];
            } else {
                for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
                    handlers && handlers.push(tree._listeners[leaf]);
                }
                return [tree];
            }
        }

        if ((currentType === '*' || currentType === '**') || tree[currentType]) {
            //
            // If the event emitted is '*' at this part
            // or there is a concrete match at this patch
            //
            if (currentType === '*') {
                for (branch in tree) {
                    if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
                        listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
                    }
                }
                return listeners;
            } else if(currentType === '**') {
                endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
                if(endReached && tree._listeners) {
                    // The next element has a _listeners, add it to the handlers.
                    listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
                }

                for (branch in tree) {
                    if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
                        if(branch === '*' || branch === '**') {
                            if(tree[branch]._listeners && !endReached) {
                                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
                            }
                            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
                        } else if(branch === nextType) {
                            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
                        } else {
                            // No match on this one, shift into the tree but not in the type array.
                            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
                        }
                    }
                }
                return listeners;
            }

            listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
        }

        xTree = tree['*'];
        if (xTree) {
            //
            // If the listener tree will allow any match for this part,
            // then recursively explore all branches of the tree
            //
            searchListenerTree(handlers, type, xTree, i+1);
        }

        xxTree = tree['**'];
        if(xxTree) {
            if(i < typeLength) {
                if(xxTree._listeners) {
                    // If we have a listener on a '**', it will catch all, so add its handler.
                    searchListenerTree(handlers, type, xxTree, typeLength);
                }

                // Build arrays of matching next branches and others.
                for(branch in xxTree) {
                    if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
                        if(branch === nextType) {
                            // We know the next element will match, so jump twice.
                            searchListenerTree(handlers, type, xxTree[branch], i+2);
                        } else if(branch === currentType) {
                            // Current node matches, move into the tree.
                            searchListenerTree(handlers, type, xxTree[branch], i+1);
                        } else {
                            isolatedBranch = {};
                            isolatedBranch[branch] = xxTree[branch];
                            searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
                        }
                    }
                }
            } else if(xxTree._listeners) {
                // We have reached the end and still on a '**'
                searchListenerTree(handlers, type, xxTree, typeLength);
            } else if(xxTree['*'] && xxTree['*']._listeners) {
                searchListenerTree(handlers, type, xxTree['*'], typeLength);
            }
        }

        return listeners;
    }

    function growListenerTree(type, listener) {

        type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

        //
        // Looks for two consecutive '**', if so, don't add the event at all.
        //
        for(var i = 0, len = type.length; i+1 < len; i++) {
            if(type[i] === '**' && type[i+1] === '**') {
                return;
            }
        }

        var tree = this.listenerTree;
        var name = type.shift();

        while (name) {

            if (!tree[name]) {
                tree[name] = {};
            }

            tree = tree[name];

            if (type.length === 0) {

                if (!tree._listeners) {
                    tree._listeners = listener;
                }
                else if(typeof tree._listeners === 'function') {
                    tree._listeners = [tree._listeners, listener];
                }
                else if (isArray(tree._listeners)) {

                    tree._listeners.push(listener);

                    if (!tree._listeners.warned) {

                        var m = defaultMaxListeners;

                        if (typeof this._events.maxListeners !== 'undefined') {
                            m = this._events.maxListeners;
                        }

                        if (m > 0 && tree._listeners.length > m) {

                            tree._listeners.warned = true;
                            console.error('(node) warning: possible EventEmitter memory ' +
                                'leak detected. %d listeners added. ' +
                                'Use emitter.setMaxListeners() to increase limit.',
                                tree._listeners.length);
                            if(console.trace){
                                console.trace();
                            }
                        }
                    }
                }
                return true;
            }
            name = type.shift();
        }
        return true;
    }

    // By default EventEmitters will print a warning if more than
    // 10 listeners are added to it. This is a useful default which
    // helps finding memory leaks.
    //
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.

    EventEmitter.prototype.delimiter = '.';

    EventEmitter.prototype.setMaxListeners = function(n) {
        this._events || init.call(this);
        this._events.maxListeners = n;
        if (!this._conf) this._conf = {};
        this._conf.maxListeners = n;
    };

    EventEmitter.prototype.event = '';

    EventEmitter.prototype.once = function(event, fn) {
        this.many(event, 1, fn);
        return this;
    };

    EventEmitter.prototype.many = function(event, ttl, fn) {
        var self = this;

        if (typeof fn !== 'function') {
            throw new Error('many only accepts instances of Function');
        }

        function listener() {
            if (--ttl === 0) {
                self.off(event, listener);
            }
            fn.apply(this, arguments);
        }

        listener._origin = fn;

        this.on(event, listener);

        return self;
    };

    EventEmitter.prototype.emit = function() {

        this._events || init.call(this);

        var type = arguments[0];

        if (type === 'newListener' && !this.newListener) {
            if (!this._events.newListener) { return false; }
        }

        // Loop through the *_all* functions and invoke them.
        if (this._all) {
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            for (i = 0, l = this._all.length; i < l; i++) {
                this.event = type;
                this._all[i].apply(this, args);
            }
        }

        // If there is no 'error' event listener then throw.
        if (type === 'error') {

            if (!this._all &&
                !this._events.error &&
                !(this.wildcard && this.listenerTree.error)) {

                if (arguments[1] instanceof Error) {
                    throw arguments[1]; // Unhandled 'error' event
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.");
                }
                return false;
            }
        }

        var handler;

        if(this.wildcard) {
            handler = [];
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
        }
        else {
            handler = this._events[type];
        }

        if (typeof handler === 'function') {
            this.event = type;
            if (arguments.length === 1) {
                handler.call(this);
            }
            else if (arguments.length > 1)
                switch (arguments.length) {
                    case 2:
                        handler.call(this, arguments[1]);
                        break;
                    case 3:
                        handler.call(this, arguments[1], arguments[2]);
                        break;
                    // slower
                    default:
                        var l = arguments.length;
                        var args = new Array(l - 1);
                        for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                        handler.apply(this, args);
                }
            return true;
        }
        else if (handler) {
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                this.event = type;
                listeners[i].apply(this, args);
            }
            return (listeners.length > 0) || !!this._all;
        }
        else {
            return !!this._all;
        }

    };

    EventEmitter.prototype.on = function(type, listener) {

        if (typeof type === 'function') {
            this.onAny(type);
            return this;
        }

        if (typeof listener !== 'function') {
            throw new Error('on only accepts instances of Function');
        }
        this._events || init.call(this);

        // To avoid recursion in the case that type == "newListeners"! Before
        // adding it to the listeners, first emit "newListeners".
        this.emit('newListener', type, listener);

        if(this.wildcard) {
            growListenerTree.call(this, type, listener);
            return this;
        }

        if (!this._events[type]) {
            // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        }
        else if(typeof this._events[type] === 'function') {
            // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];
        }
        else if (isArray(this._events[type])) {
            // If we've already got an array, just append.
            this._events[type].push(listener);

            // Check for listener leak
            if (!this._events[type].warned) {

                var m = defaultMaxListeners;

                if (typeof this._events.maxListeners !== 'undefined') {
                    m = this._events.maxListeners;
                }

                if (m > 0 && this._events[type].length > m) {

                    this._events[type].warned = true;
                    console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
                    if(console.trace){
                        console.trace();
                    }
                }
            }
        }
        return this;
    };

    EventEmitter.prototype.onAny = function(fn) {

        if (typeof fn !== 'function') {
            throw new Error('onAny only accepts instances of Function');
        }

        if(!this._all) {
            this._all = [];
        }

        // Add the function to the event listener collection.
        this._all.push(fn);
        return this;
    };

    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

    EventEmitter.prototype.off = function(type, listener) {
        if (typeof listener !== 'function') {
            throw new Error('removeListener only takes instances of Function');
        }

        var handlers,leafs=[];

        if(this.wildcard) {
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
        }
        else {
            // does not use listeners(), so no side effect of creating _events[type]
            if (!this._events[type]) return this;
            handlers = this._events[type];
            leafs.push({_listeners:handlers});
        }

        for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
            var leaf = leafs[iLeaf];
            handlers = leaf._listeners;
            if (isArray(handlers)) {

                var position = -1;

                for (var i = 0, length = handlers.length; i < length; i++) {
                    if (handlers[i] === listener ||
                        (handlers[i].listener && handlers[i].listener === listener) ||
                        (handlers[i]._origin && handlers[i]._origin === listener)) {
                        position = i;
                        break;
                    }
                }

                if (position < 0) {
                    continue;
                }

                if(this.wildcard) {
                    leaf._listeners.splice(position, 1);
                }
                else {
                    this._events[type].splice(position, 1);
                }

                if (handlers.length === 0) {
                    if(this.wildcard) {
                        delete leaf._listeners;
                    }
                    else {
                        delete this._events[type];
                    }
                }
                return this;
            }
            else if (handlers === listener ||
                (handlers.listener && handlers.listener === listener) ||
                (handlers._origin && handlers._origin === listener)) {
                if(this.wildcard) {
                    delete leaf._listeners;
                }
                else {
                    delete this._events[type];
                }
            }
        }

        function recursivelyGarbageCollect(root) {
            if (root === undefined) {
                return;
            }
            var keys = Object.keys(root);
            for (var i in keys) {
                var key = keys[i];
                var obj = root[key];
                if ((obj instanceof Function) || (typeof obj !== "object"))
                    continue;
                if (Object.keys(obj).length > 0) {
                    recursivelyGarbageCollect(root[key]);
                }
                if (Object.keys(obj).length === 0) {
                    delete root[key];
                }
            }
        }
        recursivelyGarbageCollect(this.listenerTree);

        return this;
    };

    EventEmitter.prototype.offAny = function(fn) {
        var i = 0, l = 0, fns;
        if (fn && this._all && this._all.length > 0) {
            fns = this._all;
            for(i = 0, l = fns.length; i < l; i++) {
                if(fn === fns[i]) {
                    fns.splice(i, 1);
                    return this;
                }
            }
        } else {
            this._all = [];
        }
        return this;
    };

    EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            !this._events || init.call(this);
            return this;
        }

        if(this.wildcard) {
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

            for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
                var leaf = leafs[iLeaf];
                leaf._listeners = null;
            }
        }
        else {
            if (!this._events[type]) return this;
            this._events[type] = null;
        }
        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        if(this.wildcard) {
            var handlers = [];
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
            return handlers;
        }

        this._events || init.call(this);

        if (!this._events[type]) this._events[type] = [];
        if (!isArray(this._events[type])) {
            this._events[type] = [this._events[type]];
        }
        return this._events[type];
    };

    EventEmitter.prototype.listenersAny = function() {

        if(this._all) {
            return this._all;
        }
        else {
            return [];
        }

    };

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
            return EventEmitter;
        });
    } else if (typeof exports === 'object') {
        // CommonJS
        exports.EventEmitter2 = EventEmitter;
    }
    else {
        // Browser global.
        window.EventEmitter2 = EventEmitter;
    }
}();