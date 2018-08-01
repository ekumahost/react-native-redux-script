/**
 * Created by jsking on 7/30/18.
 */
import React, { Component } from 'react';

import { View, TextInput, Button} from 'react-native';

import  Landing_styles from '../../styles/main/landing';
styles = Landing_styles;

class FormInputs extends Component {

    // this state is not used in application wide, so we just leave it here..
    state = {
        inputName: '',

    }


    ButtonClickHandler = () => {
        //alert('You clicked my button');

        if(this.empty(this.state.inputName)){

            return;
        }

//alert(this.state.inputName);
this.props.onFormAdded(this.state.inputName);




    /*    this.setState(prevState => {
            return {
                formInputs: prevState.formInputs.concat(prevState.inputName)

            }


        })
*/


    };




    empty = char => {

        if(char.trim() === ""){

            return true;
        }

        return false;
    }




    inputNameChangedHandler = val => {

        // warning: not  placeNameChangedHandler(){}
        // "this. " will refer to the class because we did not use the method:  placeNameChangedHandler(){}
// this keyword refers to the class here
//alert(val);

        this.setState({

            inputName: val

        });


    }



    render () {


return (

    <View style={styles.inputContainer}>
    {/*another view to hold two things inside the view: view for text input*/}
    <TextInput
        value={this.state.inputName}
        //onChangeText={(placeName) => this.setState({placeName})}
        onChangeText={this.inputNameChangedHandler}
        placeholder="an awesome place"

        maxLength = {10}
        style = {styles.placeInput}
        // style={{height: 40, borderColor: 'black', borderWidth: 0.3, width:300}}
        // flexbox for postionning and floating

    />

    <Button style ={styles.placeButton}
            onPress={this.ButtonClickHandler}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
    />


  </View>

 );

    }


}


export default FormInputs;