import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import BasketItem from './BasketItem'
class Basket extends Component {
    priceCalc=()=>{
        const {basket}=this.props
        let totalPrice=0;
        basket.forEach(function(element){
          totalPrice += ((element.count )*(element.price));
        });
        return totalPrice;
        }
      
    render() {
        const {basket} = this.props;
        return (
            <div>
                <ListGroup>
                <ListGroup.Item as="li" active>Sepetim </ListGroup.Item>
                {
                  basket.map(item => {
                    return(
                    <div key={item.id+500}>
                 <BasketItem  
                     deleteItem={this.props.deleteItem} 
                     CounterMethod={this.props.CounterMethod}
                     onTodoChange={this.props.onTodoChange}
                     foodCounter={item.count}
                     itemKey={item.id}
                     itemPrice={item.price}
                     itemName={item.name}
                 />
                    </div>
                    )
                } )
                }
               
                {
                <ListGroup.Item variant="danger">Sipariş ücreti {this.priceCalc()}TL </ListGroup.Item>     
                 }
                </ListGroup>
               
               
            </div>
        )
    }
}

export default Basket;