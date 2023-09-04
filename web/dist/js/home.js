"use strict";

App.page = function () {
  // console.log('page home')
};
App.common.cancel = function (cta, page) {
  var url = new URL(window.location.href);
  if (url.searchParams.get('global') === 'true') {
    $('.page').css('overflow', 'hidden');
    $('.overlay-global-page').show();
    $('.overlay-global-page').css('visibility', 'visible');
    $('.overlay-global-page').css('opacity', '1');
  }
  $(cta).on('click', function () {
    $('.page').removeAttr('style');
    $(page).hide();
  });
};
App.page.newsticker = function () {
  var newsticker = $('.newsticker');
  newsticker.each(function (i, el) {
    var newstickerLinkNext = $(el).find('.newsticker-link-next');
    var newstickerLinkItem = $(el).find('.newsticker-link-item');
    var cycleDuration = 6000;
    var curr = 0;
    var max = newstickerLinkItem.length - 1;
    var newstickerCycle = function newstickerCycle() {
      if (curr >= max) {
        curr = 0;
      } else {
        curr++;
      }
      newstickerLinkItem.removeClass('is-active');
      newstickerLinkItem.eq(curr).addClass('is-active');
    };
    var newstickerHandler = setInterval(newstickerCycle, cycleDuration);
    var onClickNewstickerNext = function onClickNewstickerNext(event) {
      event.preventDefault();
      clearInterval(newstickerHandler);
      newstickerCycle();
      newstickerHandler = setInterval(newstickerCycle, cycleDuration);
    };
    newstickerLinkNext.on('click', onClickNewstickerNext);
  });
};
App.page.sectionCarousel = function () {
  var slider = $('.section-carousel').slick({
    infinite: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<span class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./dist/images/icon/arrow-prev-blue.svg"/></span>',
    nextArrow: '<span class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./dist/images/icon/arrow-next-blue.svg"/></span>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
  $('.slick-prev').hide();
  slider.on('afterChange', function (e, slick, currentSlide) {
    console.log(currentSlide, slick.slideCount, 'currentSlide');
    if (currentSlide === 0) {
      $('.slick-prev').hide();
      $('.slick-next').show();
    } else {
      $('.slick-prev').show();
      $('.slick-next').show();
    }
    if ($(window).width() <= 992) {
      if (slick.slideCount === currentSlide + 1) {
        $('.slick-prev').show();
        $('.slick-next').hide();
      }
    } else {
      if (slick.slideCount === currentSlide + 3) {
        $('.slick-prev').show();
        $('.slick-next').hide();
      }
    }
  });

  // slider.on('beforeChange', function(e, slick, currentSlide, nextSlide){
  //   console.log(nextSlide, currentSlide, 'edge was hit')
  // });
};

// App.page.mobileDrawerText = () => {
//   let clipId = $('.mobile-drawer-text-link').attr('data-id')

//   axios.get(App.api.omny_clip + clipId)
//     .then((response) => {
//       $('.mobile-drawer-text-link').html(response.data.Title)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

App.page();
App.page.newsticker();
App.page.sectionCarousel();
App.common.cancel('.overlay-global-page .overlay-wrap .cancel', '.overlay-global-page');
// App.page.mobileDrawerText()