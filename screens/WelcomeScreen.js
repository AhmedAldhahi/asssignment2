import {Button, Text, View, StyleSheet} from "react-native";
import {FIREBASE_AUTH} from "../util/firebaseConfig";

function WelcomeScreen({navigation, route}){
    const userID = FIREBASE_AUTH.currentUser.uid;
    console.log(userID);
    return <View style={styles.container}>
        <Button onPress={()=> navigation.navigate('Details')} title={"OpenDetails"}/>
        <Button onPress={()=> FIREBASE_AUTH.signOut()} title={"Logout"}/>
    </View>
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})