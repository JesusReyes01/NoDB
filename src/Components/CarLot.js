import React from 'react'
import Vehicle from './Vehicle'

const CarLot = props => {
    const mappedInventory = props.carInventory.map( (el,i) => (
            <Vehicle 
                key={i}
                car={el}
                editFn={props.editFn}
                sellFn={props.sellFn}/>
        ))
    return(
        <div>
            <h1>Inventory</h1>
            <div className='inventory-flex'>
                {mappedInventory}
            </div>
        </div>
    )

}
export default CarLot;