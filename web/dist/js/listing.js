"use strict";

App.page = function () {// console.log('page listing')
};

App.page.readersClub = function () {
  $('#registered-subscriber-tab').on('click', function (e) {
    e.preventDefault();
    $('.readers-club-dashboard').addClass('resgisted-user');

    if ($('.readers-club-dashboard').hasClass('subscriber')) {
      $('.readers-club-dashboard').removeClass('subscriber');
    } else if ($('.readers-club-dashboard').hasClass('visitor')) {
      $('.readers-club-dashboard').removeClass('visitor');
    }
  });
  $('#registered-subscriber-tab').on('show.bs.tab', function (e) {
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
    e.preventDefault();
    $('.readers-club-dashboard').addClass('subscriber');

    if ($('.readers-club-dashboard').hasClass('resgisted-user')) {
      $('.readers-club-dashboard').removeClass('resgisted-user');
    } else if ($('.readers-club-dashboard').hasClass('visitor')) {
      $('.readers-club-dashboard').removeClass('visitor');
    }
  });
  $('#subscriber-tab').on('show.bs.tab', function (e) {
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

    if ($('.readers-club-dashboard').hasClass('resgisted-user')) {
      $('.readers-club-dashboard').removeClass('resgisted-user');
    } else if ($('.readers-club-dashboard').hasClass('subscriber')) {
      $('.readers-club-dashboard').removeClass('subscriber');
    }
  });
  $('#visitor-tab').on('show.bs.tab', function (e) {
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
    infinite: true
  }); // faq expand event

  $('#readers-faq').on('show.bs.collapse', function () {
    $('.cta-faq').html('隐藏<img src="./dist/images/icon/arrow-up.svg">');
  });
  $('#readers-faq').on('hide.bs.collapse', function () {
    $('.cta-faq').html('显示<img src="./dist/images/icon/arrow-down.svg">');
  }); // modal
};

App.page();
App.page.readersClub();