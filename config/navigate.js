import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native'

import Login from '../screens/login'
import Register from '../screens/Register'
import Admin from '../screens/Admin'
import Donner from '../screens/Donner'
import Reciever from '../screens/Reciever'
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

function Navigate() {
    const [initializing,
        setInitializing] = useState(true);
    const [user,
        setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) 
            setInitializing(false);
        }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) 
        return null;
    
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {user
                    ? <Stack.Screen
                            options={{
                            title: 'Welcome',
                            headerStyle: {
                                backgroundColor: '#580000',
                                height: 50
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {}
                        }}
                            name="Admin"
                            component={Admin}/>
                    : <Stack.Screen
                        options={{
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: '#580000',
                            height: 50
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {}
                    }}
                        name="Please Login"
                        component={Login}/>}
                <Stack.Screen
                    options={{
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: '#580000',
                        height: 50
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {}
                }}
                    name="Register"
                    component={Register}/>
                <Stack.Screen
                    options={{
                    title: 'Blood Donner',
                    headerStyle: {
                        backgroundColor: '#580000',
                        height: 50
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {}
                }}
                    name="Donner"
                    component={Donner}/>
                <Stack.Screen
                    options={{
                    title: 'Blood Reciever',
                    headerStyle: {
                        backgroundColor: '#580000',
                        height: 50
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {}
                }}
                    name="Reciever"
                    component={Reciever}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;

const styles = StyleSheet.create({
    loginHeader: {

        backgroundColor: "black",
        color: "red"
    }
});