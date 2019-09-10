import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import { connect } from 'react-redux';
import './components.css';
import logo from '../img/americano.jpg'
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
            <div className="foodCard" >
            <img src={logo}/> 
            <div className="foodContainer"> 
            <input type="number"  onChange={e => this.OnIncrementFoodList(e.target.value,this.props.itemKey)} min="1" defaultValue="1"    className="inputdeneme" rows="1" ></input>   <i  id={this.props.itemKey} onClick = {(e)=> this.OnCounterMethod(this.props.itemKey,'addRight')}  className="far fa-plus-square"></i> {this.props.itemName}  <br/> <h3 className="price"> {this.props.itemPrice} TL </h3>  </div> 
            </div>
           
            
           
        )
    }
}









export default FoodMenuItem;