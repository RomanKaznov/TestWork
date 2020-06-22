import React from 'react'
import {View,Text,StyleSheet,} from 'react-native'

// кщмонент отрисовывает поле вывода текста
const OutputText = ({text}) => {

  return(
  <View style = {styles.Output}>
  <Text>Английский:  {text.toString()}</Text>
  </View>

)
}

 OutputText.defaultProps = {
   text: 'Английский'
 }


const styles = StyleSheet.create({
  Output: {
    padding:20,
    backgroundColor:'#ffff',
    width:'100%',
    height:'100%'

  }
})

export default OutputText
