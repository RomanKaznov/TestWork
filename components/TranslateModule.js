import React, {useState} from 'react'
import {TextInput,View,StyleSheet,Text,TouchableOpacity} from 'react-native'



//компонент отрисует поле ввода и кнопку
const TranslateModule = ({fun}) => {


const [textInput,setText] = useState('')

const translate = () => {
  fun(textInput)
}


  return(
    <>
  <View>

<TextInput placeholder={'Русский...'}   onChangeText = {setText}   multiline = {true}   style = {styles.InputText}/>

<View style = {styles.navBar}>
    <TouchableOpacity onPress = {translate}  style = {styles.button}>
      <Text style = {styles.buttonText}>Перевод</Text>
    </TouchableOpacity>
</View>

  </View>
  </>
)
}


const styles = StyleSheet.create({

  InputText : {
    padding:20,
    textAlign: 'left',
    textAlignVertical: "top",
    padding:20,
    minWidth:'90%',
    minHeight:200,
    margin:10,
    backgroundColor:'#FFFFFF',
    borderWidth:1.5,
    borderColor:'#61DAFB'
  },
  navBar: {
  flexDirection:'row',
  alignItems:'flex-start',
    minWidth:'90%',
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
},

navBar:{
  justifyContent:'center'
}

})

export default TranslateModule
