"use strict";

App.page = function () {
  console.log('epaper');
  $('.epaper-carousel').slick({
    rtl: true,
    infinite: false,
    dots: false,
    slide: '.single-epaper',
    slidesToShow: 3,
    slidesToScroll: 3,
    accessibility: false,
    prevArrow: "<button type='button' class='slick-prev'><img src='./dist/images/icon/arrow-prev.svg'></button>",
    nextArrow: "<button type='button' class='slick-next'><img src='./dist/images/icon/arrow-next.svg'></button>"
  });
  $.ajax({
    url: './dist/data/epaper.json'
  }).done(function (data) {
    var epaper = data.epaper_items;
    $.each(epaper, function (i, item) {
      var htmlString = "\n          <a class='single-epaper' href=".concat(item.target_url, " target=\"_blank\">\n            <div class='epaper-image-holder'><img src=").concat(item.pub_thumbnail_url, "></div>\n            <div class='epaper-date zb'><P>").concat(item.pub_date, "</p></div>\n          </a>");
      $('.epaper-carousel').slick('slickAdd', htmlString);
    });
    console.log(epaper, 'data');
  });
};
App.page.toggleAd = function () {
  $('#toggle-epaper-ad-btn').on('click', function () {
    $('#epaper-ad-header').slideUp();
    $('#epaper-ad-container').slideUp();
    var offset;
    if ($('.epaper-content-deskstop').css('display') === 'none') {
      offset = $('.sec-epaper').offset().top * 0.85;
    } else {
      offset = $('.sec-epaper').offset().top * 0.8;
    }
    $('html, body').animate({
      scrollTop: $('.sec-epaper').offset().top - offset
    }, 0);
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() + $(window).innerHeight() === $(document).height()) {
      if ($('#epaper-ad-header').css('display') && $('#epaper-ad-container').css('display') === 'none') {
        $('#epaper-ad-header').slideDown();
        $('#epaper-ad-container').slideDown();
      }
    }
  });
};
App.page();
App.page.toggleAd();