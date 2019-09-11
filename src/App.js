import './App.css';
import FoodMenu from './components/FoodMenu'
import Basket from './components/Basket'
import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import logo1 from './img/americano.jpg'
import logo2 from './img/cake.jpg'
import logo3 from './img/cheesecake.jpg'
import logo4 from './img/icecream.jpg'
import logo5 from './img/pizza.jpg'
class App extends Component {
  state = { 
    basket: [], 
    foodList: [
      {
        id : 1,
        price : 10,
        name : "Americano",
        description : "Caffè Americano ya da Americano sıcak su ekleyerek espresso kaynatmak yöntemi ile hazırlanan kahve çeşidi",
        logo : logo1
      },
      {
        id : 2,
        price : 15,
        name : "cake",
        description : "Cupcake bir kişiye sunulmak için hazırlanan küçük bir kek türüdür.",
        logo : logo2
      },
      {
        id : 3,
        price : 5,
        name : "cheesecake",
        description : "cheesecake",
        logo : logo3
       
      },
      {
        id : 4,
        price : 18,
        name : "ice cream",
        description : "Dondurma",
        logo : logo4
       
      },
      {
        id : 5,
        price : 33,
        name : "pizza",
        description : "pizza",
        logo : logo5
       
      }
    ],  
  }
  
 deleteItem = (id) => {
    const {basket} = this.state

    let clickeditem=basket.find(listx => listx.id===id)
    let basketTemp=[...basket];
    
    clickeditem.count =0;
    basketTemp=basketTemp.filter(x => x.count!==0)
    
    this.setState({basket:basketTemp})
  }
 CounterMethod = (id,dir)=>{
  const {basket,foodList}=this.state;
  let clickeditem=foodList.find(listx => listx.id===id)
  let BasketTemp=basket; 
  var itemFounder = basket.find(function(element){ return element.id===id; }); 

 if(dir==='addRight'){

  if(itemFounder){ 
    clickeditem.count=parseInt(clickeditem.count)
    clickeditem.rightCount=parseInt(clickeditem.rightCount)
    clickeditem.count +=clickeditem.rightCount;
  }
  else{
   clickeditem.count = clickeditem.rightCount;
   BasketTemp.push(clickeditem);
  }
 }
else if(dir==='addLeft'){
  clickeditem.count=parseInt(clickeditem.count)
  clickeditem.count +=1;

} else {
    clickeditem.count -=1;

    if(clickeditem.count<1){
      BasketTemp=BasketTemp.filter(x => x.count>1)
    }
  }

  this.forceUpdate()
  this.setState({basket:BasketTemp})
}

IncrementFoodList=(value,id)=>{
  const {foodList}=this.state
  let newFoodList=[...foodList]
  let clickeditem = foodList.find(listx => listx.id===id)
  if(value>-1){
    clickeditem.rightCount=value
    this.setState({foodList:newFoodList})
  }
 
 }

onTodoChange=(value,id)=>{

  const {basket}=this.state
  const newBasket=[...basket];

  let clickeditem=newBasket.find(x => x.id===id)
  if(clickeditem.rightCount && value>-1){
      clickeditem.count=value
  }
  else{
  clickeditem.rightCount=1;
  }

  this.setState({basket:newBasket})
}


  render() {
    const {basket, foodList} = this.state;
    
    return (
      <div>   
       

       <div className="restaurantWrapper">  
        <Row> 
        <Col  xs lg="3"> 
        <div className="header">
        <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#foods">Foods</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        </ul>
        </div>
        </Col>


        <Col xs={6} >
         <FoodMenu deleteItem={this.deleteItem} IncrementFoodList={this.IncrementFoodList} onTodoChange={this.onTodoChange} CounterMethod={this.CounterMethod} basket={basket} foodList={foodList}/>
         </Col>
         
         
          <Col>
          <Basket  deleteItem={this.deleteItem}  basket={basket} CounterMethod={this.CounterMethod} onTodoChange={this.onTodoChange}  />
          </Col>
         
        </Row>
        </div> 

        <div> </div>
      </div>
    )
  }
}

export default App; 