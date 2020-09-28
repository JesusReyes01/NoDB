import React, {Component} from 'react'

export default class Vehicle extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            priceInput: 0
        }
    }

    handleInput = (val) => {
        this.setState({priceInput: val })
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    handleEdit = (id) => {
        this.props.editFn(id, this.state.priceInput);
        console.log(this.state.priceInput)
        this.handleToggle();
    }
   
    render(){
        return(
            <div className='inv'>
                <img src={this.props.car.image} alt={this.props.car.model}/>
                <span>${this.props.car.price}</span>
                {this.state.isEditing
                ? 
                (
                    <div>
                        <input
                            value={this.state.priceInput} //erase later
                            onChange={e => this.handleInput(e.target.value)}></input>
                        <button onClick={() => this.handleEdit(this.props.car.id)}>Submit</button>

                    </div>
                )
                :
                (
                    <div className='inventory-desc'>
                        
                        <span>{this.props.car.make}</span>
                        <span>{this.props.car.model}</span>
                        <span>{this.props.car.year}</span>
                        <button onClick={this.handleToggle}>Change Price</button>
                    </div>
                )}
                <button onClick={() => this.props.sellFn(this.props.car.id, this.props.car.price)}>Sell</button>
                
                

            </div>
        )
    }
}