"use strict";

App.page = function () {
  $('.point-notifier-cancel').click(function () {
    $('.point-notifier').fadeOut(300);
  }); // let onClickMicrotransactionAdPlay = (event) => {
  //   event.preventDefault()
  //   if (!$('#js-overlay-microtransaction .overlay-text').hasClass('d-none')) {
  //     $('#js-overlay-microtransaction .overlay-text').addClass('d-none')
  //   }
  //   $('#js-overlay-microtransaction .overlay-content').append('<div id="dfp-ad-midarticlespecial"></div>')
  // }
  // // ad microtransaction ad test
  // let receiveMessage = (evt) => {
  //   console.log('Video Complete')
  // }
  // window.addEventListener('videocompleted', receiveMessage, false)
  // $('#js-cta-play-ad').on('click', onClickMicrotransactionAdPlay)
  // console.log('page article - scripts init')
}; // App.page.func = () => {
//   // console.log('page func init')
// }


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
  $('#js-overlay-microtransaction .overlay-bg, #js-overlay-microtransaction .overlay-wrap .cancel').on('click', onClickMicrotransactionClose); // $('#js-cta-microtransaction').click() // for dev purposes
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

  $('#js-mobile-social-handle').on('click', onClickMobileSocial); // console.log('page mobileSocial init')
};

App.page.outbrain = function () {
  $('div.OUTBRAIN').each(function (index) {
    $(this).attr('data-src', 'https://www.zaobao.com.sg/znews/singapore/story20190423-950918');
    $(this).attr('data-ob-template', 'ZaobaoSingapore');
  }); // console.log('page outbrain init')
}; // App.page.ads = () => {
//   /* eslint-disable */
//   let mapping = googletag.sizeMapping()
//     .addSize([1024, 0], [[970, 90], [728, 90]])
//     .addSize([740, 0], [728, 90])
//     .addSize([320, 0], [[320, 50], [320, 100]])
//     .addSize([0, 0], [320, 50])
//     .build()
//   googletag.slots['lb1'] = googletag.defineSlot('/5908/ZB_SG/lb1/znews/singapore', [728, 90], 'dfp-ad-lb1')
//     .addService(googletag.pubads())
//     .setTargeting('pos', '1')
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '1')
//     .defineSizeMapping(mapping)
//   googletag.slots['megalb'] = googletag.defineSlot('/5908/ZB_SG/megalb/znews/singapore', [970, 250], 'dfp-ad-megalb')
//     .addService(googletag.pubads())
//     .setTargeting('weight', '3')
//   googletag.slots['skinning'] = googletag.defineSlot('/5908/ZB_SG/skinning/znews/singapore', [1, 1], 'dfp-ad-skinning')
//     .addService(googletag.pubads())
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '5')
//   googletag.slots['topoverlay'] = googletag.defineSlot('/5908/ZB_SG/topoverlay/znews/singapore', [1, 1], 'dfp-ad-topoverlay')
//     .addService(googletag.pubads())
//     .setTargeting('weight', '7')
//   googletag.slots['midarticlespecial'] = googletag.defineSlot('/5908/ZB_SG/midarticlespecial/znews/singapore', [[1, 1], [10, 10], 'fluid', [640, 480], [300, 169], [300, 225], [480, 270], [480, 360], [640, 360]], 'dfp-ad-midarticlespecial')
//     .addService(googletag.pubads())
//     .setTargeting('pos', '50')
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '9')
//   googletag.slots['imu1'] = googletag.defineSlot('/5908/ZB_SG/imu1/znews/singapore', [[1, 1], [300, 250], [336, 280], 'fluid'], 'dfp-ad-imu1')
//     .addService(googletag.pubads())
//     .setTargeting('pos', '1')
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '11')
//   googletag.slots['imu2'] = googletag.defineSlot('/5908/ZB_SG/imu2/znews/singapore', [[300, 250], [300, 600]], 'dfp-ad-imu2')
//     .addService(googletag.pubads())
//     .setTargeting('pos', '2')
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '13')
//   googletag.slots['imu3'] = googletag.defineSlot('/5908/ZB_SG/imu3/znews/singapore', [300, 250], 'dfp-ad-imu3')
//     .addService(googletag.pubads())
//     .setTargeting('pos', '3')
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '15')
//   googletag.slots['bi1'] = googletag.defineSlot('/5908/ZB_SG/bi1/znews/singapore', [[1, 1], [115, 82], [202, 126], 'fluid'], 'dfp-ad-bi1')
//     .addService(googletag.pubads())
//     .setTargeting('pos', '1')
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '17')
//   googletag.slots['bi2'] = googletag.defineSlot('/5908/ZB_SG/bi2/znews/singapore', [[1, 1], [115, 82], [202, 126], 'fluid'], 'dfp-ad-bi2')
//     .addService(googletag.pubads())
//     .setTargeting('pos', '2')
//     .setTargeting('zbtags', '小贩文化申遗')
//     .setTargeting('weight', '19')
//   /* eslint-enable */
//   // console.log('page article - ads init')
// }


App.page();
App.page.microtransaction();
App.page.mobileSocial();
App.page.outbrain(); // App.page.ads()