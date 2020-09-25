import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

import Header from './Components/Header'
import Finder from './Components/Finder'
import CarLot from './Components/CarLot'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      carInventory: ["car"]
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

  sellVehicle = (id) => {
    axios.delete(`/api/vehicleSold/${id}`)
    .then(res => {
      this.setState({carInventory: res.data})
    })
    .catch(err => console.log(err));
    
  }

  render(){
    return(
      <div className='App'>
        <Header />
        {/* <Bank /> */}
        <Finder 
          purchaseFn={this.purchaseVehicle}/>
        <CarLot
          carInventory={this.state.carInventory} 
          editFn={this.editPrice}
          sellFn={this.sellVehicle}/>

      </div>
    )

  }
}

export default App;
