/**
 * Created by jsking on 7/31/18.
 */

import {ADD_ITEM, DELETE_ITEM} from '../actions/rootActionTypes';


const initialState = {

    formInputs: []

};

const itemReducer = (state = initialState, action) => {
//this will execute when we get an action
  switch (action.type){

      case ADD_ITEM:

          // imutability concept
// return a new state that will replace the old one, thats it.

            return {
                ...state, // spread operator:: that is how we bring the old state in..

                formInputs: state.formInputs.concat({
                    key: Math.random().toString(), // should be string why: maybe because of version
                    value: action.itemName,
                    icon : { uri : 'https://kadsec.com/images/KADSECLOGO1.png'}
                })


            };



        //  break;


      case DELETE_ITEM :

          return {
              ...state, // that is how we bring the old state in..

              formInputs: state.formInputs.filter(inputs => {

                  return inputs.key !== action.key;
              })



          };




              default:
          return state;


  }


};

export default itemReducer;






