import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
export default class BasketLine extends Component {

handleDeleteItem=()=>{
    const{itemKey,deleteItem}=this.props;
    deleteItem(itemKey)
}
onCounterMethodMinus=()=>{
    const{itemKey,CounterMethod}=this.props;
    console.log(itemKey)
    CounterMethod(itemKey,'delete');
}
onCounterMethodPlus=(e,dir)=>{
    const{itemKey,CounterMethod}=this.props;
    console.log(itemKey)
    CounterMethod(itemKey,'addLeft');
}
OnonTodoChange=(e)=>{
    const{itemKey,onTodoChange}=this.props;
    onTodoChange(e,itemKey)
}
render() {
    return (    
    <div key={this.props.itemKey}>
                <div className="basketItem"> 
                <tr>
                <td>
                <div className="basketImg">
                <img src={this.props.logo}/>    
                 </div> 
                </td>
                <td>
                <div className="basketName">
                <span > { this.props.itemName }  </span> 
                </div>
                </td>
                <td>
                <div className="basketQuantity"> 
                <i onClick = {(e)=> this.onCounterMethodMinus(this.props.itemKey,'delete')} className="far fa-minus-square"></i> 
                <input type="number"  onChange={e => this.OnonTodoChange(e.target.value,this.props.itemKey)} min="1"  value={this.props.foodCounter} className="inputdeneme" rows="1" ></input> 
                <i onClick = {(e)=> this.onCounterMethodPlus(this.props.itemKey,'addLeft')}  className="fas fa-plus"></i>   
                </div> 
                </td>
                </tr>
                <tr>  
                <div class="totalPrice"> {( this.props.itemPrice)*this.props.foodCounter} T L </div>    
                </tr>
                </div>
                <div className="deleteItem"> <i onClick = {(e)=> this.handleDeleteItem( this.props.itemKey)} className="far fa-trash-alt"></i>   </div>
    </div>        
    )
}
}






