
import {StyleSheet} from 'react-native';

const Landing_styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
        backgroundColor : "#ffffff",
    },

    container: {
        padding: 20,

        flex: 1,
        // main container bg color
        backgroundColor: '#f1f1f1',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },


    inputContainer: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    placeInput : {

        width: '70%',
        borderColor: 'black',
        //borderWidth: 0.3,
    },

    placeButton: {

        width: '30%',
    },


    listContainer: {
        width: '100%'



    }


});


export default Landing_styles;