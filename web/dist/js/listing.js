"use strict";

App.page = function () {
  // console.log('page listing')
};

// var count = 0
App.page.readersClub = function () {
  // browser size reaction
  $(window).on('load', function () {
    // check browser width
    // if ($(window).width() < 992) {
    //   console.log('check browser size')
    //   $('#subscriber-tab').removeClass('active')
    //   $('#subscriber-tab').children().removeClass('arrow-up').addClass('arrow-down')
    //   $('#subscriber-tab').attr('aria-selected', false)
    //   // console.log('no tab are active')
    // }

    if ($(window).width() < 992 && $('#anonymous-user').length > 0) {
      $('.readers-club-content').show();
    } else if ($(window).width() < 992) {
      console.log('check browser size');
      $('#subscriber-tab').removeClass('active');
      $('#subscriber-tab').children().removeClass('arrow-up').addClass('arrow-down');
      $('#subscriber-tab').attr('aria-selected', false);
    }
  });
  $(window).on('resize', function () {
    // check browser width
    if ($(window).width() < 992) {
      $('.readers-club-content-mobile').removeAttr('style');
      // iterate
      $('.nav-link').each(function (i, item) {
        if ($(item).hasClass('active')) {
          $('.readers-club-content-mobile').css('display', 'block');
        }
      });
    } else {
      if ($('.nav-link.active').length === 0) {
        console.log('zero do something');
        $('#subscriber-tab').tab('show');
        $('.readers-club-content-mobile').removeAttr('style');
      }
    }
  });

  // resize

  $('#registered-subscriber-tab').on('click', function (e) {
    e.preventDefault();
    $('.readers-club-dashboard').addClass('registered-subscriber');
    if ($('.readers-club-dashboard').hasClass('subscriber')) {
      $('.readers-club-dashboard').removeClass('subscriber');
    } else if ($('.readers-club-dashboard').hasClass('visitor')) {
      $('.readers-club-dashboard').removeClass('visitor');
    }
  });
  $('#registered-subscriber-tab').on('show.bs.tab', function (e) {
    $('.readers-club-content').show();
    if ($(e.target).find('arrow-down')) {
      $(e.target).children().removeClass('arrow-down');
      $(e.target).children().addClass('arrow-up');
    }
    if ($('#subscriber-tab').find('arrow-up')) {
      $('#subscriber-tab').children().removeClass('arrow-up');
      $('#subscriber-tab').children().addClass('arrow-down');
    }
    if ($('#visitor-tab').find('arrow-up')) {
      $('#visitor-tab').children().removeClass('arrow-up');
      $('#visitor-tab').children().addClass('arrow-down');
    }
    $('.reader-club-img').show();
    $('.reader-club-img-subscriber').hide();
  });

  // #subscriber-tab
  $('#subscriber-tab').on('click', function (e) {
    e.preventDefault();
    // console.log(count)

    if ($(e.target).find('arrow-down')) {
      $(e.target).children().removeClass('arrow-down');
      $(e.target).children().addClass('arrow-up');
    }
    $('.readers-club-dashboard').addClass('subscriber');
    if ($('.readers-club-dashboard').hasClass('registered-subscriber')) {
      $('.readers-club-dashboard').removeClass('registered-subscriber');
    } else if ($('.readers-club-dashboard').hasClass('visitor')) {
      $('.readers-club-dashboard').removeClass('visitor');
    }
  });
  $('#subscriber-tab').on('show.bs.tab', function (e) {
    $('.readers-club-dashboard').attr('class', 'readers-club-dashboard subscriber');
    $('.readers-club-content').show();
    if ($(e.target).find('arrow-down')) {
      $(e.target).children().removeClass('arrow-down');
      $(e.target).children().addClass('arrow-up');
    }
    if ($('#registered-subscriber-tab').find('arrow-up')) {
      $('#registered-subscriber-tab').children().removeClass('arrow-up');
      $('#registered-subscriber-tab').children().addClass('arrow-down');
    }
    if ($('#visitor-tab').find('arrow-up')) {
      $('#visitor-tab').children().removeClass('arrow-up');
      $('#visitor-tab').children().addClass('arrow-down');
    }
    $('.reader-club-img-subscriber').show();
    $('.reader-club-img').hide();
  });

  // #visitor
  $('#visitor-tab').on('click', function (e) {
    e.preventDefault();
    $('.readers-club-dashboard').addClass('visitor');
    if ($('.readers-club-dashboard').hasClass('registered-subscriber')) {
      $('.readers-club-dashboard').removeClass('registered-subscriber');
    } else if ($('.readers-club-dashboard').hasClass('subscriber')) {
      $('.readers-club-dashboard').removeClass('subscriber');
    }
  });
  $('#visitor-tab').on('show.bs.tab', function (e) {
    $('.readers-club-content').show();
    // console.log(e.relatedTarget, 'visitor')
    if ($(e.target).find('arrow-down')) {
      $(e.target).children().removeClass('arrow-down');
      $(e.target).children().addClass('arrow-up');
    }
    if ($('#subscriber-tab').find('arrow-up')) {
      $('#subscriber-tab').children().removeClass('arrow-up');
      $('#subscriber-tab').children().addClass('arrow-down');
    }
    if ($('#registered-subscriber-tab').find('arrow-up')) {
      $('#registered-subscriber-tab').children().removeClass('arrow-up');
      $('#registered-subscriber-tab').children().addClass('arrow-down');
    }
    $('.reader-club-img').show();
    $('.reader-club-img-subscriber').hide();
  });

  // promo carousel
  $('.readers-club-promo').slick({
    slide: '.single-promo',
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    // autoplay: true,
    arrows: false,
    infinite: true,
    responsive: [{
      breakpoint: 1440,
      settings: {
        adaptiveHeight: false
      }
    }]
  });

  // cancel
  $('.cta-cancel').on('click', function (e) {
    e.preventDefault();
    console.log(e.relatedTarget, 'cancel');
    $('.tab-pane').each(function (i, tab) {
      if ($(tab).hasClass('active show')) {
        $(tab).removeClass('active show');
        $('.readers-club-content').hide();
        $('.nav-link').each(function (i, link) {
          if ($(link).hasClass('active')) {
            $(link).removeClass('active');
            $(link).children().removeClass('arrow-up').addClass('arrow-down');
          }
        });
      }
    });
  });

  // faq expand event
  $('#readers-faq').on('show.bs.collapse', function () {
    $('.cta-faq').html('隐藏<img src="./dist/images/icon/arrow-up.svg">');
  });
  $('#readers-faq').on('hide.bs.collapse', function () {
    $('.cta-faq').html('显示<img src="./dist/images/icon/arrow-down.svg">');
  });

  // modal open close
  $(document).on('click', 'body', function () {
    if ($('body').hasClass('modal-open')) {
      console.log('hello mpdal');
      $('#readers-club-modal').modal('hide');
    }
  });
};
App.page.fbslider = function () {
  // load slick js first
  $('.js-reader-club-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><img src=./dist/images/icon/arrow-prev.svg></button>",
    nextArrow: "<button type='button' class='slick-next'><img src=./dist/images/icon/arrow-next.svg></button>",
    rows: 0
  });
  var sliderGallery = $('.overlay.js-overlay.overlay-fb-gallery');
  var slidesArry = $('.overlay-content-container.mobile');
  var cloneArry = slidesArry.clone(true, true);
  var index;
  $('.js-fb-gallery').on('click', function (e) {
    e.preventDefault();
    index = $(e.currentTarget).data('id');
    sliderGallery = $('.overlay.js-overlay.overlay-fb-gallery');
    sliderGallery.css('visibility', 'visible');

    // slick slider initial when click on the image slider appear and direct to the particular images base on index
    $('.js-reader-club-slider').slick('slickSetOption', 'speed', 0);
    $('.js-reader-club-slider').slick('slickGoTo', index);
    $('.js-reader-club-slider').slick('slickSetOption', 'speed', 500);
    $('body').css('overflow', 'hidden');
  });
  $(window).on('load resize', function () {
    $('body').removeAttr('style');
    var windowSize = $(window).width();
    sliderGallery.css('visibility', 'hidden');
    if (windowSize < 768) {
      // filter left the list to left desktop class
      $('.js-reader-club-slider').slick('slickFilter', '.desktop');
    } else {
      var slideLength = $('.overlay-content-container.slick-slide').length;
      if (slideLength < 8) {
        // add the clonelisting back to container
        console.log('do something');
        $('.js-reader-club-slider').slick('slickAdd', cloneArry);
        $('.js-reader-club-slider').slick('slickGoTo', index);
      }
    }

    // detect first and last slide
    $('.js-reader-club-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      if (nextSlide === 0) {
        $('.slick-prev').addClass('slick-disabled');
      } else {
        $('.slick-prev').removeClass('slick-disabled');
      }
    });
  });
  // slider end

  // thumbnail function start
  if ($('.thumbnail').length > 0) {
    $('.thumbnail').on('click', function (e) {
      e.preventDefault();
      $('.thumbnail').removeClass('is-active');
      $(e.currentTarget).addClass('is-active');
      var imgUrl = $(e.currentTarget).css('background-image').slice(5, -2);
      var displayImage = $(e.currentTarget).closest('.overlay-image-container').find('img').eq(0);
      displayImage.attr('src', imgUrl);
    });
  }
  // cancel cta
  var canelCta = $('.overlay-fb-gallery .overlay-wrap').find('.cancel');
  canelCta.on('click', function () {
    sliderGallery.css('visibility', 'hidden');
    $('body').removeAttr('style');
  });
};
App.page();
App.page.readersClub();
App.page.fbslider();