import React, {Component} from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet,ImageBackground, Image, TextInput, KeyboardAvoidingView, SafeAreaView, Platform, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
      }
      render(){
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.safeAndroid}/>

<ImageBackground source={require("../assets/bg_image.png")} style ={styles.bgImagem}>

          <Text style ={styles.titleText}>ISS Tracker!</Text>

          <TouchableOpacity style ={styles.botao} onPress ={()=> this.props.navigation.navigate("Tracker")}>

        <Text style ={styles.botaoText}>Tracker!</Text>
        <Text style={styles.saibaMais}>{"Saiba Mais --->"}</Text>
             
                        <Image source={require("../assets/iss_icon.png")} style={styles.icone}></Image>
          </TouchableOpacity>

          <TouchableOpacity style ={[styles.botao, {marginTop: 150}]} onPress ={()=> this.props.navigation.navigate("Meteor")}>

        <Text style ={[styles.botaoText, {marginTop: 90}]}>Meteor!</Text>
        <Text style={styles.saibaMais}>{"Saiba Mais --->"}</Text>
               
                        <Image source={require("../assets/meteor_icon.png")} style={styles.icone}></Image>
          </TouchableOpacity>
  </ImageBackground>
        </View>
      );
      }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        safeAndroid: {
marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10

        },
        titleText: {
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontWeight: "bold",
          color: "white",
},
botao: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 75,
        borderRadius:30,
        backgroundColor: "white",
        justifyContent: 'space-evenly'
    }, 
    botaoText: {
      fontSize: 35,
      fontWeight: "bold",
      color: "black",
      marginTop:75,
      paddingLeft:27,
      justifyContent: 'space-evenly'
    },
    bgImagem: {
        flex: 1,
        resizeMode: "cover"
    },
    saibaMais: {
        padding: 30,
        color: "red",
        fontSize: 15
    },
    numero: {
        position:"absolute",
        color: "rgba(183,183,183,0.5)",
        fontSize: 150,
        right: 20,
        bottom:-15,
        zIndex: -1
    },
    icone: {
        position: "absolute",
        height: 200,
        width:200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
      });