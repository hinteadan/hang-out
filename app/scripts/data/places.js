(function () {
    'use strict';

    angular.module('hang-out-data')
    .constant('hangOutPlaces', [
  {
      "Activities": "Tennis",
      "name": "Winners",
      "address": "Parcul Rozelor Cluj Napoca",
      "details": "tel:  0755.740.407 ",
      "websiteUrl": "http://winners-tennis.ro/",
      "location": null,
      "tags": [
        "tennis"
      ],
      "logoUrl": "http://winners-tennis.ro/wp-content/themes/winners-tennis/images/logo_winners.gif"
  },
  {
      "Activities": "Tennis",
      "name": "Club Transilvania",
      "address": "1 Decembrie 1918 nr. 41 Cluj Napoca",
      "details": "tel: 0730-690896/ 0264-409330",
      "websiteUrl": "http://www.clubtransilvania.ro/",
      "location": {
          "lat": 46.774897,
          "lng": 23.549687
      },
      "tags": [
        "tennis",
        "football",
        "tennis",
        "basketball",
        "voley"
      ],
      "logoUrl": "http://static.squarespace.com/static/540f12f4e4b0bda632e553fc/t/540ffb32e4b04939fb5be009/1414070626735/?format=400w"
  },
  {
      "Activities": "Tennis",
      "name": "Marc tenis",
      "address": " Alea Baisoara 1/11, Cluj Napoca",
      "details": "tel:  0744 478 769",
      "websiteUrl": "http://www.marctenis.ro/",
      "location": null,
      "tags": [
        "tennis"
      ],
      "logoUrl": null
  },
  {
      "Activities": "tennis",
      "name": "Tennis Cluj Scoala Nicolae Titulescu",
      "address": "Aleea Herculane nr. 7 Cluj Napoca",
      "details": "tel: 0749.268.619 sau 0726.912.317; în incinta Școlii Nicolae Titulescu",
      "websiteUrl": "http://tenis.cluj.ro/",
      "location": {
          "lat": 46.770328,
          "lng": 23.622025
      },
      "tags": [
        "tennis"
      ],
      "logoUrl": null
  },
  {
      "Activities": "tennis",
      "name": "Enjoy",
      "address": "  Alexandru Voievod",
      "details": "tel: 0753488548",
      "websiteUrl": "http://fiisportiv.ro/catalog/enjoy-terenuri-de-tenis-cluj-napoca",
      "location": {
          "lat": 46.771333,
          "lng": 23.629668
      },
      "tags": [
        "tennis"
      ],
      "logoUrl": null
  },
  {
      "Activities": "Table tennis",
      "name": "Fabrica de sport",
      "address": "Str. Tudor Vladimirescu, Cluj-Napoca (Taietura Turcului)",
      "details": "tel: 0728-045623",
      "websiteUrl": "http://fabricadesport.ro/",
      "location": {
          "lat": 46.782041,
          "lng": 23.562281
      },
      "tags": [
        "Ping",
        "Pong",
        "gym",
        "kangoo",
        "jumps",
        "pilates",
        "tae",
        "bo",
        "step",
        "cardio",
        "yoga",
        "zumba",
        "belly",
        "dance",
        "streching",
        "body",
        "training",
        "fitness",
        "bodybuilding",
        "kickboxing",
        "fitball",
        "aerobics"
      ],
      "logoUrl": null
  },
  {
      "Activities": null,
      "name": "Fitness Bamboo",
      "address": "Ploiesti 6-8, in Multiplex Leul, Piata Mihai Viteazul, Etajul 1, Cluj Napoca",
      "details": "fitness, aerobics, spa;   tel:  0364-266-108",
      "websiteUrl": "http://www.fitnesbamboocluj.ro/",
      "location": null,
      "tags": [
        "fitness"
      ],
      "logoUrl": null
  },
  {
      "Activities": null,
      "name": "Big Fitness",
      "address": " Bucegi, Nr. 19 ",
      "details": null,
      "websiteUrl": "http://www.BigFitness.ro",
      "location": null,
      "tags": [],
      "logoUrl": null
  }
    ]);

}).call(this, this.angular);