// import React from 'react';
// import { Button, Image, View, Text } from 'react-native';
// import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
//
//
//
// class LogoTitle extends React.Component {
//     render() {
//         return (
//             <Image
//                 source={require('./logo.png')}
//               //  style={{ width: 30, height: 30 }}
//             />
//         );
//     }
// }
//
// class HomeScreen extends React.Component {
//     static navigationOptions = ({ navigation }) => {
//         const params = navigation.state.params || {};
//
//         return {
//             headerTitle: <LogoTitle />,
//             headerLeft: (
//                 <Button
//                     onPress={() => navigation.navigate('MyModal')}
//                     title="Ogwugo"
//                     color="#fff"
//                 />
//             ),
//             headerRight: (
//                 <Button onPress={params.increaseCount} title="+1" color="#fff" />
//
//                 // <Button onPress={params.increaseCount.bind( this )} title="+1" color="#fff" />
//
//             ),
//         };
//     };
//
//     componentWillMount() {
//         this.props.navigation.setParams({ increaseCount: this._increaseCount });
//     }
//
//     state = {
//         count: 0,
//     };
//
//     _increaseCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     };
//
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Home Screen</Text>
//                 {/*Do an input*/}
//
//                 <Text>Welcome to Ogwugo Landing page</Text>
//
//
//
//
//
//                 <Text>Count: {this.state.count}</Text>
//                 <Button
//                     title="Go to Details"
//                     onPress={() => {
//                         /* 1. Navigate to the Details route with params */
//                         this.props.navigation.navigate('Details', {
//                             itemId: 86,
//                             otherParam: 'First Details',
//                         });
//                     }}
//                 />
//
//
//
//
//             </View>
//         );
//     }
// }
//
// class DetailsScreen extends React.Component {
//     static navigationOptions = ({ navigation, navigationOptions }) => {
//         const { params } = navigation.state;
//
//         return {
//             title: params ? params.otherParam : 'A Nested Details Screen',
//             /* These values are used instead of the shared configuration! */
//             headerStyle: {
//                 backgroundColor: navigationOptions.headerTintColor,
//             },
//             headerTintColor: navigationOptions.headerStyle.backgroundColor,
//         };
//     };
//
//     render() {
//         /* 2. Read the params from the navigation state */
//         const { params } = this.props.navigation.state;
//         const itemId = params ? params.itemId : null;
//         const otherParam = params ? params.otherParam : null;
//
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Details Screen</Text>
//                 <Text>itemId: {JSON.stringify(itemId)}</Text>
//                 <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//                 <Button
//                     title="Update the title"
//                     onPress={() =>
//                         this.props.navigation.setParams({ otherParam: 'Updated!' })}
//                 />
//                 <Button
//                     title="Go to Details... again"
//                     onPress={() => this.props.navigation.navigate('Details')}
//                 />
//                 <Button
//                     title="Go back"
//                     onPress={() => this.props.navigation.goBack()}
//                 />
//             </View>
//         );
//     }
// }
//
// class ModalScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//                 <Button
//                     onPress={() => this.props.navigation.goBack()}
//                     title="Dismiss"
//                 />
//             </View>
//         );
//     }
// }
//
// const MainStack = createStackNavigator(
//     {
//         Home: {
//             screen: HomeScreen,
//         },
//         Details: {
//             screen: DetailsScreen,
//         },
//     },
//     {
//         initialRouteName: 'Home',
//         navigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//     }
// );
//
// const RootStack = createStackNavigator(
//     {
//         Main: {
//             screen: MainStack,
//         },
//         MyModal: {
//             screen: ModalScreen,
//         },
//     },
//     {
//         mode: 'modal',
//         headerMode: 'none',
//     }
// );
//
// export default class App extends React.Component {
//     render() {
//         return <RootStack />;
//     }
// }

import React, { Component } from 'react';
import { Text, View , TextInput, StyleSheet, Button} from 'react-native';
import  Landing_styles from './src/styles/main/landing';

import { connect } from 'react-redux';

import {addItem, deleteItem} from './src/store/actions/index';


import FormInputs from './src/components/inc/FormInputs';

import ListOutputs from './src/components/ListItems/ListOutput';

//import icon from './assets/icons/logo.png';

styles = Landing_styles;


 class App extends Component {
  /*

   state = {
      //inputName: '',

       // array of form inputs
      // formInputs : ['BEn','Fas','Dog','Dog','Dog','Dog','tDog','tDog','Dog','dDog','tDog','tDog','Dog'],
       formInputs : [],



   }
*/



   FormAddedHandler = inputName => {



       this.props.onAddItem(inputName);


      /* this.setState(prevState => {
           return {
              //formInputs: prevState.formInputs.concat(inputName)
              // we build a unique ID for it..


// copied to redux state
               formInputs: prevState.formInputs.concat({
                   key: Math.random().toString(), // should be string why: maybe because of version
                   value: inputName,
                   //icon : icon,
                   icon : { uri : 'https://kadsec.com/images/KADSECLOGO1.png'}
               })



           }
       })*/


};



   itemDeletedHandler = key => {

       this.props.onDeleteItem(key);

       /*this.setState(prevState => {

           return {


       // copied to redux state
               formInputs: prevState.formInputs.filter(value => {

                   return value.key !== key;
               })




           };

       });*/


};




    render() {
        return (


            <View style={styles.container}>

          <FormInputs onFormAdded = {this.FormAddedHandler} />

<ListOutputs formInputs = {this.props.formInputs} onItemDeleted={this.itemDeletedHandler}/>


            </View>

     );



    }
}



// redux connect is included


const mapStateToProps = state => {

     // mapping state to props, amazing


return {
    formInputs: state.reduced_items.formInputs, // last formInputs is from reducers constant: initialState

};


};




 const mapDispatchToProps = dispatch => {

     return {
     onAddItem: (name) => dispatch(addItem(name)),
     // onDeleteItem : (key) => dispatch(deleteItem(key))
     };


 };


export default connect(mapStateToProps,mapDispatchToProps)(App);


