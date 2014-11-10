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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg"
  },
  {
      "title": "Table tennis",
      "category": "Ballgames",
      "keywords": [
        "Ping-Pong"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/b/be/Table_tennis_Rio_2007.jpg"
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tough_return%2C_365.35.jpg/200px-Tough_return%2C_365.35.jpg"
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/3/38/Volleyball_game.jpg"
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/b/b0/Mansoor_Ahmed_photos_of_Team_USA_basketball_at_London_2012_Olympics.jpg"
  },
  {
      "title": "Soccer",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1920px-Youth-soccer-indiana.jpg"
  },
  {
      "title": "Baloon football",
      "category": "Ballgames",
      "keywords": [
        "indoor",
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/10582800_10152647973508255_5113987544596549362_o.jpg"
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
      "imageUrl": null
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/1/12/Team_Handball_Jumpshot_09_USA_Nationals.JPG"
  },
  {
      "title": "Bowling",
      "category": "Ballgames",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": null
  },
  {
      "title": "Pool / Biliard",
      "category": "Ballgames",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": null
  },
  {
      "title": "Snooker",
      "category": "Ballgames",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": null
  },
  {
      "title": "Aerobics / Fitness / Gym",
      "category": "Indoor activities",
      "keywords": [
        "indoor"
      ],
      "description": null,
      "tags": [
        "gym,",
        "kangoo",
        "jumps,",
        "pilates,",
        "tae",
        "bo,",
        "step,",
        "cardio,",
        "yoga,",
        "zumba,",
        "belly",
        "dance,",
        "streching,",
        "body",
        "training,",
        "fitness,",
        "bodybuilding,",
        "kickboxing,",
        "fitball,",
        "aerobics"
      ],
      "imageUrl": "http://lunar.thegamez.net/threadmill/treadmill-running-workout/becoming-a-gym-junkie-gwinnett-magazine-5102x3401.jpg"
  },
  {
      "title": "Mountain biking",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "MTB"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/7/7e/ZF-1931-66284-1-004.jpg"
  },
  {
      "title": "Hiking",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/4/4e/Hiker_and_Redfish_Canyon_from_Alpine_Lake_trail_in_Sawtooth_Wilderness.jpg"
  },
  {
      "title": "Trekking",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://www.negozislalom.com/download/324bd26_trekking.jpg"
  },
  {
      "title": "Snowboarding",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://www.hdwallpaperstock.eu/wallpapers/snowboarding-2880x1800.jpg"
  },
  {
      "title": "Skiing",
      "category": "Mountain activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/3/38/Telemark_skiing_-_Pyrenees.jpg"
  },
  {
      "title": "Skating",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": null
  },
  {
      "title": "Paragliding",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lima,_Peru_-_Paragliding_003.jpg"
  },
  {
      "title": "Running",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://www.shockya.com/news/wp-content/uploads/Sports-Running-Natural-Park.jpg"
  },
  {
      "title": "Cycling",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/f/f4/US_Navy_070728-N-1722M-178_Two_Navy_triathletes_lead_the_way_during_the_cycling_portion_of_the_Armed_Forces_Triathlon_at_Point_Mugu.jpg"
  },
  {
      "title": "Horseback riding",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/f/fd/North_Forks_Cardi_Trot_5-Apr-09_3-48_PM.jpg"
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/1/19/Overhanging_rock_climbing.jpg"
  },
  {
      "title": "Skateboarding",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/8/8e/1_bowl_skate_boarding.JPG"
  },
  {
      "title": "Rollerskating",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [
        "park"
      ],
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/9/9b/Skaters_in_Audubon_Park_New_Orleans.jpg"
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/0/0a/Girls_on_a_Picnic_(6760195675).jpg"
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Three_generations_of_West_Highland_Terrier.JPG/1280px-Three_generations_of_West_Highland_Terrier.JPG"
  },
  {
      "title": "Paintball",
      "category": "Outdoor activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": null
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/a/a3/TCMI_beaded_board_game_2.jpg"
  },
  {
      "title": "Paddling",
      "category": "Water activities",
      "keywords": [
        "outdoor"
      ],
      "description": null,
      "tags": [],
      "imageUrl": "http://commons.wikimedia.org/wiki/File:An_adult_and_child_enjoy_their_time_paddling_a_kayak.jpg"
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
      "imageUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/231000_-_Swimming_Daniel_Bell_reflections_action_-_3b_-_2000_Sydney_event_photo.jpg/1920px-231000_-_Swimming_Daniel_Bell_reflections_action_-_3b_-_2000_Sydney_event_photo.jpg"
  }
    ]);

}).call(this, this.angular);