//WelcomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/welcomeBackground.jpg')} style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to Chef Christoffel's App</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.8} // This adds a slight hover effect
      >
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for better readability
    padding: 10,
    borderRadius: 8,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
