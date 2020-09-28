import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

import Header from './Components/Header'
import Finder from './Components/Finder'
import CarLot from './Components/CarLot'
import Bank from './Components/Bank'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      carInventory: ["car"],
      bank: 100000
    }
    this.purchaseVehicle = this.purchaseVehicle.bind(this)
    this.editPrice = this.editPrice.bind(this)
  }

  componentDidMount(){
    axios.get('/api/getInventory')
    .then(res => {
      this.setState({carInventory: res.data})
    })
    .catch(err => console.log(err));
  }
  purchaseVehicle(car){
    this.buy(car.price)
    axios.post('/api/newPurchase', {car: car})
    .then(res => {
      this.setState({carInventory: res.data})
    } )
    .catch(err => console.log(err))
  }
 
  editPrice(id, newPrice){
    let body = {price: newPrice}

    axios.put(`/api/editPrice/${id}`, body)
    .then(res => {
    this.setState({carInventory: res.data})
    })
    .catch(err => console.log(err));
  }

  sellVehicle = (id, soldPrice) => {
    this.sale(soldPrice);
    axios.delete(`/api/vehicleSold/${id}`)
    .then(res => {
      this.setState({carInventory: res.data})
    })
    .catch(err => console.log(err));
    
  }

  buy = (price) => {
    this.setState({bank: this.state.bank - +price})

  }
  sale = (price) => {
    this.setState({bank: this.state.bank + +price})
  }

  render(){
    return(
      <div className='App'>
        <Header />
        <Bank 
          bank={this.state.bank}/>
        <Finder 
          purchaseFn={this.purchaseVehicle}
          bank={this.state.bank}/>
        <CarLot
          carInventory={this.state.carInventory} 
          editFn={this.editPrice}
          sellFn={this.sellVehicle}/>

      </div>
    )

  }
}

export default App;
