!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ResizeObserver=e()}(this,function(){"use strict";var i="undefined"!=typeof Map?Map:(Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){t=r(this.__entries__,t),t=this.__entries__[t];return t&&t[1]},t.prototype.set=function(t,e){var n=r(this.__entries__,t);~n?this.__entries__[n][1]=e:this.__entries__.push([t,e])},t.prototype.delete=function(t){var e=this.__entries__,t=r(e,t);~t&&e.splice(t,1)},t.prototype.has=function(t){return!!~r(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];t.call(e,r[1],r[0])}},t);function t(){this.__entries__=[]}function r(t,n){var i=-1;return t.some(function(t,e){return t[0]===n&&(i=e,!0)}),i}var n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,e="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),c="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(e):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},h=2;var o=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,a=(u.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},u.prototype.removeObserver=function(t){var e=this.observers_,t=e.indexOf(t);~t&&e.splice(t,1),!e.length&&this.connected_&&this.disconnect_()},u.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},u.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),0<t.length},u.prototype.connect_=function(){n&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},u.prototype.disconnect_=function(){n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},u.prototype.onTransitionEnd_=function(t){var t=t.propertyName,e=void 0===t?"":t;o.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},u.getInstance=function(){return this.instance_||(this.instance_=new u),this.instance_},u.instance_=null,u);function u(){function t(){o&&(o=!1,i()),s&&n()}function e(){c(t)}function n(){var t=Date.now();if(o){if(t-a<h)return;s=!0}else s=!(o=!0),setTimeout(e,r);a=t}var i,r,o,s,a;this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=(i=this.refresh.bind(this),s=o=!(r=20),a=0,n)}var f=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||e},p=y(0,0,0,0);function v(t){return parseFloat(t)||0}function l(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t.reduce(function(t,e){return t+v(n["border-"+e+"-width"])},0)}function _(t){var e,n,i,r,o,s,a=t.clientWidth,c=t.clientHeight;return a||c?(n=(e=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=t["padding-"+r];e[r]=v(o)}return e}(s=d(t).getComputedStyle(t))).left+e.right,i=e.top+e.bottom,r=v(s.width),o=v(s.height),"border-box"===s.boxSizing&&(Math.round(r+n)!==a&&(r-=l(s,"left","right")+n),Math.round(o+i)!==c)&&(o-=l(s,"top","bottom")+i),t!==d(t).document.documentElement&&(s=Math.round(r+n)-a,t=Math.round(o+i)-c,1!==Math.abs(s)&&(r-=s),1!==Math.abs(t))&&(o-=t),y(e.left,e.top,r,o)):p}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function m(t){var e;return n?b(t)?y(0,0,(e=(e=t).getBBox()).width,e.height):_(t):p}function y(t,e,n,i){return{x:t,y:e,width:n,height:i}}w.prototype.isActive=function(){var t=m(this.target);return(this.contentRect_=t).width!==this.broadcastWidth||t.height!==this.broadcastHeight},w.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var g=w;function w(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}var O=function(t,e){n=(e=e).x,i=e.y,o=e.width,e=e.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,r=Object.create(r.prototype),f(r,{x:n,y:i,width:o,height:e,top:i,right:n+o,bottom:e+i,left:n});var n,i,r,o=r;f(this,{target:t,contentRect:o})},E=(M.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},M.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},M.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},M.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},M.prototype.broadcastActive=function(){var t,e;this.hasActive()&&(t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new O(t.target,t.broadcastRect())}),this.callback_.call(t,e,t),this.clearActive())},M.prototype.clearActive=function(){this.activeObservations_.splice(0)},M.prototype.hasActive=function(){return 0<this.activeObservations_.length},M);function M(t,e,n){if(this.activeObservations_=[],this.observations_=new i,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}var A=new("undefined"!=typeof WeakMap?WeakMap:i),T=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),e=new E(e,n,this);A.set(this,e)};return["observe","unobserve","disconnect"].forEach(function(e){T.prototype[e]=function(){var t;return(t=A.get(this))[e].apply(t,arguments)}}),void 0!==e.ResizeObserver?e.ResizeObserver:T});