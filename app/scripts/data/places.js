(function () {
    'use strict';

    angular.module('hang-out-data')
    .constant('hangOutPlaces', [
  {
      "Activities": "Tennis",
      "name": "Winners",
      "address": "Parcul Rozelor, Cluj Napoca",
      "details": "tel:  0755.740.407 ",
      "websiteUrl": "http://winners-tennis.ro/",
      "location": {
          "lat": 46.775161,
          "lng": 23.602700
      },
      "tags": [
        "tennis",
        "tenis"
      ],
      "logoUrl": "http://winners-tennis.ro/wp-content/themes/winners-tennis/images/logo_winners.gif"
  },
  {
      "Activities": null,
      "name": "Club Transilvania",
      "address": "1 Decembrie 1918 nr. 41,  Cluj-Napoca",
      "details": "tel: 0730-690896 / 0264-409330",
      "websiteUrl": "http://www.clubtransilvania.ro/",
      "location": {
          "lat": 46.761928,
          "lng": 23.546804
      },
      "tags": [
        "tennis",
        "tenis",
        "football",
        "basketball",
        "voley",
        "fotbal",
        "soccer",
        "baschet"
      ],
      "logoUrl": "http://static.squarespace.com/static/540f12f4e4b0bda632e553fc/t/540ffb32e4b04939fb5be009/1414070626735/?format=400w"
  },
  {
      "Activities": null,
      "name": "Marc Tenis",
      "address": " Alea Baisoara 1/11, Cluj-Napoca",
      "details": "tel:  0744 478 769",
      "websiteUrl": "http://www.marctenis.ro/",
      "location": {
          "lat": 46.763306,
          "lng": 23.621356
      },
      "tags": [
        "tennis",
        "tenis"
      ],
      "logoUrl": "http://d1hw6n3yxknhky.cloudfront.net/012997461_prevstill.jpeg"
  },
  {
      "Activities": null,
      "name": "Tennis Cluj Scoala Nicolae Titulescu",
      "address": "Aleea Herculane nr. 7, Cluj-Napoca",
      "details": "tel: 0749.268.619 sau 0726.912.317; în incinta Școlii Nicolae Titulescu",
      "websiteUrl": "http://tenis.cluj.ro/",
      "location": {
          "lat": 46.770328,
          "lng": 23.622025
      },
      "tags": [
        "tennis",
        "tenis"
      ],
      "logoUrl": "http://d1hw6n3yxknhky.cloudfront.net/012997461_prevstill.jpeg"
  },
  {
      "Activities": null,
      "name": "Enjoy",
      "address": "Str. Alexandru Vaida Voievod 55A (Gheorgheni), Cluj-Napoca",
      "details": "tel: 0753488548",
      "websiteUrl": "http://fiisportiv.ro/catalog/enjoy-terenuri-de-tenis-cluj-napoca",
      "location": {
          "lat": 46.771333,
          "lng": 23.629668
      },
      "tags": [
        "tennis",
        "tenis"
      ],
      "logoUrl": "http://d1hw6n3yxknhky.cloudfront.net/012997461_prevstill.jpeg"
  },
  {
      "Activities": null,
      "name": "Baza Sportiva Clujana / Sport Complex Transilvan",
      "address": "Strada Tabacarilor, Nr. 15B, Cluj-Napoca (Zona Spitalului Clujana) sau intrare de pe Strada Nădăşel",
      "details": "Tenis: 0727.306.751, Fotbal: 0755.829.085, Fix: 0264.437.144, 0744.187.111",
      "websiteUrl": "http://clujana.ro/",
      "location": {
          "lat": 46.790085,
          "lng": 23.607479
      },
      "tags": [
        "fitness",
        "tennis",
        "tenis",
        "fotbal",
        "football",
        "baschet",
        "basketball",
        "volei",
        "voleyball",
        "biliard",
        "strand",
        "pool",
        "piscina",
        "bazin"
      ],
      "logoUrl": "http://www.geistsptgoods.com/play-sports.png"
  },
  {
      "Activities": null,
      "name": "Baza Sportivă Napoca (Ira)",
      "address": "Cluj-Napoca, Aleea Detunata (Cartier Gheorgheni, zona Mercur)",
      "details": "Tel: 0722-571.200, Teren multifunctional, nocturna",
      "websiteUrl": "http://www.cluj.info/adrese/sport/baze-sportive/baza-sportiva-napoca-ira-dromex-mercur/5/213/1709/",
      "location": {
          "lat": 46.766516,
          "lng": 23.627128
      },
      "tags": [
        "tenis",
        "tennis",
        "fotbal",
        "football",
        "baschet",
        "basketball"
      ],
      "logoUrl": "http://www.geistsptgoods.com/play-sports.png"
  },
  {
      "Activities": null,
      "name": "Complexul Sportiv Unirea",
      "address": "Aleea Clabucet, Cluj-Napoca (Cartier Manastur)",
      "details": "Tel: 0754 052 000, nocturna",
      "websiteUrl": "http://fiisportiv.ro/catalog/baza-sportiva-unirea-terenuri-sintetice-cluj-napoca",
      "location": {
          "lat": 46.749522,
          "lng": 23.541509
      },
      "tags": [
        "tenis",
        "tennis",
        "fotbal-tenis",
        "fotbal",
        "football"
      ],
      "logoUrl": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/s720x720/59739_146370942206558_1969958388_n.png?oh=cb34818c8ef05626a3164488fa2c2fc8&oe=54E352B7&__gda__=1423335882_7f119267fc66f30b1f6082d838d5b158"
  },
  {
      "Activities": null,
      "name": "Parcul Sportiv Babes (Iuliu Hațieganu)",
      "address": "Str. Pandurilor, nr. 7, Cluj-Napoca",
      "details": "Tel.: 0264-429788, 429787, 584315",
      "websiteUrl": "http://www.ubbcluj.ro/ro/structura/sport/parcul_sportiv",
      "location": {
          "lat": 46.765452,
          "lng": 23.560164
      },
      "tags": [
        "tenis",
        "tennis",
        "fotbal",
        "minifotbal",
        "football",
        "baschet",
        "basketball",
        "handbal",
        "handball",
        "atletism",
        "running",
        "aerobic",
        "fitness",
        "beach-voley",
        "volei",
        "voley",
        "ultimate",
        "frisbee"
      ],
      "logoUrl": "http://www.geistsptgoods.com/play-sports.png"
  },
  {
      "Activities": null,
      "name": "Teren de tenis Ciprian Porumb (Baza sportiva CMC)",
      "address": "Str. Augustin Bunea, nr. 1 (Gruia), Cluj-Napoca",
      "details": "Tel: 0748-208634, 0722-365340 nocturna",
      "websiteUrl": "http://bazasportivacmccluj.ro/",
      "location": {
          "lat": 46.776143,
          "lng": 23.576774
      },
      "tags": [
        "tenis",
        "tennis"
      ],
      "logoUrl": "http://bazasportivacmccluj.ro/wp-content/uploads/2013/11/loggo.png"
  },
  {
      "Activities": null,
      "name": "Univers T Cluj-Napoca",
      "address": "Strada Teodor Mihali, Cluj-Napoca",
      "details": "Tel:  0264 414161, 0734 771177",
      "websiteUrl": "http://fiisportiv.ro/catalog/univers-t-cluj-napoca-terenuri-tenis-de-camp",
      "location": {
          "lat": 46.775249,
          "lng": 23.621322
      },
      "tags": [
        "tenis",
        "tennis"
      ],
      "logoUrl": "http://d1hw6n3yxknhky.cloudfront.net/012997461_prevstill.jpeg"
  },
  {
      "Activities": "Table tennis",
      "name": "Multiplex Leul",
      "address": " Strada Ploiesti 6-8, Piata Mihai Viteazul, Etajul 1, Cluj-Napoca",
      "details": "Tel:  0264-535-326 ",
      "websiteUrl": "http://www.multiplexleulcluj.ro/",
      "location": {
          "lat": 46.774120,
          "lng": 23.593898
      },
      "tags": [
        "ping",
        "pong",
        "biliard",
        "bowling",
        "snooker"
      ],
      "logoUrl": "http://www.omnipass.ro/wp-content/uploads/2012/11/Leul_biliard-770x390.jpg"
  },
  {
      "Activities": null,
      "name": " Sală de tenis de masă",
      "address": "Henri Barbusse nr 21,  Cluj-Napoca",
      "details": "Sala dispune de un robot Joola Robot Shorty",
      "websiteUrl": null,
      "location": {
          "lat": 46.781822,
          "lng": 23.605806
      },
      "tags": [
        "ping",
        "pong",
        "tenis",
        "de",
        "masa"
      ],
      "logoUrl": "http://www.clker.com/cliparts/2/9/c/7/11949867871570711906table_tennis_omar_abo-na_01.svg.med.png"
  },
  {
      "Activities": null,
      "name": "Clubul Sportiv Beyond Sports",
      "address": "Str.         Berariei 6, et.2, Cluj-Napoca",
      "details": "Tel: 0722 183 647",
      "websiteUrl": "http://www.beyondsports.ro",
      "location": {
          "lat": 46.763527,
          "lng": 23.570052
      },
      "tags": [
        "ping",
        "pong",
        "tenis",
        "de",
        "masa",
        "biliard",
        "darts"
      ],
      "logoUrl": null
  },
  {
      "Activities": null,
      "name": "Ping-pong Cluj",
      "address": "Strada Traian Vuia, nr. 208, Cluj-Napoca",
      "details": "Tel: 0757341125",
      "websiteUrl": "http://www.pingpongcluj.ro/",
      "location": {
          "lat": 46.780556,
          "lng": 23.672902
      },
      "tags": [
        "ping",
        "pong",
        "tenis",
        "de",
        "masa"
      ],
      "logoUrl": "http://www.pingpongcluj.ro/wp-content/uploads/2013/10/logo-dsa-new1.png"
  },
  {
      "Activities": null,
      "name": "Sala de tenis de masa Str. Bucuresti",
      "address": "Str. Bucuresti nr. 74, Cluj-Napoca",
      "details": "Tel: 0755632334",
      "websiteUrl": null,
      "location": {
          "lat": 46.781315,
          "lng": 23.607852
      },
      "tags": [
        "ping",
        "pong",
        "tenis",
        "de",
        "masa"
      ],
      "logoUrl": "http://www.clker.com/cliparts/2/9/c/7/11949867871570711906table_tennis_omar_abo-na_01.svg.med.png"
  },
  {
      "Activities": null,
      "name": "La Stânca",
      "address": "Strada Campului nr. 17, Cluj-Napoca",
      "details": "Tel: 0752.584.847",
      "websiteUrl": null,
      "location": {
          "lat": 46.758881,
          "lng": 23.562629
      },
      "tags": [
        "ping",
        "pong",
        "tenis",
        "de",
        "masa",
        "biliard",
        "darts"
      ],
      "logoUrl": "http://images.pitchero.com/ui/94649/1378125266_0.jpg"
  },
  {
      "Activities": "Squash",
      "name": "Squash Club (Baza sportiva CMC)",
      "address": "Str. Augustin Bunea, nr. 1 (Gruia), Cluj-Napoca",
      "details": "Tel: 0758-337373",
      "websiteUrl": "http://www.squashcluj.ro/",
      "location": {
          "lat": 46.774858,
          "lng": 23.576256
      },
      "tags": [
        "squash"
      ],
      "logoUrl": "http://bazasportivacmccluj.ro/wp-content/uploads/2013/11/loggo.png"
  },
  {
      "Activities": "Basketball",
      "name": "Fabrica de sport",
      "address": "Str. Tudor Vladimirescu, Cluj-Napoca (Taietura Turcului)",
      "details": "Fotbal: 0728-045623, Fitness: 0364-730051",
      "websiteUrl": "http://fabricadesport.ro/",
      "location": {
          "lat": 46.782041,
          "lng": 23.562281
      },
      "tags": [
        "basketball",
        "baschet",
        "fotbal",
        "football",
        "gym",
        "kangoo",
        "jumps",
        "pilates",
        "tae",
        "bo",
        "cardio",
        "body",
        "training",
        "fitness",
        "bodybuilding",
        "kickboxing",
        "aerobics"
      ],
      "logoUrl": "http://www.geistsptgoods.com/play-sports.png"
  },
  {
      "Activities": "Football / Soccer",
      "name": "Teren sintetic Offside",
      "address": "B-dul 1 Decembrie 1918, Nr. 142, (in parcarea Cora), Cluj-Napoca",
      "details": "Tel: 0749-300900, 0745-003680, nocturna",
      "websiteUrl": "http://fiisportiv.ro/catalog/baza-sportiva-offside-teren-sintetic-acoperit-parcarea-cora-cluj-napoca",
      "location": {
          "lat": 46.759154,
          "lng": 23.539816
      },
      "tags": [
        "fotbal",
        "football"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren de fotbal Avram Iancu",
      "address": "Str. Onisifor Ghibu, Nr. 25, Cluj-Napoca",
      "details": "Tel: 0746-356616, nocturna",
      "websiteUrl": "http://www.cluj4all.com/adrese/timp-liber,2/terenuri-de-fotbal,242/teren-de-fotbal-avram-iancu,3040/",
      "location": {
          "lat": 46.777379,
          "lng": 23.601358
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren Fotbal Piata Flora",
      "address": "Str. Grigore Alexandrescu, Nr. 16, Cluj-Napoca",
      "details": "Tel: 0742-818363, nocturna",
      "websiteUrl": "http://www.cluj4all.com/adrese/,/,/teren-fotbal-piata-flora,5344/",
      "location": {
          "lat": 46.756852,
          "lng": 23.551206
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren Sintetic Fotbal Sincai",
      "address": "Strada Avram Iancu, nr. 33, Cluj-Napoca, Cluj",
      "details": "Tel: 0748.280.984, nocturna",
      "websiteUrl": "http://urbo.ro/sport-agrement/teren-sintetic-fotbal-sincai-18348",
      "location": {
          "lat": 46.767736,
          "lng": 23.596487
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren Sintetic Sun",
      "address": "B-dul 1 Decembrie 1918, Cluj-Napoca",
      "details": "Tel: 0749-122768",
      "websiteUrl": "http://www.cluj4all.com/adrese/,/,/teren-sintetic-sun,5346/",
      "location": {
          "lat": 46.766991,
          "lng": 23.554965
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Baza Sportivă Farmec",
      "address": "Cluj-Napoca, Strada Bucureşti, Nr. 70/72",
      "details": "Tel: 0264.532.700, nocturna",
      "websiteUrl": "http://fiisportiv.ro/catalog/terenuri-sintetice-farmec-cluj-napoca",
      "location": {
          "lat": 46.780438,
          "lng": 23.604196
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Sport Time Arena - Teren De Fotbal ",
      "address": "Str. Avram Iancu, Nr. 338, Floresti, Cluj-Napoca  (prima intrare dupa ONCOS din sensul de mers Cluj- Floresti)",
      "details": "Tel: 0741-207849, nocturna",
      "websiteUrl": "http://www.cluj4all.com/adrese/,/,/sport-time-arena-teren-de-fotbal-cu-gazon-sintetic-si-nocturna,6942/",
      "location": {
          "lat": 46.747725,
          "lng": 23.491387
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren sintetic -  Brancusi",
      "address": "Str. Horticultorilor, Nr. 1, Cartierul Gheorgheni langa Diana, Cluj-Napoca",
      "details": "Tel: 0749-268696, nocturna",
      "websiteUrl": "http://www.cluj4all.com/adrese/,/,/teren-sintetic-brancusi,6951/",
      "location": {
          "lat": 46.760278,
          "lng": 23.617077
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren sintetic - Balcescu",
      "address": "Str. Constanta, Nr. 6, Cluj-Napoca",
      "details": "Tel: 0749-268693, nocturna",
      "websiteUrl": "http://www.cluj4all.com/adrese/,/,/teren-sintetic-balcescu,6952/",
      "location": {
          "lat": 46.774895,
          "lng": 23.595951
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Hattrick - teren de fotbal - Polus Center",
      "address": "Strada Avram Iancu 492-500, Cluj-Napoca, Cluj (iesirea catre Floresti)",
      "details": "Tel: 0751.213.127, nocturna",
      "websiteUrl": "http://urbo.ro/sport-agrement/hattrick-teren-de-fotbal-190667",
      "location": {
          "lat": 46.750729,
          "lng": 23.533002
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren de fotbal Pasteur",
      "address": "Str. Louis Pasteur, Nr. 6, Cluj-Napoca",
      "details": "Tel: 0723-752969, nocturna",
      "websiteUrl": "http://www.cluj4all.com/adrese/,/,/teren-de-fotbal,1974/",
      "location": {
          "lat": 46.762759,
          "lng": 23.584240
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren de fotbal - Emil Cioran",
      "address": "Cluj-Napoca, Strada Emil Cioran",
      "details": "Tel: 0740-162.201, nocturna",
      "websiteUrl": null,
      "location": {
          "lat": 46.758047,
          "lng": 23.560494
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren de fotbal - Ion Agarbiceanu",
      "address": "Str. Gradinarilor, Nr.1, Cartier Marasti, Cluj-Napoca (Incinta Scolii Ion Agarbiceanu)",
      "details": "Tel: 0744-589.598, nocturna",
      "websiteUrl": "http://fiisportiv.ro/catalog/scoala-ion-agarbiceanu-terene-sintetic-cluj-napoca",
      "location": {
          "lat": 46.782943,
          "lng": 23.613979
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren de fotbal - Terapia",
      "address": "Strada Decebal, nr. 41, Cluj-Napoca",
      "details": "Tel: 0756 658 703, 0740-074.469, nocturna",
      "websiteUrl": "http://fiisportiv.ro/catalog/liceul-terapia-terenuri-sintetice-centru-cluj-napoca",
      "location": {
          "lat": 46.779593,
          "lng": 23.589436
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": null,
      "name": "Teren de fotbal (Baza sportiva CMC)",
      "address": "Str. Augustin Bunea, nr. 1 (Gruia), Cluj-Napoca",
      "details": "Tel: 0752-139989 (fotbal pe iarba, tenis cu piciorul), 0744-575004 (fotbal pe sintetic), nocturna",
      "websiteUrl": "http://bazasportivacmccluj.ro/",
      "location": {
          "lat": 46.776143,
          "lng": 23.576774
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal",
        "tenis",
        "cu",
        "piciorul"
      ],
      "logoUrl": "http://bazasportivacmccluj.ro/wp-content/uploads/2013/11/loggo.png"
  },
  {
      "Activities": null,
      "name": "Teren de fotbal - Arena ",
      "address": "Str. Zorilor Nr: 27 Cartier: Zorilor Localitatea: Cluj Napoca (in curtea Scolii \"\"Radu Stanca\"\" (fosta Scoala Generala nr. 10)",
      "details": "Tel: 0740-474127, nocturna",
      "websiteUrl": "www.terenfotbalcluj.ro",
      "location": {
          "lat": 46.756753,
          "lng": 23.578574
      },
      "tags": [
        "fotbal",
        "football",
        "minifotbal"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "Activities": "Bubble football",
      "name": "Bubble Football Cluj",
      "address": "Strada Oltului , nr. 83, Cluj-Napoca (Scoala Generala Alexandru Vaida Voievod)",
      "details": "Tel: 0747 314 109, Pretul pentru o ora de Bubble Football este de 200 lei / 10 persoane.",
      "websiteUrl": "http://www.bubblecluj.ro/",
      "location": {
          "lat": 46.777926,
          "lng": 23.633156
      },
      "tags": [
        "bubble",
        "football"
      ],
      "logoUrl": "http://goalstage.net/wp-content/uploads/2014/11/bubble-boy.png"
  },
  {
      "Activities": "Bowling",
      "name": "Centrul de Bowling Beyfin",
      "address": "Aleea Vaida Voievod nr.14, Cluj-Napoca",
      "details": "Tel: 0264-449.580",
      "websiteUrl": "http://www.getlokal.ro/ro/cluj-napoca/centrul-bowling-beyfin",
      "location": {
          "lat": 46.773042,
          "lng": 23.621543
      },
      "tags": [
        "bowling",
        "biliard",
        "pool"
      ],
      "logoUrl": "http://1wn6ls2hqfw33zta682x40e4131p.wpengine.netdna-cdn.com/wp-content/uploads/ozone_sports_bowling.png"
  },
  {
      "Activities": "Pool / Biliard",
      "name": "Corner Biliard & Snooker",
      "address": "Cluj-Napoca, Strada Iazului, Nr. 21 (strada Iazului colt cu strada Bucuresti, etaj 1)",
      "details": "Tel: 0753-433.732",
      "websiteUrl": "http://www.cluj.info/adrese/divertisment-si-timp-liber/biliard-popice/corner-biliard-snooker/2/10/3439/",
      "location": {
          "lat": 46.781329,
          "lng": 23.608477
      },
      "tags": [
        "biliard",
        "pool",
        "snooker",
        "darts"
      ],
      "logoUrl": "http://freedesignfile.com/upload/2012/05/billiard_snooker_01.jpg"
  },
  {
      "Activities": null,
      "name": "Champions Club",
      "address": "P-ta 1 Mai, Nr. 2-4, Cluj Napoca",
      "details": "Tel: 0264 437 177",
      "websiteUrl": null,
      "location": {
          "lat": 46.786876,
          "lng": 23.605512
      },
      "tags": [
        "biliard",
        "pool",
        "snooker",
        "darts"
      ],
      "logoUrl": "http://freedesignfile.com/upload/2012/05/billiard_snooker_01.jpg"
  },
  {
      "Activities": null,
      "name": "Infinity Games ",
      "address": "Calea Dorobanților, Cluj-Napoca",
      "details": "Tel: 0756-086 909",
      "websiteUrl": "http://www.infinitygames.ro/",
      "location": {
          "lat": 46.776464,
          "lng": 23.611736
      },
      "tags": [
        "biliard",
        "pool",
        "darts"
      ],
      "logoUrl": "http://freedesignfile.com/upload/2012/05/billiard_snooker_01.jpg"
  },
  {
      "Activities": null,
      "name": "BI Klub",
      "address": "Str. Bolyai Janos, Nr. 12, Cluj-Napoca",
      "details": "Tel: 0264-594661",
      "websiteUrl": null,
      "location": {
          "lat": 46.771577,
          "lng": 23.591418
      },
      "tags": [
        "biliard",
        "pool",
        "darts"
      ],
      "logoUrl": "http://freedesignfile.com/upload/2012/05/billiard_snooker_01.jpg"
  },
  {
      "Activities": "Snooker",
      "name": "Snooker Club Cluj",
      "address": "Calea Baciului nr. 1-3,Cluj-Napoca (în incinta Roxer Grup, lângă Zebra Catering Cluj)",
      "details": "Tel: 0736.661746 – zilnic de la ora 12 pm",
      "websiteUrl": "http://snookerclubcluj.ro/",
      "location": {
          "lat": 46.783867,
          "lng": 23.546371
      },
      "tags": [
        "snooker"
      ],
      "logoUrl": "http://www.bakno.com/Snooker/Screenshots_files/SnookerLogo.jpg"
  },
  {
      "Activities": null,
      "name": "Pro Snooker",
      "address": "Str. Observatorului, Nr. 105, Cluj-Napoca (vis-a-vis de MOL)",
      "details": "Tel: 0264-450086",
      "websiteUrl": "http://www.cluj4all.com/adrese/timp-liber,2/jocuri,81/pro-snooker,5036/",
      "location": {
          "lat": 46.754430,
          "lng": 23.586178
      },
      "tags": [
        "snooker"
      ],
      "logoUrl": "http://www.bakno.com/Snooker/Screenshots_files/SnookerLogo.jpg"
  },
  {
      "Activities": null,
      "name": "Snooker Game Bill",
      "address": "Str. Regele Ferdinand, nr. 30, Cluj-Napoca",
      "details": "Tel: 0264-432 941",
      "websiteUrl": null,
      "location": {
          "lat": 46.772985,
          "lng": 23.588968
      },
      "tags": [
        "snooker"
      ],
      "logoUrl": "http://www.bakno.com/Snooker/Screenshots_files/SnookerLogo.jpg"
  },
  {
      "Activities": "Aerobics / Fitness / Gym",
      "name": "Bamboo Fitness and Spa - Cluj-Napoca",
      "address": "Strada Ploiesti 6-8, in Multiplex Leul, Piata Mihai Viteazul, Etajul 1",
      "details": "Tel: 0364-266 108, 0747-222 198",
      "websiteUrl": "http://www.fitnesbamboocluj.ro/",
      "location": {
          "lat": 46.774214,
          "lng": 23.594001
      },
      "tags": [
        "gym",
        "kangoo",
        "jumps",
        "pilates",
        "tae",
        "bo",
        "step",
        "cardio",
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
        "aerobics",
        "box",
        "cycling",
        "training"
      ],
      "logoUrl": "http://www.qbox.ro/infoutil/infoutil_picture.php?sid=2610"
  },
  {
      "Activities": null,
      "name": "Gimmy Gym Polus ",
      "address": "Comuna Floresti, Jud. Cluj, Str. Avram Iancu, nr. 492-500. Accesul se face pe poarta 4 (zona Pizza Hut). Clubul se gaseste la etajul 1, urcand scarile rulante.",
      "details": "Tel: 0735 703 333",
      "websiteUrl": "http://www.gimmy.ro/",
      "location": {
          "lat": 46.750742,
          "lng": 23.533063
      },
      "tags": [
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
        "aerobics",
        "training"
      ],
      "logoUrl": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p148x148/10524712_745332168861589_4641801276275714674_n.jpg?oh=075e3a28df9373867d13171de12bb728&oe=54B31EE5&__gda__=1425545358_c66cecc212b4a8360f1c8c4c5a13d70d"
  },
  {
      "Activities": null,
      "name": "Gimmy Gym Gheorgheni",
      "address": "Cluj-Napoca, cartierul Gheorgheni, str. Pascaly, nr. 9 (fosta cladire ROMTELECOM)",
      "details": "Tel: 0734 417 777",
      "websiteUrl": "http://www.gimmy.ro/",
      "location": {
          "lat": 46.770493,
          "lng": 23.618621
      },
      "tags": [
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
        "aerobics",
        "box",
        "cycling",
        "training"
      ],
      "logoUrl": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p148x148/10524712_745332168861589_4641801276275714674_n.jpg?oh=075e3a28df9373867d13171de12bb728&oe=54B31EE5&__gda__=1425545358_c66cecc212b4a8360f1c8c4c5a13d70d"
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