import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {Icon} from '../components/Icon';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const LocationScreen = () => {
  const navigation =useNavigation();

  useEffect(() => {
    SheetManager.show('loction');
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Asset/Image/map.jpg')}
        style={styles.backgroundImage}>
        <ActionSheet id="loction" containerStyle={styles.actionSheet}>
          <View style={styles.actionSheetContent}>
            <Text style={styles.actionSheetText}>
              Dove si trova il tuo veicolo
            </Text>
          </View>

         
          <View>
            <Text style={styles.text}>Scrivi qui l'indirizzo</Text>
            <View style={styles.inputContainer}>
              <Icon.Entypo name="location-pin" size={20} color={'black'} />
              <TextInput
                style={styles.input}
                placeholder="  2972 Mandi Bahauddin Rd, Illinois 85486"
                placeholderTextColor="black"
              />
            </View>
            <View style={styles.line} />
          </View>

          
          <View>
            <Text style={styles.text}>Usa la tua posizione</Text>
            <View style={styles.inputContainer}>
              <Icon.FontAwesome6 name="location-crosshairs" size={20} color={'black'} />
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#9D9D9D"
              />
            </View>
            <View style={styles.line} />
          </View>

          <View>
            <Button
             title='Ricerca'
             onpress={() => navigation.navigate('AddScreen')}
             titleStyle={{fontSize :16, fontWeight :'500', color :'#ffffff'}}
             buttonStyle={{
               backgroundColor: '#1D202B',
               padding: 25,
               borderRadius: 12,
               marginTop :40
             }}
            />
          </View>
        </ActionSheet>
      </ImageBackground>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  actionSheetContent: {
    backgroundColor: '#fff',
  },
  actionSheetText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1D202B',
  },
  actionSheet: {
    padding: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#9D9D9D',
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,

    fontSize: 14,
    color: '#343434',
    paddingHorizontal: 10,
  },
  line: {
    borderBottomColor: '#EEEDEB',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
