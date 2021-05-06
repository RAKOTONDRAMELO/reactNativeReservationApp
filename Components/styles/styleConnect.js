import {StyleSheet} from 'react-native';


const red ="#520606"
const bleu ="#adcddb"
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:"center",
        backgroundColor:red,
    },
    title : {
        borderBottomColor:bleu,
        borderBottomWidth: 10,
        fontSize:40,
        color: "white",
        fontWeight:"bold",
        margin:20,
    },
    input:{
        color:"white",
        fontSize:25,
        margin:20,
        borderBottomWidth:2,
        borderBottomColor:"white"
    },
    button:{
        backgroundColor:"white",
        margin: 20,
        alignItems:"center",
        borderRadius : 30,
        padding:10
    },
    textButton:{
        fontSize:20,
        color:red,
        fontWeight:"bold"

    }
})

export default styles