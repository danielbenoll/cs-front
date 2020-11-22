import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './Rotas';

const image = { uri: "https://wallpapercave.com/wp/wp1980778.jpg" };

function App() {
  return (
    <>
      <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Rotas></Rotas> 
        
      </ImageBackground>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default App;
