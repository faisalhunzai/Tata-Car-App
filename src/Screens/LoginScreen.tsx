import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Button from '../components/Button';
import {Icon} from '../components/Icon';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '506844250507-71lituq4mkj0p76shf1mmquhdfflplf7.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken, user} = await GoogleSignin.signIn();
      console.log(user);

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Asset/Image/login.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <Text style={styles.paraText}>
            Il miglior viaggio inizia{'\n'}
            dalla macchina pulita.
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <View style={styles.line} />
            <Text style={styles.title1}>Registrati</Text>
            <View style={styles.line} />
          </View>
          <View style={{gap: 10}}>
            <Button
              title="Accedi con Google"
              onpress={() => {
                onGoogleButtonPress();
              }}
              icon={<Image source={require('../../Asset/Image/google.png')} />}
              buttonStyle={styles.goggleButton}
              titleStyle={{color: 'black'}}
            />

            <Button
              title="Accedi con Apple"
              onpress={() => {}}
              icon={
                <Icon.AntDesign
                  name="apple1"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
              }
              buttonStyle={styles.goggleButton}
              titleStyle={{color: 'black'}}
            />
            <Button
              title="Accedi con Facebook"
              onpress={() => {}}
              icon={
                <Icon.Entypo
                  name="facebook-with-circle"
                  size={20}
                  color="blue"
                  style={styles.icon}
                />
              }
              buttonStyle={styles.goggleButton}
              titleStyle={{color: 'black'}}
            />
            <Button
              title="Accedi Con Mail"
              onpress={() => {}}
              icon={
                <Icon.Entypo
                  name="mail"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
              }
              buttonStyle={styles.goggleButton}
              titleStyle={{color: 'black'}}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  paraText: {
    color: Colors.color,
    fontSize: 20,
    fontWeight: 'bold',

    margin: 30,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 5,
    borderRadius: 6,
    gap: 20,
  },
  title: {
    color: 'black',
    marginBottom: 25,
    fontSize: 15,
    fontWeight: '600',
  },
  goggleButton: {
    backgroundColor: Colors.color,
    borderWidth: 1.2,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 10,
  },
  icon: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  title1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
    color: Colors.blackColor,
  },
});
