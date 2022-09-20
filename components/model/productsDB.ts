const productsDB = [
  {
    id: "p1",
    productName: [
      "ALMOND BUTTER", // thin text
      "" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Nut Butter"],
    featuredInCarousel: false,
    mainDescription: {
      main: [
        ["", "11 oz Jar", ""], // 1 paragraph - bold, bulk, bold
        ["", "In-store ground almond butter from dry roasted diced almonds. No sugar, salt or oils added. Slightly chunky texture.", ""]
      ],
      unOrderedList: [
        ["", ""], // item1 - bold text, regular text
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: ""
    },
    variations: [
      {
        size: "",
        price: 8.0,
        weight: "12.4 oz",
        dimensions: "3.5 × 3 × 3 in",
      }
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/almond-butter/",
      thumbnailRegular: [ // carousel
        `AlmondButter-348x348.jpg`,
        `AlmondButter_Back-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom
        `AlmondButter-100x100.jpg`,
        `AlmondButter_Back-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom
        `AlmondButter-348x348.jpg`,
        `AlmondButter_Back-348x348.jpg`,
      ],
      hd: [ // zoomed image
        `AlmondButter.jpg`,
        `AlmondButter_Back.jpg`,
      ]
    },
  },
  {
    id: "p2",
    productName: [
      "ALMOND BUTTER", // thin text
      "COOKIE BITES" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Cookie Bites", "Grain Free"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Almond Butter Cookie Bites  are out of this world delicious, contain simple, Whole30 and Paleo approved ingredients, are Vegan, dairy free, grain free, gluten free and the perfect little treat any time of the day. The bites are fully cooked and ready to eat. They have a soft, cookie dough like texture that makes these little delights ever so indulgent without the guilt.", ""], 
        ["", "Other Whole30 and Paleo snacks don’t compare to this mix of rich flavors, all in a naturally gluten and dairy-free snack. Available in 4 flavors: Original, Pumpkin, Red Velvet, and Toasted Coconut. Order online today!", ""],
        ["", "Each container holds 6 bites and weighs 3oz.", ""],
      ],
      unOrderedList: [
        ["", ""], // item1 - bold text, regular text
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "3 oz container",
        price: 6.00      ,
        weight: "3.2 oz",
        dimensions: "5.5 × 5 × 1.25 in",
      },
      {
        size: "Pack of 3 (3 oz containers)",
        price: 16.00      ,
        weight: "9.6 oz",
        dimensions: "5.5 × 5 × 4 in",
      },
      {
        size: "Pack of 6 (3 oz containers)",
        price: 32.00      ,
        weight: "19.6 oz",
        dimensions: "5.5 × 9.75 × 4 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS (ALMONDS, COCONUT). PROCESSED ON THE SAME EQUIPMENT AS PEANUTS, OTHER TREE NUTS, SOY, WHEAT, AND MILK.",
      ingredients:
        "Almond Butter (almonds), Water, Raisins (raisins, sunflower oil), Dates, Coconut, Flaxmeal, Natural Flavoring, Baking Soda, Salt",
    },
    images: {
      folderName: "/almond-butter-cb/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `almond-front-348x348.jpg`,
        `almond-back-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `almond-front-100x100.jpg`,
        `almond-back-100x100.jpg`,
        `almond-ss-website-1-100x100.png`,
        `almond-label-back-1-100x100.png`,
        `almond-label-front-100x100.png`,
        `almond-side-100x100.png`,
        `Almond-top-100x100.png`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `almond-front-454x454.jpg`,
        `almond-back-454x454.jpg`,
        `almond-ss-website-1-454x631.png`,
        `almond-label-back-1-454x454.png`,
        `almond-label-front-454x454.png`,
        `almond-side-454x454.png`,
        `Almond-top-454x454.png`,
      ],
      hd: [ // zoomed image
        `almond-front.jpg`,
        `almond-back.jpg`,
        `almond-ss-website-1.png`,
        `almond-label-back-1.png`,
        `almond-label-front.png`,
        `almond-side.png`,
        `Almond-top.png`,
      ]
    },
  },
  {
    id: "p3",
    productName: [
      "BANANA BREAD", // thin text
      "NUT BUTTER" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Grain Free", "Nut Butter"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Sweet & Savory Snacks has created a line of better-for-you nut butter spreads resembling some of our favorite desserts. Enjoy these delightful combinations right out of the jar, with fruit or as a spread!", ""], 
        ["", "A delicious blend of peanuts, cashews, walnuts, banana and chocolate chips that tastes like banana bread!", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "PEANUT & CASHEW NUT BUTTER", 
          "blended with banana, walnuts and chocolate chips that is made with Gluten free, Dairy Free, Soy Free ingredients."
        ], 
        [
          "LOW IN CARBS – ONLY 5G SUGAR", 
          "per serving with 10G TOTAL CARBS and 6G of plant based protein."
        ], 
        [
          "VEGAN PLANT BASED REAL FOOD", 
          "Great for an everyday low-carb breakfast, snack or dessert"
        ], 
        [
          "NO ADDED OILS!", 
          "A delicious mixture of peanuts, cashews, walnuts, banana and chocolate"
        ], 
        [
          "DIETITIAN APPROVED", 
          "All of Sarah’s Snacks products are formulated by a Registered Dietitian so that you can feel good about what you eat."
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 14.00      ,
        weight: "20 oz",
        dimensions: "2.75 × 2.75 × 4.75 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS PEANUTS AND TREE NUTS. MADE IN A FACILITY THAT ALSO PROCESSES OTHER TREE NUTS, WHEAT, SOY AND MILK.",
      ingredients:
        "Peanuts, Cashews, Walnuts, Banana, Coconut Sugar, Chocolate Chips (Cane Sugar, Unsweetened Chocolate, Cocoa Butter), Natural Flavoring, Salt, Cinnamon",
    },
    images: {
      folderName: "/banana-bread/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `BananaBread_Front-WHT-454x454.png`,
        `BananaBread_Back-WHT-454x454.png`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `BananaBread_Front-WHT-100x100.png`,
        `BananaBread_Back-WHT-100x100.png`,
        `BB-nutrition-100x100.png`,
        `Banana-bread-promo-100x100.png`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `BananaBread_Front-WHT-454x454.png`,
        `BananaBread_Back-WHT-454x454.png`,
        `BB-nutrition-454x454.png`,
        `Banana-bread-promo-454x303.png`,
      ],
      hd: [ // zoomed image
        `BananaBread_Front-WHT.png`,
        `BananaBread_Back-WHT.png`,
        `BB-nutrition.png`,
        `Banana-bread-promo.png`,
      ]
    },
  },
  {
    id: "p4",
    productName: [
      "BANANA", // thin text
      "MAPLE" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Grain Free"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "This paleo diet inspired snack is a grain-free blend of hearty sunflower seeds, flax, bananas and maple syrup. Other paleo snacks don’t compare to this mix of rich flavors, all in a naturally gluten and dairy-free snack. Order today!", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        ["", ""], // item1 - bold text, regular text
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "2oz bag (12)",
        price: 24.00,
        weight: "27.4 oz",
        dimensions: "7 × 10 × 3 in",
      },
      {
        size: "7oz bag",
        price: 6.99,
        weight: "7.4 oz",
        dimensions: "6 × 9 × 2.25 in",
      },
      {
        size: "5lb bag",
        price: 49.75,
        weight: "88 oz",
        dimensions: "12 × 9 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS (WALNUTS). PROCESSED IN A FACILITY THAT CONTAINS OTHER TREE NUTS, WHEAT, PEANUTS, SOY AND MILK. MAY CONTAIN PIT OR SHELL FRAGMENTS.",
      ingredients:
        "sunflower seeds, maple syrup, walnuts, banana, organic dried bananas, flax seed, organic cinnamon, sea salt",
    },
    images: {
      folderName: "/banana-maple/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `banana-maple-front-348x348.jpg`,
        `banana-maple-back-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `banana-maple-front-100x100.jpg`,
        `banana-maple-back-100x100.jpg`,
        `DRW3378-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `banana-maple-front-454x454.jpg`,
        `banana-maple-back-454x454.jpg`,
        `DRW3378-454x472.jpg`, 
      ],
      hd: [ // zoomed image
        `banana-maple-front.jpg`,
        `banana-maple-back.jpg`,
        `DRW3378.jpg`, 
      ]
    },
  },
  {
    id: "p5",
    productName: [
      "BEST SELLING TRIO", // thin text
      "GIFT SET" // bold text  
    ],
    otherName: "Best Selling Trio",
    nameColor: 'dark-leaf-green',
    category: ["Gifts"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "A gift set of our best selling snacks is a unique gift for those who have everything. Also a unique gift for co-workers, clients, bosses, hostesses, mom’s, best friends and anyone who loves snacks! Order online today.", ""], 
        ["", "Contains one bag each: 10oz Vanilla Ginger, 10oz Peanut Butter & Chocolate, 10oz Peanut Butter & Jelly", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 20.00,
        weight: "38 oz",
        dimensions: "12 × 9 × 4 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/best-selling-trio/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Best-Selling-Gift-Set-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        ``,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Best-Selling-Gift-Set-454x454.jpg`,
      ],
      hd: [ // zoomed image
        `Best-Selling-Gift-Set.jpg`,
      ]
    },
  },
  {
    id: "p6",
    productName: [
      "CACAO COCONUT", // thin text
      "BRITTLE" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Vegan Brittle"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["NEW!", "Vegan candy brittle made with organic coconut oil, organic brown rice syrup, whole cashews, almonds, organic coconut chips and cacao nibs with an irresistibly good sweet & salty, light & crunchy texture.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "VEGAN BRITTLE", 
          "– Better-for-you twist on a classic candy"
        ], 
        [
          "DIETITIAN APPROVED", 
          "– All of Sarah’s Snacks products are formulated by a Registered Dietitian so that you can feel good about what you eat"
        ],
        [
          "MADE WITH DAIRY-FREE, GLUTEN-FREE, NON-GMO INGREDIENTS", 
          "– no corn syrup!"
        ],
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "4 oz",
        price: 6.00,
        weight: "4.4 oz",
        dimensions: "6 × 9 × 2.25 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/ccb/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `ccb-front-348x348.jpg`,
        `ccb-back-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `ccb-front-100x100.jpg`,
        `ccb-back-100x100.jpg`,
        `IMG_7962-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `ccb-front-454x454.jpg`,
        `ccb-back-454x454.jpg`,
        `IMG_7962-454x303.jpg`,
      ],
      hd: [ // zoomed image
        `ccb-front.jpg`,
        `ccb-back.jpg`,
        `IMG_7962.jpg`,
      ]
    },
  },
  {
    id: "p7",
    productName: [
      "CHIA & FLAX", // thin text
      "OATMEAL CUP" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Oatmeal Cups"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Oatmeal Cups are packed with plant protein from oats, nuts and seeds. Convenient and easy to make, these plant protein rich oatmeal cups are perfect for breakfast, lunch or a snack any time of the day. Simply add hot water, stir and enjoy!", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "HOW TO PREPARE", // title
        items: [
          "Remove lid.", // item1
          "Pour 1 cup HOT water into the bowl.",
          "Stir and let stand for 2-3 minutes.",
          "Add water or milk to adjust thickness.",
          "Devour.",
        ]
      },
      last: "CAUTION: BOWL AND CONTENTS MAY BE HOT DO NOT MICROWAVE" // all caps
    },
    variations: [
      {
        size: "",
        price: 9.99,
        weight: "12 oz",
        dimensions: "8 × 4 × 6 in",
      },
    ],
    subDescription: "SOLD AS A 4 PACK – EACH CUPS IS: 2.29 OZ (65G) AND MAKES 1 SERVING",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. PROCESSED ON THE SAME EQUIPMENT AS SOY, OTHER TREE NUTS, PEANUTS, WHEAT AND MILK.",
      ingredients:
        "oats, chia seeds, flax seeds, coconut sugar, cinnamon, allspice",
    },
    images: {
      folderName: "/chia-flax/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Chia-Flax-Front-348x348.jpg`,
        `Sarahs-Oatmeal-Chia-Flax-Label-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Chia-Flax-Front-100x100.jpg`,
        `Sarahs-Oatmeal-Chia-Flax-Label-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Chia-Flax-Front-454x454.jpg`,
        `Sarahs-Oatmeal-Chia-Flax-Label-474x1024.jpg`,
      ],
      hd: [ // zoomed image
        `Chia-Flax-Front.jpg`,
        `Sarahs-Oatmeal-Chia-Flax-Label.jpg`,
      ]
    },
  },
  {
    id: "p8",
    productName: [
      "CHOCOLATE", // thin text
      "CHIA" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-brown',
    category: ["Grain Free"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "This paleo diet inspired snack is a grain-free blend of antioxidant rich cocoa powder, cocoa nibs and chia seeds. Other paleo snacks don’t compare to this mix of rich flavors, all in a naturally gluten and dairy-free snack. Order today!", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "2oz bag (12)",
        price: 24.0,
        weight: "27.4 oz",
        dimensions: "7 × 10 × 3 in",
      },
      {
        size: "7oz bag",
        price: 6.99,
        weight: "7.4 oz",
        dimensions: "6 × 9 × 2.25 in",
      },
      {
        size: "5lb bag",
        price: 49.75,
        weight: "88 oz",
        dimensions: "12 × 9 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS (ALMONDS). PROCESSED IN A FACILITY THAT CONTAINS OTHER TREE NUTS, WHEAT, MILK, SOY AND PEANUTS. MAY CONTAIN PIT OR SHELL FRAGMENTS.",
      ingredients:
        "sunflower seeds, organic blue agave, almonds, chia seeds, organic cocoa nibs, organic cocoa powder, organic molasses, organic cinnamon, natural flavoring, espresso, sea salt.",
    },
    images: {
      folderName: "/chocchia/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `chocchia-front-348x348.jpg`,
        `chocchia-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `chocchia-front-100x100.jpg`,
        `chocchia-back-100x100.jpg`,
        `DRW3388-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `chocchia-front-454x454.jpg`,
        `chocchia-back-454x454.jpg`,
        `DRW3388-454x434.jpg`
      ],
      hd: [ // zoomed image
        `chocchia-front.jpg`,
        `chocchia-back.jpg`,
        `DRW3388.jpg`,
      ]
    },
  },
  {
    id: "p9",
    productName: [
      "CHOCOLATE", // thin text
      "PEANUT BUTTER" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Grain Free", "Nut Butter"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "11 oz Jar", ""], 
        ["", "Dry Roasted Peanut Splits, Vanilla Semi-sweet Chocolate Drops (sugar, chocolate liquor, cocoa butter, dextrose, soy lecithin (an emulsifier), vanilla). Contains Milk, Peanut, Soy. Processed on equipment that also processes: Crustacean Shellfish, Egg, Fish, Milk, Peanut, Soy, Tree Nuts (Almond, Brazil Nut, Cashew, Coconut, Filbert (Hazelnut), Macadamia Nut, Pecan, Pine Nut, Pistachio, Walnut) and Wheat.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 5.0,
        weight: "13 oz",
        dimensions: "",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. PROCESSED ON THE SAME EQUIPMENT AS SOY, OTHER TREE NUTS, PEANUTS, WHEAT AND MILK.",
      ingredients:
        "oats, currants, hulled hemp seeds, garlic, curry powder (turmeric, black pepper, chili powder, star anise, fennel seed, fenugreek seed, coriander, cumin, allspice, salt)",
    },
    images: {
      folderName: "/cpb/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `ChocolatePB-348x348.jpg`,
        `Choc-PN-Butter-348x348.png`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `ChocolatePB-100x100.jpg`,
        `Choc-PN-Butter-100x100.png`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `ChocolatePB-454x500.jpg`,
        `Choc-PN-Butter.png`
      ],
      hd: [ // zoomed image
        `ChocolatePB.jpg`,
        `Choc-PN-Butter.png`
      ]
    },
  },
  {
    id: "p10",
    productName: [
      "CINNAMON RAISIN", // thin text
      "OATMEAL CUP" // bold text  
    ],
    otherName: "",
    nameColor: 'light-brown',
    category: ["Oatmeal Cups"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Oatmeal Cups are packed with plant protein from oats, nuts and seeds. Convenient and easy to make, these plant protein rich oatmeal cups are perfect for breakfast, lunch or a snack any time of the day. Simply add hot water, stir and enjoy!", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "HOW TO PREPARE", // title
        items: [
          "Remove lid.", // item1
          "Pour 1 cup HOT water into the bowl.",
          "Stir and let stand for 2-3 minutes.",
          "Add water or milk to adjust thickness.",
          "Devour.",
        ]
      },
      last: "CAUTION: BOWL AND CONTENTS MAY BE HOT DO NOT MICROWAVE" // all caps
    },
    variations: [
      {
        size: "12 oz",
        price: 9.99,
        weight: "",
        dimensions: "8 × 4 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. PROCESSED ON THE SAME EQUIPMENT AS SOY, OTHER TREE NUTS, PEANUTS, WHEAT AND MILK.",
      ingredients:
        "oats, raisins (raisins, sunflower oil), flax meal, coconut sugar, cinnamon",
    },
    images: {
      folderName: "/cinnamon-raisin/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Cinnamon-Raisin-Front-348x348.jpg`,
        `Sarahs-Oatmeal-Cinnamon-Raisin-Label-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Cinnamon-Raisin-Front-100x100.jpg`,
        `Sarahs-Oatmeal-Cinnamon-Raisin-Label-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Cinnamon-Raisin-Front-454x454.jpg`,
        `Sarahs-Oatmeal-Cinnamon-Raisin-Label.jpg`,
      ],
      hd: [ // zoomed image
        `Cinnamon-Raisin-Front.jpg`,
        `Sarahs-Oatmeal-Cinnamon-Raisin-Label.jpg`,
      ]
    },
  },
  {
    id: "p11",
    productName: [
      "HONEY PISTACHIO", // thin text
      "ENERGY BITES" // bold text  
    ],
    otherName: "",
    nameColor: 'light-brown',
    category: ["Snacks"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Chunks of Energy® bites are delicious bite-size plant-based squares. Packaged in 2.4 oz portions for on-the-go snacking. Perfect for pre-workout!", ""], 
        ["", "Available in four flavors: Organic Cacao Goji, Organic Lemon Pomegranate, Organic Date Flax Turmeric, Honey Pistachio.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 10.0,
        weight: "12.6 oz",
        dimensions: "5.5 × 4.25 × 3.5 in",
      },
    ],
    subDescription: "Sold in packs of four. Each pack is 2.4 oz",
    additionalInfo: {
      warning:
        "Contains tree nuts (Pistachio, Soy, May contain occasional nut shell fragment or seed husk.",
      ingredients:
        "Organic – Sunflower seeds, honey, soy flour, roasted non-GMO pumpkin seeds, pistachios, apricots (may contain rice flour), dates, figs, pistachio extract",
    },
    images: {
      folderName: "/honey-pistachio/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Honey-pistachio.jpg`,
        `Honey-Pistachio-Nutrition-Label-348x348.png`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Honey-pistachio-100x100.jpg`,
        `Honey-Pistachio-Nutrition-Label-100x100.png`,
        `honey-pistachio-ingredients-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Honey-pistachio.jpg`,
        `Honey-Pistachio-Nutrition-Label.png`,
        `honey-pistachio-ingredients-454x341.jpg`
      ],
      hd: [ // zoomed image
        `Honey-pistachio.jpg`,
        `Honey-Pistachio-Nutrition-Label.png`,
        `honey-pistachio-ingredients.jpg`
      ]
    },
  },
  {
    id: "p12",
    productName: [
      "ORGANIC CACAO GOJI", // thin text
      "ENERGY BITES" // bold text  
    ],
    otherName: "",
    nameColor: 'light-brown',
    category: ["Snacks"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Chunks of Energy® bites are delicious bite-size plant-based squares. Packaged in 2.4 oz portions for on-the-go snacking. Perfect for pre-workout!", ""], 
        ["", "Available in four flavors: Organic Cacao Goji, Organic Lemon Pomegranate, Organic Date Flax Turmeric, Honey Pistachio.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 10.0,
        weight: "12.6 oz",
        dimensions: "5.5 × 4.25 × 3.5 in",
      },
    ],
    subDescription: "Sold in packs of four. Each pack is 2.4 oz",
    additionalInfo: {
      warning:
        "Allergen: Tree Nuts. May contain occasional nut shell fragments or seed husk.",
      ingredients:
        "Organic – dates, sunflower seeds, raisins, cacao powder, apricots, sesame seeds, coconut, goji powder. natural flavors.",
    },
    images: {
      folderName: "/cacao-goji/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Cacao-Goji.jpg`,
        `Cacoa-goji-Nutrition-label-348x348.png`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Cacao-Goji-100x100.jpg`,
        `Cacoa-goji-Nutrition-label-100x100.png`,
        `cacoa-goji-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Cacao-Goji.jpg`,
        `Cacoa-goji-Nutrition-label.png`,
        `cacoa-goji-454x341.jpg`
      ],
      hd: [ // zoomed image
        `Cacao-Goji.jpg`,
        `Cacoa-goji-Nutrition-label.png`,
        `cacoa-goji.jpg`
      ]
    },
  },
  {
    id: "p13",
    productName: [
      "ORGANIC DATE FLAX TURMERIC", // thin text
      "ENERGY BITES" // bold text  
    ],
    otherName: "",
    nameColor: 'light-brown',
    category: ["Snacks"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Chunks of Energy® bites are delicious bite-size plant-based squares. Packaged in 2.4 oz portions for on-the-go snacking. Perfect for pre-workout!", ""], 
        ["", "Available in four flavors: Organic Cacao Goji, Organic Lemon Pomegranate, Organic Date Flax Turmeric, Honey Pistachio.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 10.0,
        weight: "12.6 oz",
        dimensions: "5.5 × 4.25 × 3.5 in",
      },
    ],
    subDescription: "Sold in packs of four. Each pack is 2.4 oz",
    additionalInfo: {
      warning:
        "May contain occasional seed husk.",
      ingredients:
        "Organic – dates, sesame seeds, sunflower seeds, raisins, carob powder, apricots, flax seeds, chia seeds, turmeric, natural flavor, black pepper, acai powder",
    },
    images: {
      folderName: "/date-flax/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Date-Flax.jpg`,
        `Date-Flax-Nutrition-label-348x348.png`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Date-Flax-100x100.jpg`,
        `Date-Flax-Nutrition-label-100x100.png`,
        `date-flax-ingredients-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Date-Flax.jpg`,
        `Date-Flax-Nutrition-label.png`,
        `date-flax-ingredients-454x341.jpg`
      ],
      hd: [ // zoomed image
        `Date-Flax.jpg`,
        `Date-Flax-Nutrition-label.png`,
        `date-flax-ingredients.jpg`
      ]
    },
  },
  {
    id: "p14",
    productName: [
      "ORGANIC LEMON POMEGRANATE", // thin text
      "ENERGY BITES" // bold text  
    ],
    otherName: "",
    nameColor: 'light-brown',
    category: ["Snacks"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Chunks of Energy® bites are delicious bite-size plant-based squares. Packaged in 2.4 oz portions for on-the-go snacking. Perfect for pre-workout!", ""], 
        ["", "Available in four flavors: Organic Cacao Goji, Organic Lemon Pomegranate, Organic Date Flax Turmeric, Honey Pistachio.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", 
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 10.0,
        weight: "12.6 oz",
        dimensions: "5.5 × 4.25 × 3.5 in",
      },
    ],
    subDescription: "Sold in packs of four. Each pack is 2.4 oz",
    additionalInfo: {
      warning:
        "Allergen: Tree nuts, May contain occasional nutshell fragment or seed husk.",
      ingredients:
        "Organic – dates, sunflower seeds, raisins, cashews, apricots, sesame seeds, coconut, poppy seeds, lemon extract, pomegranate powder, maca powder.",
    },
    images: {
      folderName: "/lemon-pomegranate/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Lemon-Pomegranate.jpg`,
        `Lemon-Pom.-Nutrition-Label-348x348.png`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Lemon-Pomegranate-100x100.jpg`,
        `Lemon-Pom.-Nutrition-Label-100x100.png`,
        `lemon-pom-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Lemon-Pomegranate.jpg`,
        `Lemon-Pom.-Nutrition-Label.png`,
        `lemon-pom-454x341.jpg`
      ],
      hd: [ // zoomed image
        `Lemon-Pomegranate.jpg`,
        `Lemon-Pom.-Nutrition-Label.png`,
        `lemon-pom.jpg`
      ]
    },
  },
  {
    id: "p15",
    productName: [
      "GRAIN FREE", // thin text
      "GIFT SET" // bold text  
    ],
    otherName: "Grain Free Trio",
    nameColor: 'dark-leaf-green',
    category: ["Gifts"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Perfect for Paleo, Gluten-Free and Grain-Free people on your list! Order these gifts online today to gift to someone on your list or use them for your corporate gifts this year! Great gift for co-workers, hostesses, mom’s, best friends and anyone who loves Paleo, Gluten-Free, Dairy-Free and Grain-Free snacks!", ""], 
        ["", "Contains one bag each: 7 oz Grain Free Original Nut & Seed, 7 oz Grain Free Banana Maple, 7 oz Grain Free Chocolate Chia", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 20.0,
        weight: "30 oz",
        dimensions: "12 × 9 × 4 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/grain-free-trio/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `3_GiftBags-white-348x348.png`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        ``,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `3_GiftBags-white-454x454.png`,
      ],
      hd: [ // zoomed image
        `3_GiftBags-white.png`,
      ]
    },
  },
  {
    id: "p16",
    productName: [
      "GRANOLA FANATIC", // thin text
      "GIFT BASKET" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Gifts"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "If you know someone who loves granola, this is the perfect gift! They will get to try all of our granola snack flavors. Order these gifts online today to gift to someone on your list or use them for your corporate gifts this year! Great gift for co-workers, clients, bosses, hostesses, mom’s, best friends and anyone who loves granola & snacks!", "FREE SHIPPING on this gift item!"], 
        ["Contains one bag each:", "10oz Vanilla Ginger, 10oz Peanut Butter & Chocolate, 10oz Peanut Butter & Jelly, 7oz Vegan Trail Mix, 7oz Grain Free Original Nut & Seed, 7oz Grain Free Banana Maple, 7oz Grain Free Chocolate Chia.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 49.99,
        weight: "66.8 oz",
        dimensions: "11 × 12 × 8.5 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/granola-gift-basket/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Granola-Gift-Basket-348x348.jpg`,
        `Granola-Fanatic-GB-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Granola-Gift-Basket-100x100.jpg`,
        `Granola-Fanatic-GB-100x100.jpg`,
        `DSC_3327-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Granola-Gift-Basket-454x605.jpg`,
        `Granola-Fanatic-GB-454x454.jpg`,
        `DSC_3327-454x323.jpg`,
      ],
      hd: [ // zoomed image
        `Granola-Gift-Basket.jpg`,
        `Granola-Fanatic-GB.jpg`,
        `DSC_3327.jpg`,
      ]
    },
  },
  {
    id: "p17",
    productName: [
      "HEMP GINGER", // thin text
      "OATMEAL CUP" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-seaweed-green',
    category: ["Oatmeal Cups"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Oatmeal Cups are packed with plant protein from oats, nuts and seeds. Convenient and easy to make, these plant protein rich oatmeal cups are perfect for breakfast, lunch or a snack any time of the day. Simply add hot water, stir and enjoy!", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "HOW TO PREPARE", // title
        items: [
          "Remove lid.", // item1
          "Pour 1 cup HOT water into the bowl.",
          "Stir and let stand for 2-3 minutes.",
          "Add water or milk to adjust thickness.",
          "Devour.",
        ]
      },
      last: "CAUTION: BOWL AND CONTENTS MAY BE HOT DO NOT MICROWAVE" // all caps
    },
    variations: [
      {
        size: "",
        price: 9.99,
        weight: "12 oz",
        dimensions: "8 × 4 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. PROCESSED ON THE SAME EQUIPMENT AS SOY, OTHER TREE NUTS, PEANUTS, WHEAT AND MILK.",
      ingredients:
        "oats, flax meal, coconut sugar, hulled hemp seeds, candied ginger (ginger, sugar), ground ginger.",
    },
    images: {
      folderName: "/hemp-ginger/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Hemp-Ginger-Front-348x348.jpg`,
        `Sarahs-Oatmeal-Ginger-Hemp-Label-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Hemp-Ginger-Front-100x100.jpg`,
        `Sarahs-Oatmeal-Ginger-Hemp-Label-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Hemp-Ginger-Front-454x454.jpg`,
        `Sarahs-Oatmeal-Ginger-Hemp-Label-454x882.jpg`,
      ],
      hd: [ // zoomed image
        `Hemp-Ginger-Front.jpg`,
        `Sarahs-Oatmeal-Ginger-Hemp-Label.jpg`,
      ]
    },
  },
  {
    id: "p18",
    productName: [
      "HONEY ROASTED", // thin text
      "PEANUT BUTTER" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Grain Free", "Nut Butter"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "11 oz Jar", ""], 
        ["", "Peanuts, Sugar, Honey, Peanut and/or Canola Oil, Salt, Modified Potato Starch and/or Xanthan Gum.", ""], 
        ["", "Contains: Peanut Ingredients. Manufactured in a facility that uses peanuts and other tree nuts", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 5.00,
        weight: "13 oz",
        dimensions: "",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. PROCESSED ON THE SAME EQUIPMENT AS SOY, OTHER TREE NUTS, PEANUTS, WHEAT AND MILK.",
      ingredients:
        "oats, currants, hulled hemp seeds, garlic, curry powder (turmeric, black pepper, chili powder, star anise, fennel seed, fenugreek seed, coriander, cumin, allspice, salt)",
    },
    images: {
      folderName: "/honey-roasted-PB/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `HoneyRoastedPB-348x348.jpg`,
        `Honey-Roasted-PN-Butter-348x348.png`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `HoneyRoastedPB-100x100.jpg`,
        `Honey-Roasted-PN-Butter-100x100.png`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `HoneyRoastedPB-454x562.jpg`,
        `Honey-Roasted-PN-Butter.png`,
      ],
      hd: [ // zoomed image
        `HoneyRoastedPB.jpg`,
        `Honey-Roasted-PN-Butter.png`,
      ]
    },
  },
  {
    id: "p19",
    productName: [
      "MINI SAMPLER", // thin text
      "GIFT SET" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Gifts"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Try all of our signature flavors with this mini sampler gift set! Great for small gift occasions such as teacher gifts, Secret Santa and stocking stuffers. Order these gifts online today to gift to someone on your list!", ""], 
        ["", "Contains one bag of each: 2oz Vegan Trail Mix, 2oz Peanut Butter & Chocolate, 2oz Peanut Butter & Jelly, 2oz Vanilla Ginger", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 9.99,
        weight: "10 oz",
        dimensions: "10 × 6 × 1.25 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/mini-sampler/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Mini-Sampler-Front-348x348.jpg`,
        `DSC_3263-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Mini-Sampler-Front-100x100.jpg`,
        `DSC_3263-100x100.jpg`,
        `Vegan-Mini-Sampler-GB-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Mini-Sampler-Front-454x454.jpg`,
        `DSC_3263-454x303.jpg`,
        `Vegan-Mini-Sampler-GB-454x454.jpg`,
      ],
      hd: [ // zoomed image
        `Mini-Sampler-Front.jpg`,
        `DSC_3263.jpg`,
        `Vegan-Mini-Sampler-GB.jpg`,
      ]
    },
  },
  {
    id: "p20",
    productName: [
      "OATMEAL CUP", // thin text
      "VARIETY PACK" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Oatmeal Cups"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Oatmeal Cups are packed with plant protein from oats, nuts and seeds. Convenient and easy to make, these plant protein rich oatmeal cups are perfect for breakfast, lunch or a snack any time of the day. Simply add hot water, stir and enjoy!", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "HOW TO PREPARE", // title
        items: [
          "Remove lid.", // item1
          "Pour 1 cup HOT water into the bowl.",
          "Stir and let stand for 2-3 minutes.",
          "Add water or milk to adjust thickness.",
          "Devour.",
        ]
      },
      last: "CAUTION: BOWL AND CONTENTS MAY BE HOT DO NOT MICROWAVE" // all caps
    },
    variations: [
      {
        size: "",
        price: 9.99,
        weight: "15 oz",
        dimensions: "8 × 4 × 6 in",
      },
    ],
    subDescription: "4-pack, 5-pack",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/variety-pack/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Variety-Pack-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        ``,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Variety-Pack-454x454.jpg`,
      ],
      hd: [ // zoomed image
        `Variety-Pack.jpg`,
      ]
    },
  },
  {
    id: "p21",
    productName: [
      "ORIGINAL", // thin text
      "NUT & SEED" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-seaweed-green',
    category: ["Grain Free"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "A grain-free, paleo-inspired blend of energy packed almonds, pumpkin seeds, organic raisins, cinnamon and vanilla. This delicious mix is naturally gluten & dairy-free. Order today!", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "2oz bag (12)",
        price: 24.0,
        weight: "27.4 oz",
        dimensions: "7 × 10 × 3 in",
      },
      {
        size: "7oz bag",
        price: 6.99,
        weight: "7.4 oz",
        dimensions: "6 × 9 × 2.25 in",
      },
      {
        size: "5lb bag",
        price: 49.75,
        weight: "88 oz",
        dimensions: "12 × 9 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS (ALMONDS). MADE IN A FACILITY THAT ALSO PROCESSES PEANUTS, OTHER TREE NUTS, WHEAT, SOY AND MILK. MAY CONTAIN PIT OR SHELL FRAGMENTS.",
      ingredients:
        "almonds, sunflower seeds, pumpkin seeds, flax seeds, honey, organic raisins, organic vanilla flavoring, organic cinnamon, sea salt.",
    },
    images: {
      folderName: "/nutseed/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `nutseed-front-348x348.jpg`,
        `nutseed-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `nutseed-front-100x100.jpg`,
        `nutseed-back-100x100.jpg`,
        `forager-pile-large-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `nutseed-front-454x454.jpg`,
        `nutseed-back-454x454.jpg`,
        `forager-pile-large-454x324.jpg`
      ],
      hd: [ // zoomed image
        `nutseed-front.jpg`,
        `nutseed-back.jpg`,
        `forager-pile-large.jpg`
      ]
    },
  },
  {
    id: "p22",
    productName: [
      "PEANUT BUTTER", // thin text
      "& JELLY" // bold text  
    ],
    otherName: "",
    nameColor: 'red',
    category: ["Snacks"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "This non-GMO snack option contains a sweet blend of creamy peanut butter, toasted oats and tart cranberries. Peanut Butter & Jelly is a naturally dairy-free snack* that you can order online today.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "10oz bag",
        price: 6.99,
        weight: "10.4 oz",
        dimensions: "7 × 9 × 2.25 in",
      },
      {
        size: "2oz bag (12)",
        price: 24.00,
        weight: "27.4 oz",
        dimensions: "7 × 10 × 3 in",
      },
      {
        size: "3lb bag",
        price: 21.00,
        weight: "",
        dimensions: "",
      },
      {
        size: "5lb bag",
        price: 39.95,
        weight: "88 oz",
        dimensions: "12 × 9 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS PEANUTS. PROCESSED ON THE SAME EQUIPMENT AS TREE NUTS, SOY, WHEAT AND MILK.",
      ingredients:
        "Whole Grain Oats, Peanuts, Honey, Dried Cranberries (Cranberries, Sugar, Sunflower Oil), Peanut Butter (Peanuts, Peanut Oil, Salt), NON-GMO Canola Oil, Organic Cinnamon, Sea Salt, Rosemary Extract (Rosemary, Sunflower Oil)",
    },
    images: {
      folderName: "/pbj/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `pbj-front-348x348.jpg`,
        `pbj-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `pbj-front-100x100.jpg`,
        `pbj-back-100x100.jpg`,
        `PBandJelly-1-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `pbj-front-454x454.jpg`,
        `pbj-back-454x454.jpg`,
        `PBandJelly-1-454x467.jpg`
      ],
      hd: [ // zoomed image
        `pbj-front.jpg`,
        `pbj-back.jpg`,
        `PBandJelly-1.jpg`
      ]
    },
  },
  {
    id: "p23",
    productName: [
      "PEANUT BUTTER", // thin text
      "& CHOCOLATE" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Snacks"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "This delicious snack option contains a sweet blend of creamy peanut butter, toasted oats and rich organic dark chocolate. Peanut Butter & Chocolate is a dairy-free snack* that you can order online today.", ""], 
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "2oz bag (12)",
        price: 24.00,
        weight: "27.4 oz",
        dimensions: "7 × 10 × 3 in",
      },
      {
        size: "10oz bag",
        price: 6.99,
        weight: "10.4 oz",
        dimensions: "7 × 9 × 2.25 in",
      },
      {
        size: "3lb bag",
        price: 21.00,
        weight: "",
        dimensions: "",
      },
      {
        size: "5lb bag",
        price: 39.95,
        weight: "88 oz",
        dimensions: "12 × 9 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS PEANUTS. PROCESSED ON THE SAME EQUIPMENT AS TREE NUTS, SOY, WHEAT AND MILK.",
      ingredients:
        "Whole Grain Oats, Peanuts, Honey, Organic Chocolate Chips (Organic Cocoa Liquor, Organic Cane Sugar, Organic Cocoa Butter, Organic Natural Cocoa Powder), Peanut Butter (Peanuts, Peanut Oil, Salt), NON-GMO Canola Oil, Organic Cinnamon, Sea Salt, Rosemary Extract (Rosemary, Sunflower Oil)",
    },
    images: {
      folderName: "/pbc/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `pbc-front-348x348.jpg`,
        `pbc-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `pbc-front-100x100.jpg`,
        `pbc-back-100x100.jpg`,
        `PBandChoco-1-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `pbc-front-454x454.jpg`,
        `pbc-back-454x454.jpg`,
        `PBandChoco-1-454x424.jpg`
      ],
      hd: [ // zoomed image
        `pbc-front.jpg`,
        `pbc-back.jpg`,
        `PBandChoco-1.jpg`
      ]
    },
  },
  {
    id: "p24",
    productName: [
      "PUMPKIN SPICE", // thin text
      "COOKIE DOUGH" // bold text  
    ],
    otherName: "",
    nameColor: 'bright-orange',
    category: ["Cookie Bites", "Grain Free"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Pumpkin Spice Cookie Dough is out of this world delicious, contain simple, Whole30 and Paleo approved ingredients, are Vegan, dairy-free, grain-free, gluten-free, and the perfect little treat any time of the day. The bites are fully cooked and ready to eat. They have a soft, cookie dough-like texture that makes these little delights ever so indulgent without the guilt.", ""],
        ["", "Other Whole30 and Paleo snacks don’t compare to this mix of rich flavors, all in a naturally gluten and dairy-free snack. Available in 4 flavors: Original, Pumpkin, Red Velvet, and Toasted Coconut. Order online today!", ""], 
        ["", "Each container holds 6 bites and weighs 3oz.", ""],  
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "3 oz container",
        price: 6.00,
        weight: "3.2 oz",
        dimensions: "5.5 × 5 × 1.25 in",
      },
      {
        size: "Pack of 3 (3 oz containers)",
        price: 16.00,
        weight: "9.6 oz",
        dimensions: "5.5 × 5 × 4 in",
      },
      {
        size: "Pack of 6 (3 oz containers)",
        price: 32.00,
        weight: "19.6 oz",
        dimensions: "5.5 × 9.75 × 4 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS (ALMONDS AND COCONUT). PROCESSED ON THE SAME EQUIPMENT AS PEANUTS, OTHER TREE NUTS, SOY, WHEAT AND MILK.",
      ingredients:
        "Almond Butter (Almonds), Water, Dates, Raisins (raisins, sunflower oil), Flaxseed Meal, Pumpkin, Coconut, Natural Flavoring, Baking Soda, Cinnamon, Ginger, Cloves, Nutmeg, Salt",
    },
    images: {
      folderName: "/ps/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `ps-front-348x348.jpg`,
        `ps-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `ps-front-100x100.jpg`,
        `ps-back-100x100.jpg`,
        `pumpkin-ss-website-100x100.png`,
        `Pumpkin-top-100x100.png`,
        `pumpkin-side-100x100.png`,
        `pumpkin-label-front-100x100.png`,
        `pumpkin-label-back-100x100.png`,
        `pumpkin-inside-100x100.png`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `ps-front-454x454.jpg`,
        `ps-back-454x454 .jpg`,
        `pumpkin-ss-website-454x631.png`,
        `Pumpkin-top-454x454 .png`,
        `pumpkin-side-454x454.png`,
        `pumpkin-label-front-454x454 .png`,
        `pumpkin-label-back-454x454.png`,
        `pumpkin-inside-454x454.png`,
      ],
      hd: [ // zoomed image
        `ps-front.jpg`,
        `ps-back.jpg`,
        `pumpkin-ss-website.png`,
        `Pumpkin-top.png`,
        `pumpkin-side.png`,
        `pumpkin-label-front.png`,
        `pumpkin-label-back.png`,
        `pumpkin-inside.png`,
      ]
    },
  },
  {
    id: "p25",
    productName: [
      "PUMPKIN SPICE", // thin text
      "OATMEAL CUP" // bold text  
    ],
    otherName: "",
    nameColor: 'regular-orange',
    category: ["Oatmeal Cups"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Oatmeal Cups are packed with plant protein from oats, nuts and seeds. Convenient and easy to make, these plant protein rich oatmeal cups are perfect for breakfast, lunch or a snack any time of the day. Simply add hot water, stir and enjoy!", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "HOW TO PREPARE", // title
        items: [
          "Remove lid.", // item1
          "Pour 1 cup HOT water into the bowl.",
          "Stir and let stand for 2-3 minutes.",
          "Add water or milk to adjust thickness.",
          "Devour.",
        ]
      },
      last: "CAUTION: BOWL AND CONTENTS MAY BE HOT DO NOT MICROWAVE" // all caps
    },
    variations: [
      {
        size: "",
        price: 9.99,
        weight: "12 oz",
        dimensions: "8 × 4 × 6 in",
      },
    ],
    subDescription: "SOLD AS A 4 PACK – EACH CUPS IS: 2.29 OZ (65G) AND MAKES 1 SERVING",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. PROCESSED ON THE SAME EQUIPMENT AS SOY, OTHER TREE NUTS, PEANUTS, WHEAT AND MILK.",
      ingredients:
        "oats, coconut sugar, pecans, organic sweet potato powder, spices",
    },
    images: {
      folderName: "/ps-oc/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Pumpkin-Spice-Front-348x348.jpg`,
        `pumpkin-spice-nutrition-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Pumpkin-Spice-Front-100x100.jpg`,
        `pumpkin-spice-nutrition-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Pumpkin-Spice-Front-454x454.jpg`,
        `pumpkin-spice-nutrition-454x889.jpg`
      ],
      hd: [ // zoomed image
        `Pumpkin-Spice-Front.jpg`,
        `pumpkin-spice-nutrition.jpg`
      ]
    },
  },
  {
    id: "p26",
    productName: [
      "RED VELVET", // thin text
      "COOKIE DOUGH BITES" // bold text  
    ],
    otherName: "Red Velvet Cookie Bites",
    nameColor: 'light-brown',
    category: ["Cookie Bites", "Grain Free"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Snacks Red Velvet Cookie Bites are out of this world delicious, contain simple, Whole30 and Paleo approved ingredients, are Vegan, dairy-free, grain-free, gluten-free, and the perfect little treat any time of the day. The bites are fully cooked and ready to eat. They have a soft, cookie dough-like texture that makes these little delights ever so indulgent without the guilt.", ""],
        ["", "Other Whole30 and Paleo snacks don’t compare to this mix of rich flavors, all in a naturally gluten and dairy-free snack. Available in 4 flavors: Original, Pumpkin, Red Velvet, and Toasted Coconut. Order online today!", ""],
        ["", "Each container holds 6 bites and weighs 3oz.", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "3 oz container",
        price: 6.00,
        weight: "3.2 oz",
        dimensions: "5.5 × 5 × 1.25 in",
      },
      {
        size: "Pack of 3 (3 oz containers",
        price: 16.00,
        weight: "9.6 oz",
        dimensions: "5.5 × 5 × 4 in",
      },
      {
        size: "Pack of 6 (3 oz containers)",
        price: 32.00,
        weight: "19.6 oz",
        dimensions: "5.5 × 9.75 × 4 in",
      }
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS (ALMONDS AND COCONUT). PROCESSED ON THE SAME EQUIPMENT AS PEANUTS, OTHER TREE NUTS, SOY, WHEAT AND MILK.",
      ingredients:
        "Almond Butter (Almonds), Water, Raisins (raisins, sunflower oil), Dates, Coconut, Flaxseed Meal, Natural Flavoring, Red Beet Powder, Cocoa Powder, Baking Soda, Salt",
    },
    images: {
      folderName: "/red-velvet/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `rv-front-348x348.jpg`,
        `rv-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `rv-front-100x100.jpg`,
        `rv-back-100x100.jpg`,
        `red-velvet-back-100x100.png`,
        `red-velvet-front-100x100.png`,
        `red-velvet-inside-100x100.jpg`,
        `red-velvet-side-100x100.jpg`,
        `red-velvet-top-100x100.jpg`,
        `red-velvet-main-ss-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `rv-front-454x454.jpg`,
        `rv-back-454x454.jpg`,
        `red-velvet-back-454x454.png`,
        `red-velvet-front-454x454.png`,
        `red-velvet-inside-454x454.jpg`,
        `red-velvet-side-454x454.jpg`,
        `red-velvet-top-454x454.jpg`,
        `red-velvet-main-ss-454x631.jpg`
      ],
      hd: [ // zoomed image
        `rv-front.jpg`,
        `rv-back.jpg`,
        `red-velvet-back.png`,
        `red-velvet-front.png`,
        `red-velvet-inside.jpg`,
        `red-velvet-side.jpg`,
        `red-velvet-top.jpg`,
        `red-velvet-main-ss.jpg`
      ]
    },
  },
  {
    id: "p27",
    productName: [
      "SEA SALT", // thin text
      "PEANUT BUTTER" // bold text  
    ],
    otherName: "",
    nameColor: 'gold',
    category: ["Nut Butter"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "16 oz Jar", ""],
        ["", "In-Store ground peanut butter from Natural Peanut Butter stock and blended with Sea Salt. No added sugars or oils. Slightly chunky texture.", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "", ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 5.00,
        weight: "17.6 oz",
        dimensions: "5 × 3 × 3 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/sea-salt-pb/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `PeanutButter-348x348.jpg`,
        `PeanutButter_Back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `PeanutButter-100x100.jpg`,
        `PeanutButter_Back-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `PeanutButter-454x552.jpg`,
        `PeanutButter_Back-454x552.jpg`
      ],
      hd: [ // zoomed image
        `PeanutButter.jpg`,
        `PeanutButter_Back.jpg`
      ]
    },
  },
  {
    id: "p28",
    productName: [
      "SWEET POTATO PIE", // thin text
      "NUT BUTTER" // bold text  
    ],
    otherName: "",
    nameColor: 'bright-orange',
    category: ["Grain Free", "Nut Butter"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Sarah’s Sweet & Savory Snacks has created a line of better-for-you nut butter spreads resembling some of our favorite desserts. Enjoy these delightful combinations right out of the jar, with fruit or as a spread!", ""],
        ["", "A delicious blend of almonds, cashews, sweet potato and vanilla with a touch of molasses that tastes like a sweet potato pie!", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "ALMOND & CASHEW NUT BUTTER",
          "blended with sweet potatoes and vanilla that is made with Gluten free, Dairy Free, Soy Free ingredients."
        ], 
        [
          "LOW IN CARBS – ONLY 4G SUGAR",
          "per serving with 10G TOTAL CARBS and 6G of plant based protein."
        ],
        [
          "PLANT-BASED REAL FOOD",
          "Great for an everyday low-in-carb breakfast, snack or dessert"
        ], 
        [
          "NO REFINED SUGARS OR ADDED OILS!",
          "A delicious mixture of almonds, cashews, sweet potatoes and vanilla."
        ], 
        [
          "DIETITIAN APPROVED",
          "All of Sarah’s Snacks products are formulated by a Registered Dietitian so that you can feel good about what you eat."
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 14.00,
        weight: "20 oz",
        dimensions: "2.75 × 2.75 × 4.75 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. MADE IN A FACILITY THAT ALSO PROCESSES OTHER TREE NUTS, WHEAT, PEANUTS, SOY AND MILK",
      ingredients:
        "almonds, cashews, maple sugar, sweet potato, molasses, natural vanilla flavoring, cinnamon",
    },
    images: {
      folderName: "/sweet-potato/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `SweetPotato_Front-WHT-348x348.png`,
        `SweetPotato_Back-WHT-348x348.png`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `SweetPotato_Front-WHT-100x100.png`,
        `SweetPotato_Back-WHT-100x100.png`,
        `IMG_8442-100x100.jpg`,
        `SP-nutrition-100x100.png`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `SweetPotato_Front-WHT-454x454.png`,
        `SweetPotato_Back-WHT-454x454.png`,
        `IMG_8442-454x303.jpg`,
        `SP-nutrition-454x454.png`
      ],
      hd: [ // zoomed image
        `SweetPotato_Front-WHT.png`,
        `SweetPotato_Back-WHT.png`,
        `IMG_8442.jpg`,
        `SP-nutrition.png`
      ]
    },
  },
  {
    id: "p29",
    productName: [
      "TOASTED COCONUT", // thin text
      "COOKIE DOUGH BITES" // bold text  
    ],
    otherName: "Toasted Coconut Cookie Bites",
    nameColor: 'light-brown',
    category: ["Cookie Bites"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Toasted Coconut Cookie Bites are out of this world delicious, contain simple, Whole30 and Paleo approved ingredients, are Vegan, dairy-free, grain free, gluten-free and the perfect little treat any time of the day. The bites are fully cooked and ready to eat. They have a soft, cookie dough-like texture that makes these little delights ever so indulgent without the guilt.", ""],
        ["", "Other Whole30 and Paleo snacks don’t compare to this mix of rich flavors, all in a naturally gluten and dairy-free snack. Available in 4 flavors: Original, Pumpkin, Red Velvet, and Toasted Coconut. Order online today!", ""],
        ["", "Each container holds 6 bites and weighs 3oz.", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "",
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "1 Pack",
        price: 6.00,
        weight: "12.6 oz",
        dimensions: "5.5 × 4.25 × 3.5 in",
      },
      {
        size: "3 Pack",
        price: 16.00,
        weight: "12.6 oz",
        dimensions: "5.5 × 4.25 × 3.5 in",
      },
      {
        size: "6 Pack",
        price: 32.00,
        weight: "12.6 oz",
        dimensions: "5.5 × 4.25 × 3.5 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "Contains tree nuts (Almonds, Coconut) Processed on the same equipment as peanuts, other tree nuts, soy, wheat, and milk.",
      ingredients:
        "Almond Butter (almonds), Water, Dates, Toasted Coconut, Flaxseed Meal, Natural Flavoring, Baking Soda, Salt",
    },
    images: {
      folderName: "/toasted-coconut-cb/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Toasted-Coconut-348x348.jpg`,
        `Toasted-Coconut-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Toasted-Coconut-100x100.jpg`,
        `Toasted-Coconut-back-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
      `Toasted-Coconut-454x605.jpg`,
      `Toasted-Coconut-back-454x454.jpg`,
      ],
      hd: [ // zoomed image
      `Toasted-Coconut.jpg`,
      `Toasted-Coconut-back.jpg`,
      ]
    },
  },
  {
    id: "p30",
    productName: [
      "VANILLA", // thin text
      "GINGER" // bold text  
    ],
    otherName: "",
    nameColor: 'light-seaweed-green',
    category: ["Snacks"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "A sweet & savory blend of vanilla infused super seeds and spicy ginger that is a vegan, peanut & nut free snack option containing some organic ingredients. Order online now!", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "",
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "2 oz bag (12)",
        price: 24.00,
        weight: "27.4 oz",
        dimensions: "7 × 10 × 3 in",
      },
      {
        size: "10 oz bag",
        price: 6.99,
        weight: "10.4 oz",
        dimensions: "7 × 9 × 2.25 in",
      },
      {
        size: "3lb bag",
        price: 21.00,
        weight: "",
        dimensions: "",
      },
      {
        size: "5lb bag",
        price: 39.95,
        weight: "88 oz",
        dimensions: "12 × 9 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "MADE IN A FACILITY THAT CONTAINS WHEAT, TREE NUTS, PEANUTS, MILK AND SOY.",
      ingredients:
        "Whole Grain Oats, Organic Brown Rice Syrup, Sunflower Seeds, Pumpkin Seeds, Sunflower Oil, Flax Seeds, Hemp Seeds, Crystallized Ginger (Ginger, Sugar), Organic Vanilla Flavoring, Ground Ginger, Sea Salt, Rosemary Extract (Rosemary, Sunflower Oil)",
    },
    images: {
      folderName: "/vg/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `vg-front-348x348.jpg`,
        `vg-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `vg-front-100x100.jpg`,
        `vg-back-100x100.jpg`,
        `VanillaGinger-1-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `vg-front-454x454.jpg`,
        `vg-back-454x454.jpg`,
        `VanillaGinger-1-454x416.jpg`
      ],
      hd: [ // zoomed image
        `vg-front.jpg`,
        `vg-back.jpg`,
        `VanillaGinger-1.jpg`
      ]
    },
  },
  {
    id: "p31",
    productName: [
      "VANILLA MAPLE", // thin text
      "BRITTLE" // bold text  
    ],
    otherName: "",
    nameColor: 'red',
    category: ["Vegan Brittle"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["NEW!", "Vegan candy brittle made with organic coconut oil, organic brown rice syrup, whole cashews, almonds and pumpkin seeds with an irresistibly good sweet & salty, light & crunchy texture.", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "VEGAN BRITTLE",
          "– Better-for-you twist on a classic candy"
        ], 
        [
          "DIETITIAN APPROVED",
          "– All of Sarah’s Snacks products are formulated by a Registered Dietitian so that you can feel good about what you eat"
        ], 
        [
          "MADE WITH DAIRY-FREE, GLUTEN-FREE, NON-GMO INGREDIENTS",
          "– no corn syrup!"
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "4 oz",
        price: 6.00,
        weight: "4.4 oz",
        dimensions: "6 × 9 × 2.25 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "Contains Tree Nuts (ALMONDS, CASHEWS, COCONUT). Processed in a facility that contains other tree nuts, wheat, peanuts, soy and milk.",
      ingredients:
        "Organic Brown Rice Syrup, Almonds, Cashews, Pumpkin Seeds, Maple Syrup, Organic Extra Virgin Coconut Oil, Baking Soda, Organic Vanilla Flavoring, Salt",
    },
    images: {
      folderName: "/vmb/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `vmb-front-348x348.jpg`,
        `vmb-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `vmb-front-100x100.jpg`,
        `vmb-back-100x100.jpg`,
        `IMG_8029-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `vmb-front-454x454.jpg`,
        `vmb-back-454x454.jpg`,
        `IMG_8029-454x303.jpg`
      ],
      hd: [ // zoomed image
        `vmb-front.jpg`,
        `vmb-back.jpg`,
        `IMG_8029.jpg`
      ]
    },
  },
  {
    id: "p32",
    productName: [
      "VARIETY MINI PACK", // thin text
      "" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Gifts"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Flavors include 3 each, 2 oz: Peanut Butter & Chocolate, Peanut Butter & Jelly, Vanilla Ginger, Vegan Trail Mix.", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "",
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 24.00,
        weight: "1.95 oz",
        dimensions: "10 × 7 × 5 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/variety-mini-pack/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Variety-Pack-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        ``,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Variety-Pack-454x341.jpg`,
      ],
      hd: [ // zoomed image
        `Variety-Pack.jpg`,
      ]
    },
  },
  {
    id: "p33",
    productName: [
      "VEGAN MINI SAMPLER", // thin text
      "GIFT SET" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Gifts"],
    featuredInCarousel: false,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "Try all of our signature vegan flavors with this mini sampler gift set! Great for small gift occasions such as teacher gifts, Secret Santa and stocking stuffers. Order these gifts online today to gift to someone on your list!", ""],
        ["", "Contains one bag of each: 2oz Vegan Trail Mix, 2oz Chocolate Chia, 2oz Banana Maple, 2oz Vanilla Ginger", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "",
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "",
        price: 9.99,
        weight: "10 oz",
        dimensions: "10 × 6 × 1.25 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "",
      ingredients:
        "",
    },
    images: {
      folderName: "/vegan-mini-sampler/",
      thumbnailRegular: [ // carousel or shop - usually 348
        `Vegan-Mini-Sampler-348x348.jpg`,
        `Vegan-Mini-Sampler-GB-348x348.jpg`,
      ],
      thumbnailSmall: [ // below zoom - usually 100
        `Vegan-Mini-Sampler-100x100.jpg`,
        `Vegan-Mini-Sampler-GB-100x100.jpg`,
        `DSC_3263-100x100.jpg`,
      ],
      thumbnailLarge: [ // before zoom - usually 454
        `Vegan-Mini-Sampler-454x454.jpg`,
        `Vegan-Mini-Sampler-GB-454x454.jpg`,
        `DSC_3263-454x303.jpg`,
      ],
      hd: [ // zoomed image
        `Vegan-Mini-Sampler.jpg`,
        `Vegan-Mini-Sampler-GB.jpg`,
        `DSC_3263.jpg`,
      ]
    },
  },
  {
    id: "p34",
    productName: [
      "VEGAN", // thin text
      "TRAIL MIX" // bold text  
    ],
    otherName: "",
    nameColor: 'dark-leaf-green',
    category: ["Snacks"],
    featuredInCarousel: true,
    mainDescription: {
      main: [ // paragraph - bold, bulk, bold
        ["", "This sweet & savory blend of whole mixed nuts, toasted oats, and tart cranberries is a delicious vegan snack option that is naturally dairy-free. Order online now!", ""],
      ],
      unOrderedList: [ // item1 - bold text, regular text
        [
          "",
          ""
        ], 
      ],
      orderedList: {
        title: "", // title
        items: [
          "", // item1
        ]
      },
      last: "" // all caps
    },
    variations: [
      {
        size: "12 × 2 oz bag",
        price: 24.00,
        weight: "27.4 oz",
        dimensions: "7 × 10 × 3 in",
      },
      {
        size: "7oz bag",
        price: 6.99,
        weight: "7.4 oz",
        dimensions: "6 × 9 × 2.25 in",
      },
      {
        size: "3lb bag",
        price: 21.00,
        weight: "",
        dimensions: "",
      },
      {
        size: "5lb bag",
        price: 39.95,
        weight: "88 oz",
        dimensions: "12 × 9 × 6 in",
      },
    ],
    subDescription: "",
    additionalInfo: {
      warning:
        "CONTAINS TREE NUTS. PROCESSED ON THE SAME EQUIPMENT AS SOY, OTHER TREE NUTS, PEANUTS, WHEAT AND MILK.",
      ingredients:
        "Whole Grain Oats, Mixed Nuts (Cashews, Almonds, Brazil Nuts, Filberts, Walnuts, Macadamia Nuts, Pecans, Canola Oil, Salt), Brown Rice Syrup, Dried Dates (Dates, Rice Flour), Dried Cranberries (Cranberries, Sugar, Sunflower Oil), Coconut Sugar, Sunflower Oil, Organic Cinnamon, Natural Flavoring",
    },
    images: {
      folderName: "/vtm/",
      thumbnailRegular: [ // carousel or shop - usually 348
      `vtm-front-newsize-348x348.jpg`,
      `vtm-back-348x348.jpg`
      ],
      thumbnailSmall: [ // below zoom - usually 100
      `vtm-front-newsize-100x100.jpg`,
      `vtm-back-100x100.jpg`,
      `VeganTrailMix-1-100x100.jpg`
      ],
      thumbnailLarge: [ // before zoom - usually 454
      `vtm-front-newsize-454x454.jpg`,
      `vtm-back-454x454.jpg`,
      `VeganTrailMix-1-454x390.jpg`
      ],
      hd: [ // zoomed image
      `vtm-front-newsize.jpg`,
      `vtm-back.jpg`,
      `VeganTrailMix-1.jpg`,
      ]
    },
  },
];


export default productsDB;

