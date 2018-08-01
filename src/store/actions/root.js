/**
 * Created by jsking on 7/31/18.
 */
// ROOT ACTIONS
import {ADD_ITEM, DELETE_ITEM} from '../reducers/root';


export const addItem = (inputName) => {


    return {

      type: ADD_ITEM,
        itemName: inputName

    };


}




export const deleteItem = (key) => {
    return {
        type: DELETE_ITEM,
        key: key

    }


}

/*

export const deleteItem = (key) => {
return {
    type: DELETE_ITEM,
    key: key,

}


}*/
