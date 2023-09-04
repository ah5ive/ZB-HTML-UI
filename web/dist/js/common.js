"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function (e, n, t) {
  function o(e) {
    var n = u.className,
      t = Modernizr._config.classPrefix || "";
    if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n);
  }
  function s(e, n) {
    return _typeof(e) === n;
  }
  function a() {
    var e, n, t, o, a, i, r;
    for (var l in c) if (c.hasOwnProperty(l)) {
      if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
      for (o = s(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = o : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = o), f.push((o ? "" : "no-") + r.join("-"));
    }
  }
  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }
  function r() {
    var e = n.body;
    return e || (e = i(p ? "svg" : "body"), e.fake = !0), e;
  }
  function l(e, t, o, s) {
    var a,
      l,
      f,
      c,
      d = "modernizr",
      p = i("div"),
      h = r();
    if (parseInt(o, 10)) for (; o--;) f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
    return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l;
  }
  var f = [],
    c = [],
    d = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function on(e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function addTest(e, n, t) {
        c.push({
          name: e,
          fn: n,
          options: t
        });
      },
      addAsyncTest: function addAsyncTest(e) {
        c.push({
          name: null,
          fn: e
        });
      }
    },
    Modernizr = function Modernizr() {};
  Modernizr.prototype = d, Modernizr = new Modernizr();
  var u = n.documentElement,
    p = "svg" === u.nodeName.toLowerCase(),
    h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  d._prefixes = h;
  var m = d.testStyles = l;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;else {
      var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      m(o, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }), a(), o(f), delete d.addTest, delete d.addAsyncTest;
  for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
  e.Modernizr = Modernizr;
}(window, document);
/* eslint-enable */

// for breakpoint-js in IE 11
// https://stackoverflow.com/questions/31119300/ie11-object-doesnt-support-property-or-method-includes-javascript-window
// if (!String.prototype.includes) {
//   String.prototype.includes = function (search, start) { // eslint-disable-line no-extend-native
//     if (typeof start !== 'number') {
//       start = 0
//     }

//     if (start + search.length > this.length) {
//       return false
//     } else {
//       return this.indexOf(search, start) !== -1
//     }
//   }
// }

