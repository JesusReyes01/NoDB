import React, {Component} from 'react'

export default class Auction extends Component{
    handleCatch = () =>{
        const {car} = this.props;
        let newInventory = {
            make: car.make,
            model: car.model,
            year: car.year,
            price: car.price,
            image: car.image
        }
        console.log(newInventory)
        this.props.purchaseFn(newInventory);
        this.props.refreshFn();
        
    }
    handleRefresh = () => {
        alert("Not enough funds!")
        this.props.refreshFn();
    }
    


    render(){
        return(
            <div onClick={this.props.bank > this.props.car.price ? this.handleCatch : this.handleRefresh}>
                
                <img src={this.props.car.image} alt={this.props.car.model}/>
                <div className='auction-vehicle-desc'>
                    <span>${this.props.car.price}</span>
                    <span>{this.props.car.make}</span>
                    <span>{this.props.car.model}</span>
                    <span>{this.props.car.year}</span>
                </div>


            </div>
        )
    }
}