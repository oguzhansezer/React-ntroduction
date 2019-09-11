import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import FoodMenuItem from './FoodMenuItem'
import {Col,Row} from 'react-bootstrap'
import './components.css';
 class FoodMenu extends Component {
    render() {
        const {foodList} = this.props;
        
        const FoodMenuItems = foodList.map(item => {
            if(!item.rightCount){
                item.rightCount = 1;  
            }  
            return (
                <div key={item.id} className="foodBox">
                <FoodMenuItem 
                        IncrementFoodList={this.props.IncrementFoodList}
                        CounterMethod={this.props.CounterMethod}
                        foodCounter={item.count}
                        itemKey={item.id}
                        itemPrice={item.price}
                        itemName={item.name}
                        itemDescription={item.description}
                        logo={item.logo}
                />
                </div>
            )
        })

        return (  
            <div class="blokItem">
            <div as="li" className="restListTitles">
            <h4> <i class="fas fa-cheese"></i> Yemek listesi </h4> 
            </div>
            
           
          
           <Row> 
           {FoodMenuItems}
           </Row>
            
               
            </div>
        )
    }
}

export default FoodMenu;



