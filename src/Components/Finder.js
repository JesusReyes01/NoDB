import React, {Component} from 'react';
import axios from 'axios';
import Auction from './Auction'

export default class Finder extends Component{
    constructor(props){
        super(props);
        this.state = {
            auctionVehicles: []
        }
    }
    componentDidMount(){
        this.newAuctionVehicles();
    }
    newAuctionVehicles = () => {
        axios.get('/api/auctionVehicles')
        .then(res => {
            this.setState({auctionVehicles: res.data})
        })
        .catch(err => console.log(err));
    }
    removeAuctionVehicle = (id) => {
        // console.log(id)
        axios.delete(`/api/auctionVehicles/${id}`)
        .then(res => {
          this.setState({auctionVehicles: res.data})
        })
        .catch(err => console.log(err));
        
    }
    
    

    render(){
        let mappedVehicles = <p>No more vehicles!</p>
        if (this.state.auctionVehicles.length > 0){
            mappedVehicles = this.state.auctionVehicles.map( (car,i)=>(
        
                <Auction 
                key={i}
                car={car}
                purchaseFn={this.props.purchaseFn}
                refreshFn={this.newAuctionVehicles}
                removeAuctionVehicleFn={this.removeAuctionVehicle}
                bank={this.props.bank}
                />
        ))}
        
        
        return(
            <div className='auction-vehicle-flex'>
                <h1>Auction</h1>
                <div className='mappedVehicles'>{mappedVehicles}</div>
                <button onClick={this.newAuctionVehicles}>REFRESH</button>
                
            </div>

        )
    }
}