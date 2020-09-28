import React, {Component} from 'react'

class Bank extends Component{ 
    
   render(){
        return(
            <div className='bank'>
                <h1>Bank: ${this.props.bank}</h1>
            </div>
        ) 
   }
}
export default Bank