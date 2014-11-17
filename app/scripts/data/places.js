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
          "lat": 46.764899,
          "lng": 23.553576
      },
      "tags": [
        "tennis",
        "tenis",
        "running",
        "jogging",
        "alergat",
        "skateboarding",
        "skateboard",
        "skate"
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
      "address": "Str. Vasile Conta, Cluj-Napoca",
      "details": "tel:  0744 478 769",
      "websiteUrl": "http://www.marctenis.ro/",
      "location": {
          "lat": 46.751892,
          "lng": 23.605520
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
        "bazin",
        "swimming",
        "natatie"
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
        "frisbee",
        "running",
        "jogging",
        "alergat",
        "swimming",
        "inot",
        "bazin",
        "pool",
        "piscina",
        "natatie",
        "ultimate",
        "frisbee",
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
      "name": " Sală de tenis de masă H.Barbusse",
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
        "football",
        "fotbal",
        "in",
        "balon"
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
      "name": "Big Fitness",
      "address": "Str. Bucegi nr. 19, complexul Winmarkt (fost BIG), Etajul I, Cluj-Napoca",
      "details": "Tel: 0745 - 366.000, 0735 - 890.000; 0364 - 730.533",
      "websiteUrl": "http://www.bigfitness.ro/",
      "location": {
          "lat": 46.754920,
          "lng": 23.560437
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
        "training",
        "piloxing",
        "TRX",
        "rebound",
        "gimnastica",
        "prenatala",
        "dansul",
        "mirillor",
        "dansuri",
        "de",
        "societate"
      ],
      "logoUrl": "http://www.bigfitness.ro/gfx/logo.png"
  },
  {
      "Activities": null,
      "name": "Club Moving Cluj",
      "address": "Str. Calarasilor, nr. 1, Cluj-Napoca, jud. Cluj (in incinta Hotel Belvedere)",
      "details": "Tel: 0264 433285",
      "websiteUrl": "http://www.clubmoving.ro/cluburile-noastre/locatii-club-moving/club-cluj/",
      "location": {
          "lat": 46.774469,
          "lng": 23.581740
      },
      "tags": [
        "gym",
        "pilates",
        "tae",
        "bo",
        "step",
        "cardio",
        "yoga",
        "zumba",
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
        "training",
        "rebound",
        "aqua",
        "gym",
        "bosu",
        "pool",
        "piscina",
        "swimming",
        "inot",
        "bazin",
        "natatie"
      ],
      "logoUrl": "http://www.clubmoving.ro/wp-content/themes/twentytwelve/page-templates/movingLogo.png"
  },
  {
      "Activities": null,
      "name": "World Class Cluj",
      "address": "Str. Alex. Vaida Voievod Nr. 53-55, Cluj-Napoca (incinta Iuliul Mall)",
      "details": "Tel: 0264 555 345",
      "websiteUrl": "http://www.worldclass.ro/",
      "location": {
          "lat": 46.771960,
          "lng": 23.626547
      },
      "tags": [
        "bodypump",
        "kick",
        "box",
        "pilates",
        "CXWORK",
        "yoga",
        "kangoo",
        "jumps",
        "step",
        "cycling",
        "piscina",
        "pool",
        "inot",
        "swimming",
        "fitness",
        "gym",
        "aerobic",
        "dance",
        "aqua",
        "gym",
        "bag",
        "boxing",
        "bosu",
        "TRX",
        "zumba",
        "natatie"
      ],
      "logoUrl": "http://cdnd.myworldclass.eu/gen-sett-countries/1/country-romania-1.png"
  },
  {
      "Activities": null,
      "name": "Fitness Cluj Arena",
      "address": "Splaiul Independentei, Cluj-Napoca",
      "details": "Tel: 0725.223.335",
      "websiteUrl": "http://clujarenafitness.ro/",
      "location": {
          "lat": 46.768985,
          "lng": 23.571640
      },
      "tags": [
        "step",
        "aerobic",
        "zumba",
        "fitness",
        "bodybuilding",
        "tae",
        "bo",
        "body",
        "kombat",
        "pilates",
        "balet",
        "kangoo",
        "jumps",
        "cardio",
        "fitball",
        "culturism"
      ],
      "logoUrl": "http://clujarenafitness.ro/wp-content/themes/filmstar/images/ucult.png"
  },
  {
      "Activities": null,
      "name": "Olympus Wellness Center Cluj",
      "address": "Str. Victor Babes, nr. 33, Cluj-Napoca, jud. Cluj",
      "details": "Tel: 0364-116039",
      "websiteUrl": "http://www.olympuscenter.ro/",
      "location": {
          "lat": 46.764464,
          "lng": 23.585010
      },
      "tags": [
        "fitness",
        "gym",
        "cycling"
      ],
      "logoUrl": "http://stocklogos.com/sites/default/files/styles/logo-medium/public/logos/image/fitness_4.png?itok=2M9oleKO"
  },
  {
      "Activities": null,
      "name": "Oncos Tonus Gym",
      "address": "Str. Scortarilor, nr. 26, Cluj-Napoca, jud. Cluj",
      "details": "Tel: 0264-432370",
      "websiteUrl": "http://www.oncostonusgym.ro/",
      "location": {
          "lat": 46.779173,
          "lng": 23.605650
      },
      "tags": [
        "fitness",
        "gym",
        "aerobic",
        "fitball",
        "kangoo",
        "jumps",
        "pilates",
        "step",
        "bodybuilding"
      ],
      "logoUrl": "http://www.oncostonusgym.ro/wp-content/uploads/2014/08/ec6cdb1oncos_gym_logo7.jpg"
  },
  {
      "Activities": null,
      "name": "Arena Fitness Center",
      "address": "Bulevardul Nicolae Titulescu, nr. 2, etaj 1 (langa restaurant Bolero, deasupra la Astra Asigurari)",
      "details": "Tel: 0753 609943, 0742 054135",
      "websiteUrl": "http://www.arenafitnesscenter.ro/ro/index.html",
      "location": {
          "lat": 46.767404,
          "lng": 23.602485
      },
      "tags": [
        "fitness",
        "gym",
        "bodybuilding",
        "cycling",
        "electrostimulare",
        "spinning",
        "cardio"
      ],
      "logoUrl": "http://stocklogos.com/sites/default/files/styles/logo-medium/public/logos/image/fitness_4.png?itok=2M9oleKO"
  },
  {
      "Activities": null,
      "name": "Lady's Gym",
      "address": " Str. Regele Ferdinand, Nr. 7, ap 12, Cluj-Napoca (Centru)",
      "details": "Tel: 0753 45 32 30, 0264 236 324",
      "websiteUrl": "http://www.ladysgym.ro/",
      "location": {
          "lat": 46.771857,
          "lng": 23.589257
      },
      "tags": [
        "aerobic",
        "fitness",
        "bodybuilding",
        "cardio",
        "gym",
        "pilates",
        "yoga",
        "tae",
        "bo",
        "fitball",
        "zumba",
        "step",
        "rebound"
      ],
      "logoUrl": "http://stocklogos.com/sites/default/files/styles/logo-medium/public/logos/image/fitness_4.png?itok=2M9oleKO"
  },
  {
      "Activities": "Dance",
      "name": "Diamond Dance Club",
      "address": "Aleea Bibliotecii nr.10, Cluj-Napoca",
      "details": "Tel: 0745.231.566",
      "websiteUrl": "www.diamonddancecluj.ro",
      "location": {
          "lat": 46.777830,
          "lng": 23.615068
      },
      "tags": [
        "bachatta",
        "cha",
        "cha",
        "cursuri",
        "de",
        "dans",
        "discofox",
        "Foxtrot",
        "jive",
        "merengue",
        "modern",
        "quickstep",
        "rock’n",
        "roll",
        "rumba",
        "salsa",
        "samba",
        "slow",
        "fox",
        "tango",
        "twist",
        "Vals",
        "lent",
        "vals",
        "vienez"
      ],
      "logoUrl": "http://www.diamonddancecluj.ro/images/logo-diamond-dance.jpg"
  },
  {
      "Activities": null,
      "name": "Crystal Dance",
      "address": "Str.         Berariei 6, et.4, Cluj-Napoca",
      "details": "Tel : 0740 168 132",
      "websiteUrl": "http://www.crystaltop.ro/",
      "location": {
          "lat": 46.763527,
          "lng": 23.570052
      },
      "tags": [
        "Vals",
        "LentTangoVals",
        "Vienez",
        "Salsa",
        "Bachata",
        "Rock’n'roll"
      ],
      "logoUrl": "http://static.squarespace.com/static/5211899be4b01a5565d7d734/t/52119477e4b004f80b4b521d/1410237838886/?format=750w"
  },
  {
      "Activities": null,
      "name": "City Dance",
      "address": "Str. Decebal nr. 12 Cluj-Napoca",
      "details": "Tel : 0743 967 244",
      "websiteUrl": "http://citydance.ro/",
      "location": {
          "lat": 46.778823,
          "lng": 23.589131
      },
      "tags": [
        "dans",
        "popular",
        "dans",
        "modern",
        "balet"
      ],
      "logoUrl": "http://static.squarespace.com/static/5211899be4b01a5565d7d734/t/52119477e4b004f80b4b521d/1410237838886/?format=750w"
  },
  {
      "Activities": null,
      "name": "Attitude Dance Studio",
      "address": "Strada Baba Novac nr.  32 Cluj-Napoca",
      "details": "Tel: 0745-322.388, 0740-209.695",
      "websiteUrl": "www.dans-cluj.ro",
      "location": {
          "lat": 46.768638,
          "lng": 23.597025
      },
      "tags": [
        "vals",
        "lent",
        "tango",
        "vals",
        "vienez",
        "quick",
        "step",
        "samba",
        "rumba",
        "twist",
        "jive",
        "rumba",
        "cha",
        "cha"
      ],
      "logoUrl": "http://static.squarespace.com/static/5211899be4b01a5565d7d734/t/52119477e4b004f80b4b521d/1410237838886/?format=750w"
  },
  {
      "Activities": null,
      "name": "Dance Studio Cluj-Napoca",
      "address": "Str. NICOLAE PASCALY, nr. 7 Cluj-Napoca",
      "details": "Tel: 0745 156164",
      "websiteUrl": "dance-studio.ro",
      "location": {
          "lat": 46.769691,
          "lng": 23.618501
      },
      "tags": [
        "balet",
        "vals"
      ],
      "logoUrl": "http://static.squarespace.com/static/5211899be4b01a5565d7d734/t/52119477e4b004f80b4b521d/1410237838886/?format=750w"
  },
  {
      "Activities": "Skiing",
      "name": "Pârtia de Schi Feleacu",
      "address": "DC77, Feleacu, jud. Cluj (Cluj – Turda, prima intrare la stanga, inainte de postul de control situat pe Dealul Feleacului)",
      "details": "Tel: 0264 447 833",
      "websiteUrl": "http://www.partiafeleacu.ro/",
      "location": {
          "lat": 46.718562,
          "lng": 23.641172
      },
      "tags": [
        "ski",
        "snowboard",
        "schi"
      ],
      "logoUrl": "http://www.partiafeleacu.ro/wp-content/themes/discover/images/logo-partiafeleacu.png"
  },
  {
      "Activities": "Skating",
      "name": "Patinoar Club Arena",
      "address": "Piata Unirii Cluj-Napoca",
      "details": "Tel : 0742107178 deschis doar in sezonul rece",
      "websiteUrl": "http://www.patinoarcluj.ro/",
      "location": {
          "lat": 46.769891,
          "lng": 23.589555
      },
      "tags": [
        "patinoar",
        "skating"
      ],
      "logoUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxPamG_1DavdNs_fPgg_d2Neiufif6EF4CDqKe6kikMQH2vpxQHQ"
  },
  {
      "Activities": null,
      "name": "Patinoar Fiesta Sport",
      "address": "B-dul 1 Decembrie 1918, Nr. 142, Cluj-Napoca",
      "details": "Tel: 0736 338011 deschis doar in sezonul rece",
      "websiteUrl": "http://www.patinoarfiesta.com/",
      "location": {
          "lat": 46.758862,
          "lng": 23.539723
      },
      "tags": [
        "patinoar",
        "skating"
      ],
      "logoUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxPamG_1DavdNs_fPgg_d2Neiufif6EF4CDqKe6kikMQH2vpxQHQ"
  },
  {
      "Activities": "Paragliding",
      "name": "Mures Fly",
      "address": "Aerodrom Targu Mures",
      "details": "Tel: 0732 101 101",
      "websiteUrl": "http://muresfly.ro/en/tandem/locdezbor/t%C3%A2rgu-mure%C5%9F-sport-aerodrome",
      "location": {
          "lat": 46.533377,
          "lng": 24.531737
      },
      "tags": [
        "paragliding",
        "zbor",
        "parapanta"
      ],
      "logoUrl": "http://muresfly.ro/sites/default/files/logonou.png"
  },
  {
      "Activities": null,
      "name": "Rimetea Stanca",
      "address": "Rimetea ",
      "details": null,
      "websiteUrl": null,
      "location": {
          "lat": 46.440823,
          "lng": 23.578620
      },
      "tags": [
        "paragliding",
        "zbor",
        "parapanta"
      ],
      "logoUrl": "http://davidgarbe.files.wordpress.com/2011/09/launchettes-blog.jpg?w=595&h=595"
  },
  {
      "Activities": null,
      "name": "Asociatia Sportiva ASPAR",
      "address": "Strada Planoarelor, Dezmir",
      "details": "Tel: 0744-547.910",
      "websiteUrl": "http://www.aspar.ro/",
      "location": {
          "lat": 46.775269,
          "lng": 23.717373
      },
      "tags": [
        "paragliding",
        "zbor",
        "parapanta"
      ],
      "logoUrl": "http://www.aspar.ro/wp-content/uploads/2011/12/logo_aspar2.png"
  },
  {
      "Activities": "Running",
      "name": "Parcul Central Simion Barnutiu Cluj-Napoca",
      "address": "Strada Cardinal Iuliu Hossu, Cluj-Napoca",
      "details": null,
      "websiteUrl": null,
      "location": {
          "lat": 46.768811,
          "lng": 23.577597
      },
      "tags": [
        "running",
        "jogging",
        "alergat",
        "picnic",
        "paddling",
        "vaslit",
        "hidrobiciclete"
      ],
      "logoUrl": "http://media02.hongkiat.com/tree-logos/Dossia-Medical-.jpg"
  },
  {
      "Activities": "Horseback riding",
      "name": "Centru de echitatie Napoca Sport Horse",
      "address": "Localitatea Salicea, judetul Cluj",
      "details": "Tel : 0744-828.710",
      "websiteUrl": "http://napocasporthorse.ro/prezentare.html",
      "location": null,
      "tags": [
        "calarie",
        "echitatie"
      ],
      "logoUrl": "http://img2.turbomilk.com/portfolio/identity/londonclasses/local-horse_riding.jpg"
  },
  {
      "Activities": null,
      "name": "Echitatie Resort Wonderland",
      "address": "intrare din Calea Turzii via Feleacu judetul Cluj",
      "details": "Tel: 0753966337",
      "websiteUrl": "http://www.wonderlandcluj.ro/rad/preturi/",
      "location": null,
      "tags": [
        "calarie",
        "echitatie"
      ],
      "logoUrl": "http://img2.turbomilk.com/portfolio/identity/londonclasses/local-horse_riding.jpg"
  },
  {
      "Activities": "Climbing",
      "name": "Sala centrala de escalada ",
      "address": " Str. Horea nr. 8, Cluj-Napoca",
      "details": "Tel:  0755 563 111",
      "websiteUrl": "http://centraladeescalada.ro/",
      "location": {
          "lat": 46.775695,
          "lng": 23.587305
      },
      "tags": [
        "catarat",
        "escalada",
        "climbing"
      ],
      "logoUrl": "http://centraladeescalada.ro/wp-content/uploads/2013/01/logo-centrala-de-escalada.png"
  },
  {
      "Activities": null,
      "name": " Free Wall",
      "address": "str. Berariei nr. 6 Cluj-Napoca",
      "details": "Tel:  0761004773",
      "websiteUrl": "http://www.freewall.ro/",
      "location": {
          "lat": 46.763999,
          "lng": 23.570130
      },
      "tags": [
        "catarat",
        "escalada",
        "climbing"
      ],
      "logoUrl": "http://i395.photobucket.com/albums/pp31/mistere33/Climbing/USAClimbingresize.jpg"
  },
  {
      "Activities": "Skateboarding",
      "name": "Skate Park Cluj-Napoca",
      "address": "Parcul Ion Luca Caragiale, Cluj-Napoca",
      "details": null,
      "websiteUrl": null,
      "location": {
          "lat": 46.772441,
          "lng": 23.586593
      },
      "tags": [
        "skateboarding",
        "skateboard",
        "skate",
        "roller",
        "skating",
        "park",
        "role"
      ],
      "logoUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtYquoXYLjWtBTOOpyIgxQeDhYCns1l-KyyTvo2RBjeQQKZuX5"
  },
  {
      "Activities": "Dog walking",
      "name": "Pe malul Somesului",
      "address": "In apropierea Parcului Babes, Cluj-Napoca",
      "details": null,
      "websiteUrl": null,
      "location": {
          "lat": 46.767184,
          "lng": 23.561167
      },
      "tags": [
        "dog",
        "walking",
        "plimbat",
        "caini"
      ],
      "logoUrl": "http://rightofwaydogs.com/wordpress/wp-content/uploads/2010/02/logo.jpg"
  },
  {
      "Activities": null,
      "name": "Zona Expo Transilvania",
      "address": "str. Dambovitei",
      "details": "In apropierea Expo Transilvania",
      "websiteUrl": null,
      "location": {
          "lat": 46.782078,
          "lng": 23.631661
      },
      "tags": [
        "dog",
        "walking",
        "plimbat",
        "caini"
      ],
      "logoUrl": "http://rightofwaydogs.com/wordpress/wp-content/uploads/2010/02/logo.jpg"
  },
  {
      "Activities": "Paintball",
      "name": "WAR-ZONE Paintball & Airsoft",
      "address": "Livada Steluta, Colonia Breaza, Cluj-Napoca",
      "details": "Tel: 0740 249 225",
      "websiteUrl": "http://paintball-airsoft.ro/",
      "location": {
          "lat": 46.803317,
          "lng": 23.575431
      },
      "tags": [
        "paintball",
        "airsoft"
      ],
      "logoUrl": "http://paintball-airsoft.ro/wp-content/uploads/2012/12/warzone-logo-paintball-airsoft.png"
  },
  {
      "Activities": null,
      "name": "Army of Paintball",
      "address": "Str. Avram Iancu, nr. 492-500, Floreşti, Jud. Cluj (Polus Center Cluj)",
      "details": "Tel: 0740.204.936 (Florin) / 0769.222.992 (Claudiu)",
      "websiteUrl": "http://www.paintball-cluj.ro/",
      "location": {
          "lat": 46.750759,
          "lng": 23.531342
      },
      "tags": [
        "paintball",
        "airsoft"
      ],
      "logoUrl": "http://www.paintball-cluj.ro/wp-content/uploads/2010/01/logo5.png"
  },
  {
      "Activities": null,
      "name": "Fun Paintball",
      "address": "Cluj-Napoca, jud. Cluj",
      "details": "Tel: 0745-076 350, 0752-283 347",
      "websiteUrl": "http://www.funpaintball.ro/",
      "location": null,
      "tags": [
        "paintball"
      ],
      "logoUrl": "http://st.depositphotos.com/1411161/1949/v/950/depositphotos_19492695-paintball-Logo.jpg"
  },
  {
      "Activities": null,
      "name": "Paintball-Enjoy",
      "address": "Cluj-Napoca, jud. Cluj",
      "details": "Tel: 0264-572.688",
      "websiteUrl": "http://www.paintball-enjoy.ro/",
      "location": null,
      "tags": [
        "paintball"
      ],
      "logoUrl": "http://st.depositphotos.com/1411161/1949/v/950/depositphotos_19492695-paintball-Logo.jpg"
  },
  {
      "Activities": "Board games",
      "name": "Bulgakov",
      "address": " Str. Inocentiu Micu Klein, nr. 17, Cluj-Napoca",
      "details": "Tel: 0264-450156",
      "websiteUrl": "http://www.cafebulgakov.ro/",
      "location": {
          "lat": 46.767461,
          "lng": 23.587989
      },
      "tags": [
        "board",
        "games",
        "jocuri",
        "de",
        "societate"
      ],
      "logoUrl": "http://4.bp.blogspot.com/-nbQTo2rWTCo/TgncMpGvV6I/AAAAAAAAAKQ/ezm3u18anWg/s1600/logo_bulgakov.gif"
  },
  {
      "Activities": null,
      "name": "Red Goblin Cluj",
      "address": "Str. Paris nr. 21, Cluj-Napoca",
      "details": "Tel: 0364 11 22 33",
      "websiteUrl": "http://redgoblin.ro/shop/#Home",
      "location": {
          "lat": 46.777153,
          "lng": 23.597786
      },
      "tags": [
        "board",
        "games",
        "jocuri",
        "de",
        "societate"
      ],
      "logoUrl": "http://singlebell.net/wp-content/uploads/2014/01/red_goblin.jpg"
  },
  {
      "Activities": "Poker",
      "name": "Poker Place",
      "address": "Str. Aurel Vlaicu, nr. 1, Cluj-Napoca",
      "details": "Tel: 0786 227200 / 0757 408887",
      "websiteUrl": "https://ro-ro.facebook.com/pages/Poker-Place/194446357255719",
      "location": {
          "lat": 46.779029,
          "lng": 23.614883
      },
      "tags": [
        "poker",
        "cash",
        "texas",
        "hold'em"
      ],
      "logoUrl": "https://scontent-a-vie.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/1796642_719631301403886_1065733320_n.jpg?oh=2824a39263661f542a7970455c84bc5c&oe=551739B5"
  },
  {
      "Activities": null,
      "name": "Royal Poker Club",
      "address": "Str. Regele Ferdinand, nr. 6, Cluj-Napoca",
      "details": "Tel: 0744 602 272",
      "websiteUrl": "http://www.royalpoker.ro/",
      "location": {
          "lat": 46.771710,
          "lng": 23.590014
      },
      "tags": [
        "poker",
        "cash",
        "texas",
        "hold'em"
      ],
      "logoUrl": "http://www.royalpoker.ro/wp-content/themes/royalpokerclub/images/royal_logo.png"
  },
  {
      "Activities": null,
      "name": "Rounders Poker Lounge",
      "address": "Strada Regele Ferdinand 22-26, Cluj-Napoca (Magazinul Central, Etajul 4)",
      "details": "Tel: 0743 677004, 0748 638400",
      "websiteUrl": "http://www.rounders.ro/",
      "location": {
          "lat": 46.773189,
          "lng": 23.589607
      },
      "tags": [
        "poker",
        "cash",
        "texas",
        "hold'em"
      ],
      "logoUrl": "https://lh5.ggpht.com/GT4lpVBSYo2VoVTuiuy-nRt3E8yCuTmqptXlYsH1FcDL3yh3rAJIe1YPbqs041KlJ2I=w300"
  },
  {
      "Activities": "Beer Pong",
      "name": "Rehab College Bar",
      "address": "Strada Piezisa nr. 23, Cluj-Napoca",
      "details": "Tel: 0749 483 658, 0756 278 811",
      "websiteUrl": "https://ro-ro.facebook.com/RehabCollegeBar",
      "location": {
          "lat": 46.763559,
          "lng": 23.577564
      },
      "tags": [
        "beer",
        "pong",
        "board",
        "games",
        "jocuri",
        "de",
        "societate"
      ],
      "logoUrl": "http://www.partytude.ro/sites/default/files/imagecache/localurilogo/rehab_0.jpg"
  },
  {
      "Activities": "Swimming",
      "name": "Complex Nataţie UTCN - Piscina Olimpică",
      "address": "Strada Pandurilor, Cluj-Napoca",
      "details": "Tel: 0264-587.810; bazin exterior pe timpul verii precum si bazin acoperit pe tot parcursul anului",
      "websiteUrl": "http://www.utcluj.ro/centrul-de-natatie/",
      "location": {
          "lat": 46.765715,
          "lng": 23.563689
      },
      "tags": [
        "swimming",
        "inot",
        "natatie",
        "pool",
        "piscina",
        "bazin"
      ],
      "logoUrl": "http://www.utcluj.ro/static/img/logo_site.png"
  },
  {
      "Activities": null,
      "name": "Piscina Ramada",
      "address": "Calea Turzii, nr 43-49, Cluj-Napoca",
      "details": "Tel: 0372.743.143, piscina panoramica, interioara",
      "websiteUrl": "http://www.ramadacluj.ro/360-SPA/Piscina.html",
      "location": {
          "lat": 46.764098,
          "lng": 23.598586
      },
      "tags": [
        "swimming",
        "inot",
        "pool",
        "piscina",
        "bazin",
        "fitness"
      ],
      "logoUrl": "http://www.locuridemuncacluj.net/wp-content/uploads/job_listings/Ramada-Cluj.jpg"
  },
  {
      "Activities": null,
      "name": "Complexul Domeniul Regilor",
      "address": "Ciurila FN, la 15 km de Cluj-Napoca",
      "details": "Tel: 0745415303 / 0744601645",
      "websiteUrl": "http://domeniulregilor.ro/",
      "location": {
          "lat": 46.652204,
          "lng": 23.530893
      },
      "tags": [
        "swimming",
        "inot",
        "pool",
        "piscina",
        "bazin",
        "calarie",
        "echitatie",
        "tenis",
        "de",
        "masa",
        "biliard",
        "paintball",
        "horseback",
        "riding"
      ],
      "logoUrl": "http://domeniulregilor.ro/wp-content/uploads/2014/02/siglanouadomeniulregilor1.jpg"
  },
  {
      "Activities": null,
      "name": "Alverna Spa Cluj",
      "address": "Strada Alverna 79, Cluj-Napoca (in incinta Alverna Towers)",
      "details": "Tel: 0264 274 823, 0754 458 263",
      "websiteUrl": "http://alvernaspa.ro/",
      "location": {
          "lat": 46.756635,
          "lng": 23.617009
      },
      "tags": [
        "swimming",
        "inot",
        "pool",
        "piscina",
        "bazin",
        "fitness",
        "aerobic",
        "gym",
        "cardio",
        "TRX",
        "tae",
        "bo",
        "pilates",
        "fitball",
        "step",
        "bodybuilding"
      ],
      "logoUrl": "http://alvernaspa.ro/wp-content/uploads/2013/11/logo.png"
  },
  {
      "Activities": null,
      "name": "La Mesteceni",
      "address": "Sat Salicea nr. 86, comuna Ciurila, jud. Cluj (13 km distanþã de Cluj-Napoca)",
      "details": "Tel: 0754-041 508, piscina exterioara",
      "websiteUrl": "http://www.lamesteceni.ro/ro/",
      "location": {
          "lat": 46.683606,
          "lng": 23.542445
      },
      "tags": [
        "swimming",
        "inot",
        "pool",
        "piscina",
        "bazin"
      ],
      "logoUrl": "http://thumbs.dreamstime.com/x/swimming-logo-19206897.jpg"
  },
  {
      "Activities": null,
      "name": "Grand Hotel Italia ",
      "address": "Str. Trifoiului - Vasile Conta, Cluj-Napoca, jud. Cluj",
      "details": "Tel: 0364 111333, piscina exterioara",
      "websiteUrl": "http://www.grandhotelitaliacluj.ro/ro-RO/terrace",
      "location": {
          "lat": 46.753076,
          "lng": 23.605770
      },
      "tags": [
        "swimming",
        "inot",
        "pool",
        "piscina",
        "bazin"
      ],
      "logoUrl": "http://images.myjob.ro/myjob-v2/thumbs/2012/07/27/ghitaliadefquadr.0.93.jpg"
  },
  {
      "Activities": null,
      "name": "Aquina Spa",
      "address": "Str. Andrei Saguna, nr. 28-30, Cluj-Napoca",
      "details": "Tel: 0264-403.169, 0728-002.435 ",
      "websiteUrl": "http://www.aquina.ro/",
      "location": {
          "lat": 46.773813,
          "lng": 23.590591
      },
      "tags": [
        "swimming",
        "inot",
        "pool",
        "piscina",
        "bazin",
        "fitness",
        "gym",
        "bodybuilding"
      ],
      "logoUrl": "http://www.aquina.ro/gfx/logo.png"
  },
  {
      "Activities": null,
      "name": "Health Center Opera Plaza",
      "address": null,
      "details": null,
      "websiteUrl": null,
      "location": null,
      "tags": [
        "swimming",
        "inot",
        "pool",
        "piscina",
        "bazin"
      ],
      "logoUrl": null
  },
  {
      "Activities": "Sports, Fun & Related Activities",
      "name": "Fun Park Cluj",
      "address": "DC77, Feleacu, jud. Cluj (Cluj – Turda, prima intrare la stanga, inainte de postul de control situat pe Dealul Feleacului)",
      "details": "Tel: 0740 541 997",
      "websiteUrl": "http://www.funparkcluj.ro/",
      "location": {
          "lat": 46.718562,
          "lng": 23.641172
      },
      "tags": [
        "tiroliana",
        "paintball",
        "tir",
        "cu",
        "arcul",
        "escalada",
        "catarat",
        "climbing",
        "summer",
        "tubing",
        "zorbing",
        "rotondo",
        "bob",
        "de",
        "vara"
      ],
      "logoUrl": "http://www.funparkcluj.ro/static/imgf/logo-funpark.png"
  }
    ]);

}).call(this, this.angular);