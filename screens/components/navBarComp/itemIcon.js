import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

//
const ItemIcon = ({uriPhoto,nameItem}) => {
  return (
<>
<View style = {styles.container}>

  <Image
    style={styles.userPhoto}
    source={{uri : uriPhoto.toString()}}
    />

<Text style= {styles.textStyle}>{nameItem.toString()}</Text>

</View>
  </>


  );
};

const styles = StyleSheet.create({


  container: {

    alignItems:'center',
    justifyContent: 'center',
    marginLeft:25
  },

  userPhoto: {
    width:30,
    height:30,


  },

  textStyle: {
  color:'#648FC9',
  }






})
export default ItemIcon
