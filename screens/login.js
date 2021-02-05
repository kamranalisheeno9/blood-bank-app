import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image} from 'react-native'
import { Container,Icon, View,Text, Form, Item, Input,Button} from 'native-base';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';

const FloatingLabelExample =(props) => {
    const [Username,setUsername] = useState("")
    const [Password,setPassword] =useState("")
    const [ErrorUsername,setErrorUsername] =useState("")
    const [ErrorPassword,setErrorPassword] =useState("")
    const Login =()=>{
       
        auth()
        .signInWithEmailAndPassword(Username,Password)
            .then(()=>{
                
            })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              setErrorUsername("Email is already in use")
              console.log(error)
              
            }
            if(Username ==="" || Password===""){
                alert("Please Enter Values")
             }
            
            if (error.code === 'auth/invalid-email') {
                console.log(error.message);
                setErrorUsername("Email is badly formatted")
                console.log(error)
        
            }
        
            console.error(error);
            setErrorPassword(error.message)
            console.log(error)

          });
    }
    
    
    
    
      return (
          
                 <LinearGradient style={{
                    flex: 1,
                  }} 
                    
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#200122', '#6f0000']} >
          <Container style={styles.container} >
        

          <Form >
        <Image style={styles.image}  source={require('../images/splash.png')}  />
            <Item style={styles.inputBox} >
              <Input style={styles.inputText} value={Username}  placeholder="Email" placeholderTextColor={"#ffebee85"} onChangeText={(text)=>setUsername(text)} />
            </Item>
            <View style={styles.errorBox}>
              <Text style={styles.error} >{ErrorUsername}</Text>
            </View>
          

          
            <Item style={styles.inputBox}  >
              <Input   style={styles.inputText} placeholder="Password" placeholderTextColor={"#ffebee85"} secureTextEntry={true} value={Password} onChangeText={(text)=>setPassword(text)} />
            </Item>
            <View style={styles.errorBox}>
              <Text style={styles.error}>{ErrorPassword}</Text>
            </View>
          
                  <View style={styles.buttonBox}>

            <Button onPress={Login}  style={styles.button} >
              <Text style={styles.text}>Login</Text>
              </Button>

              <Button onPress={()=>props.navigation.navigate("Register")}   style={styles.button} >
              <Text style={styles.text} >Register</Text>
              </Button>
              
              </View>
         
          </Form>
      </Container>
        </LinearGradient>
    );
  }

export default FloatingLabelExample;

const styles = StyleSheet.create({
    container :{
        display:"flex",
        justifyContent:"space-around",
        
        backgroundColor:"transparent",
    },
   
    button: {
        marginTop:20,
        backgroundColor:"#d5000060",
        width: Dimensions.get('window').width*.42,
        justifyContent:"center",
        color:"red"


    }, 
    buttonBox :{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
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
    image:{
        marginBottom:50,
        height: 200,
         width: Dimensions.get('screen').width,
         resizeMode:'contain',
         opacity:0.75,
           
    },
    error :{
        color:"#ffebee",
        width: Dimensions.get('screen').width*0.8,
        
    },
    errorBox:{
        alignItems:"center",
        justifyContent:"center"

    }
   
  });