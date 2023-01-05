"use strict";

App.page.paywall = function () {
  console.log('hello paywall');
  $('#paywall-compare-btn').on('click', function () {
    $(this).find('.arrow').toggleClass('down up');
  });
};
App.page.paywall();