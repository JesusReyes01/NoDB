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
    

    render(){
        const mappedVehicles = this.state.auctionVehicles.map( (car,i)=>(
        
                <Auction 
                key={i}
                car={car}
                purchaseFn={this.props.purchaseFn}
                refreshFn={this.newAuctionVehicles}
                bank={this.props.bank}
                />
        ))
        
        return(
            <div className='auction-vehicle-flex'>
                {mappedVehicles}
            </div>

        )
    }
}