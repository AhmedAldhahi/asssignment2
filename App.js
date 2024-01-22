import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from './screens/Login'
import WelcomeScreen from "./screens/WelcomeScreen";
import Details from "./screens/Details";
import {useEffect, useState} from "react";
import { User, onAuthStateChanged } from 'firebase/auth'
import {FIREBASE_AUTH} from "./util/firebaseConfig";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
    return(
        <InsideStack.Navigator>
            <InsideStack.Screen name={"Welcome Screen"} component={WelcomeScreen}/>
            <InsideStack.Screen name={"Details"} component={Details}/>
        </InsideStack.Navigator>
    )
}
export default function App() {
    const [user, setUser] = useState();
    const [initializing, setInitializing] = useState(true);

    //handle user state changes
    function onAuthStateChanged(user){
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = FIREBASE_AUTH.onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on amount
    }, []);

    if(initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"} >

          {user ? (
              <Stack.Screen name={"Inside"} component={InsideLayout} options={{headerShown: false}}></Stack.Screen>
              ) : (
              <Stack.Screen name={"Login"} component={Login} options={{headerShown: false}}/>
          )
          }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

