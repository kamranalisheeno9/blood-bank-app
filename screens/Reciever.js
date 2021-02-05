import React, {useState} from 'react';
import {StyleSheet, View,Dimensions} from 'react-native'
import {fetch_donnerdata} from '../store/action'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';


import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Card,
    CardItem,
    Body,
    Text,
} from 'native-base';
const Reciever = (props) => {


    const [search,setSearch] = useState('');
    const findBlood=props.donners.filter(donners=>{
        return donners.blood.toLowerCase().includes(search.toLowerCase()) 

    })

    return (
         

        
        <Container style={styles.container}>
        <LinearGradient style={{
            flex: 1,
          }} 
            
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#200122', '#6f0000']} >
 
            <Content >
                <Header  searchBar rounded>
                    <Item>
                        <Input value={search} onChangeText={(text)=>setSearch(text)} placeholder="Search Blood Group Here Like A+ "/>
                        <Icon name="ios-search"/>
                   
                    </Item>
                </Header>

                <View >
                {findBlood.map((donners)=>{                 
    return (<View style={styles.data} key={donners.key} > 

         <Card  style={styles.card}>
<CardItem   style={styles.dataBody}>
    <Body  >
        <Text style={styles.title}>Name :</Text>
        <Text>{donners.name}
            <Text> {donners.surname}</Text>
        </Text>
        <Text style={styles.title}>Blood Group :</Text>
        <Text>
        {donners.blood}
        </Text>
        <Text style={styles.title}>Weight :</Text>

        <Text>
        {donners.weight}
        </Text>
        <Text style={styles.title}>Age :</Text>

        <Text>
        {donners.age}
        </Text>
        <Text style={styles.title}>Contact :</Text>

        <Text>
        {donners.number}
        </Text>
        <Text style={styles.title}>Date :</Text>

        <Text>
        {donners.date}
        </Text>
        <Text style={styles.title}>Address :</Text>
        <Text>
        {donners.address}
            <Text> {donners.province}
            </Text>
        </Text>
    </Body>
</CardItem>
</Card>


        
</View>)
    
})

}
</View>

            </Content>
        </LinearGradient>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reciever);

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,


    },
    data :{
        width: Dimensions.get('screen').width*0.85,
        alignSelf:'center',

    },
    button: {
        marginTop: 20,
        backgroundColor: "#D8D8E4",
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize:17,
        fontWeight:"bold"
    },
    card:{
        marginTop:8,

    },
    dataBody:{
        backgroundColor:"black",

    }

});