

import 'react-native-gesture-handler';
import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
TouchableOpacity
} from 'react-native';

import  TranslateModule  from './components/TranslateModule'
import  OutputText from './components/OutputText'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VkPadge from './screens/Vk'





const Stack = createStackNavigator();




function HomeScreen({ navigation }) {
  const [translateText,setTranslateText] = useState('')
  const getTranslateText = (text) => {
    setTranslateText(text)
  }

  return (
    <>

<TranslateModule fun = {getTranslateText}/>

    <TouchableOpacity onPress={() => navigation.navigate('id userId')} style = {styles.button}
    >
        <Text o style = {styles.buttonText}>Cраница 2</Text>
  </TouchableOpacity>

<OutputText text = {translateText} />
</>
  );
}



function DetailsScreen() {
  return (

      <VkPadge/>
  );
}






export default function App() {




return(
  <NavigationContainer>

    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="id userId" component={DetailsScreen} />
    </Stack.Navigator>

</NavigationContainer>
  )
}





const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#F6F5F3',
  },
  scroll: {
    width:'100%',
    height:'100%',
    backgroundColor:'#CC0000',
  },

  button:{
    width:'25%',
    margin:10,
    paddingHorizontal:11,
    paddingVertical:8,
    backgroundColor:'#007b',
    borderRadius:20,
  },

  buttonText:{
    textAlign:'center',
  }



});
