import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HorizontalLine = () => {
  return   (
    <View style={styles.hr}>
        <Text style={styles.hrText}>Or</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    hr : {
        borderBottomWidth : 1,
        borderBottomColor : '#f1f1f1',
        paddingVertical : 10,
        marginTop : 20,
        width : "100%",
        display : 'flex',
        alignItems : "center"
    },
    hrText : {
        backgroundColor : "#fff",
        marginBottom : -23,
        padding : 5,
    }
});

export default HorizontalLine;
