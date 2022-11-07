"use strict";

App.page = function () {
  console.log('js-lottery-loaded');
};

App.page.getDate = function () {
  var days = [0, 3, 6];
  var getDays = new Date().getDay();

  for (var i = 0; i < days.length; i++) {
    if (days[i] === getDays) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(App.page.getDate(), 'boolean');

App.page.get4dResult = function () {
  // check pathname to activate function
  if (window.location.pathname.includes('4d')) {
    // check if cookie exist
    var checkPageLoad = App.util.getCookie('4d-visited'); // cookie not exist call API

    if (checkPageLoad === '' || false || null || undefined) {
      console.log(checkPageLoad, 'cookie boolean'); // load api

      axios.get('https://sg-lottery-api.sph.pm/4d/latest').then(function (res) {
        // set cookie
        App.util.setCookie('4d-visited', true, 1); // iterate result

        var result = res.data;
        $('.js-lottery-drawDate').html(result.drawDate);
        $('#4d-first-prize').html(result.firstPrize.number);
        $('#4d-second-prize').html(result.secondPrize.number);
        $('#4d-third-prize').html(result.thirdPrize.number); // starter iteration

        var count = 1;
        $.each(result.starterPrizes.number, function (i, item) {
          var starterhtml = "<h2 data-src=".concat(count + i, ">").concat(item, "</h2>");
          $('#starter-prize').append(starterhtml);
        }); // consolation iteration

        $.each(result.consolationPrizes.number, function (i, item) {
          var consolationHtml = "<h2 data-src=".concat(count + i, ">").concat(item, "</h2>");
          $('#consolation-prize').append(consolationHtml);
        });
        console.log(checkPageLoad, 'use api'); // store in local storage

        var localResult = JSON.stringify(result);
        localStorage.setItem('SPH-LOTTERY-4D', localResult);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      // cookie existed call localstorage data
      console.log(checkPageLoad, 'use localstorage');
      var localResult = JSON.parse(localStorage.getItem('SPH-LOTTERY-4D'));
      $('.js-lottery-drawDate').html(localResult.drawDate);
      $('#4d-first-prize').html(localResult.firstPrize.number);
      $('#4d-second-prize').html(localResult.secondPrize.number);
      $('#4d-third-prize').html(localResult.thirdPrize.number);
      var count = 1;
      $.each(localResult.starterPrizes.number, function (i, item) {
        var starterhtml = "<h2 data-src=".concat(count + i, ">").concat(item, "</h2>");
        $('#starter-prize').append(starterhtml);
      }); // consolation iteration

      $.each(localResult.consolationPrizes.number, function (i, item) {
        var consolationHtml = "<h2 data-src=".concat(count + i, ">").concat(item, "</h2>");
        $('#consolation-prize').append(consolationHtml);
      });
    }
  }
};

App.page.bigSweepResult = function () {
  var delightPrizeIteation = function delightPrizeIteation(jackpot, divHolder) {
    for (var l = 0; l < jackpot.length; l++) {
      var htmlDelight = "<p>".concat(jackpot[l], "</p>");
      divHolder.append(htmlDelight);
    }
  };

  var starterSweepIteration = function starterSweepIteration(jackpot, divHolder) {
    for (var k = 0; k < jackpot.length; k++) {
      var splitJackpot = (jackpot[k] + '').split('');
      var one = splitJackpot.slice(0, 3).join('');
      var two = splitJackpot.slice(3).join('');
      var htmlSweep = "<div class='start-prize-group'><span class='js-starter-bigsweep'></span>".concat(one, "<span class='js-starter-bigsweep underline'>").concat(two, "</span></div>");
      divHolder.append(htmlSweep);
    }
  };

  var consolationSweepIteration = function consolationSweepIteration(jackpot, divHolder) {
    for (var j = 0; j < jackpot.length; j++) {
      var htmlConsolation = "<div class='start-prize-group full-width'><span class='js-starter-bigsweep add-padding'></span>".concat(jackpot[j], "</div>");
      divHolder.append(htmlConsolation);
    }
  }; // create a function to spilt number
  // global array


  var myArry = [];

  var splitToDigit = function splitToDigit(n, callback) {
    (n + '').split('').map(function (i) {
      myArry.push(i);
    }); // console.log(myArry, 'array')

    var firstSet = myArry.slice(0, 3).join('');
    var secoundSet = myArry.slice(3).join('');
    var newArry = [firstSet, secoundSet]; // console.log(firstSet, secoundSet, 'first set')

    callback(newArry);
    myArry = [];
    return myArry;
  };

  var callSweepResult = function callSweepResult(e, placholder) {
    for (var i = 0; i < e.length; i++) {
      // console.log(e[i], 'sweep')
      placholder.eq(i).text(e[i]);
    }
  };

  var changeToDate = function changeToDate(time) {
    var myTime = time.split(',')[1].replace('年', '-').replace('月', '-').replace('日', '');
    var convertTime = new Date(myTime + ' UTC').getTime() + 86400000;
    var dateArry = new Date(convertTime).toISOString().split('T')[0].split('-');
    var newDateString = "".concat(dateArry[0], "\u5E74").concat(dateArry[1], "\u6708").concat(dateArry[2], "\u65E5");
    return newDateString;
  }; // detect pathname to activate function


  if (window.location.pathname.includes('bigsweep')) {
    var bigSweepPageLoad = App.util.getCookie('sweep-visited');

    if (bigSweepPageLoad === '' || false || null || undefined) {
      axios.get('https://sg-lottery-api.sph.pm/sweep/latest').then(function (res) {
        App.util.setCookie('sweep-visited', true, 5);
        var sweepResult = res.data;
        var firstPrize = sweepResult.firstPrize.number;
        var secondPrize = sweepResult.secondPrize.number;
        var thirdPrize = sweepResult.thirdPrize.number;
        console.log(sweepResult, 'fffff');
        $('.js-bigsweep-drawDate').html(sweepResult.drawDate + '开彩');
        $('#sweep-first-prize-money').html(sweepResult.firstPrize.name.split(' ')[1] + ' ' + sweepResult.firstPrize.name.split(' ')[2]);
        $('#sweep-second-prize-money').html(sweepResult.secondPrize.name.split(' ')[1] + ' ' + sweepResult.secondPrize.name.split(' ')[2]);
        $('#sweep-third-prize-money').html(sweepResult.thirdPrize.name.split(' ')[1] + ' ' + sweepResult.thirdPrize.name.split(' ')[2]);
        starterSweepIteration(sweepResult.jackpotPrizes.number, $('#sweep-starter-prize-1'));
        starterSweepIteration(sweepResult.luckyPrizes.number, $('#sweep-starter-prize-2'));
        consolationSweepIteration(sweepResult.giftPrizes.number, $('#sweep-gift-prizes'));
        consolationSweepIteration(sweepResult.consolationPrizes.number, $('#sweep-consolation-prizes'));
        consolationSweepIteration(sweepResult.participationPrizes.number, $('#sweep-participation-prizes'));
        delightPrizeIteation(sweepResult.twoDDelightPrizes.number, $('#sweep-delight-prizes'));
        splitToDigit(firstPrize, function (a) {
          callSweepResult(a, $('.js-sweep-first-prize'));
        });
        splitToDigit(secondPrize, function (a) {
          callSweepResult(a, $('.js-sweep-second-prize'));
        });
        splitToDigit(thirdPrize, function (a) {
          callSweepResult(a, $('.js-sweep-third-prize'));
        });
        $('.lottery-disclaimer').html("<h4>\u6CE8\uFF1A\u4E07\u5B57\u5956\u91D1\u4E0E\u5927\u5F69\u5956\u91D1\u53EF\u7531".concat(changeToDate(sweepResult.drawDate), "\u8D77\u9886\u53D6</h4><p>\u6240\u6709\u4E2D\u5956\u7684\u4E07\u5B57\u7968\u548C\u65B0\u52A0\u5761\u5927\u5F69\u7684\u5956\u91D1\uFF0C\u53EF\u5230\u5BC6\u9A7C\u8DEF210\u53F7\uFF0C #01-01\u65B0\u52A0\u5761\u535A\u5F69\u5927\u53A6\uFF0C\u65B0\u52A0\u5761\u90AE\u533A188994\uFF0C\u65B0\u52A0\u5761\u535A\u5F69\u603B\u884C\u9886\u53D6\u3002\u6BCF\u5F20$5000\u6216\u4EE5\u4E0B\u7684\u4E2D\u5956\u7968\u636E\uFF0C\u53EF\u5728\u65B0\u52A0\u5761\u535A\u5F69\u5206\u884C\u6216\u6307\u5B9A\u9500\u552E\u5904\u9886\u53D6\u3002</p>"));
        console.log(bigSweepPageLoad, 'use api'); // store in local storage

        var localSweepResult = JSON.stringify(sweepResult);
        localStorage.setItem('SPH-LOTTERY-SWEEP', localSweepResult);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      console.log(bigSweepPageLoad, 'use local storage');
      var sweepResult = JSON.parse(localStorage.getItem('SPH-LOTTERY-SWEEP'));
      var firstPrize = sweepResult.firstPrize.number;
      var secondPrize = sweepResult.secondPrize.number;
      var thirdPrize = sweepResult.thirdPrize.number; // console.log(sweepResult.jackpotPrizes, 'fffff')

      $('.js-bigsweep-drawDate').html(sweepResult.drawDate);
      $('#sweep-first-prize-money').html(sweepResult.firstPrize.name.split(' ')[1] + ' ' + sweepResult.firstPrize.name.split(' ')[2]);
      $('#sweep-second-prize-money').html(sweepResult.secondPrize.name.split(' ')[1] + ' ' + sweepResult.secondPrize.name.split(' ')[2]);
      $('#sweep-third-prize-money').html(sweepResult.thirdPrize.name.split(' ')[1] + ' ' + sweepResult.thirdPrize.name.split(' ')[2]);
      starterSweepIteration(sweepResult.jackpotPrizes.number, $('#sweep-starter-prize-1'));
      starterSweepIteration(sweepResult.luckyPrizes.number, $('#sweep-starter-prize-2'));
      consolationSweepIteration(sweepResult.giftPrizes.number, $('#sweep-gift-prizes'));
      consolationSweepIteration(sweepResult.consolationPrizes.number, $('#sweep-consolation-prizes'));
      consolationSweepIteration(sweepResult.participationPrizes.number, $('#sweep-participation-prizes'));
      delightPrizeIteation(sweepResult.twoDDelightPrizes.number, $('#sweep-delight-prizes'));
      splitToDigit(firstPrize, function (a) {
        callSweepResult(a, $('.js-sweep-first-prize'));
      });
      splitToDigit(secondPrize, function (a) {
        callSweepResult(a, $('.js-sweep-second-prize'));
      });
      splitToDigit(thirdPrize, function (a) {
        callSweepResult(a, $('.js-sweep-third-prize'));
      });
      $('.lottery-disclaimer').html("<h4>\u6CE8\uFF1A\u4E07\u5B57\u5956\u91D1\u4E0E\u5927\u5F69\u5956\u91D1\u53EF\u7531".concat(changeToDate(sweepResult.drawDate), "\u8D77\u9886\u53D6</h4><p>\u6240\u6709\u4E2D\u5956\u7684\u4E07\u5B57\u7968\u548C\u65B0\u52A0\u5761\u5927\u5F69\u7684\u5956\u91D1\uFF0C\u53EF\u5230\u5BC6\u9A7C\u8DEF210\u53F7\uFF0C #01-01\u65B0\u52A0\u5761\u535A\u5F69\u5927\u53A6\uFF0C\u65B0\u52A0\u5761\u90AE\u533A188994\uFF0C\u65B0\u52A0\u5761\u535A\u5F69\u603B\u884C\u9886\u53D6\u3002\u6BCF\u5F20$5000\u6216\u4EE5\u4E0B\u7684\u4E2D\u5956\u7968\u636E\uFF0C\u53EF\u5728\u65B0\u52A0\u5761\u535A\u5F69\u5206\u884C\u6216\u6307\u5B9A\u9500\u552E\u5904\u9886\u53D6\u3002</p>"));
    }
  }
};

App.page.getTotoResult = function () {
  if (window.location.pathname.includes('toto')) {
    var totoPageLoad = App.util.getCookie('toto-visited');

    if (!totoPageLoad) {
      App.util.setCookie('toto-visited', true, 1);
      axios.get('https://sg-lottery-api.sph.pm/toto/latest').then(function (res) {
        var result = res.data;
        $('#toto-date').html("".concat(result.drawDate, "<strong>").concat(result.drawNumber, "</strong>\u591A\u591A\u535A\u5F69"));
        $('#toto-big-prize').html("".concat(result.jackpotPrize.name, "&nbsp;&nbsp;").concat(result.jackpotPrize.content));
        $.each(result.prizeNumber.number, function (i, item) {
          var htmltoto = "<h3>".concat(item, "</h3");
          $('#toto-six-number').append(htmltoto);
        });
        $('.special-num').html("<h3>".concat(result.addtionalNumber.number, "</h3>"));
        console.log(res, 'toto result');
        $.each(result.allPrizes, function (i, item) {
          var htmlAllPrize = "<tr><td><p>".concat(item.name, "</p></td><td><p>").concat(item.prize, "</p></td><td><p>").concat(item.amount, "</p></td></tr>");
          $('#toto-prize-table').append(htmlAllPrize);
        }); // store in local storage

        var localTotoResult = JSON.stringify(result);
        localStorage.setItem('SPH-LOTTERY-TOTO', localTotoResult);
        console.log(totoPageLoad, 'use api');
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      console.log(totoPageLoad, 'use local storage');
      var result = JSON.parse(localStorage.getItem('SPH-LOTTERY-TOTO'));
      $('#toto-date').html("".concat(result.drawDate, "<strong>").concat(result.drawNumber, "</strong>\u591A\u591A\u535A\u5F69"));
      $('#toto-big-prize').html("".concat(result.jackpotPrize.name, "&nbsp;&nbsp;").concat(result.jackpotPrize.content));
      $.each(result.prizeNumber.number, function (i, item) {
        var htmltoto = "<h3>".concat(item, "</h3");
        $('#toto-six-number').append(htmltoto);
      });
      $('.special-num').html("<h3>".concat(result.addtionalNumber.number, "</h3>"));
      $.each(result.allPrizes, function (i, item) {
        var htmlAllPrize = "<tr><td><p>".concat(item.name, "</p></td><td><p>").concat(item.prize, "</p></td><td><p>").concat(item.amount, "</p></td></tr>");
        $('#toto-prize-table').append(htmlAllPrize);
      });
    }
  }
};

App.page.getTotoResult();
App.page.get4dResult();
App.page.bigSweepResult();
App.page();
App.page.getDate();