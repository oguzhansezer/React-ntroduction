const initialState = {
    basketList: [
        {
            id : 7,
            price : 10,
            name : "yemek7",
          },
    ],
    foodList: [
        {
          id : 1,
          price : 10,
          name : "yemek1",
        },
        {
          id : 2,
          price : 15,
          name : "yemek2"
        },
        {
          id : 3,
          price : 5,
          name : "yemek3"
         
        },
        {
          id : 4,
          price : 18,
          name : "yemek4"
         
        }
      ]
  };
  

  export const basketReducer = function(state = initialState, action) {
    switch (action.type) {
      case 'ADD_BASKET':
        return state
      default:
        return state;
    }
  };

  //