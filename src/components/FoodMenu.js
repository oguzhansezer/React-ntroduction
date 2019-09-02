import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import FoodMenuItem from './FoodMenuItem'
 class FoodMenu extends Component {
    render() {
        const {foodList} = this.props;
        
        const FoodMenuItems = foodList.map(item => {
            if(!item.rightCount){
                item.rightCount = 1;  
            }  
            return (
                <div key={item.id}>
                <FoodMenuItem 
                        IncrementFoodList={this.props.IncrementFoodList}
                        CounterMethod={this.props.CounterMethod}
                        foodCounter={item.count}
                        itemKey={item.id}
                        itemPrice={item.price}
                        itemName={item.name}
                />
                </div>
            )
        })

        return (  
            <ListGroup>
            <ListGroup.Item as="li" active>Yemek listesi </ListGroup.Item>
                {FoodMenuItems}
            </ListGroup>
        )
    }
}

export default FoodMenu;



