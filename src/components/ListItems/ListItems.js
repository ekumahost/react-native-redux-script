/**
 * Created by jsking on 7/30/18.
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


const ListItem = (props) => (

//props.onItemPressed
    <TouchableOpacity onPress={props.onItemPressed}>
<View style={styles.listItem} >

    <Image source={props.itemImage} style={styles.itemImage} />
    <Text> {props.listValue}</Text>


</View>
    </TouchableOpacity>
);



const styles = StyleSheet.create({

    listItem: {
        width: '100%',
        padding : 10,
        margin: 5,
        backgroundColor : 'red',
        flexDirection: 'row',
        alignItems : 'center'
    },

    itemImage : {

      marginRight: 8,
        // image coming from web must set height and width
      width: 50,
        height : 50



    }


})

export default ListItem;