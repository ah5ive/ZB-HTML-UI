"use strict";

App.page = function () {
  $('.point-notifier-cancel').on('click', function () {
    $('.point-notifier').fadeOut(300);
  });
};

// toggle show hide for byline
App.page.showDatePublished = function () {
  $('.published-date').on('click', function (e) {
    e.preventDefault();
    $('.date-published').toggle('fast', function () {
      if ($('.arrow-down').length > 0) {
        $('.arrow-down').addClass('arrow-up').removeClass('arrow-down');
      } else {
        $('.arrow-up').addClass('arrow-down').removeClass('arrow-up');
      }
    });
  });
};
App.page.microtransaction = function () {
  var onClickMicrotransactionOpen = function onClickMicrotransactionOpen(event) {
    event.preventDefault();
    if (!$('#js-overlay-microtransaction').hasClass('is-active')) {
      $('#js-overlay-microtransaction').addClass('is-active');
      App.util.disablePageScroll($('#js-overlay-microtransaction .overlay-text').get(0));
    }
  };
  var onClickMicrotransactionClose = function onClickMicrotransactionClose(event) {
    if ($('#js-overlay-microtransaction').hasClass('is-active')) {
      $('#js-overlay-microtransaction').removeClass('is-active');
      App.util.enablePageScroll($('#js-overlay-microtransaction .overlay-text').get(0));
    }
    if ($('#js-overlay-microtransaction .overlay-text').hasClass('d-none')) {
      setTimeout(function () {
        $('#js-overlay-microtransaction .overlay-text').removeClass('d-none');
        $('#dfp-ad-midarticlespecial').remove();
      }, 500);
    }
  };
  $('#js-cta-microtransaction').on('click', onClickMicrotransactionOpen);
  $('#js-overlay-microtransaction .overlay-bg, #js-overlay-microtransaction .overlay-wrap .cancel').on('click', onClickMicrotransactionClose);

  // $('#js-cta-microtransaction').click() // for dev purposes
  // console.log('page microtransaction init')
};

App.page.mobileSocial = function () {
  var onClickMobileSocial = function onClickMobileSocial() {
    if (App.selector.MOBILE_SOCIAL.hasClass('is-sidelined')) {
      clearTimeout(App["var"].mobileSocialSidelineHandler);
      App.selector.MOBILE_SOCIAL.removeClass('is-sidelined');
    } else if (App.selector.MOBILE_SOCIAL.hasClass('is-active')) {
      App.selector.MOBILE_SOCIAL.removeClass('is-active');
    } else {
      App.selector.MOBILE_SOCIAL.addClass('is-active');
    }
  };
  $('#js-mobile-social-handle').on('click', onClickMobileSocial);
};
App.page.outbrain = function () {
  $('div.OUTBRAIN').each(function (index) {
    $(this).attr('data-src', 'https://www.zaobao.com.sg/znews/singapore/story20190423-950918');
    $(this).attr('data-ob-template', 'ZaobaoSingapore');
  });
  // console.log('page outbrain init')
};

App.page.scroll = function (classEle) {
  var height;
  // let arry = []
  // console.log(height, 'HEIGHT')
  $(window).on('load', function () {
    console.log($(window).width(), 'width');
    if ($(window).width() >= 992) {
      if ($('.' + classEle).length <= 1) {
        height = $('.' + classEle).children().height() * 2.5;
        $('.' + classEle).css('height', height + 'px');
      } else {
        $('.' + classEle).each(function (i, item) {
          // arry.push($(item).height() * 2.5)
          // console.log(arry, "XXXXXARRRYXXXXX")
          $(item).css('height', $(item).height() * 2.5 + 'px');
          console.log(i, $(item).height(), 'this height');
        });
      }
    } else {
      // arry = []
      $('.' + classEle).removeAttr('style');
    }
  });
  $(window).on('resize', function (e) {
    if ($(window).width() <= 991) {
      $('.' + classEle).removeAttr('style');
    } else {
      $('.' + classEle).each(function (i, item) {
        // arry.push($(item).height() * 2.5)
        // console.log(arry, "XXXXXARRRYXXXXX")
        $(item).removeAttr('style');
        $(item).css('height', $(item).height() * 2.5 + 'px');
        console.log(i, $(item).height(), 'this height');
      });
    }
  });
};
App.page.articleslider = function () {
  $('.overlay-wrap > .cancel').on('click', function (e) {
    console.log('click');
    e.preventDefault();
    $('.overlay-article-gallery').css({
      'visibility': 'hidden',
      'opacity': '0',
      'display': 'none'
    });
    $('body').removeClass('overflow-hidden');
  });
  // load article slider
  $('.js-article-gallery').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.overlay-content-pagination').html('<p>' + i + '/' + slick.slideCount + '</p>');
  });
  $('.js-article-gallery').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    rows: 0,
    prevArrow: "<button type='button' class='slick-prev'><img src=./dist/images/icon/arrow-prev-white.svg></button>",
    nextArrow: "<button type='button' class='slick-next'><img src=./dist/images/icon/arrow-next-white.svg></button>"
  });
  var index;
  var sliderGallery = $('.overlay.js-overlay.overlay-article-gallery');
  $('.inline-figure').on('click', function (e) {
    e.preventDefault();
    index = $(e.currentTarget).data('slide');
    console.log(index, 'inline-figure click');
    sliderGallery.css({
      'visibility': 'visible',
      'opacity': '1',
      'display': 'block'
    });
    $('.js-article-gallery').slick('slickSetOption', 'speed', 0);
    $('.js-article-gallery').slick('slickGoTo', index);
    $('.js-article-gallery').slick('slickSetOption', 'speed', 500);
    $('body').addClass('overflow-hidden');
  });
};
App.page.scroll('inline-scroll-container');
App.page.scroll('aside-set');
App.page();
App.page.microtransaction();
App.page.mobileSocial();
App.page.outbrain();
App.page.showDatePublished();
App.page.articleslider();