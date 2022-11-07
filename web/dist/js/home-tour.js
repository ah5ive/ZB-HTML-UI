"use strict";

App.page.tourDesktop = function () {
  var tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      scrollTo: {
        behavior: 'smooth',
        block: 'center'
      },
      modalOverlayOpeningPadding: 3
    },
    useModalOverlay: true,
    steps: [{
      text: '来自《联合晚报》的精选内容',
      attachTo: {
        element: '.topnav-link[href="https://www.zaobao.com.sg/publication/lian-he-wan-bao"]',
        on: 'bottom'
      },
      buttons: [{
        action: function action() {
          return this.next();
        },
        text: '下一个'
      }]
    }, {
      text: '来自《新明日报》的精选内容',
      attachTo: {
        element: '.topnav-link[href="https://www.zaobao.com.sg/publication/xin-ming-ri-bao"]',
        on: 'bottom'
      },
      buttons: [{
        action: function action() {
          return this.back();
        },
        secondary: 'secondary',
        text: '上一个'
      }, {
        action: function action() {
          return this.next();
        },
        text: '下一个'
      }]
    }, {
      text: '订户从这里登录 畅享收费内容',
      attachTo: {
        element: '.cta-holder-subscribe',
        on: 'bottom'
      },
      buttons: [{
        action: function action() {
          return this.back();
        },
        secondary: 'secondary',
        text: '上一个'
      }, {
        action: function action() {
          return this.next();
        },
        text: '下一个'
      }]
    }, {
      text: ' 当下最多人关注的新闻 热点随时更新',
      attachTo: {
        element: '.newsticker-content',
        on: 'bottom'
      },
      buttons: [{
        action: function action() {
          return this.back();
        },
        secondary: 'secondary',
        text: '上一个'
      }, {
        action: function action() {
          return this.next();
        },
        text: '下一个'
      }]
    }, {
      text: '早报播客：更多系列节目“用听的”',
      attachTo: {
        element: '.aside-item-podcast',
        on: 'top'
      },
      buttons: [{
        action: function action() {
          return this.back();
        },
        secondary: 'secondary',
        text: '上一个'
      }, {
        action: function action() {
          return this.cancel();
        },
        text: '完成'
      }]
    }]
  });

  var forceExpandTopnavbar = function forceExpandTopnavbar() {
    if (!$('body').hasClass('is-scrolled-up')) {
      App.selector.BODY.removeClass('is-scrolled-down');
      App.selector.BODY.addClass('is-scrolled-up');
      TweenMax.set('#js-topnavbar-primary, #js-topnavbar-tertiary', {
        height: 'auto'
      });
      TweenMax.from('#js-topnavbar-primary, #js-topnavbar-tertiary', 0.5, {
        height: 0,
        ease: Expo.easeOut
      });
    }
  };

  tour.on('cancel', function () {
    App["var"].isTourStarted = false;
  });
  $('.tour .cancel, .tour .tour-expand').on('click', function (event) {
    if ($('.tour').hasClass('is-minimized')) {
      $('.tour').removeClass('is-minimized');
    } else {
      $('.tour').addClass('is-minimized');
    }
  });
  $('.tour-start').on('click', function (event) {
    event.preventDefault();
    forceExpandTopnavbar();
    App["var"].isTourStarted = true;
    $('.tour').addClass('is-hidden');
    setTimeout(function () {
      tour.start();
    }, 300);
  });
};

if (App.util.getViewport().w >= App["var"].breakpoints.lg.min) {
  App.page.tourDesktop();
}