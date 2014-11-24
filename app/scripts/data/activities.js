(function () {
    'use strict';

    angular.module('hang-out-data')
    .constant('hangOutActivities', [
  {
      "title": "Tennis",
      "categories": [
        "ballgames",
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "outdoor",
        "indoor"
      ],
      "description": null,
      "tags": [
        "tennis",
        "tenis"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg",
        "http://www.hdwallpapersinn.com/wp-content/uploads/2014/08/Rafael-Nadal-tennis-hd-wallpapers-desktop-background.jpg",
        "http://p1.pichost.me/i/34/1575020.jpg",
        "../images/halep-celebrating.jpg",
        "http://www.whitegadget.com/attachments/pc-wallpapers/143791d1390201893-novak-djokovic-novak-djokovic-picture.jpg",
        "http://1.bp.blogspot.com/-iysoGMksuyk/T3Ukj6L8cgI/AAAAAAAABgY/aGWA5ZtwgVM/s1600/Tennis+Wallpapers+1.jpg"
      ],
      "logoUrl": "http://d1hw6n3yxknhky.cloudfront.net/012997461_prevstill.jpeg"
  },
  {
      "title": "Table tennis",
      "categories": [
        "ballgames",
        "indoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "ping",
        "pong",
        "tenis",
        "de",
        "masa"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/b/be/Table_tennis_Rio_2007.jpg",
        "http://1.bp.blogspot.com/-iysoGMksuyk/T3Ukj6L8cgI/AAAAAAAABgY/aGWA5ZtwgVM/s1600/Tennis+Wallpapers+1.jpg",
        "http://www.shopbuy.org/static/category/original/ping-pong/Ping-Pong-Ball.jpg",
        "http://sublimeindia.in/wp-content/uploads/2014/03/table-tennis.jpg",
        "http://www.ittf.com/media/press_release/PR_09Dec13/images/picture1large.jpg"
      ],
      "logoUrl": "http://villaggioparadiso.it/wp-content/uploads/2014/09/ping-pong.jpg"
  },
  {
      "title": "Squash",
      "categories": [
        "ballgames",
        "indoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "squash"
      ],
      "imageUrls": [
        "http://www.sport.ox.ac.uk/wp-content/uploads/2012/09/squash-large.jpg",
        "http://upload.wikimedia.org/wikipedia/commons/7/74/Squash_court.JPG",
        "http://www.billsumner.com/data/photos/388_1squash_players.jpg",
        "http://en.artengo.com/cms/wp-content/uploads/2012/11/squash-homme-2-2500-30.jpg",
        "http://www.pescariusports.ro/wp-content/uploads/2012/12/IMG_5422.jpg"
      ],
      "logoUrl": "http://www.squashplayer.co.uk/rules/courtbuddy_logo.JPG"
  },
  {
      "title": "Voleyball",
      "categories": [
        "ballgames",
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "voley",
        "volei",
        "voleyball",
        "beach-voley"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/3/38/Volleyball_game.jpg",
        "http://www.volleywood.net/wp-content/uploads/2014/01/Filippo-Lanza-hot-italian-volleyball-player.jpg",
        "http://www.fivb.org/Vis2009/Images/GetImage.asmx?type=press&no=44129",
        "http://www.sigmwr.com/uploads/1512/volleyball.jpg",
        "http://www.zastavki.com/pictures/originals/2013/_Girl_playing_beach_volleyball_054537_.jpg",
        "http://www.freeipadhdwallpaper.com/wp-content/uploads/images/1372-beach-volleyball-free-ipad-hd-wallpaper_1024x1024.jpg"
      ],
      "logoUrl": "http://upload.wikimedia.org/wikipedia/commons/7/77/Wikinews-volleyball.svg"
  },
  {
      "title": "Basketball",
      "categories": [
        "ballgames",
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "basket",
        "basketball",
        "baschet"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/b/b0/Mansoor_Ahmed_photos_of_Team_USA_basketball_at_London_2012_Olympics.jpg",
        "http://hardcorehoops.net/wp-content/uploads/2013/08/basketball1.jpg",
        "http://www.picviw.com/wp-content/uploads/2014/02/basketball-hd-wallpaper.jpg",
        "http://upload.wikimedia.org/wikipedia/commons/6/6f/Mark_Sanford_(basketball)_09.jpg",
        "http://hardquotes.com/wp-content/uploads/2013/08/Elite_Sports_Wallpaper.jpg"
      ],
      "logoUrl": "http://logos.co/600/royalty-free-vector-of-a-logo-of-a-basketball-swooshing-through-a-hoop-by-chromaco-5511.jpg"
  },
  {
      "title": "Handball",
      "categories": [
        "ballgames",
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "/",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "handball",
        "handbal"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/1/12/Team_Handball_Jumpshot_09_USA_Nationals.JPG",
        "http://upload.wikimedia.org/wikipedia/commons/3/3f/Kiril_Lazarov_09.jpg",
        "http://upload.wikimedia.org/wikipedia/commons/e/e9/CRO_-_DEN_(02)_-_2010_European_Men's_Handball_Championship.jpg",
        "http://olympicgirls.files.wordpress.com/2012/08/johanna6.jpghttp://upload.wikimedia.org/wikipedia/commons/f/f5/Handball_07.jpg"
      ],
      "logoUrl": "http://www.twotypes.de/wp-content/uploads/2011/01/handball-em-schweden-screen-twotypes-logo.jpg"
  },
  {
      "title": "Bubble football",
      "categories": [
        "ballgames",
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "bubble",
        "football",
        "fotbal",
        "in",
        "balon"
      ],
      "imageUrls": [
        "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/10582800_10152647973508255_5113987544596549362_o.jpg",
        "http://www.familygolive.com/wp-content/uploads/2014/09/bubble-football-d.jpg",
        "http://3.bp.blogspot.com/-5S8RavF4Src/U6V70govoCI/AAAAAAAARIA/5EWnrzzAyB4/s1600/SAM_2836.JPG",
        "http://photos2.meetupstatic.com/photos/member/9/1/f/c/highres_170317372.jpeg",
        "http://bubblefootballzone.co.uk/wp-content/uploads/2014/01/IMG_0086.jpg"
      ],
      "logoUrl": "http://goalstage.net/wp-content/uploads/2014/11/bubble-boy.png"
  },
  {
      "title": "Football / Soccer",
      "categories": [
        "ballgames",
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "fotbal",
        "football",
        "soccer",
        "minifotbal"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1920px-Youth-soccer-indiana.jpg",
        "http://www.lashwallpapers.com/wp-content/uploads/2014/05/football-free-wallpapers-images-2014.jpg",
        "http://www.theepochtimes.com/news_images/highres/2007-1-11-beckham72412976.jpg",
        "http://www.sportissue.com/wp-content/uploads/2014/09/Messi-Soccer-player-lionel-messi-Lionel-messi-wallpaper-2014-.jpg",
        "http://renniecoaching.com/wp-content/uploads/2014/03/soccer.jpg"
      ],
      "logoUrl": "http://www.gorgeouswall.com/wp-content/uploads/2014/02/football-logo-wallpaper-275x155.png"
  },
  {
      "title": "Football tennis",
      "categories": [
        "ballgames",
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "/",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "tenis",
        "cu",
        "piciorul",
        "laptenis",
        "football",
        "tennis",
        "fotbal-tenis"
      ],
      "imageUrls": [
        "http://sportlockerdotcom.files.wordpress.com/2012/03/nikemercurialvaporviii_cr_nadal_08.jpg",
        "http://sportlockerdotcom.files.wordpress.com/2013/09/18392-182.jpg",
        "http://img.wallpaperstock.net:81/a-lovi-cu-piciorul-mingea-%C3%AEn-aer-wallpapers_22262_2560x1600.jpg"
      ],
      "logoUrl": "http://www.kitgraf.com/images/thumbnails/picture-football-wallpaper-free-sports-vector-download.jpg"
  },
  {
      "title": "Bowling",
      "categories": [
        "ballgames",
        "indoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "bowling"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/b/b0/Bowling_ball_looking_good_for_a_strike.jpg",
        "http://stmatthewcatholic.org/lib/photos/bowling%20pins.jpg",
        "http://www.sigmwr.com/uploads/2152/bowling%20lane.jpg",
        "http://www.fusionbowling.com/wp-content/uploads/2012/12/IMG_0196_1.jpg",
        "http://www.bowlingboby.cz/wp-content/uploads/foto-bowling.jpg"
      ],
      "logoUrl": "http://1wn6ls2hqfw33zta682x40e4131p.wpengine.netdna-cdn.com/wp-content/uploads/ozone_sports_bowling.png"
  },
  {
      "title": "Pool / Biliard",
      "categories": [
        "ballgames",
        "indoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "biliard",
        "pool"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/b/b9/Billiard_Rack.jpg",
        "https://paulalexe.files.wordpress.com/2013/05/img_2974.jpg",
        "http://fanclubwareham.com/wp-content/uploads/2014/05/Billiards1.jpg",
        "http://4.bp.blogspot.com/-_xkJDbBdY5U/UlL6YoSCu_I/AAAAAAAAQS0/Bpxi8mIXWEo/s0/Snooker+hd+wallpapers.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRmrzZAXFVvnb_JjHpb9XvtD5sXy5EuWk0Lj9LasW1i0jrlme9Q",
        "http://president-hotel.by/images/Table-Cue-Billiard-%E2%80%93-HD-Wallpaper.jpg"
      ],
      "logoUrl": "http://freedesignfile.com/upload/2012/05/billiard_snooker_01.jpg"
  },
  {
      "title": "Snooker",
      "categories": [
        "ballgames",
        "indoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "snooker"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/thumb/5/55/German_Masters_Snooker_Final_%28DerHexer%29_2012-02-05_33.jpg/800px-German_Masters_Snooker_Final_%28DerHexer%29_2012-02-05_33.jpg",
        "http://www.pix123.com/snooker-news/NewsImages/479285_143668855.jpg",
        "http://i1.mirror.co.uk/incoming/article1868653.ece/alternates/s2197/167948064.jpg",
        "http://i4.mirror.co.uk/incoming/article96350.ece/alternates/s2197/snooker-generic-image-2-919429845.jpg",
        "http://topspotsnookerclub.co.uk/wp-content/uploads/2013/11/Snooker-Billiard-Wallpaper-HD.png"
      ],
      "logoUrl": "http://www.bakno.com/Snooker/Screenshots_files/SnookerLogo.jpg"
  },
  {
      "title": "Aerobics / Fitness / Gym",
      "categories": [
        "indoor"
      ],
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
        "stretching",
        "body",
        "training",
        "fitness",
        "bodybuilding",
        "kickboxing",
        "fitball",
        "aerobics",
        "aerobic",
        "electrostimulare",
        "spinning",
        "box",
        "cycling",
        "aqua",
        "gym",
        "rebound",
        "TRX",
        "piloxing",
        "gimnastica",
        "prenatala",
        "aqua",
        "gym",
        "bosu",
        "body",
        "kombat",
        "culturism"
      ],
      "imageUrls": [
        "http://lunar.thegamez.net/threadmill/treadmill-running-workout/becoming-a-gym-junkie-gwinnett-magazine-5102x3401.jpg",
        "http://i.ytimg.com/vi/7ESdNydS2Go/maxresdefault.jpg",
        "http://cdn.desktopwallpapers4.me/wallpapers/sports/1920x1200/2/18452-weight-lifter-1920x1200-sport-wallpaper.jpg",
        "http://www.motionfitness.co.za/wp-content/uploads/2013/12/Personal-training-iStock.jpg",
        "http://www.yourallaround.com/files/3413/9467/5671/Slider-1.jpg",
        "http://holidayforfitness.com/wp-content/uploads/2014/01/bigstock-Aerobics-pilates-women-with-yo-38770876.jpg"
      ],
      "logoUrl": "http://thumbs.dreamstime.com/x/gym-fitness-logo-3d-isolated-10020069.jpg"
  },
  {
      "title": "Dance",
      "categories": [
        "indoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "bachatta",
        "cha",
        "cha",
        "cursuri",
        "de",
        "dans",
        "discofox",
        "foxtrot",
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
        "vals",
        "lent",
        "vals",
        "vienez",
        "dans",
        "popular",
        "dans",
        "modern",
        "balet",
        "dansul",
        "mirilor",
        "dansuri",
        "de",
        "societate"
      ],
      "imageUrls": [
        "http://www.happy-projects.ro/happystar/wp-content/uploads/2014/05/salsa.jpg",
        "http://www.hvdance.com/Images/d2.jpg",
        "http://pittsburghcrosscurrents.files.wordpress.com/2012/07/pbts-spring-perf-2009.jpg",
        "http://www.stageandcinema.com/wp-content/uploads/2013/12/Hubbard-Street-Dancers-Jessica-Tong-and-Jesse-Bechard-in-ONE-THOUSAND-PIECES-by-Resident-Choreographer-Alejandro-Cerrudo.-Photo-by-Todd-Rosenberg..jpg",
        "http://argentinetango.us/wp-content/uploads/2012/11/Bryant-Faye-Pics-2009-026-1.jpg"
      ],
      "logoUrl": "http://static.squarespace.com/static/5211899be4b01a5565d7d734/t/52119477e4b004f80b4b521d/1410237838886/?format=750w"
  },
  {
      "title": "Darts",
      "categories": [
        "indoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "darts"
      ],
      "imageUrls": [
        "http://www.arena-jocurilor.ro/images/img_jocuri/darts.jpg",
        "http://www.pecsma.hu/wp-content/uploads/2014/05/darts.jpg",
        "http://photo.elsoar.com/wp-content/images/Dart-is-in-the-aim.jpg",
        "http://www.the-walls.net/wallpapers/2013/07/Darts-1440x2560.jpg",
        "http://images2.alphacoders.com/539/539865.jpg"
      ],
      "logoUrl": "http://image15.spreadshirt.com/image-server/v1/compositions/111593986/views/1,width=235,height=235,appearanceId=1/Dart-Sport-T-Shirts.jpg"
  },
  {
      "title": "Mountain biking",
      "categories": [
        "mountain",
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "mtb",
        "bike"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/7/7e/ZF-1931-66284-1-004.jpg",
        "http://cdn1.coresites.mpora.com/bikemagic_new/wp-content/uploads/2012/01/Deadwater-Fell-11.jpg",
        "http://static.somersaultfestival.com/wp-content/uploads/2014/04/Mountain-Biking.jpg",
        "http://gaby.fachrul.com/img/mountainbike/mountain-biking/mountain-biking-sypes-canyon-bozeman-montana1600-x-1200-352-kb-jpeg-x.jpg",
        "http://www.maroundpartner.com/wp-content/gallery/serfaus-fiss-ladis-tirol/sfls34.jpg",
        "http://p1.pichost.me/i/42/1657041.jpg"
      ],
      "logoUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFAkbTJIpDpAKLlrye7vVQg7xHV2UtIIZ5hjt4DIWeVF0FPOyATA"
  },
  {
      "title": "Hiking",
      "categories": [
        "mountain",
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "hiking",
        "hike",
        "drumetie"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/4/4e/Hiker_and_Redfish_Canyon_from_Alpine_Lake_trail_in_Sawtooth_Wilderness.jpg",
        "http://argyruntum.com/wp-content/uploads/2014/03/hiking.jpg",
        "http://cdn.wall-pix.net/albums/sports/00024644.jpg",
        "http://lenta-ua.net/uploads/posts/2014-06/1402636534_puteshestvie.jpg",
        "http://sshswebmasters.com/ksudduth2015/Home/Hiking_Lake_Nature_Hiking_Wallpaper_2560x1600_www_wallpaperhi_com.jpg"
      ],
      "logoUrl": "http://storage2.ihigh.com/users/7666/photos/2116586.jpg"
  },
  {
      "title": "Trekking",
      "categories": [
        "mountain",
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "trekking"
      ],
      "imageUrls": [
        "http://www.negozislalom.com/download/324bd26_trekking.jpg",
        "http://www.skiing-wallpapers.com/bulkupload/wallpapers/Skiing/ski-trekking-wallpaper.jpg",
        "http://zapuka.com/wp-content/uploads/2014/02/trekking-1.jpeg",
        "http://www.hotelkristiania.it/wp-content/uploads/2012/08/APT-VAL-DI-SOLE-TREKKING-T.-Mochen.jpg",
        "http://travelokam.com/wp-content/uploads/2014/10/trekking.jpg"
      ],
      "logoUrl": "http://www.epmasialtd.com/resources/Man%20cropped.png"
  },
  {
      "title": "Snowboarding",
      "categories": [
        "mountain",
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "snowboarding",
        "snowboard",
        "placa"
      ],
      "imageUrls": [
        "http://www.hdwallpaperstock.eu/wallpapers/snowboarding-2880x1800.jpg",
        "http://snowboardingskiholidays.files.wordpress.com/2010/11/snowboarding-winter-sports-holiday-5.jpg",
        "http://p1.pichost.me/i/23/1465562.jpg",
        "http://p1.pichost.me/i/25/1476916.jpg",
        "http://ignitiondeck.com/crowdpress/wp-content/uploads/2013/04/snowboarder.jpg"
      ],
      "logoUrl": "http://thumbs.dreamstime.com/x/snowboard-logo-colors-13985112.jpg"
  },
  {
      "title": "Skiing",
      "categories": [
        "mountain",
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "ski",
        "schi",
        "skiing"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/3/38/Telemark_skiing_-_Pyrenees.jpg",
        "http://www.yoyowall.com/wp-content/uploads/2013/07/Skiing-Happy.jpg",
        "http://images7.alphacoders.com/341/341894.jpg",
        "http://www.hdwallpapersos.com/wp-content/uploads/2014/07/downhill-skiing-beta-hd-463759.jpg",
        "http://s1.bwallpapers.com/wallpapers/2014/03/03/sport-skiing_015004230.jpg",
        "http://www.photography-match.com/views/images/gallery/Skiing_Crystal_Mountain_Washington.jpg",
        "http://www.zastavki.com/pictures/originals/2014/World___Italy_Downhill_skiing_in_the_ski_resort_of_Val_Gardena__Italy_062919_.jpg"
      ],
      "logoUrl": "http://flintlodge.webs.com/ski%20logo.png"
  },
  {
      "title": "Skating",
      "categories": [
        "mountain",
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "patinaj",
        "patinoar",
        "skating"
      ],
      "imageUrls": [
        "http://www.fingerlakestravelmaven.com/wp/wp-content/uploads/2011/12/450641_42368644-ice-skating-sxc.jpg",
        "http://i.huffpost.com/gen/1614397/thumbs/o-OLYMPIC-FIGURE-SKATING-COSTUMES-facebook.jpg",
        "http://theyesgirls.com/wp-content/uploads/2013/12/Couple-Ice-Skating-at-Curry-Village-Ice-Rink.jpg",
        "http://www.smcdsb.on.ca/UserFiles/Servers/Server_6/Image/Board%20Office%20Images/Home%20Page/2010%20-%202011%20School%20Year/March/OVL_1094.JPG",
        "http://www.allthingsgo.co.uk/wp-content/uploads/2012/11/ice_skating_somerset_house1.jpg",
        "http://data.freehdw.com/julia-lipnitskaia-figure-skating-player.jpg"
      ],
      "logoUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxPamG_1DavdNs_fPgg_d2Neiufif6EF4CDqKe6kikMQH2vpxQHQ"
  },
  {
      "title": "Paragliding",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "paragliding",
        "zobr",
        "parapanta"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/d/df/Lima,_Peru_-_Paragliding_003.jpg",
        "http://p1.pichost.me/i/16/1392143.jpg",
        "http://www.todayholiday.com/images/tours/fethiye_yamac_parasutu.jpg",
        "http://www.mydestinationunknown.com/wp-content/gallery/careers-paragliding-4/Careers-Paragliding-3.jpg",
        "http://intheairadventures.com/wp-content/uploads/2014/08/paragliding.jpg",
        "http://barbarashdwallpapers.com/wp-content/uploads/2013/08/sports-hd-wallpaper-with-two-persons-paragliding-in-Nepal.jpg"
      ],
      "logoUrl": "http://davidgarbe.files.wordpress.com/2011/09/launchettes-blog.jpg?w=595&h=595"
  },
  {
      "title": "Running",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "alergare",
        "alergat",
        "jogging",
        "parc",
        "park",
        "running",
        "atletism"
      ],
      "imageUrls": [
        "http://www.shockya.com/news/wp-content/uploads/Sports-Running-Natural-Park.jpg",
        "http://p1.pichost.me/i/27/1503080.jpg",
        "http://www.eyeswideopen.nl/wp-content/uploads/2014/04/running-man-wallpaper-hd.jpg",
        "http://www.macwallhd.com/wp-content/Wallpapers/Animals/Summer%20Mac%20Wallpaper%20Dog%20Running%20on%20the%20Beach-817026446.jpeg",
        "http://img0.gtsstatic.com/wallpapers/40e621e562683b589ad4b2b71d1e0650_large.jpeg"
      ],
      "logoUrl": "http://www.clipartbest.com/cliparts/9cp/bgg/9cpbgg9Bi.jpeg"
  },
  {
      "title": "Cycling",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "ciclism",
        "cycling",
        "bicicleta"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/f/f4/US_Navy_070728-N-1722M-178_Two_Navy_triathletes_lead_the_way_during_the_cycling_portion_of_the_Armed_Forces_Triathlon_at_Point_Mugu.jpg",
        "http://www.goodwp.com/images/201210/goodwp.com_25663.jpg",
        "http://xdesktopwallpapers.com/wp-content/uploads/2012/01/Ejyoing%20Cycling%20in%20Morning.jpg",
        "http://2.bp.blogspot.com/-T529fFvvMVM/USeAdM-UxoI/AAAAAAAAMpA/WiCZGm5pJpg/s1600/wallpaper.jpg",
        "http://www.mudgeecycleclub.com/wp-content/gallery/photogallery/bicycle-racing-wallpaper.jpg"
      ],
      "logoUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTR8cn464KmzHi9pDWRrTSYoY_sLVR4XdlctfdBQeNfTA8iNp-XvA"
  },
  {
      "title": "Horseback riding",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "calarie",
        "echitatie",
        "horseback",
        "riding"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/f/fd/North_Forks_Cardi_Trot_5-Apr-09_3-48_PM.jpg",
        "http://images6.alphacoders.com/345/345446.jpg",
        "http://www.zastavki.com/pictures/originals/2013/Animals___Horses_Horse_back_riding_053641_.jpg",
        "http://www.zastavki.com/pictures/originals/2013/Animals___Horses_Horseback_riding_053592_.jpg",
        "http://www.sportshdwallpapers.com/download/horses-racing-in-the-water-at_1600x1200_542-desktop.jpg"
      ],
      "logoUrl": "http://img2.turbomilk.com/portfolio/identity/londonclasses/local-horse_riding.jpg"
  },
  {
      "title": "Climbing",
      "categories": [
        "indoor",
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "/",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "catarat",
        "climbing",
        "escalada"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/1/19/Overhanging_rock_climbing.jpg",
        "http://images2.alphacoders.com/241/241840.jpg",
        "http://1.bp.blogspot.com/-lQkYBLiiVrM/Ukg2eIKNApI/AAAAAAAAZVo/EEmuQzyGEGg/s1600/mountain+climbing+hd+pictures.jpg",
        "http://www.sexyli.com/wp-content/uploads/2013/08/sports-wide-high-resolution-iphone-ice-crystal-wallpapers-viewing-rock-climbing-wallpaper.jpg",
        "http://roxrok.com/wp-content/uploads/2014/04/girl-hanging.jpg"
      ],
      "logoUrl": "http://fc00.deviantart.net/fs71/i/2010/235/5/a/Climber_2_by_bibb189.jpg"
  },
  {
      "title": "Skateboarding",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "skateboarding",
        "skateboard",
        "skate"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/8/8e/1_bowl_skate_boarding.JPG",
        "http://www.howdonkey.com/pics/7/start-a-skateboarding-team.jpg",
        "http://www.freeskateboardingwallpapers.com/images/Brian-Wenning-DC-Skateboarding-Wallpaper-2.jpg",
        "http://freeskateboardingwallpapers.com/wallpapers/rob-dyrdek-dc-skateboarding-wallpaper-1600x1200.jpg"
      ],
      "logoUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtYquoXYLjWtBTOOpyIgxQeDhYCns1l-KyyTvo2RBjeQQKZuX5"
  },
  {
      "title": "Roller skating",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "park",
        "role",
        "parc"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/9/9b/Skaters_in_Audubon_Park_New_Orleans.jpg",
        "http://londonskaters.com/wordpress/wp-content/uploads/2013/05/P5121793.jpg",
        "http://gallery.johnandcailin.com/d/20207-2/avaRollerSkates.JPG",
        "http://upload.wikimedia.org/wikipedia/commons/8/81/Roller-skating-slalom-duo.jpg",
        "http://www.losingweightdone.com/wp-content/uploads/2014/09/cher-roller-skating_77603-1600x1200.jpg"
      ],
      "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIlPJWg6FXDZwD33GIZwWVUvT5fgD9bXp5jhC1sJszSV2EVEMqw"
  },
  {
      "title": "Picnic",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "park",
        "picnic",
        "parc"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/0/0a/Girls_on_a_Picnic_(6760195675).jpg",
        "http://images8.alphacoders.com/407/407601.jpg",
        "http://www.freeoboi.ru/images/494603610.jpg",
        "http://www.youwall.com/wallpapers/201203/picnic-wallpaper.jpg",
        "http://wallpaperest.com/wallpapers/picnic-comfort-food_738839.jpg",
        "http://www.misskoreabbq.com/best_korean_bbq_restaurant_nyc/wp-content/uploads/2011/07/BT1H8697A1.jpg"
      ],
      "logoUrl": "http://logos.textgiraffe.com/logos/logo-name/Picnic-designstyle-picnic-m.png"
  },
  {
      "title": "Dog walking",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "dog",
        "walking",
        "plimbat",
        "caini"
      ],
      "imageUrls": [
        "http://www.small-tips.info/wp-content/uploads/best-dog-walkers.jpg",
        "http://dogsinla.com/wp-content/uploads/2012/02/Walking-Dog.jpg",
        "http://www.smallbizio.com/wp-content/uploads/2013/02/walkingdogs-MiguelVillagran.jpg",
        "http://sofashionbasic.files.wordpress.com/2013/03/ootd-early-spring-dog-walking-2.jpg",
        "http://www.thesocialpetwork.net.au/wp-content/uploads/2012/09/dog-walking-background.jpg"
      ],
      "logoUrl": "http://rightofwaydogs.com/wordpress/wp-content/uploads/2010/02/logo.jpg"
  },
  {
      "title": "Paintball",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "paintball"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/5/5b/SupAir_Player.jpg",
        "http://cbsbaltimore.files.wordpress.com/2013/06/114287176.jpg",
        "http://www.paintball-jungle.co.uk/Portals/3/Junior%20Paintball%20(1).JPG",
        "http://paintball.org.au/sites/default/files/imagecache/1920x1080/Paintball-003(www.myWallpapers.com)-1280x1024.jpg",
        "http://www.wallpaperno.com/download/view?resolution=2560x1600&file=MTI4MHg4NTQvMjAxMjExMDIvcGFpbnRiYWxsIDEyODB4ODU0IHdhbGxwYXBlcl93d3cud2FsbHBhcGVybm8uY29tXzkyLmpwZw==&name=cGFpbnRiYWxsXzEyODB4ODU0X3dhbGxwYXBlcg=="
      ],
      "logoUrl": "http://st.depositphotos.com/1411161/1949/v/950/depositphotos_19492695-paintball-Logo.jpg"
  },
  {
      "title": "Airsoft",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "airsoft"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/a/a3/Flickr_-_The_U.S._Army_-_Airsoft_adds_hard_edge_to_combat_training.jpg",
        "http://www.traveloutthere.com/files/photo_gallery/double-tap-airsoft-exercise-2.jpg",
        "http://blog.airsoft-squared.com/wp-content/uploads/2013/02/airsoft-tactics.jpg",
        "http://static.wallpedes.com/wallpaper/airsoft/airsoft-rifles-guns-wallpaper-wallpaper-hd-gun-for-mobile-airsoft-rifles-guns.jpg",
        "http://i.ytimg.com/vi/47zqObF8jj0/maxresdefault.jpg"
      ],
      "logoUrl": "http://www.clubkosa.com/new/images/logo_klein/airsoft_logo_mini.gif"
  },
  {
      "title": "Board games",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "pub",
        "game",
        "jocuri",
        "de",
        "societate",
        "board",
        "games"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/a/a3/TCMI_beaded_board_game_2.jpg",
        "http://hebus.org/files/BULK_WALLPAPERS/Abstract%20chess%20board%20games%20spheres.jpg",
        "https://secure.static.tumblr.com/bdfb8bdddc37267841a4bfa9fa3d04ab/jhq11xg/DQvn7c6z0/tumblr_static_the_settlers_of_catan_board_game_by_ninjawolfx-d5ucfsn.png",
        "http://wikigag.com/wp-content/uploads/2014/06/domino1.jpg",
        "http://images8.alphacoders.com/453/453961.jpg",
        "http://images2.alphacoders.com/459/459548.jpg"
      ],
      "logoUrl": "http://olivier-pompili.com/wp-content/uploads/2012/10/pieces.jpg"
  },
  {
      "title": "Poker",
      "categories": [
        "social"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "poker",
        "cash",
        "texas",
        "hold'em"
      ],
      "imageUrls": [
        "http://www.jtech.com/wp-content/uploads/2013/04/casino_cards.jpg",
        "http://empirewallpapers.net/distribuce-s2/poker_20120105_16.jpg",
        "http://st.gdefon.com/wallpapers_original/wallpapers/233976_poker_karty_piki_kombinaciya_royal_1920x1200_(www.GdeFon.ru).jpg",
        "http://wallpaperfeed.com/wp-content/uploads/2014/01/Poker-Cards-Chips-Wallpaper.jpg",
        "http://t.wallpaperweb.org/wallpaper/miscellaneous/1920x1200/Playing_BlackJack.jpg"
      ],
      "logoUrl": "http://www.spicejar.org/asiplease/images/wsop.jpg"
  },
  {
      "title": "Beer Pong",
      "categories": [
        "social"
      ],
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "pub",
        "bar",
        "beer",
        "pong"
      ],
      "imageUrls": [
        "http://www.bobkeeferlaw.com/wp-content/uploads/2014/04/Beer-pong.jpg",
        "http://cdn-api.skim.gs/images/view/542c74c8a293990a50a6ed8e/16x9"
      ],
      "logoUrl": "http://officiallydrunk.com/wp-content/themes/Officially_Drunk_v1.1/timthumb.php?src=/wp-content/uploads/2009/10/game-logo-beer-pong.png&w=380&h=217&zc=1&q=100"
  },
  {
      "title": "Paddling",
      "categories": [
        "water"
      ],
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "vaslit",
        "paddling"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/1/14/An_adult_and_child_enjoy_their_time_paddling_a_kayak.jpg",
        "http://www.canoeimports.com/images/paddling_lg.jpg",
        "http://kipwkoelsch.files.wordpress.com/2010/01/paddling-team.jpg",
        "http://www.bicsup.com/images/wallpapers/BSPS_Wallpaper01_2560x1440.jpg",
        "http://www.lake-skadar.com/_images/grmozurkayak.jpg",
        "http://4.bp.blogspot.com/_NfEJ3hvs5DA/TBLXomuhN6I/AAAAAAAABj0/NbIC1So0jQA/s1600/06-RossLake+032+Ralphleitner.jpg"
      ],
      "logoUrl": "http://nikkirekman.files.wordpress.com/2012/09/dcckc_logo.jpg?w=200&h=161"
  },
  {
      "title": "Swimming",
      "categories": [
        "water"
      ],
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "pool",
        "piscina",
        "inot",
        "natatie",
        "swimming",
        "bazin"
      ],
      "imageUrls": [
        "http://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/231000_-_Swimming_Daniel_Bell_reflections_action_-_3b_-_2000_Sydney_event_photo.jpg/1920px-231000_-_Swimming_Daniel_Bell_reflections_action_-_3b_-_2000_Sydney_event_photo.jpg",
        "http://1hdwallpapers.com/wallpapers/ready_for_swimming.jpg",
        "http://www.hdnicewallpapers.com/Walls/Big/Cute%20Baby/Cute_Small_Kid_Swimming_in_Water_Photo.jpg",
        "http://www.hdwallpaperscool.com/wp-content/uploads/2014/07/olympic-swimming-desktop-wallpapers-of-high-resolution.jpg",
        "http://wallpapers55.com/wp-content/uploads/2013/12/hd-wallpaper-penha-longa-golf-resort-kids-swimming-pool.jpg"
      ],
      "logoUrl": "http://thumbs.dreamstime.com/x/swimming-logo-19206897.jpg"
  },
  {
      "title": "Ultimate frisbee",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [
        "frisbee"
      ],
      "imageUrls": [
        "http://www10.unine.ch/sun/files/2012/07/frisbee.jpg",
        "http://nathanworden.files.wordpress.com/2010/04/img_7995.jpg",
        "http://broadsideonline.com/files/2013/04/Ultimate2_C.jpg",
        "http://www.wpcc.org.uk/img/Frisbee.jpg",
        "http://www.nutrisport-magazin.cz/wp-content/uploads/frisbee-on-beach1.jpg",
        "http://media2.onsugar.com/files/2013/09/06/072/n/28443503/b2de12893a8633ac_shutterstock_79478146.xxxlarge/i/Beach-Frisbee.jpg",
        "https://urbanfragment.files.wordpress.com/2012/06/catching-the-frisbee-by-dando.jpg"
      ],
      "logoUrl": "http://lakanal.net/calendrier/frisbee.gif"
  },
  {
      "title": "Sports, Fun & Related Activities",
      "categories": [
        "outdoor"
      ],
      "keywords": [
        "adventure",
        "park"
      ],
      "description": null,
      "tags": [
        "adventure",
        "park",
        "tiroliana",
        "tir",
        "cu",
        "arcul",
        "escalada",
        "catarat",
        "summer",
        "tubing",
        "zorbing",
        "rotondo",
        "bob",
        "de",
        "vara"
      ],
      "imageUrls": [
        "http://media.prleap.com/image/13177/640/DAP_AWPic4222_crop.jpg",
        "http://thepaperwall.com/wallpapers/misc/big/big_48272c01257d4c91b5759dd899ab0f0806b660e7.jpg",
        "http://adrenalinpark.ro/wp-content/uploads/ngg_featured/image014-e1410191463664.jpg",
        "http://www.desktopwallpaper2.com/photo/1e602da2ac9ac43b954aee58fddff33a.jpg",
        "http://wallpoper.com/images/00/21/71/37/sports-skydiving_00217137.jpg",
        "http://topwalls.net/wp-content/uploads/2012/12/Skydive.jpg",
        "http://3.bp.blogspot.com/-Ql2AMsZFeDo/UGXjr5dhlHI/AAAAAAAABzg/028SBegHYKE/s1600/wallpaper-1108650.jpg",
        "http://www.hdwallpaperscool.com/wp-content/uploads/2014/07/surf-surfing-hd-wallpaper-of-high-resolution-full-free.jpg",
        "http://www.hdwallpaperpc.com/preview/Water_Ski_Jump_Stop_Action_67780/resolution_1920x1080",
        "http://www.hdwallpapersimages.com/wp-content/uploads/Bungee-Jumping-Images.jpg",
        "http://i.ytimg.com/vi/iD4qsWnjsNU/maxresdefault.jpg"
      ],
      "logoUrl": "http://www.logofromdreams.com/wp-content/uploads/tdomf/7211/adventure_vasvari.jpg"
  }
    ]);

}).call(this, this.angular);