var App = {
  // http://help.omnystudio.com/advanced-features-and-tips-and-tricks/developer-documentation/consumer-api
  // https://omnystudio.com/p/zaobaosg/clips
  api: {
    omny_clip: 'https://omny.fm/api/orgs/d9486183-3dd4-4ad6-aebe-a4c1008455d5/clips/',
    // a1d376c4-ec77-43bf-a63e-a9a600952a4f
    omny_clips: 'https://omny.fm/api/orgs/d9486183-3dd4-4ad6-aebe-a4c1008455d5/programs/aa36400d-675d-428c-b995-a98a00455b02/clips',
    omny_playlists: 'https://omny.fm/api/orgs/d9486183-3dd4-4ad6-aebe-a4c1008455d5/programs/aa36400d-675d-428c-b995-a98a00455b02/playlists',
    omny_playlists_cmgpodcast: 'https://omny.fm/api/orgs/d9486183-3dd4-4ad6-aebe-a4c1008455d5/playlists/5648b640-bc4e-4c9c-aa9f-a98a00457407'
  },
  "var": {
    isTourStarted: false,
    /* eslint-disable-line no-unneeded-ternary */
    mobileSocialSidelineHandler: null,
    isTriggersDebug: false,
    asideSetLen: 0,
    breakpoints: {
      xs: {
        min: 0,
        max: 575
      },
      sm: {
        min: 576,
        max: 767
      },
      md: {
        min: 768,
        max: 991
      },
      lg: {
        min: 992,
        max: 1199
      },
      xl: {
        min: 1200,
        max: 1439
      },
      xxl: {
        min: 1440,
        max: Infinity
      }
    }
  },
  util: {
    disablePageScroll: scrollLock.disablePageScroll,
    enablePageScroll: scrollLock.enablePageScroll,
    pagination: function pagination(c, m) {
      // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
      var current = c;
      var last = m;
      var delta = App.util.getViewport().w < App["var"].breakpoints.md.min ? 1 : 2; // range from left and right
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var rangeWithDots = [];
      var l;
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }
      for (var _i = 0, _range = range; _i < _range.length; _i++) {
        var _i2 = _range[_i];
        if (l) {
          if (_i2 - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (_i2 - l !== 1) {
            rangeWithDots.push('...');
          }
        }
        rangeWithDots.push(_i2);
        l = _i2;
      }
      return rangeWithDots;
    },
    // getMobileDrawerRetriggerPointTop: () => {
    //   let top

    //   if ($('.page-article').length > 0 && $('.page-styleguide').length === 0) {
    //     top = parseInt(($('.article-content').offset().top + $('.article-content').outerHeight()).toFixed(0))
    //   } else {
    //     top = parseInt(($('.main').offset().top + $('.main').outerHeight()).toFixed(0))
    //   }

    //   return top
    // },
    setCookie: function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = 'expires=' + d.toUTCString();
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    },
    getCookie: function getCookie(cname) {
      var name = cname + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    },
    checkCookie: function checkCookie(cookieName, callback) {
      var isOnboarded = App.util.getCookie(cookieName);
      if (isOnboarded !== '' && isOnboarded !== null) {
        // console.log('onboarded')
      } else {
        App.util.setCookie(cookieName, true, 30);
        callback();
      }
      // callback()
    },

    getElHeight: function getElHeight(el) {
      return parseInt($(el).outerHeight());
    },
    getElBoundingTop: function getElBoundingTop(el) {
      return parseInt($(el).get(0).getBoundingClientRect().top);
    },
    setEqualHeightToTallest: function setEqualHeightToTallest(el) {
      el.css('min-height', 0); // reset to recount
      var tallest = 0;
      el.each(function (i, el) {
        $(el).css('height', 'auto');
        var height = $(el).outerHeight();
        if (height > tallest) {
          tallest = height;
        }
      });
      // console.log(tallest, 'tallest')
      el.each(function (i, el) {
        $(el).css('min-height', tallest);
      });
    },
    getViewport: function getViewport() {
      // Get correct viewport
      // - http://stackoverflow.com/questions/1766861/find-the-exact-height-and-width-of-the-viewport-in-a-cross-browser-way-no-proto
      var viewPortWidth;
      var viewPortHeight;
      if (typeof window.innerWidth !== 'undefined') {
        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;
      } else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        viewPortWidth = document.documentElement.clientWidth;
        viewPortHeight = document.documentElement.clientHeight;
      } else {
        // older versions of IE
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
      }
      return {
        w: viewPortWidth,
        h: viewPortHeight
      };
    },
    throttle: function throttle(func, wait, options) {
      // throttle function from underscore.js
      // - http://stackoverflow.com/questions/27078285/simple-throttle-in-js
      // ====================================================================
      // let throttled = App.util.throttle(onWindowResize, 100)
      // $(window).on('resize', throttled)
      // ====================================================================
      var context, args, result;
      var timeout = null;
      var previous = 0;
      if (!options) options = {};
      var later = function later() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      };
      return function () {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    }
  },
  selector: {
    BODY: $('body'),
    WRAP: $('.wrap'),
    MAIN: $('main.main'),
    HEADER_MOBILE: $('.header-mobile'),
    HEADER_DESKTOP: $('.header-desktop'),
    RECOMMENDED_HEADER: $('.js-recommended-header'),
    STICKYBITS_USEFIXED_SPACER: $('.js-stickybits-usefixed-spacer'),
    MOBILE_DRAWER_HANDLE: $('#js-mobile-drawer-handle'),
    MOBILE_SOCIAL: $('#js-mobile-social'),
    ASIDE_PRIMARY: $('.block-zb-article-sidebar'),
    // legacy html
    ASIDE_SECONDARY: $('#js-aside-secondary')
  },
  common: function common() {}
};
App.common.stickies = function () {
  var asidePrimaries = [];
  // let isScrollingUp = false
  // let stickyBitsOffsetTopPrimarySecondaryTiertiaryTotalHeight = 164 // agaration
  var stickyHeaderHandleDesktop;
  var stickyHeaderHandleMobile;
  var stickyAsideSecondaryHandle;
  var lastScrollTop = 0;
  var autoRecommendedExpandedHandler;
  var isAutoRecommendedExpanded = false;

  // detect IE
  var ieDetect = function ieDetect() {
    var userBrowser = window.navigator.userAgent;
    var msie = userBrowser.indexOf('MSIE');
    var trident = userBrowser.indexOf('Trident/');
    if (msie > 0 || trident > 0) {
      return true;
    } else {
      return false;
    }
  };
  var getStickyBitsOffsetTop = function getStickyBitsOffsetTop() {
    var offset = App.selector.BODY.hasClass('page-home') ? $('.topnavbar-secondary').outerHeight() + $('.newsticker').outerHeight() + 4 // agaration
    : $('.topnavbar-secondary').outerHeight() + 14; // agaration
    return offset;
  };
  var checkMobileSocial = function checkMobileSocial(st) {
    if (App.selector.MOBILE_SOCIAL.hasClass('is-active') && !App.selector.MOBILE_SOCIAL.hasClass('is-sidelined')) {
      App.selector.MOBILE_SOCIAL.addClass('is-sidelined');
      App["var"].mobileSocialSidelineHandler = setTimeout(function () {
        App.selector.MOBILE_SOCIAL.removeClass('is-active is-sidelined');
      }, 1800);
    }
  };
  var checkToExpandRecommended = function checkToExpandRecommended(indexCurr) {
    if (App.selector.RECOMMENDED_HEADER.length > 0) {
      var asideLen = $('.aside-primary').find('.js-aside-set').length - 1;
      var triggerIndex = asideLen > 1 ? asideLen - 1 : asideLen;
      if (asideLen !== 0 && indexCurr === triggerIndex) {
        if (App.selector.RECOMMENDED_HEADER.attr('aria-expanded') === 'false' && !isAutoRecommendedExpanded) {
          clearTimeout(autoRecommendedExpandedHandler);
          autoRecommendedExpandedHandler = setTimeout(function () {
            App.selector.RECOMMENDED_HEADER.click();
            isAutoRecommendedExpanded = true;
            // console.log('expandddd')
          }, 100);
        }
      }
    }
  };

  // let checkToShowDrawer = (st) => {
  //   let top = App.util.getMobileDrawerRetriggerPointTop()
  //   // console.log(st, top, 'checkToShowDrawer')
  //   if (st > top) {
  //     if (App.selector.MOBILE_DRAWER_HANDLE.hasClass('is-hidden')) {
  //       App.selector.MOBILE_DRAWER_HANDLE.removeClass('is-hidden')
  //     }
  //   }
  // }

  var updateAsideActive = function updateAsideActive(st) {
    if (asidePrimaries.length > 0) {
      _.forEach(asidePrimaries, function (item) {
        var offsetTriggerContentPrimary = App.util.getElBoundingTop(item.contentPrimary);
        var offsetTriggerAside = App.util.getElBoundingTop(item.asidePrimary.find('.js-aside-set.is-active'));
        if (st > item.contentPrimary.offset().top && st < item.contentPrimary.offset().top + App.util.getElHeight(item.contentPrimary)) {
          var hit = Math.abs(offsetTriggerContentPrimary - offsetTriggerAside);
          // console.log(offsetTriggerContentPrimary, offsetTriggerAside, hit)
          for (var i = 0; i < item.triggers.length; i++) {
            if (hit > item.triggers[i].start && hit < item.triggers[i].end) {
              item.indexLast = item.indexCurr;
              item.indexCurr = i;
            }
          }
        }
        if (item.indexLast !== item.indexCurr) {
          item.asidePrimary.find('.js-aside-set').removeClass('is-active');
          item.asidePrimary.find('.js-aside-set').eq(item.indexCurr).addClass('is-active');
        }
        checkToExpandRecommended(item.indexCurr);
      });
    }
  };
  var checkToExpandTopnavbar = function checkToExpandTopnavbar(st) {
    // console.log(st, 'check st')
    // let threshold = 2 // threshold for IE 11
    var navbarPrimaryHeight = $('#js-topnavbar-primary').offset().top;
    var mobileNavHeight = $('#js-header-mobile').offset().top;
    // let isThresholdDown = st - lastScrollTop > threshold
    // let isThresholdUp = lastScrollTop - st > threshold
    // console.log($('.newsticker').eq(1), 'newsticker')
    if (!ieDetect()) {
      var distance = st - navbarPrimaryHeight;
      var mobileDistance = st - mobileNavHeight;
      // console.log(distance, mobileDistance, '<------')
      if (distance >= 108) {
        // header desktop logic
        if ($('#js-header-desktop').is(':visible')) {
          App.selector.BODY.addClass('is-scrolled-down');
          App.selector.BODY.removeClass('is-scrolled-up');
          $('#js-header-desktop').addClass('is-sticky js-is-sticky');
          $('.topnavbar-primary').hide();
          // console.log('header-destop visible')
        }
      } else {
        App.selector.BODY.addClass('is-scrolled-up');
        App.selector.BODY.removeClass('is-scrolled-down');
        if ($('#js-header-desktop').is(':visible')) {
          $('#js-header-desktop').removeClass('is-sticky js-is-sticky');
          $('.topnavbar-primary').show();
        }
      }
      // mobile header anomation logic
      if (mobileDistance >= 0) {
        if ($('#js-header-mobile').is(':visible')) {
          App.selector.BODY.addClass('is-scrolled-down');
          App.selector.BODY.removeClass('is-scrolled-up');
          $('#js-header-mobile').addClass('js-is-sticky');
          console.log('header-mobile visible');
        }
      } else {
        App.selector.BODY.addClass('is-scrolled-up');
        App.selector.BODY.removeClass('is-scrolled-down');
        if ($('#js-header-mobile').is(':visible')) {
          $('#js-header-mobile').removeClass('js-is-sticky');
        }
      }
      // $('#js-topnavbar-primary').headroom({
      //   offset: App.selector.WRAP.offset().top + 50,
      //   tolerance: {
      //     up: 200,
      //     down: 0
      //   },
      //   classes: {
      //     initial: 'animated',
      //     pinned: 'primaryslideDown',
      //     unpinned: 'headroom--unpinned is-slide-down forSticker'
      //   }
      // })

      // $('#js-topnavbar-tertiary').headroom({
      //   offset: 0,
      //   tolerance: {
      //     up: 200,
      //     down: 0
      //   },
      //   classes: {
      //     initial: 'animated',
      //     pinned: 'slideDown',
      //     unpinned: 'headroom--unpinned slideUp'
      //   }
      // })

      // $('#js-topnavbar-tertiary-mobile').headroom({
      //   offset: App.selector.WRAP.offset().top,
      //   tolerance: {
      //     up: 200,
      //     down: 0
      //   },
      //   classes: {
      //     initial: 'animated',
      //     pinned: 'slideDown',
      //     unpinned: 'headroom--unpinned forSticker'
      //   }
      // })

      // $('.newsticker').headroom({
      //   offset: 0,
      //   tolerance: {
      //     up: 200,
      //     down: 0
      //   },
      //   classes: {
      //     initial: 'animated',
      //     pinned: 'slideDown',
      //     unpinned: 'headroom--unpinned forSticker'
      //   }
      // })

      // $('#redirect-banner').headroom({
      //   offset: 0,
      //   tolerance: {
      //     up: 200,
      //     down: 0
      //   },
      //   classes: {
      //     initial: 'animated',
      //     pinned: 'slideDown',
      //     unpinned: 'headroom--unpinned slideUp'
      //   }
      // })

      // add class on the body tag
      // if ($('.topnavbar-primary').hasClass('is-slide-down')) {
      //   App.selector.BODY.addClass('is-scrolled-down')
      //   App.selector.BODY.removeClass('is-scrolled-up')
      //   $('#js-header-desktop').css('max-height', '42px')
      //   $('.js-stickybits-usefixed-spacer').css('height', '45px')
      //   // $('.animated.slideUp').hide()
      // } else {
      //   App.selector.BODY.removeClass('is-scrolled-down')
      //   App.selector.BODY.addClass('is-scrolled-up')
      //   // $('.animated.slideUp').show()
      //   if ($(window).scrollTop() > 1) {
      //     $('#js-header-desktop').css('max-height', '144px')
      //   } else {
      //     $('#js-header-desktop').css('max-height', '226px')
      //   }
      // }
    } else {
      if (st >= App.selector.WRAP.offset().top) {
        // if (st > lastScrollTop) {
        //   if (!App.selector.BODY.hasClass('is-scrolled-down') && isThresholdDown) {
        //     App.selector.BODY.removeClass('is-scrolled-up')
        //     App.selector.BODY.addClass('is-scrolled-down')

        //     isScrollingUp = false
        //     TweenMax.to('#js-topnavbar-primary, #js-topnavbar-tertiary', 0.5, { height: 0, ease: Expo.easeOut })
        //     console.log('downscroll code')
        //   }
        // } else {
        //   if (!App.selector.BODY.hasClass('is-scrolled-up') && isThresholdUp) {
        //     App.selector.BODY.removeClass('is-scrolled-down')
        //     App.selector.BODY.addClass('is-scrolled-up')

        //     isScrollingUp = true
        //     TweenMax.set('#js-topnavbar-primary, #js-topnavbar-tertiary', { height: 'auto' })
        //     TweenMax.from('#js-topnavbar-primary, #js-topnavbar-tertiary', 0.5, { height: 0, ease: Expo.easeOut })
        //     console.log('upscroll code')
        //   }
        // }
      } else {
        // if (App.selector.HEADER_DESKTOP.css('position') === 'fixed') {
        //   App.selector.BODY.removeClass('is-scrolled-up is-scrolled-down')
        //   TweenMax.set('#js-topnavbar-primary, #js-topnavbar-tertiary', { height: 'auto' })
        //   TweenMax.from('#js-topnavbar-primary, #js-topnavbar-tertiary', 0.5, { height: 0, ease: Expo.easeOut })
        // }
      }
    }
  };
  var updateScrollPosition = function updateScrollPosition(event) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (!App["var"].isTourStarted) {
      // console.log('check top nav bar function')
      checkToExpandTopnavbar(st);
    }

    // checkToShowDrawer(st)
    checkMobileSocial(st);
    updateAsideActive(st);
    updateStickiesPos();
    lastScrollTop = st < 0 ? 0 : st;
  };
  var updateStickiesPos = function updateStickiesPos() {
    // to cater to 3rd party widget heights that is loaded async
    // let stickyBitsOffsetTop = getStickyBitsOffsetTop()

    if (stickyHeaderHandleDesktop) {
      stickyHeaderHandleDesktop.update();
    }
    if (stickyHeaderHandleMobile) {
      stickyHeaderHandleMobile.update();
    }
    if (stickyAsideSecondaryHandle) {
      stickyAsideSecondaryHandle.update();

      // if (isScrollingUp) {
      //   TweenMax.to(App.selector.ASIDE_SECONDARY, 0.6, { top: stickyBitsOffsetTop + stickyBitsOffsetTopPrimarySecondaryTiertiaryTotalHeight, ease: Expo.easeOut })
      // } else {
      //   TweenMax.to(App.selector.ASIDE_SECONDARY, 0.6, { top: $('.header-desktop .topnavbar-secondary').outerHeight() + 10, ease: Expo.easeOut })
      // }
    }
  };

  var triggerStickyBehavior = function triggerStickyBehavior() {
    updateStickiesPos();
    $(window).scrollTop($(window).scrollTop() - 1);
    $(window).scrollTop($(window).scrollTop() + 1);
  };

  // if ($('#js-header-desktop').length > 0) {
  //   stickyHeaderHandleDesktop = stickybits($('#js-header-desktop').get(0), {
  //     useFixed: true // use fixed to prevent height animating conflicting with scroll events
  //   })
  // }

  // if ($('#js-header-mobile').length > 0) {
  //   stickyHeaderHandleMobile = stickybits($('#js-header-mobile').get(0), {
  //     useFixed: true
  //   })
  // }

  // if (App.selector.ASIDE_SECONDARY.length > 0) {
  //   let stickyBitsOffsetTop = getStickyBitsOffsetTop()
  //   stickyAsideSecondaryHandle = stickybits(App.selector.ASIDE_SECONDARY.get(0), {
  //     useStickyClasses: true,
  //     stickyBitStickyOffset: stickyBitsOffsetTop
  //   })
  // }

  $(window).on('scroll', App.util.throttle(updateScrollPosition, 50));
  $(document).on('ready', function () {
    App.selector.BODY.addClass('is-ready');
    setTimeout(function () {
      App.selector.BODY.addClass('is-loaded');
    }, 0);
  });
  var roMain = new ResizeObserver(function (entries, observer) {
    // as ads, iframes, watsover that are async loaded, update all related triggers again
    // updateAsideTriggerPointsPos() // right rail
    triggerStickyBehavior();
    App.selector.STICKYBITS_USEFIXED_SPACER.css('height', App.selector.HEADER_MOBILE.outerHeight());
  });
  roMain.observe(App.selector.MAIN.get(0));
  var onWindowResize = function onWindowResize(event) {
    if ($('#js-onboarding-tour').hasClass('is-active')) {
      $(window).trigger('window:resize');
    }
  };
  var resizeThrottled = App.util.throttle(onWindowResize, 100);
  $(window).on('resize', resizeThrottled);

  // close banner

  // let closeBanner = () => {
  //   $('.redirect-cancel').on('click', () => {
  //     $('.redirect-banner-container').toggle()
  //   })
  // }

  // closeBanner()
};

