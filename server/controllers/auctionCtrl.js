

const auctionInventory = [,
    {id:1, make: "Tesla", model: "Cyber truck", year: "2020", price: 85000, image: "https://cdn.motor1.com/images/mgl/Y90Nr/s1/tesla-cybertruck-outdoor-image.jpg" },
    {id:2, make: "Toyota", model: "Camry", year: "2011", price: 8295, image: "https://mycarboard.com/wp-content/uploads/2017/12/AwesomeAmazingGreat-2011-Toyota-Camry-LE-2011-TOYOTA-CAMRY-LE-4CYL-2017-20182017-201820172018.jpg" },
    {id:3, make: "Dodge", model: "Charger", year: "2019", price: 23995, image: "https://cdn-w.v12soft.com/photos/hVxpY5k/12601749/79625_10111_414_800600.jpg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:4, make: "Kia", model: "Forte", year: "2018", price: 10979, image: "https://static.cargurus.com/images/forsale/2020/09/22/22/28/2019_kia_forte-pic-6062357217452907047-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:5, make: "Ford", model: "Mustang", year: "2014", price: 24599, image: "https://d28oohqmlmgnr6.cloudfront.net/cb/f0/10/5c-b055-4426-afe8-345ea546f62a/image-1.jpg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:6, make: "Ford", model: "Focus", year: "2017", price: 7450, image: "https://static.cargurus.com/images/forsale/2020/07/29/04/21/2017_ford_focus-pic-8654899292432008776-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:7, make: "Nissan", model: "350z", year: "2006", price: 8850, image: "https://static.cargurus.com/images/forsale/2020/09/19/16/06/2006_nissan_350z-pic-5281244579817601425-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:8, make: "Subaru", model: "Impreza", year: "2017", price: 13939, image: "https://static.cargurus.com/images/forsale/2020/09/18/11/17/2017_subaru_impreza-pic-7164008192614761768-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:9, make: "Mazda", model: "RX-7", year: "1992", price: 41999, image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Tuned_Mazda_RX-7_Type_RB_%28GF-FD3S%29_front.jpg" },
    {id:10, make: "Lexus", model: "RC-350", year: "2017", price: 30999, image: "https://static.cargurus.com/images/forsale/2020/07/23/07/14/2017_lexus_rc_350-pic-1730282659841913082-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:11, make: "Jeep", model: "Wrangler", year: "2003", price: 13950, image: "https://static.cargurus.com/images/forsale/2020/02/12/08/51/2003_jeep_wrangler-pic-5649099497915444203-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:12, make: "Chrysler", model: "300", year: "2006", price: 6300, image: "https://static.cargurus.com/images/forsale/2020/09/19/06/37/2006_chrysler_300-pic-3289324261869239360-1024x768.jpeg" },
    {id:13, make: "Land Rover", model: "Range Rover", year: "2007", price: 29500, image: "https://static.cargurus.com/images/forsale/2020/09/19/13/13/2007_land_rover_range_rover-pic-3952624479302320498-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:14, make: "Pontiac", model: "Firebird", year: "2001", price: 13500, image: "https://static.cargurus.com/images/forsale/2020/08/14/19/53/2001_pontiac_firebird-pic-6354469111756680094-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:15, make: "Scion", model: "xB", year: "2015", price: 9999, image: "https://static.cargurus.com/images/forsale/2020/07/21/07/18/2015_scion_xb-pic-7827477788888173721-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:16, make: "Mini", model: "Cooper", year: "2013", price: 8900, image: "https://cdn05.carsforsale.com/12e2d45a0fea0de829ef69c10613cc1f/1280x960/2013-mini-hardtop-cooper-s-2dr-hatchback.jpg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:17, make: "Honda", model: "S2000", year: "2005", price: 19400, image: "https://static.cargurus.com/images/forsale/2020/09/12/22/40/2005_honda_s2000-pic-7974128583303165556-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:18, make: "Mitsubishi", model: "Eclipse", year: "2020", price: 32000, image: "https://westcoastexoticcars.com/wp-content/uploads/2019/12/FF-1-798x466.jpg" },
    {id:19, make: "Toyota", model: "Supra", year: "2000", price: 40000, image: "https://images-na.ssl-images-amazon.com/images/I/416HfCXCxSL._AC_SY200_.jpg" },
    {id:20, make: "Nissan", model: "Skyline", year: "1999", price: 60000, image: "https://i.pinimg.com/originals/b8/7d/c2/b87dc213be0a1bb6434bce64e6338f03.jpg" }
    
];


module.exports = {
    getAuctionVehicles: (req, res) => {
        const cars = [];
        const rand1 = Math.ceil(Math.random() * 20);
        const rand2 = Math.ceil(Math.random() * 20);
        const rand3 = Math.ceil(Math.random() * 20);
        cars.push(auctionInventory[rand1])
        cars.push(auctionInventory[rand2])
        cars.push(auctionInventory[rand3])

        res.status(200).send(cars)

    }
}
