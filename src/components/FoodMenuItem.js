import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import { connect } from 'react-redux';
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
                <ListGroup.Item> <input type="number"  onChange={e => this.OnIncrementFoodList(e.target.value,this.props.itemKey)} min="1" defaultValue="1"    className="inputdeneme" rows="1" ></input>   <i  id={this.props.itemKey} onClick = {(e)=> this.OnCounterMethod(this.props.itemKey,'addRight')} onClick={(e)=> this.props.addToBasket(this.props.itemKey)} className="far fa-plus-square"></i> {this.props.itemName}   {this.props.itemPrice} TL  </ListGroup.Item> 
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
    basketList: state.basketReducer.basketList,
    foodList: state.basketReducer.foodList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      
      addToBasket: (id) => {const {basketList,foodList}=this.props;
      let clickeditem=foodList.find(listx => listx.id===id);
      let BasketTemp=Object.assign({}, {basketList});
      var itemFounder = basketList.find(function(element){ return element.id===id; }); 
      clickeditem.count=parseInt(clickeditem.count);
      clickeditem.count +=1;
        dispatch({ type: 'ADD_BASKET2', index:clickeditem.count });
      }
    };
  };




const BasketReduxConnected = connect(mapStateToProps, mapDispatchToProps)(FoodMenuItem);

export default BasketReduxConnected;