App.common.hamburger = function () {
  var mobileNavBody = $('#js-header-mobile .js-topnavbar-body');
  var setMobileNavBodyMaxH = function setMobileNavBodyMaxH() {
    var maxH = App.util.getViewport().h - mobileNavBody.outerHeight() - (mobileNavBody.offset().top - $(window).scrollTop());
    mobileNavBody.css({
      'max-height': maxH
    });
  };
  var onClickHam = function onClickHam(event) {
    console.log(event, 'ham');
    if (App.util.getViewport().w < App["var"].breakpoints.md.min) {
      var isHamCollapsed = $(event.currentTarget).attr('aria-expanded');
      if (isHamCollapsed === 'true') {
        if (App.selector.BODY.hasClass('is-hamburger-expanded')) {
          App.selector.BODY.removeClass('is-hamburger-expanded');
        }
        App.util.enablePageScroll(mobileNavBody.get(0));
      } else {
        if (!App.selector.BODY.hasClass('is-hamburger-expanded')) {
          App.selector.BODY.addClass('is-hamburger-expanded');
          $('html, body').animate({
            scrollTop: $('.header-mobile').offset().top
          }, 300);
          $('.js-topnavbar-body > .dropdown-menu.collapse').each(function (i, item) {
            console.log($(item), 'ttt');
            if ($(item).hasClass('show')) {
              $(item).removeClass('show');
              $('body').removeClass('overflow-hidden');
            }
          });
        }
        App.util.disablePageScroll(mobileNavBody.get(0));
      }
    }
  };
  var showDropDownMenu = function showDropDownMenu(event) {
    console.log('dropdown');
    var el = $(event.currentTarget);
    var dropdownMenu = el.find('.dropdown-menu');
    TweenMax.set(dropdownMenu, {
      height: 'auto',
      display: 'block'
    }); // to overwrite bootstrap show class
    TweenMax.from(dropdownMenu, 0.5, {
      height: 0,
      ease: Expo.easeOut,
      onComplete: function onComplete() {}
    });
  };
  var hideDropDownMenu = function hideDropDownMenu(event) {
    console.log('hide dropdown');
    var el = $(event.currentTarget);
    var dropdownMenu = el.find('.dropdown-menu');
    TweenMax.set(dropdownMenu, {
      display: 'block'
    }); // to overwrite bootstrap show class
    TweenMax.to(dropdownMenu, 0.5, {
      height: 0,
      ease: Expo.easeOut,
      onComplete: function onComplete() {
        TweenMax.set(dropdownMenu, {
          display: 'none'
        }); // to overwrite bootstrap show class
      }
    });
  };

  // $('#js-header-mobile').find('.dropdown').on('show.bs.dropdown', showDropDownMenu)
  // $('#js-header-mobile').find('.dropdown').on('hidden.bs.dropdown', hideDropDownMenu)
  $('.js-ham').on('click', onClickHam);
  console.log('common hamburger init');
};
App.common.keyUp = function () {
  var onKeyUp = function onKeyUp(event) {
    if (event.keyCode === 27) {
      if ($('#js-overlay-search').hasClass('is-active')) {
        $('#js-overlay-search').removeClass('is-active');
        App.util.enablePageScroll($('#js-overlay-search').find('.overlay-content').get(0));
      }
      if ($('#js-overlay-microtransaction').hasClass('is-active')) {
        $('#js-overlay-microtransaction').removeClass('is-active');
        App.util.enablePageScroll($('#js-overlay-microtransaction .overlay-content').get(0));
      }
      if ($('#js-overlay-onboarding').hasClass('is-active')) {
        $('#js-overlay-onboarding').removeClass('is-active');
        App.util.enablePageScroll($('#js-overlay-onboarding .overlay-content').get(0));
      }
    }
  };
  $(document).on('keyup', onKeyUp);
};
App.common.fontSizing = function () {
  var setFontSize = function setFontSize(fontSize) {
    console.log('font-sizing');
    $('.js-fontsizing li').removeClass('is-active');
    $('.js-fontsizing li[data-fontsize=' + fontSize + ']').addClass('is-active');
    $('.js-fontsizing li').find('.cta').removeClass('cta-solid cta-solid-white').addClass('cta-bordered cta-white');
    $('.js-fontsizing li[data-fontsize=' + fontSize + ']').removeClass('cta-bordered cta-white').find('.cta').addClass('cta-solid cta-solid-white');
    $('.js-fontsized').css('font-size', fontSize + 'px');
    if (window.localStorage) {
      localStorage.setItem('zbFontSizing', fontSize);
    }
  };
  var onClickFontSize = function onClickFontSize(event) {
    var fontSize = $(event.currentTarget).attr('data-fontsize');
    setFontSize(fontSize);
  };
  $('.js-fontsizing li').on('click', onClickFontSize);
  if (window.localStorage) {
    if (localStorage.getItem('zbFontSizing')) {
      var fontSize = localStorage.getItem('zbFontSizing');
      setFontSize(fontSize);
    } else {
      var _fontSize = $('.js-fontsizing').find('.is-active').attr('data-fontsize');
      localStorage.setItem('zbFontSizing', _fontSize);
    }
  }
};
App.common.overlaySearch = function () {
  var onClickSearchOpen = function onClickSearchOpen(event) {
    event.preventDefault();
    console.log('hhhh');
    if (!$('#js-overlay-search').hasClass('is-active')) {
      $('#js-overlay-search').addClass('is-active');
      App.util.disablePageScroll($('#js-overlay-search .overlay-content').get(0));
    }
  };
  var onClickSearchClose = function onClickSearchClose(event) {
    if ($('#js-overlay-search').hasClass('is-active')) {
      $('#js-overlay-search').removeClass('is-active');
      App.util.enablePageScroll($('#js-overlay-search .overlay-content').get(0));
    }
  };
  $('#js-topnavbar-search').on('click', onClickSearchOpen);
  $('#js-overlay-search .overlay-bg, #js-overlay-search .overlay-wrap .cancel').on('click', onClickSearchClose);
};
App.common.overlayOnboarding = function () {
  if ($('#js-overlay-onboarding').length !== 0) {
    App.util.checkCookie('isOnboardedOverlay', function () {
      if (!$('#js-overlay-onboarding').hasClass('is-active')) {
        $('#js-overlay-onboarding').addClass('is-active');
        App.util.disablePageScroll($('#js-overlay-onboarding .overlay-content').get(0));
      }
    });
    var onClickOnboardingClose = function onClickOnboardingClose(event) {
      event.preventDefault();
      if ($('#js-overlay-onboarding').hasClass('is-active')) {
        $('#js-overlay-onboarding').removeClass('is-active');
        App.util.enablePageScroll($('#js-overlay-onboarding .overlay-content').get(0));
      }
    };
    $('#js-overlay-onboarding .overlay-wrap .cancel, #js-overlay-onboarding .onboarding-link').on('click', onClickOnboardingClose);
    // console.log('common overlayOnboarding init')
  }
};

