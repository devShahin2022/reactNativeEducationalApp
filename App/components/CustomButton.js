import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const CustomButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.row}>
          <Text style={styles.buttonText}>{title}</Text>
          <Image style={styles.rightArrow} source={require('../assets/icons/right-arrow.png')}></Image>
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'transparent', // Customize the background color
      padding: 14,
      borderRadius: 100,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white', // Customize the text color
      fontSize: 16,
    },
    rightArrow : {
      width : 30,
      height : "100%",
      marginLeft : 10
    },
    row : {
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems : 'center'
    },
  });
  
  export default CustomButton;
  