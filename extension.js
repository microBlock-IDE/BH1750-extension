({
    name: "BH1750", // Category Name
    description: "Ambient Light Sensor",
    author: "microBlock",
    category: "Sensors",
    version: "1.1.0",
    icon: "/static/icon.png", // Category icon
    color: "#006a99", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "bh1750_light"
    ], 
    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "ArtronShop_BH1750@1.0.0"
    ]
});
