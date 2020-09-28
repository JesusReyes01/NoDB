

const auctionInventory = [
    {id:1, make: "Tesla", model: "Cyber truck", year: "2020", price: 85000, image: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2020/06/23095607/tesla-cybertruck-petersen-011.jpg" },
    {id:2, make: "Toyota", model: "Camry", year: "2011", price: 8295, image: "https://lh3.googleusercontent.com/proxy/E0wWroUTIwPxVZ3yXncPo6q6sPXf2EG7Qu99SMseSeLCxFtJvEPyNSSHuGm-AaI3tfAC9FFoRojNr5MwY9bHl4trCSIB69kBoDX9Y4tJYmuNnLsrSsAbple6GsICiFxTkUV7DNEC" },
    {id:3, make: "Dodge", model: "Charger", year: "2019", price: 23995, image: "https://cdn-w.v12soft.com/photos/hVxpY5k/12601749/79625_10111_414_800600.jpg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:4, make: "Kia", model: "Forte", year: "2018", price: 10979, image: "https://i.pinimg.com/originals/57/58/1d/57581d94cff0ac80fdd19a6336aa5bd0.jpg" },
    {id:5, make: "Ford", model: "Mustang", year: "2014", price: 24599, image: "https://cdn.dealeraccelerate.com/streetside/2/21037/849026/1920x1440/2014-ford-mustang-roush-stage-3" },
    {id:6, make: "Ford", model: "Focus", year: "2017", price: 7450, image: "https://www.focusrs.org/attachments/img_3089-jpg.125530/" },
    {id:7, make: "Nissan", model: "350z", year: "2006", price: 8850, image: "https://my350z.com/forum/attachments/zs-and-gs-for-sale/347775d1360890965-2006-nissan-350z-silver-track-turbo-dsc_415.jpg" },
    {id:8, make: "Subaru", model: "Impreza", year: "2017", price: 13939, image: "https://img.gta5-mods.com/q75/images/subaru-impreza-wrx-sti/33adee-yeni.jpg" },
    {id:9, make: "Mazda", model: "RX-7", year: "1992", price: 41999, image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Tuned_Mazda_RX-7_Type_RB_%28GF-FD3S%29_front.jpg" },
    {id:10, make: "Lexus", model: "RC-350", year: "2017", price: 30999, image: "https://lexusenthusiast.com/images/weblog/19-01-07-lexus-rc-f-sport-artisan-spirits-850x496.jpg" },
    {id:11, make: "Jeep", model: "Wrangler", year: "2003", price: 13950, image: "https://lh3.googleusercontent.com/proxy/UDtb5jLR2VsqlTkqxklZkJwnd6ynFeVOfGohaMlGbcYy6Ux2_uTFUWg8ils0GXo9EKpVCtiKCuBFGANDNqZ-6uNzIsjwARMEugW0f9Bb7qAsvtIChE02sEbufA" },
    {id:12, make: "Chrysler", model: "300", year: "2006", price: 6300, image: "https://i.pinimg.com/originals/ca/b3/17/cab317642c4b91e9cc650646ec3c2635.jpg" },
    {id:13, make: "Land Rover", model: "Range Rover", year: "2007", price: 29500, image: "https://static.cargurus.com/images/forsale/2020/09/19/13/13/2007_land_rover_range_rover-pic-3952624479302320498-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:14, make: "Pontiac", model: "Firebird", year: "2001", price: 13500, image: "https://www.motortrend.com/uploads/sites/5/2019/01/Barett-Jackson-WS6-Firebird-Front.jpg" },
    {id:15, make: "Scion", model: "xB", year: "2015", price: 9999, image: "https://lh3.googleusercontent.com/proxy/2cxwz1VoTHmPwSCsmj0rnDxJq9abLx8EHCfX0CkWW6qZzQrBhDagIrIoZoTqzZ8FmdzfAd11KX2GuXyipGm4FrVgmzeZwiN8LGezd26EFa4vKfBkP4WYdkAY8CYLKq38PnTB" },
    {id:16, make: "Mini", model: "Cooper", year: "2013", price: 8900, image: "https://cdn05.carsforsale.com/12e2d45a0fea0de829ef69c10613cc1f/1280x960/2013-mini-hardtop-cooper-s-2dr-hatchback.jpg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:17, make: "Honda", model: "S2000", year: "2005", price: 19400, image: "https://static.cargurus.com/images/forsale/2020/09/12/22/40/2005_honda_s2000-pic-7974128583303165556-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
    {id:18, make: "Mitsubishi", model: "Eclipse", year: "2020", price: 32000, image: "https://westcoastexoticcars.com/wp-content/uploads/2019/12/FF-1-798x466.jpg" },
    {id:19, make: "Toyota", model: "Supra", year: "2000", price: 40000, image: "https://images-na.ssl-images-amazon.com/images/I/416HfCXCxSL._AC_SY200_.jpg" },
    {id:20, make: "Nissan", model: "Skyline", year: "1999", price: 60000, image: "https://i.pinimg.com/originals/b8/7d/c2/b87dc213be0a1bb6434bce64e6338f03.jpg" }
    
];


module.exports = {
    getAuctionVehicles: (req, res) => {
        const cars = [];
        const rand1 = Math.floor(Math.random() * (auctionInventory.length));
        const rand2 = Math.floor(Math.random() * (auctionInventory.length));
        const rand3 = Math.floor(Math.random() * (auctionInventory.length));
        // const rand1 = Math.ceil(Math.random() * 20);
        // const rand2 = Math.ceil(Math.random() * 20);
        // const rand3 = Math.ceil(Math.random() * 20);
        cars.push(auctionInventory[rand1])
        cars.push(auctionInventory[rand2])
        cars.push(auctionInventory[rand3])

        res.status(200).send(cars)

    },
    deleteAuctionVehicle: (req, res) => {
        const {id} = req.params;
        const index = auctionInventory.findIndex(el => el.id === +id)
        auctionInventory.splice(index,1)
        res.status(200).send(auctionInventory);
    }
}