App.common.onboardingGallery = function () {
  $('#onboarding-gallery').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.onboarding-text').removeClass('is-active');
    $('.onboarding-text').eq(nextSlide).addClass('is-active');
  });
  $('#onboarding-gallery').slick({
    rows: 0,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    dots: true,
    adaptiveHeight: false,
    waitForAnimate: false,
    slide: '.onboarding-gallery-slide'
  });
};
App.common.onboardingTour = function () {
  if ($('#js-onboarding-tour').length !== 0) {
    var tourStack = [];
    var currEl;
    var bubble = $('#js-onboarding-tour .bubble');
    var getBubbleCoordinates = function getBubbleCoordinates(params) {
      var top;
      var left;
      if (params.direction === 'top') {
        top = params.reference.y1 - bubble.outerHeight();
        left = params.reference.x1 + params.reference.w / 2 - bubble.outerWidth() / 2;
      }
      if (params.direction === 'right') {
        top = params.reference.y2 - bubble.outerHeight() / 2 - params.reference.h / 2;
        left = params.reference.x2;
      }
      if (params.direction === 'bottom') {
        top = params.reference.y2;
        left = params.reference.x1 + params.reference.w / 2 - bubble.outerWidth() / 2;
      }
      if (params.direction === 'left') {
        top = params.reference.y2 - bubble.outerHeight() / 2 - params.reference.h / 2;
        left = params.reference.x1 - bubble.outerHeight();
      }
      return {
        top: top,
        left: left
      };
    };
    var getElCoordinates = function getElCoordinates(params) {
      var x1 = Math.round(params.el.offset().left);
      var y1 = Math.round(params.el.offset().top - $(window).scrollTop());
      var w = Math.round(params.el.outerWidth());
      var h = Math.round(params.el.outerHeight());
      return {
        x1: x1 - params.paddingX / 2,
        y1: y1 - params.paddingY / 2,
        x2: x1 + w + params.paddingY / 2,
        y2: y1 + h + params.paddingY / 2,
        w: w + params.paddingX,
        h: h + params.paddingY
      };
    };
    var getOptions = function getOptions(el) {
      var direction = el.attr('data-onboarding-tour-direction') ? el.attr('data-onboarding-tour-direction') : 'right';
      var paddingX = el.attr('data-onboarding-tour-padding-x') ? parseInt(el.attr('data-onboarding-tour-padding-x')) : 20;
      var paddingY = el.attr('data-onboarding-tour-padding-y') ? parseInt(el.attr('data-onboarding-tour-padding-y')) : 10;
      return {
        direction: direction,
        paddingX: paddingX,
        paddingY: paddingY
      };
    };
    var updateOnboardingTourPos = function updateOnboardingTourPos() {
      var options = getOptions(currEl);
      var coordinatesEl = getElCoordinates({
        el: currEl,
        paddingX: options.paddingX,
        paddingY: options.paddingY
      });
      var coordinatesBubble = getBubbleCoordinates({
        reference: coordinatesEl,
        direction: options.direction
      });
      TweenMax.to('#onboarding-tour-mask-opening', 0.3, {
        attr: {
          x: coordinatesEl.x1,
          y: coordinatesEl.y1,
          width: coordinatesEl.w,
          height: coordinatesEl.h
        },
        ease: Expo.easeOut
      });
      TweenMax.to(bubble, 0.3, {
        top: coordinatesBubble.top,
        left: coordinatesBubble.left,
        ease: Expo.easeOut
      });
    };
    var nextStepTour = function nextStepTour() {
      tourStack.shift();
      if (tourStack.length > 0) {
        var el = tourStack[tourStack.length - 1];
        App.util.checkCookie($(el).attr('data-onboarding-tour-id'), function () {
          activateOnboarding($(el));
        });
      }
    };
    var closeOnboardingTour = function closeOnboardingTour() {
      App.util.enablePageScroll();
      $('#js-onboarding-tour').removeClass('is-active');
      nextStepTour();
    };
    var activateOnboarding = function activateOnboarding(el) {
      var options = getOptions(el);
      var isPortrait = App.util.getViewport().w < App.util.getViewport().h;
      var length = App.util.getViewport().w > App.util.getViewport().h ? App.util.getViewport().w : App.util.getViewport().h;
      if (el.css('position') === 'relative' || el.css('position') === 'static') {
        var y = el.offset().top - App.util.getViewport().h / 2;
        $(window).scrollTop(y);
      } else {
        $(window).scrollTop($(window).scrollTop());
      }
      App.util.disablePageScroll();
      currEl = el;
      $('#js-onboarding-tour').addClass('is-active');
      $('#js-onboarding-tour').attr('data-bubble-direction', options.direction);
      $('#js-onboarding-tour-text').html(el.attr('data-onboarding-tour-text'));
      TweenMax.set('#onboarding-tour-mask-opening', {
        attr: {
          x: isPortrait ? -(App.util.getViewport().w / 2) : 0,
          y: !isPortrait ? -(App.util.getViewport().h / 2) : 0,
          width: length,
          height: length,
          rx: length / 3,
          ry: length / 3
        }
      });
      setTimeout(function () {
        var coordinatesEl = getElCoordinates({
          el: el,
          paddingX: options.paddingX,
          paddingY: options.paddingY
        });
        var coordinatesBubble = getBubbleCoordinates({
          reference: coordinatesEl,
          direction: options.direction
        });
        TweenMax.to('#onboarding-tour-mask-opening', 0.9, {
          delay: 0.2,
          attr: {
            x: coordinatesEl.x1,
            y: coordinatesEl.y1,
            width: coordinatesEl.w,
            height: coordinatesEl.h,
            rx: 8,
            ry: 8
          },
          ease: Expo.easeOut
        });
        TweenMax.set(bubble, {
          top: coordinatesBubble.top,
          left: coordinatesBubble.left
        });
      }, 100);
    };
    var onboardingEls = $('[data-onboarding-tour]');
    var instances = [];
    onboardingEls.each(function (i, el) {
      if ($(el).is(':visible')) {
        var instance = basicScroll.create({
          elem: $(el).get(0),
          from: 'top-middle',
          to: 'bottom-top',
          inside: function inside(instance, percentage, props) {
            if ($(el).attr('data-onboarding-tour') === 'true') {
              $(el).attr('data-onboarding-tour', 'false');
              tourStack.push($(el));
              if (tourStack.length <= 1) {
                App.util.checkCookie($(el).attr('data-onboarding-tour-id'), function () {
                  activateOnboarding($(el));
                });
              }
            }
          },
          outside: function outside(instance, percentage, props) {}
        });
        instance.start();
        instances.push(instance);
      }
    });
    var roBody = new ResizeObserver(function (entries, observer) {
      for (var i = 0; i < instances.length; i++) {
        instances[i].calculate();
        instances[i].update();
      }
    });
    roBody.observe(App.selector.BODY.get(0));
    $('#js-onboarding-tour .bubble').on('click', closeOnboardingTour);
    $(window).on('window:resize', function () {
      updateOnboardingTourPos();
    });
  }
};
App.common.mobileTextLinks = function () {
  var mobileTextLinksItem = $('.mobile-text-links-item');
  var cycleDuration = 5000;
  var curr = 0;
  var max = mobileTextLinksItem.length - 1;
  var mobileTextLinksCycle = function mobileTextLinksCycle() {
    if (curr >= max) {
      curr = 0;
    } else {
      curr++;
    }
    mobileTextLinksItem.removeClass('is-active');
    mobileTextLinksItem.eq(curr).addClass('is-active');
  };
  if ($('.mobile-text-links-item').length > 0) {
    setInterval(mobileTextLinksCycle, cycleDuration);
  }
};
App.common.figureMediaGallery = function () {
  console.log('MEDIA GALLERY');
  if ($('.js-figure-media-gallery').length > 0) {
    $('.js-figure-media-gallery').each(function (index, el) {
      var target = $(el);
      var inlineFigure = target.closest('.inline-figure');
      target.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        inlineFigure.attr('data-slide', nextSlide + 1);
      });
      target.slick({
        rows: 0,
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        autoplay: $('.page-home').length,
        autoplaySpeed: 5000,
        prevArrow: '<div class="zb-gallery-arrow zb-gallery-arrow-l"><div class="line"></div><div class="line"></div></div>',
        nextArrow: '<div class="zb-gallery-arrow zb-gallery-arrow-r"><div class="line"></div><div class="line"></div></div>',
        slide: '.figure-media-gallery-slide',
        appendArrows: target.find('.figure-media-gallery-nav'),
        appendDots: target.find('.figure-media-gallery-nav')
      });
    });
  }
  if ($('.js-figure-media-gallery-overlay').length > 0) {
    $('.js-figure-media-gallery-overlay').slickLightbox({
      src: 'src',
      itemSelector: '.figure-media-gallery-img img',
      caption: 'caption'
    });
  }
};
App.common.groupShowMore = function () {
  $('.group').find('.group-showmore-link').on('click', function (event) {
    event.preventDefault();
    if (!$(event.target).closest('.group').hasClass('is-showmore')) {
      $(event.target).closest('.group').addClass('is-showmore');
    }
  });
};

