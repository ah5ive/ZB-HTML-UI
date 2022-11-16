"use strict";

App.page = function () {// console.log('page listing')
}; // var count = 0


App.page.readersClub = function () {
  // browser size reaction
  $(window).on('load', function () {
    // check browser width
    if ($(window).width() < 992) {
      $('#subscriber-tab').removeClass('active');
      $('#subscriber-tab').children().removeClass('arrow-up').addClass('arrow-down');
      $('#subscriber-tab').attr('aria-selected', false); // console.log('no tab are active')
    }
  });
  $(window).on('resize', function () {
    // check browser width
    if ($(window).width() < 992) {
      $('.readers-club-content-mobile').removeAttr('style'); // iterate

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
  }); // resize

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
  }); // #subscriber-tab

  $('#subscriber-tab').on('click', function (e) {
    e.preventDefault(); // console.log(count)

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
  }); // #visitor

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
    $('.readers-club-content').show(); // console.log(e.relatedTarget, 'visitor')

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
  }); // promo carousel

  $('.readers-club-promo').slick({
    slide: '.single-promo',
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1440,
      settings: {
        adaptiveHeight: true
      }
    }]
  }); // cancel

  $('.cta-cancel').on('click', function (e) {
    e.preventDefault();
    console.log(e.relatedTarget, 'cancel');
    $('.tab-pane').each(function (i, tab) {
      if ($(tab).hasClass('active show')) {
        $(tab).removeClass('active show');
        $('.readers-club-content-mobile').hide();
        $('.nav-link').each(function (i, link) {
          if ($(link).hasClass('active')) {
            $(link).removeClass('active');
            $(link).children().removeClass('arrow-up').addClass('arrow-down');
          }
        });
      }
    });
  }); // faq expand event

  $('#readers-faq').on('show.bs.collapse', function () {
    $('.cta-faq').html('隐藏<img src="./dist/images/icon/arrow-up.svg">');
  });
  $('#readers-faq').on('hide.bs.collapse', function () {
    $('.cta-faq').html('显示<img src="./dist/images/icon/arrow-down.svg">');
  }); // modal open close

  $(document).on('click', 'body', function () {
    if ($('body').hasClass('modal-open')) {
      console.log('hello mpdal');
      $('#readers-club-modal').modal('hide');
    }
  });
};

App.page();
App.page.readersClub();