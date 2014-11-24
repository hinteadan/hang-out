(function () {
    'use strict';

    angular.module('hang-out-data')
    .constant('hangOutActivityCategories', [
  {
      "category": "indoor",
      "image": "https://tsnra.files.wordpress.com/2012/03/hiking-family.jpg",
      "Other": null
  },
  {
      "category": "outdoor",
      "image": "https://tsnra.files.wordpress.com/2012/03/hiking-family.jpg",
      "Other": null
  },
  {
      "category": "water",
      "image": "http://thumbs.dreamstime.com/x/water-fun-3038931.jpg",
      "Other": null
  },
  {
      "category": "mountain",
      "image": "http://thumbs.dreamstime.com/x/mountain-bikers-mountain-vector-illustration-41044485.jpg",
      "Other": null
  },
  {
      "category": "ballgames",
      "image": "http://thumbs.dreamstime.com/x/ball-games-illustration-people-playing-various-sports-40495215.jpg",
      "Other": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0ANR0xfruCV4IN18RkBEHl5wwFmFUTuOCPUVG570Zf6lnTrW"
  },
  {
      "category": "social",
      "image": "http://thumbs.dreamstime.com/x/people-playing-cards-vector-illustration-group-young-together-43237253.jpg",
      "Other": null
  }
    ]);

}).call(this, this.angular);