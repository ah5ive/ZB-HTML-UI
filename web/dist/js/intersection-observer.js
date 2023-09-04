!function(){"use strict";var d,e;function c(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||i(),this.isIntersecting=!!t.intersectionRect;var t=this.boundingClientRect,t=t.width*t.height,e=this.intersectionRect,e=e.width*e.height;this.intersectionRatio=t?Number((e/t).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var n,o,i,e=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(e.root&&1!=e.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i=i||setTimeout(function(){n(),i=null},o)}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(e.rootMargin),this.thresholds=this._initThresholds(e.threshold),this.root=e.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function n(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function l(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?e.width&&e.height?e:{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}:i()}function i(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function r(t,e){for(var n=e;n;){if(n==t)return!0;n=p(n)}return!1}function p(t){t=t.parentNode;return t&&11==t.nodeType&&t.host?t.host:t&&t.assignedSlot?t.assignedSlot.parentNode:t}"object"==typeof window&&("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}):(d=window.document,e=[],t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t.prototype.observe=function(e){var t=this._observationTargets.some(function(t){return t.element==e});if(!t){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){t=t||[0];return(t=Array.isArray(t)?t:[t]).sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){t=(t||"0px").split(/\s+/).map(function(t){t=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(t)return{value:parseFloat(t[1]),unit:t[2]};throw new Error("rootMargin must be specified in pixels or percent")});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},t.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(n(window,"resize",this._checkForIntersections,!0),n(d,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(d,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},t.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,o(window,"resize",this._checkForIntersections,!0),o(d,"scroll",this._checkForIntersections,!0),this._domObserver)&&(this._domObserver.disconnect(),this._domObserver=null)},t.prototype._checkForIntersections=function(){var s=this._rootIsInDom(),h=s?this._getRootRect():i();this._observationTargets.forEach(function(t){var e=t.element,n=l(e),o=this._rootContainsTarget(e),i=t.entry,r=s&&o&&this._computeTargetAndRootIntersection(e,h),t=t.entry=new c({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:h,intersectionRect:r});i?s&&o?this._hasCrossedThreshold(i,t)&&this._queuedEntries.push(t):i&&i.isIntersecting&&this._queuedEntries.push(t):this._queuedEntries.push(t)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,e){if("none"!=window.getComputedStyle(t).display){for(var n,o,i,r,s=l(t),h=p(t),c=!1;!c;){var u=null,a=1==h.nodeType?window.getComputedStyle(h):{};if("none"==a.display)return;if(h==this.root||h==d?(c=!0,u=e):h!=d.body&&h!=d.documentElement&&"visible"!=a.overflow&&(u=l(h)),u&&(a=u,u=s,r=i=o=n=void 0,n=Math.max(a.top,u.top),o=Math.min(a.bottom,u.bottom),i=Math.max(a.left,u.left),a=Math.min(a.right,u.right),r=o-n,!(s=0<=(u=a-i)&&0<=r&&{top:n,bottom:o,left:i,right:a,width:u,height:r})))break;h=p(h)}return s}},t.prototype._getRootRect=function(){var t,e;return e=this.root?l(this.root):(e=d.documentElement,t=d.body,{top:0,left:0,right:e.clientWidth||t.clientWidth,width:e.clientWidth||t.clientWidth,bottom:e.clientHeight||t.clientHeight,height:e.clientHeight||t.clientHeight}),this._expandRectByRootMargin(e)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),t={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||r(d,this.root)},t.prototype._rootContainsTarget=function(t){return r(this.root||d,t)},t.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},t.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=c))}();