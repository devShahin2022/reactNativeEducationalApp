import { View, Text, ScrollView , StatusBar, StyleSheet,
    Image, TextInput} from 'react-native'
    import { LinearGradient } from 'expo-linear-gradient'
    import React, { useState } from 'react'
    import CustomButton from '../components/CustomButton';
    import { CheckBox } from 'react-native-elements';
    import HorizontalLine from '../components/HorizontalLine';
    import Style from '../assets/styles/Style';
    
    export default function Login() {
        const [number, onChangeNumber] = React.useState('');
        const [isChecked, setIsChecked] = useState(false);
            const handleButtonPress = () => {
            // Implement the functionality you want when the button is pressed
            alert('Button pressed!');
          };
      return (
        <ScrollView >
            <StatusBar animated={true} backgroundColor="#DCBAFF"  />
            <LinearGradient colors={['#DCBAFF', '#92CDE7', '#A8EBEF']} style={Style.linearGradient}>
            <View style={Style.row}>
                <Text style={Style.headerTextLeft}> Register </Text>
                <Image style={Style.img} source={require('../assets/icons/transfer.png')}></Image>
                <Text  style={Style.headerTextRight}>Login</Text>
            </View>
            </LinearGradient>
            <View style={Style.loginBx}>
                {/* login avatar */}
                <View style={Style.avatarBx}>
                    <Image source={require('../assets/icons/add-user.png')} style={Style.avatar}></Image>
                </View>
                {/* login field */}
                <View style={{width:'100%', marginTop : 30}}>
                    <Text style={Style.inputTitle}>Full name</Text>
                    <View style={Style.dRelative}>
                    <TextInput style={Style.inputField} secureTextEntry={true}></TextInput>
                    <Image source={require('../assets/icons/graduate.png')} style={[Style.dAbsolute, Style.inputLabel,{width:22,height:22}]}></Image>
                    </View>
                </View>

                <View style={{width:'100%', marginTop : 5}}>
                    <Text style={Style.inputTitle}>Email</Text>
                    <View style={Style.dRelative}>
                    <TextInput style={Style.inputField} secureTextEntry={true}></TextInput>
                    <Image source={require('../assets/icons/email.png')} style={[Style.dAbsolute, Style.inputLabel,{width:22,height:22}]}></Image>
                    </View>
                </View>

                <View style={{width:'100%', marginTop : 5}}>
                    <Text style={Style.inputTitle}>Phone number</Text>
                    <View style={Style.dRelative}>
                    <TextInput  keyboardType="numeric" style={Style.inputField} secureTextEntry={false}></TextInput>
                    <Image source={require('../assets/icons/handphone.png')} style={[Style.dAbsolute, Style.inputLabel,{width:22,height:22}]}></Image>
                    </View>
                </View>

                <View style={{width:'100%', marginTop : 5}}>
                    <Text style={Style.inputTitle}>School name</Text>
                    <View style={Style.dRelative}>
                    <TextInput style={Style.inputField} secureTextEntry={true}></TextInput>
                    <Image source={require('../assets/icons/school.png')} style={[Style.dAbsolute, Style.inputLabel,{width:22,height:22}]}></Image>
                    </View>
                </View>

                <View style={{width:'100%', marginTop : 5}}>
                    <Text style={Style.inputTitle}>Create Password</Text>
                    <View style={Style.dRelative}>
                    <TextInput style={[Style.inputField, Style.inputPassword]} secureTextEntry={true}></TextInput>
                    <Image source={require('../assets/icons/password.png')} style={[Style.dAbsolute, Style.inputLabel,{width:20,height:20}]}></Image>
                    <View style={[Style.dAbsolute,{width:"50%",height:"70%",marginTop:0,display:'flex',justifyContent:"center",alignItems:"flex-end",marginLeft:"40%"}]}>
                        <Image source={require('../assets/icons/eye.png')} style={{width:18,height:18}}></Image>
                    </View>
                    </View>
                </View>

                <View style={{width:'100%', marginTop : 5}}>
                    <Text style={Style.inputTitle}>Repeat Password</Text>
                    <View style={Style.dRelative}>
                    <TextInput style={[Style.inputField, Style.inputPassword]} secureTextEntry={true}></TextInput>
                    <Image source={require('../assets/icons/password.png')} style={[Style.dAbsolute, Style.inputLabel,{width:20,height:20}]}></Image>
                    <View style={[Style.dAbsolute,{width:"50%",height:"70%",marginTop:0,display:'flex',justifyContent:"center",alignItems:"flex-end",marginLeft:"40%"}]}>
                        <Image source={require('../assets/icons/eye.png')} style={{width:18,height:18}}></Image>
                    </View>
                    </View>
                </View>
                
                <View style={Style.checkBox}>
                    <CheckBox
                        title="Accept terms and condition"
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                    />
                </View>
    
                <View style={{width:'100%', marginTop : 5}}>
                    <LinearGradient colors={['#DCBAFF', '#92CDE7', '#A8EBEF']} start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }} style={[Style.gradianBtnWrapper]}>
                        <CustomButton title="Create Account" onPress={handleButtonPress} />
                    </LinearGradient>
                </View>
                {/* compelete manual login */}
                <HorizontalLine></HorizontalLine>
                <View style={[Style.row, Style.socialWrapper, {marginTop:40, backgroundColor:"#BAD8FF"}]} >
                    <Image style={Style.socialIcons} source={require('../assets/icons/facebook.png')}></Image>
                    <Text style={[Style.textColor,{marginLeft : 10}]}>Login with facebook</Text>
                </View>
    
                <View style={[Style.row, Style.socialWrapper, {backgroundColor:"#f6f6f6"}]} >
                    <Image style={Style.socialIcons} source={require('../assets/icons/google.png')}></Image>
                    <Text style={[Style.textColor,{marginLeft : 10}]}>Login with google</Text>
                </View>
                {/* forgotten password and new user ? */}
                <View style={[Style.row, {marginTop:30,width:"100%" ,display:"flex",justifyContent : "space-between"}]}>
                    <Text style={Style.textColor}>Already have an account ? Login</Text>
                </View>
            </View>
        </ScrollView>
      )
    }