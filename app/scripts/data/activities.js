(function () {
    'use strict';

    angular.module('hang-out-data')
    .constant('hangOutActivities', [
  {
      "title": "Tennis",
      "category": "Ballgames",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "tennis"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg",
      "logoUrl": "http://d1hw6n3yxknhky.cloudfront.net/012997461_prevstill.jpeg"
  },
  {
      "title": "Table tennis",
      "category": "Ballgames",
      "keywords": [
        "Ping-Pong"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/b/be/Table_tennis_Rio_2007.jpg",
      "logoUrl": "http://www.clker.com/cliparts/2/9/c/7/11949867871570711906table_tennis_omar_abo-na_01.svg.med.png"
  },
  {
      "title": "Squash",
      "category": "Ballgames",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "squash"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tough_return%2C_365.35.jpg/200px-Tough_return%2C_365.35.jpg",
      "logoUrl": "http://darrylsstainedglasspatterns.com/3squash_btn.jpg"
  },
  {
      "title": "Voleyball",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/3/38/Volleyball_game.jpg",
      "logoUrl": "http://upload.wikimedia.org/wikipedia/commons/7/77/Wikinews-volleyball.svg"
  },
  {
      "title": "Basketball",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/b/b0/Mansoor_Ahmed_photos_of_Team_USA_basketball_at_London_2012_Olympics.jpg",
      "logoUrl": "http://logos.co/600/royalty-free-vector-of-a-logo-of-a-basketball-swooshing-through-a-hoop-by-chromaco-5511.jpg"
  },
  {
      "title": "Handball",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "/",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/1/12/Team_Handball_Jumpshot_09_USA_Nationals.JPG",
      "logoUrl": "http://www.twotypes.de/wp-content/uploads/2011/01/handball-em-schweden-screen-twotypes-logo.jpg"
  },
  {
      "title": "Bubble football",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "fotbal"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1920px-Youth-soccer-indiana.jpg",
      "logoUrl": "http://goalstage.net/wp-content/uploads/2014/11/bubble-boy.png"
  },
  {
      "title": "Football / Soccer",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/10582800_10152647973508255_5113987544596549362_o.jpg",
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "title": "Football tennis",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "/",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://sportlockerdotcom.files.wordpress.com/2012/03/nikemercurialvaporviii_cr_nadal_08.jpg",
      "logoUrl": null
  },
  {
      "title": "Bowling",
      "category": "Ballgames",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/b/b0/Bowling_ball_looking_good_for_a_strike.jpg",
      "logoUrl": "http://1wn6ls2hqfw33zta682x40e4131p.wpengine.netdna-cdn.com/wp-content/uploads/ozone_sports_bowling.png"
  },
  {
      "title": "Pool / Biliard",
      "category": "Ballgames",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/b/b9/Billiard_Rack.jpg",
      "logoUrl": "http://freedesignfile.com/upload/2012/05/billiard_snooker_01.jpg"
  },
  {
      "title": "Snooker",
      "category": "Ballgames",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/5/55/German_Masters_Snooker_Final_%28DerHexer%29_2012-02-05_33.jpg/800px-German_Masters_Snooker_Final_%28DerHexer%29_2012-02-05_33.jpg",
      "logoUrl": "http://www.bakno.com/Snooker/Screenshots_files/SnookerLogo.jpg"
  },
  {
      "title": "Aerobics / Fitness / Gym",
      "category": "Indoor activities",
      "keywords": [
        "indoor"
      ],
      "description": null,
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
        "aerobics"
      ],
      "imageUrl": "http://lunar.thegamez.net/threadmill/treadmill-running-workout/becoming-a-gym-junkie-gwinnett-magazine-5102x3401.jpg",
      "logoUrl": "http://itsabouttimefitness.com.au/wp-content/uploads/2012/05/logo4.png"
  },
  {
      "title": "Dance",
      "category": "Indoor activities",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "dans",
        "dance",
        "tango",
        "bachata",
        "salsa",
        "vals"
      ],
      "imageUrl": "http://www.happy-projects.ro/happystar/wp-content/uploads/2014/05/salsa.jpg",
      "logoUrl": "http://static.squarespace.com/static/5211899be4b01a5565d7d734/t/52119477e4b004f80b4b521d/1410237838886/?format=750w"
  },
  {
      "title": "Darts",
      "category": "Indoor activities",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "darts"
      ],
      "imageUrl": "http://www.arena-jocurilor.ro/images/img_jocuri/darts.jpg",
      "logoUrl": "http://image15.spreadshirt.com/image-server/v1/compositions/111593986/views/1,width=235,height=235,appearanceId=1/Dart-Sport-T-Shirts.jpg"
  },
  {
      "title": "Mountain biking",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "mtb",
        "bike"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/7/7e/ZF-1931-66284-1-004.jpg",
      "logoUrl": "http://www.downieville.us/graphics_logos_icons/mountainbike.gif"
  },
  {
      "title": "Hiking",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/4/4e/Hiker_and_Redfish_Canyon_from_Alpine_Lake_trail_in_Sawtooth_Wilderness.jpg",
      "logoUrl": "http://storage2.ihigh.com/users/7666/photos/2116586.jpg"
  },
  {
      "title": "Trekking",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://www.negozislalom.com/download/324bd26_trekking.jpg",
      "logoUrl": "http://espinadelsur.com/wp-content/uploads/2014/01/trek.jpg"
  },
  {
      "title": "Snowboarding",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://www.hdwallpaperstock.eu/wallpapers/snowboarding-2880x1800.jpg",
      "logoUrl": "http://thumbs.dreamstime.com/x/snowboard-logo-colors-13985112.jpg"
  },
  {
      "title": "Skiing",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/3/38/Telemark_skiing_-_Pyrenees.jpg",
      "logoUrl": "http://flintlodge.webs.com/ski%20logo.png"
  },
  {
      "title": "Skating",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/VolosharMorozov_SP_EC2007.JPG/1280px-VolosharMorozov_SP_EC2007.JPG",
      "logoUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxPamG_1DavdNs_fPgg_d2Neiufif6EF4CDqKe6kikMQH2vpxQHQ"
  },
  {
      "title": "Paragliding",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lima,_Peru_-_Paragliding_003.jpg",
      "logoUrl": "http://davidgarbe.files.wordpress.com/2011/09/launchettes-blog.jpg?w=595&h=595"
  },
  {
      "title": "Running",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://www.shockya.com/news/wp-content/uploads/Sports-Running-Natural-Park.jpg",
      "logoUrl": "http://www.clipartbest.com/cliparts/9cp/bgg/9cpbgg9Bi.jpeg"
  },
  {
      "title": "Cycling",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/f/f4/US_Navy_070728-N-1722M-178_Two_Navy_triathletes_lead_the_way_during_the_cycling_portion_of_the_Armed_Forces_Triathlon_at_Point_Mugu.jpg",
      "logoUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTR8cn464KmzHi9pDWRrTSYoY_sLVR4XdlctfdBQeNfTA8iNp-XvA"
  },
  {
      "title": "Horseback riding",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/f/fd/North_Forks_Cardi_Trot_5-Apr-09_3-48_PM.jpg",
      "logoUrl": "http://img2.turbomilk.com/portfolio/identity/londonclasses/local-horse_riding.jpg"
  },
  {
      "title": "Climbing",
      "category": null,
      "keywords": [
        "indoor",
        "/",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/1/19/Overhanging_rock_climbing.jpg",
      "logoUrl": "http://i395.photobucket.com/albums/pp31/mistere33/Climbing/USAClimbingresize.jpg"
  },
  {
      "title": "Skateboarding",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/8/8e/1_bowl_skate_boarding.JPG",
      "logoUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtYquoXYLjWtBTOOpyIgxQeDhYCns1l-KyyTvo2RBjeQQKZuX5"
  },
  {
      "title": "Roller skating",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "park"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/9/9b/Skaters_in_Audubon_Park_New_Orleans.jpg",
      "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIlPJWg6FXDZwD33GIZwWVUvT5fgD9bXp5jhC1sJszSV2EVEMqw"
  },
  {
      "title": "Picnic",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "park"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/0/0a/Girls_on_a_Picnic_(6760195675).jpg",
      "logoUrl": "http://logos.textgiraffe.com/logos/logo-name/Picnic-designstyle-picnic-m.png"
  },
  {
      "title": "Dog walking",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "park"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Three_generations_of_West_Highland_Terrier.JPG/1280px-Three_generations_of_West_Highland_Terrier.JPG",
      "logoUrl": "http://rightofwaydogs.com/wordpress/wp-content/uploads/2010/02/logo.jpg"
  },
  {
      "title": "Paintball",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/5/5b/SupAir_Player.jpg",
      "logoUrl": "http://st.depositphotos.com/1411161/1949/v/950/depositphotos_19492695-paintball-Logo.jpg"
  },
  {
      "title": "Airsoft",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/a/a3/Flickr_-_The_U.S._Army_-_Airsoft_adds_hard_edge_to_combat_training.jpg",
      "logoUrl": "http://www.clubkosa.com/new/images/logo_klein/airsoft_logo_mini.gif"
  },
  {
      "title": "Board games",
      "category": "Social activities",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "pub"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/a/a3/TCMI_beaded_board_game_2.jpg",
      "logoUrl": "http://olivier-pompili.com/wp-content/uploads/2012/10/pieces.jpg"
  },
  {
      "title": "Poker",
      "category": "Social activities",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://www.jtech.com/wp-content/uploads/2013/04/casino_cards.jpg",
      "logoUrl": "http://www.spicejar.org/asiplease/images/wsop.jpg"
  },
  {
      "title": "Beer Pong",
      "category": "Social activities",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "pub",
        "bar"
      ],
      "imageUrl": "http://www.bobkeeferlaw.com/wp-content/uploads/2014/04/Beer-pong.jpg",
      "logoUrl": "http://officiallydrunk.com/wp-content/themes/Officially_Drunk_v1.1/timthumb.php?src=/wp-content/uploads/2009/10/game-logo-beer-pong.png&w=380&h=217&zc=1&q=100"
  },
  {
      "title": "Paddling",
      "category": "Water activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://commons.wikimedia.org/wiki/File:An_adult_and_child_enjoy_their_time_paddling_a_kayak.jpg",
      "logoUrl": "http://nikkirekman.files.wordpress.com/2012/09/dcckc_logo.jpg?w=200&h=161"
  },
  {
      "title": "Swimming",
      "category": "Water activities",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "pool"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/231000_-_Swimming_Daniel_Bell_reflections_action_-_3b_-_2000_Sydney_event_photo.jpg/1920px-231000_-_Swimming_Daniel_Bell_reflections_action_-_3b_-_2000_Sydney_event_photo.jpg",
      "logoUrl": "http://thumbs.dreamstime.com/x/swimming-logo-19206897.jpg"
  },
  {
      "title": "Ultimate frisbee",
      "category": "Others",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "frisbee"
      ],
      "imageUrl": "http://www10.unine.ch/sun/files/2012/07/frisbee.jpg",
      "logoUrl": "http://lakanal.net/calendrier/frisbee.gif"
  }
    ]);

}).call(this, this.angular);