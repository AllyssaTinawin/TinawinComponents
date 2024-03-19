import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TextInput, Button } from 'react-native';
const showAlert = () =>(
Alert.alert('Alerts', 'No Pain, No Gain.')
);
export default function App() {
return (
<ScrollView showsHorizontalScrollIndicator={false}>
<View style={styles.container}>
<Text style={styles.topText}>The Wind Rises</Text>
<Image style={styles.image1} source={{
uri: 'https://darkroom.bbfc.co.uk/1920/638cf80e177a97d111400d293b4be015:0eb2daa0a93c8bee204896d6d08ab525/my-neighbour-totoro.jpeg'
}} />
{}
<Image style={styles.image1} source={require('./assets/amsterdam.jpg')} />
<Image style={styles.image1} source={require('./assets/greenland.jpg')} />
<Image style={styles.image1} source={require('./assets/japan.jpg')} />
<Image style={styles.image1} source={require('./assets/ecuador.jpg')} />
<Text style={styles.baseText}> AMSTERDAM, GREENLAND, JAPAN, AND ECUADOR.
<Text style={styles.innerText}> I want to leave my country, Philippines. </Text>
</Text>
{}
<TextInput style={styles.input1} placeholder='Tap to input text'/>
<Button style={styles.btnopen} title='CLICK TO TRIGGER ALERT' onPress={showAlert}/>
<StatusBar style="auto" />
</View>
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'blue',
alignItems: 'center',
justifyContent: 'center',
resizeMode: 'cover',
},
baseText: {
fontWeight: 'bold',
fontSize: 20,
},
innerText: {
color: 'red',
},
image1: {
width: 250,
height: 200,
margin: 5,
borderStyle: 'solid',
borderWidth: 5,
borderColor: 'white',
},
input1: {
height: 30,
width: 300,
borderWidth: 2,
padding: 10,
margin: 5,
},
btnopen: {
height: 30,
width: 300,
},
topText: {
fontWeight: 'bold',
fontSize: 20,
}
});