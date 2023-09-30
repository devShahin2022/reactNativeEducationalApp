import { View, Text, ScrollView , StatusBar, StyleSheet,
Image, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import { CheckBox } from 'react-native-elements';
import HorizontalLine from '../components/HorizontalLine';

export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
        const handleButtonPress = () => {
        // Implement the functionality you want when the button is pressed
        alert('Button pressed!');
      };
  return (
    <ScrollView >
        <StatusBar animated={true} backgroundColor="#DCBAFF"  />
        <LinearGradient colors={['#DCBAFF', '#92CDE7', '#A8EBEF']} style={styles.linearGradient}>
        <View style={styles.row}>
            <Text style={styles.headerTextLeft}>Login </Text>
            <Image style={styles.img} source={require('../assets/icons/transfer.png')}></Image>
            <Text  style={styles.headerTextRight}>Register</Text>
        </View>
        </LinearGradient>
        <View style={styles.loginBx}>
            {/* login avatar */}
            <View style={styles.avatarBx}>
                <Image source={require('../assets/icons/graduate.png')} style={styles.avatar}></Image>
            </View>
            {/* login field */}
            <View style={{width:'100%', marginTop : 30}}>
                <Text style={styles.inputTitle}>Username/Email</Text>
                <View style={styles.dRelative}>
                <TextInput style={styles.inputField} secureTextEntry={true}></TextInput>
                <Image source={require('../assets/icons/identity.png')} style={[styles.dAbsolute, styles.inputLabel,{width:22,height:22}]}></Image>
                </View>
            </View>

            <View style={{width:'100%', marginTop : 5}}>
                <Text style={styles.inputTitle}>Password</Text>
                <View style={styles.dRelative}>
                <TextInput style={[styles.inputField, styles.inputPassword]} secureTextEntry={true}></TextInput>
                <Image source={require('../assets/icons/password.png')} style={[styles.dAbsolute, styles.inputLabel,{width:20,height:20}]}></Image>
                <View style={[styles.dAbsolute,{width:"50%",height:"70%",marginTop:0,display:'flex',justifyContent:"center",alignItems:"flex-end",marginLeft:"40%"}]}>
                    <Image source={require('../assets/icons/eye.png')} style={{width:18,height:18}}></Image>
                </View>
                </View>
            </View>
            
            <View style={styles.checkBox}>
                <CheckBox
                    title="Keep me logged in "
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                />
            </View>

            <View style={{width:'100%', marginTop : 5}}>
                <LinearGradient colors={['#DCBAFF', '#92CDE7', '#A8EBEF']} start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }} style={[styles.gradianBtnWrapper]}>
                    <CustomButton title="Login" onPress={handleButtonPress} />
                </LinearGradient>
            </View>
            {/* compelete manual login */}
            <HorizontalLine></HorizontalLine>
            <View style={[styles.row, styles.socialWrapper, {marginTop:40, backgroundColor:"#BAD8FF"}]} >
                <Image style={styles.socialIcons} source={require('../assets/icons/facebook.png')}></Image>
                <Text style={[styles.textColor,{marginLeft : 10}]}>Login with facebook</Text>
            </View>

            <View style={[styles.row, styles.socialWrapper, {backgroundColor:"#f6f6f6"}]} >
                <Image style={styles.socialIcons} source={require('../assets/icons/google.png')}></Image>
                <Text style={[styles.textColor,{marginLeft : 10}]}>Login with google</Text>
            </View>
            {/* forgotten password and new user ? */}
            <View style={[styles.row, {marginTop:30,width:"100%" ,display:"flex",justifyContent : "space-between"}]}>
                <Text style={styles.textColor}>New user ? </Text>
                <Text style={styles.textColor}>forgotten password ? </Text>
            </View>
        </View>

    </ScrollView>
  )
}

// Later on in your styles..
var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom : 160,
      paddingTop : 40,
      justifyContent:'center',
      alignItems: 'center',
      flexDirection : 'column'
    },
    headerTextLeft : {
        fontSize : 24,
        fontWeight:'bold'
    },
    headerTextRight : {
        fontSize : 16
    },
    row : {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems : 'center'
    },
    img : {
        width : 16,
        height : 16,
        marginEnd : 20,
        marginStart : 20
    },
    loginBx : {
        marginTop : -100,
        padding : 8,
        paddingLeft : 20,
        paddingRight : 20,
        backgroundColor : '#fff',
        paddingBottom : 20,
        borderTopEndRadius : 73,
        borderTopStartRadius : 73,
        alignItems : 'center',
    },
    avatarBx : {
        width : 82,
        height : 82,
        borderRadius : 100,
        backgroundColor : '#fff',
        marginTop : -40,
        padding : 16
    },
    avatar : {
        width : '100%',
        height : "100%"
    },
    inputTitle : {
        color : "#707070",
        marginBottom : 5,
        fontSize : 18,
        marginLeft : 6,
        fontWeight : 'bold'

    },
    inputField : {
        borderColor : '#F4F4F4',
        borderWidth : 1,
        marginBottom : 20,
        borderRadius : 100,
        padding : 10,
        fontSize : 18,
        backgroundColor : '#F4F4F4',
        paddingLeft : 46
    },
    dRelative : {
        position : 'relative'
    },
    dAbsolute : {
        position : 'absolute'
    },
    inputLabel : {
        width : 30,
        height : 30,
        marginLeft : 10,
        marginTop : 12
    },
    eye : {
        marginLeft : "90%"
    },
    inputPassword : {
        paddingRight : 40
    },
    gradianBtnWrapper : {
        width : '100%',
        height : 50,
        padding : 0,
        margin : 0,
        marginTop : 10,
        borderRadius : 100
    },
    checkBox : {
        width : "100%",
        display : "flex",
        alignItems : "flex-start"
    },
    socialIcons : {
        width : 20,
        height : 20,
    },
    socialWrapper : {
        marginVertical : 4,
        width : "100%",
        padding : 8,
        borderRadius : 100,
    },
    textColor : {
        color : "#4e4e4e"
    }
  });