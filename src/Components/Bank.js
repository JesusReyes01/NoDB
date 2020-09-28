import React, {Component} from 'react'

class Bank extends Component{ 
    
   render(){
        return(
            <div>
                <h1>Money in the Bank: ${this.props.bank}</h1>
            </div>
        ) 
   }
}
export default Bank