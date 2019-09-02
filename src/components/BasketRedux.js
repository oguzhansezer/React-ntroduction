import { connect } from 'react-redux';
import React, { Component } from 'react'
import {ListGroup,Button} from 'react-bootstrap'
 class BasketRedux extends Component {
    render() {
        return (
            <div>
            <ListGroup>
            <ListGroup.Item as="li" active>Sepetim2 </ListGroup.Item>
            {
              this.props.basketList.map(item => {
                return(
                <div key={item.id+500}>
              <Button id={item.id} onClick = {this.props.addToBasket}/>  {item.name}
                </div>
                )
            } )
            }
           
            
            </ListGroup>
           
           
        </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    basketList: state.basketReducer.basketList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      
      addToBasket: (e) => {
       
        dispatch({ type: 'ADD_BASKET2' });
      }
    };
  };




const BasketReduxConnected = connect(mapStateToProps, mapDispatchToProps)(BasketRedux);

export default BasketReduxConnected;