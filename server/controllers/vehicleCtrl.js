vehiclesInCarLot = [];
let id = 0;

module.exports = {
    getInventory: (req, res) => {
        res.status(200).send(vehiclesInCarLot);
    },
    newPurchase: (req, res) => {
         console.log(req)
        const {car} = req.body;

        car.id = id;
        id++;
        vehiclesInCarLot.push(car)
        res.status(200).send(vehiclesInCarLot);
    },
    editPrice: (req, res) => {
        const {id} = req.params;
        const {price} = req.body;

        const carToEdit = vehiclesInCarLot.find(el => el.id === +id);
        carToEdit.price = price;

        res.status(200).send(vehiclesInCarLot);
    },
    vehicleSold: (req, res) => {
        const {id} = req.params;
        const index = vehiclesInCarLot.findIndex(el => el.id === +id)
        vehiclesInCarLot.splice(index,1)
        res.status(200).send(vehiclesInCarLot);
    }
    
    





}