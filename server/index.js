const express = require('express');

const auctionCtrl = require('./controllers/auctionCtrl')
const vehicleCtrl = require('./controllers/vehicleCtrl')

const app = express();
app.use(express.json());//middle ware lets you use req.body
app.listen(7777, () => console.log('Server is running on 7777'))

//auctionCtrl endpoints
app.get('/api/auctionVehicles', auctionCtrl.getAuctionVehicles );
app.delete('/api/auctionVehicles/:id', auctionCtrl.deleteAuctionVehicle);

//vehicleCtrl endpoints
app.get('/api/getInventory', vehicleCtrl.getInventory);
app.post('/api/newPurchase', vehicleCtrl.newPurchase);
app.put('/api/editPrice/:id', vehicleCtrl.editPrice);
app.delete('/api/vehicleSold/:id', vehicleCtrl.vehicleSold);