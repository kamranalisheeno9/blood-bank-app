import React, {useEffect} from 'react';
import {StyleSheet,Image,Dimensions} from 'react-native'
import {fetch_donnerdata} from '../store/action'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

import 
{
    Container,
    Text,
    View,
    Button,
    CardItem,
    Left,
    Thumbnail,
    Body,
    

        
} from 'native-base';
import {TouchableOpacity} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

const Admin = (props) => {
       useEffect( () => {
      props.addDonner()
      },[]);

    const Logout=()=>{
    auth()
  .signOut()
  .then((user) =>
  
  console.log('User signed out!'));
    }
    return (
        <LinearGradient style={{
            flex: 1,
          }} 
            
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#200122', '#6f0000']} >
 

            <Container  style={styles.container} >
               
        <ScrollView >
               
                               
                <TouchableOpacity activeOpacity={0.5} style={styles.mainBoxes}    onPress={()=>props.navigation.navigate("Donner")} >

            <CardItem style={styles.cardStyleThumbnail}  >
              <Left >
                <Thumbnail source={require('../images/icon.png')} style={{height: 20, width: 20}}  />
                <Body >
                  <Text style={styles.text}>Become Donner</Text>


                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.cardStyleImage} >
              <Body >
                <Image source={require('../images/donation.jpg')}  style={styles.images}/>
                
              </Body>
            </CardItem>
            <Text style={styles.textLine}>
                “If you’re a blood donor, you’re a hero to someone.”
                </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.mainBoxes} onPress={()=>props.navigation.navigate("Reciever")} >

                
            <CardItem style={styles.cardStyleThumbnail}>
              <Left >
                <Thumbnail  source={require('../images/icon.png')} style={{height: 20, width: 20}}/>
                <Body >
                  <Text style={styles.text}>Become Reciever </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.cardStyleImage}>
              <Body>
                <Image source={require('../images/reciever.png')}  style={styles.images}/>

                </Body>
            </CardItem>
 </TouchableOpacity>
 <View  style={styles.buttonBox}>

 <Button onPress={Logout}   style={styles.button} >
              <Text style={styles.text} >Logout</Text>
              </Button>
 </View>
        </ScrollView>
            </Container>
        </LinearGradient>
    );
}

const mapStateToProps = (state) => {
    return {
        donners: state.donners,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addDonner: () => dispatch(fetch_donnerdata())
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor:"transparent",
        justifyContent:"space-between",
        
    },
    mainBoxes:{
        width:Dimensions.get("screen").width*0.8,
        alignSelf:"center",
        overflow:"hidden",
        marginTop:25

    },
    images:{
        
        height: 200, 
        width: Dimensions.get('window').width*.70,
        resizeMode :"contain",
        alignSelf:"center",
        borderRadius:25
        
    },
    cardStyleThumbnail:{
        backgroundColor:"#ef535020",

    },
    cardStyleImage:{
        backgroundColor:"#ef535020",
   
    },
    text:{
        color:"#ffebee",
    },
    
    textLine:{
        color:"#ffebee",
        textAlign:"center",
        marginTop:15
    },
    button: {
        marginTop:15,
        marginBottom:15,
        backgroundColor:"#d5000060",
        width: Dimensions.get('window').width*.52,
        justifyContent:"center",
        color:"red"


    }, 
    buttonBox :{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
    },
   
    
});