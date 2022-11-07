"use strict";

App.page = function () {// console.log('page home')
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
}; // App.page.mobileDrawerText = () => {
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
App.page.newsticker(); // App.page.mobileDrawerText()