// App.common.headingBorder = () => {
//   $('.heading-border-right-content').each((index, el) => {
//     console.log('heading border')
//     new PerfectScrollbar($(el).get(0), { // eslint-disable-line no-new
//       wheelSpeed: 2,
//       suppressScrollY: true
//     })
//   })
// }

App.common.updatePagination = function () {
  $('.pagination').each(function (index, el) {
    var url = window.location.href.split('?')[0];
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page');
    var categories = params.get('categories');
    var date = params.get('date');
    var indexCurr = page === null ? parseInt($(el).attr('data-index')) : parseInt(page);
    var total = parseInt($(el).attr('data-total'));
    var pages = App.util.pagination(indexCurr, total);
    if (!_.isEmpty(categories)) {
      params.set('categories', categories);
    }
    if (!_.isEmpty(date)) {
      params.set('date', date);
    }
    for (var i = 0; i < pages.length; i++) {
      if (_.isNumber(pages[i])) {
        params.set('page', pages[i]);
      } else {
        params.set('page', 'javascript:void(0)');
      }
      $(el).find('.pagination-link[data-id="' + pages[i] + '"]').attr('href', url + '?' + params.toString());
    }
    if (indexCurr === 1) {
      $(el).find('.pagination-link-prev').attr('disabled', true);
      $(el).find('.pagination-link-prev').attr('href', 'javascript:void(0)');
    } else {
      params.set('page', indexCurr - 1);
      $(el).find('.pagination-link-prev').attr('href', url + '?' + params.toString());
    }
    if (indexCurr === total) {
      $(el).find('.pagination-link-next').attr('disabled', true);
      $(el).find('.pagination-link-next').attr('href', 'javascript:void(0)');
    } else {
      params.set('page', indexCurr + 1);
      $(el).find('.pagination-link-next').attr('href', url + '?' + params.toString());
    }
  });
};
App.common.pagination = function () {
  // for (let i = 1, l = 20; i <= l; i++) {
  //   console.log('Selected page ' + i + ':', App.util.pagination(i, l))
  // }

  $('.pagination').each(function (index, el) {
    var paginationList = $(el).find('.pagination-list');
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page');
    var indexCurr = page === null ? parseInt($(el).attr('data-index')) : parseInt(page);
    var total = parseInt($(el).attr('data-total'));
    var pages = App.util.pagination(indexCurr, total);
    for (var i = 0; i < pages.length; i++) {
      var cssClassLink = indexCurr === pages[i] ? 'is-active' : '';
      var paginationItemStr = '\
        <li class="col-auto">\
          <a href="#" class="pagination-link ' + cssClassLink + '" data-id="' + pages[i] + '">\
            <span>' + pages[i] + '</span>\
          </a>\
        </li>\
      ';
      paginationList.append(paginationItemStr);
    }
    App.common.updatePagination();
  });
};
App.common.selectpicker = function () {
  if ($('.selectpicker').length > 0) {
    $('.selectpicker').on('changed.bs.select', function (event, clickedIndex, isSelected, previousValue) {
      var selectedValue = $(event.currentTarget).find('option').eq(clickedIndex).attr('data-filter');
      var url = window.location.href.split('?')[0];
      var params = new URLSearchParams(window.location.search);
      var categories = params.getAll('categories');
      if (!_.isEmpty(categories)) {
        params.set('categories', categories);
      }
      params.set('date', selectedValue);
      window.history.replaceState(null, null, url + '?' + params.toString());
      App.common.updatePagination();
    });
    $('.selectpicker').selectpicker();
  }
};
App.common.filterCategory = function () {
  if ($('.js-label-category').length > 0) {
    var setActiveCategories = function setActiveCategories() {
      var params = new URLSearchParams(window.location.search);
      var categories = params.getAll('categories');
      var tempCategories;
      if (!_.isEmpty(categories)) {
        tempCategories = categories[0].split(',');
      }
      _.forEach(tempCategories, function (value) {
        $('.js-label-category[data-filter="' + value + '"]').addClass('is-active');
      });
    };
    $('.js-label-category').on('click', function (event) {
      event.preventDefault();
      var el = $(event.currentTarget);
      var category = el.attr('data-filter');
      var url = window.location.href.split('?')[0];
      var params = new URLSearchParams(window.location.search);
      var categories = params.getAll('categories');
      if (el.hasClass('is-active')) {
        el.removeClass('is-active');
        var tempCat = categories[0].split(',');
        var index = tempCat.indexOf(category);
        if (index !== -1) {
          tempCat.splice(index, 1);
        }
        categories = tempCat.toString();
        if (tempCat.length === 0) {
          params["delete"]('categories', categories);
        } else {
          params.set('categories', categories);
        }
      } else {
        el.addClass('is-active');
        categories.push(category);
        params.set('categories', categories);
      }
      window.history.replaceState(null, null, url + '?' + params.toString());
      App.common.updatePagination();
    });
    setActiveCategories();
  }
};
App.common.userMenu = function () {
  var mobileNavBody = $('#js-header-mobile .js-topnavbar-body');
  $('.topnav-link').on('click', function (e) {
    var id = $(e.currentTarget).data('target');
    console.log(id, 'jskajjskajsksjkajs');
    $(id).on('show.bs.collapse', function () {
      if (id === '#mobile-user-not-login' || id === '#mobile-user-login' || id === 'mobile-registered-user') {
        $('html, body').animate({
          scrollTop: $('.header-mobile').offset().top
        }, 300);
        $('body').addClass('overflow-hidden');
      }
      $('#topnavbar-toggler-mobile').removeClass('show');
      $('.js-ham').attr('aria-expanded', 'false');
      App.util.enablePageScroll(mobileNavBody.get(0));
      if (App.selector.BODY.hasClass('is-hamburger-expanded')) {
        App.selector.BODY.removeClass('is-hamburger-expanded');
      }
    });
    $(id).on('hide.bs.collapse', function () {
      console.log('hide');
      $('body').removeClass('overflow-hidden');
    });
  });
  $('.js-topnavbar-body').on('click', function () {
    if ($('body').hasClass('overflow-hidden')) {
      $('body').removeClass('overflow-hidden');
    }
    if ($('.js-topnavbar-body > .dropdown-menu, .collapse').hasClass('show')) {
      var menuId = $('.js-topnavbar-body > .dropdown-menu, .collapse').attr('id').replace('mobile-', '.');
      $(menuId).attr('aria-expanded', 'false');
      $('.js-topnavbar-body > .dropdown-menu, .collapse').removeClass('show');
    }
  });
};
App.common.toggleMenu = function () {
  console.log('menu toggle');
  // let textId = $('#version-toggle').text()
  $('#version-toggle-list > .topnav-link, .js-toggle-version').on('click', function (e) {
    e.preventDefault();
    var textId = $('#version-toggle').text();
    var string = $(e.currentTarget).text();
    switch (string) {
      case '国际版':
        window.open('https://www.zaobao.com.sg/global', '_self');
        break;
      case '新加坡版':
        window.open('https://www.zaobao.com.sg/?ref=global', '_self');
        break;
      case '中国版':
        window.open('https://www.zaobao.com.sg/cn', '_self');
        break;
      default:
        console.log('what are you looking for?');
    }
    $(e.currentTarget).text(textId);
    $('#version-toggle').text(string);
    $('#mobile-version-toggle > .topnav-link').html(string += '<div class="fas fa-caret-down"></div>');
    console.log(e.currentTarget, string, textId, 'ononon');
  });
};

