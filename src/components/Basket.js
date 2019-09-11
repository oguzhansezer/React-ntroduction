import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import BasketItem from './BasketItem'
import logo from '../img/empty.png'
class Basket extends Component {
    priceCalc=()=>{
        const {basket}=this.props
        let totalPrice=0;
        basket.forEach(function(element){
          totalPrice += ((element.count )*(element.price));
        });
        if(totalPrice==0){
        return  <div className="emptyBasket"> 
                <div className="emptyPlate"> 
                <img src={logo}/>
                </div>
                <h5> Sepetiniz boş  </h5> 
                <p>Bir yemek seçerek başlayabilirsiniz.</p>
                </div>      
        }else {
         return <div className="totalPriceBox">Sipariş ücreti {totalPrice}TL </div>  
        }
        
        }
      
    render() {
        const {basket} = this.props;
        return (
            <div>
              
                <div className="basketHeader" > <h4> <i class="fas fa-shopping-basket"></i> Sepetim </h4></div>
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
                     logo={item.logo}
                 />
                    </div>
                    )
                } )
                }

               
                {
                   
                
                <div>{ this.priceCalc() }   </div>    
                
                 }
                
               
               
            </div>
        )
    }
}

export default Basket;