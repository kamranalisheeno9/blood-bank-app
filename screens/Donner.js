import React, { useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native'
import {fetch_donnerdata} from '../store/action'
import {connect} from 'react-redux'
import database from '@react-native-firebase/database';
import DatePicker from 'react-native-datepicker'
import LinearGradient from 'react-native-linear-gradient';

import {
    Container,
    View,
    Content,
    Text,
    Form,
    Item,
    Input,
    Label,
    Button,
} from 'native-base';

// import Button from './button'

const Donner = (props) => {
    const [Name,
        setName] = useState("")
    const [Surname,
        setSurname] = useState("")
    const [Age,
        setAge] = useState("")
    const [Weight,
        setWeight] = useState("")
    const [Blood,
        setBlood] = useState("")
    const [Address,
        setAddress] = useState("")
    const [Province,
        setProvince] = useState("")
    const [Number,
        setNumber] = useState("")
    const [date,
        setDate] = useState("")
    const Key = Math.random() * 1000;
    const KeyInt = Key.toFixed();
    const donner = {
        name: Name,
        surname: Surname,
        age: Age,
        weight: Weight,
        blood: Blood,
        address: Address,
        province: Province,
        number: Number,
        date: date,
        key: KeyInt
    }
    const pushData = () => {
        if (Name !== "" && Surname !== "" && Age !== "" && Weight !== "" && Address !== "" && Province !== "" && Blood !== "" && Number !== "") {

            props
                .navigation
                .navigate("Admin")
            database()
                .ref("/")
                .child(`donners/${KeyInt}`)
                .set(donner)

        } else {
            alert("Please Fill Form Completely")
        }

    }
    const submit = () => {
        props.addDonner()

        pushData()

    }

    return (
        <LinearGradient style={{
            flex: 1,
          }} 
            
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#200122', '#6f0000']} >
 
          
        <Container style={styles.container}>
            <Content>

                <Form style={styles.form} >
                    <Item error floatingLabel last>
                        <Label style={styles.label} >Name</Label>
                        <Input style={styles.input} value={Name} onChangeText={(text) => setName(text)}/>
                    </Item>

                    <Item error floatingLabel last>
                        <Label  style={styles.label} >Surname</Label>
                        <Input style={styles.input} value={Surname} onChangeText={(text) => setSurname(text)}/>
                    </Item>
                    <Item error floatingLabel last>
                        <Label  style={styles.label} >Age</Label>
                        <Input style={styles.input} value={Age} onChangeText={(text) => setAge(text)}/>
                    </Item>
                    <Item error floatingLabel last>
                        <Label  style={styles.label} >Blood Group</Label>
                        <Input style={styles.input} value={Blood} onChangeText={(text) => setBlood(text)}/>
                    </Item>
                    <Item error floatingLabel last>
                        <Label  style={styles.label} >Addresss</Label>
                        <Input style={styles.input} value={Address} onChangeText={(text) => setAddress(text)}/>
                    </Item>
                    <Item error floatingLabel last>
                        <Label  style={styles.label} >Province</Label>
                        <Input style={styles.input} value={Province} onChangeText={(text) => setProvince(text)}/>
                    </Item>
                    <Item error floatingLabel last>
                        <Label  style={styles.label} >Weight</Label>
                        <Input error style={styles.input} value={Weight} onChangeText={(text) => setWeight(text)}/>
                    </Item>
                    <Item error floatingLabel last>
                        <Label  style={styles.label} >Contact Number</Label>
                        <Input style={styles.input} value={Number} onChangeText={(text) => setNumber(text)}/>
                    </Item>
                    <Item error last>
                        <Label  style={styles.label} >Date</Label>

                        <DatePicker style={styles.inputDate}
                        
                          
                            date={date}
                            
                      
                            onDateChange={(date) => setDate(date)}/>

                    </Item>
                    <View style={styles.buttonBox}>
                    <Button onPress={submit} style={styles.button}>
                        <Text style={styles.submit}>Submit</Text>
                    </Button>
</View>
                </Form>
            </Content>
        </Container>
        </LinearGradient>
    );
}

const mapStateToProps = (state) => {
    return {
        donners: state.donners,
        //   current_user:state.current_user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addDonner: () => dispatch(fetch_donnerdata())
})

export default connect(mapStateToProps, mapDispatchToProps)(Donner);

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        backgroundColor:"transparent"
    },
    form :{
        width:Dimensions.get('screen').width*0.9,
        alignSelf:'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: "#D8D8E4",
        display: "flex",
        flexDirection: "column"
    },
    label:{
        color:"#ffebee",
        opacity:0.5,
        
    },
    submit: {
        fontSize: 17
    },
    input:{
        color:"#ffebee",
        

    },
    inputDate:{
        width: Dimensions.get('screen').width*0.8,
        paddingTop:10,
        paddingBottom:10,
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