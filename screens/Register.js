import React, { Component, useState } from 'react';
import {StyleSheet,Dimensions} from 'react-native'
import { Container, View, Header,Text, Form, Item, Input, Label,Button,floatingLabel} from 'native-base';
import database from '@react-native-firebase/database';
import LinearGradient from 'react-native-linear-gradient';

import auth from '@react-native-firebase/auth';
const Register =(props) => {


    const [Username,setUsername] = useState("")
    const [Password,setPassword] =useState("")
    const [ErrorEmail,setErrorEmail] =useState("")
    const [ErrorPassword,setErrorPassword] =useState("")
    const Register =()=>{
        auth()
  .createUserWithEmailAndPassword(Username, Password)
  .then(() => {

    // console.log('User account created & signed in!',user);
    setPassword("")
    setUsername("")
  }
  )
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      setErrorEmail(error.message)
    }

    if (error.code === 'auth/invalid-email') {
      console.log(error.message);
    setErrorEmail(error.message)

    }

    console.error(error);
    setErrorPassword(error.message)
  });
    }

    
    
      return (
        <LinearGradient style={{
            flex: 1,
          }} 
            
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#200122', '#6f0000']} >
               
            <Container style={styles.container} >
          <Form >
            <Item style={styles.inputBox}>
              <Input style={styles.inputText} value={Username}  placeholder="Email" placeholderTextColor={"#ffebee85"} onChangeText={(text)=>setUsername(text)}  />
            </Item>
            <View>
              <Text>{ErrorEmail}</Text>
            </View>
          
            <Item style={styles.inputBox}>
              <Input secureTextEntry={true} style={styles.inputText} value={Password}  placeholder="Password" placeholderTextColor={"#ffebee85"}  onChangeText={(text)=>setPassword(text)} />
            </Item>
            <View>
              <Text>{ErrorPassword}</Text>
            </View >
          <View
          
               style={styles.buttonBox}
          >

            <Button onPress={Register}   style={styles.button} >
              <Text style={styles.text}>Sign Up</Text>
              </Button>
          </View>
           
           
          </Form>
      </Container>
      </LinearGradient>
      
    );
  }

export default Register;

const styles = StyleSheet.create({
    container :{
        display:"flex",
        justifyContent:"space-evenly",
        
        backgroundColor:"transparent",
    },
    button: {
        marginTop:20,
        backgroundColor:"#d5000060",
        width: Dimensions.get('window').width*.42,
        justifyContent:"center",
        color:"red"


    },
    text :{
        fontSize:17
        },
        inputText:{
            color:"black",
            paddingLeft:12,
            fontSize:18,
            color:"#ffebee"
            
            
    
        },
        inputBox:{
    
            backgroundColor:"#e3f2fd60",
            borderRadius:23,
            width: Dimensions.get('window').width*.92,
                borderBottomWidth: 0,
    
        },
        buttonBox :{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
        },
       
   
  });