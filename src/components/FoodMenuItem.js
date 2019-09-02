import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
 class FoodMenuItem extends Component {
    OnIncrementFoodList=(e)=>{
        const {itemKey,IncrementFoodList}=this.props
        IncrementFoodList(e.target.value,itemKey)
    }

    OnCounterMethod=(e)=>{
        const {itemKey,CounterMethod}=this.props
        CounterMethod(itemKey,'addRight')
    }
    OnIncrementFoodList=(e)=>{
        const {itemKey,IncrementFoodList}=this.props
        IncrementFoodList(e,itemKey)
    }



    render() {
        return (
            <div key={this.props.itemKey+500}>
                <ListGroup.Item> <input type="number"  onChange={e => this.OnIncrementFoodList(e.target.value,this.props.itemKey)} min="1" defaultValue="1"    className="inputdeneme" rows="1" ></input>   <i  onClick = {(e)=> this.OnCounterMethod(this.props.itemKey,'addRight')} className="far fa-plus-square"></i> {this.props.itemName}   {this.props.itemPrice} TL  </ListGroup.Item> 
            </div>
        )
    }
}
export default FoodMenuItem;