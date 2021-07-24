// import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

const App = () => {

  const [randomColours, setRandomColours] = useState("rgb(20, 30, 97)");

  const changeBG = () =>{
    let color = "rgb("+
      Math.floor(Math.random() * 256)+
      "," +
      Math.floor(Math.random() * 256)+
      "," +
      Math.floor(Math.random() * 256)+
      ")";

      setRandomColours(color);
  };

  const toReset = ()=>{
    let color = "rgb(20, 30, 97)"
    setRandomColours(color);
  };

  return(
    <>
    <StatusBar backgroundColor={randomColours}/>
    <View style={[styles.container,{backgroundColor:randomColours}]}>
    <TouchableOpacity onPress={changeBG}>
      <Text style={styles.text}>Tap me to BG</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={toReset}>
      <Text style = {[styles.text, {marginTop:40}]}>Reset</Text>
    </TouchableOpacity>
    </View>
    
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    
  },
  text:{
    fontSize: 20,
    color: 'rgb(20, 30, 97)',
    backgroundColor: '#EEEEEE',
    paddingVertical: 10,
    paddingHorizontal: 40,
    textTransform : 'uppercase',
    borderRadius: 15,
  }
})