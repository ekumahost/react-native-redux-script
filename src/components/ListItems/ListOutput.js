/**
 * Created by jsking on 7/30/18.
 */


import React from 'react';
import {FlatList} from 'react-native';

import ListItem from '../../components/ListItems/ListItems';

const ListOutputs = props => {


   // const formOutputs = props.formInputs.map((formInput, i) => (


  //  ));

    //<FlatList style={styles.listContainer}>{formOutputs}</FlatList>
    // using flatlist, changes
   return <FlatList style={styles.listContainer}
       data = {props.formInputs}
       renderItem = {(info) => (
           <ListItem
               //key={i}
                     listValue = {info.item.value}
                     itemImage = {info.item.icon}
                     onItemPressed = { () => props.onItemDeleted(info.item.key) }
           />


       )}

       />;


}


export default ListOutputs;