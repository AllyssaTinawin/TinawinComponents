import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
const logoImg = require("./assets/totoro ico.png");
const backgroundImage = require("./assets/background.png");
export default function App() {
 return (
 <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
 <View style={styles.container}>
 <Image source={logoImg} style={{ width: 300, height: 270, borderRadius: 5 }} />
 <Text>
 <Text style={[styles.boldText, {fontSize: 25}]}>Full Name:</Text> 
 <Text style={{fontSize: 20}}> Allyssa J. Tinawin</Text>
</Text>
<Text>
 <Text style={[styles.boldText, {fontSize: 25}]}>Birthdate:</Text> 
 <Text style={{fontSize: 20}}> September 25, 2003</Text>
</Text>
<Text>
 <Text style={[styles.boldText, {fontSize: 25}]}>Block and Year:</Text> 
 <Text style={{fontSize: 20}}> BSIT 3-2</Text>
</Text>
<Text>
 <Text style={[styles.boldText, {fontSize: 25}]}>Hobbies:</Text> 
 <Text style={{fontSize: 20}}> My hobbies are staying up late for things that don't make 
sense.</Text>
</Text>
 <Text>
 <Text style={[styles.boldText, {fontSize: 25}]}>Experience as a BSIT Student:</Text> 
 <Text style={{fontSize: 20, textAlign: 'justify'}}> As a BSIT student and at the same time, a 
local council officer/student leader, {'\n'}I've faced challenges in subjects like 
programming and networking but gained valuable hands-on experience.{'\n'}Collaboration 
with classmates and support from professors kept me motivated.{'\n'}Despite setbacks, 
my passion for technology drives me forward. I'm eager for the opportunities ahead in the 
future.</Text>
</Text>
 
 <StatusBar style="auto" />
 </View>
 </ImageBackground>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: 'rgba(255, 255, 255, 0.5)', 
 alignItems: 'center',
 justifyContent: 'center',
 },
 boldText: {
 fontWeight: 'bold',
 },
 backgroundImage: {
 flex: 1,
 resizeMode: "cover",
 width: '100%', 
 height: '100%' 
 }
})