// App.common.setscrollleft = () => {
//   var padW = $('.single-global-container').innerWidth() - $('.single-global-container').width()
//   var marginW = $('.single-global-container').outerWidth(true) - $('.single-global-container').outerWidth()
//   var overlayW = $('.overlay-body-container').innerWidth() - $('.overlay-body-container').width()
//   var total = marginW + overlayW + padW
//   console.log(overlayW, 'overlay XXXXXXX')
//   var pos = $('.highlight').position().left + total || $(window).on('resize', () => { return $('.highlight').position().left + total })
//   let currentScroll = $('.overlay-body-container').scrollLeft()
//   let containerWidth = $('.overlay-body-container').width() || $(window).on('resize', () => { return $('.overlay-body-container').width() })
//   let newPos = (pos + currentScroll) - (containerWidth / 2)

//   // $('.page-home').css('overflow', 'hidden')

//   $('.overlay-body-container').animate({
//     scrollLeft: newPos + padW
//   })
// }

App.common();
if ($('.page-blank').length === 0) {
  // not load topnavbar behaviour for blank template
  App.common.stickies();
}
// App.common.setscrollleft()
App.common.fontSizing();
App.common.keyUp();
App.common.overlaySearch();
// App.common.overlayOnboarding()
App.common.hamburger();
App.common.onboardingGallery();
App.common.onboardingTour();
App.common.mobileTextLinks();
App.common.figureMediaGallery();
App.common.groupShowMore();
// App.common.headingBorder()
App.common.pagination();
App.common.selectpicker();
App.common.filterCategory();
App.common.userMenu();
App.common.toggleMenu();
// App.common.mobileDrawer()
// App.common.devTests() // to remove later when done