import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
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
})

export default Style;