import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-actions-sheet';
import Button from '../components/Button';
import {Icon} from '../components/Icon';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';

const servicesList = [
  'Pulizia sedii',
  'Pulizia tappetini',
  'Pulizia cruscotto',
  'Pulizia vetri',
];

const extraServices = [
  {name: 'Sevizio estra', price: '€ 00,00'},
  {name: 'Sevizio estra', price: '€ 00,00'},
  {name: 'Sevizio estra', price: '€ 20,00'},
];

const Popups = () => {
    const navigation =useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../Asset/Image/login.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover">
          <View>
            <Text style={styles.tataText}>TATA</Text>

            <View style={styles.centeredView}>
              <Text style={styles.paraText}>
                Il miglior viaggio inizia{'\n'}
                dalla macchina pulita.
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View>
          <Text style={styles.title}>Rivedi page</Text>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.rowSpaceBetween}>
            <View>
              <Text style={styles.text}>Prenotazione</Text>
              <Text style={styles.para}>10 aprile alle 9:00</Text>
            </View>
            <View style={styles.carCard}>
              <Image source={require('../../Asset/Image/6.png')} />
            </View>
          </View>

          <View style={[styles.rowSpaceBetween, {marginTop: 20}]}>
            <View>
              <Text style={styles.text}>Suv Car</Text>
              <Text style={styles.para}>20 to 30 minuti</Text>
            </View>
            <View>
              <Text style={styles.text}>€ 18,00</Text>
            </View>
          </View>

          <View style={styles.addressSection}>
            <Text style={styles.boldText}>Indirizzo:</Text>
            <Text style={styles.normalText}>
              Via garibaldi 22/a, 30170 Treviso
            </Text>
          </View>

          <View style={styles.line} />

          <Text style={styles.boldText}>Serizio</Text>

          {servicesList.map((service, index) => (
            <View key={index} style={styles.serviceRow}>
              <View style={styles.dot} />
              <Text style={styles.normalText}>{service}</Text>
            </View>
          ))}

          <View style={{marginTop: 10}}>
            {extraServices.map((extra, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: index === 2 ? '700' : '500',
                    color: '#333333',
                  }}>
                  {extra.name}
                </Text>
                <Text style={styles.text}>{extra.price}</Text>
              </View>
            ))}
            <View style={styles.line} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 15, fontWeight: '700', color: '#333333'}}>
                Total
              </Text>
              <Text style={styles.text}>€ 20,00</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            flexWrap: 'wrap',
          }}>
          <Text style={{fontSize: 13, fontWeight: '300', color: '#333333'}}>
            Codice Promozionale
          </Text>
          <Text style={styles.text}>Applica</Text>
          <View style={styles.line2} />
        </View>

        <View>
          <Text
            style={styles.ManciaText}>
            Mancia cleaner
          </Text>

          <View style={{flexDirection: 'row', padding: 20, gap: 10}}>
            <Button
              title="2€"
              onpress={() => {}}
              buttonStyle={styles.button}
            />
            <Button
              title="2€"
              onpress={() => {}}
              buttonStyle={styles.button}
            />
            <Button
              title="2€"
              onpress={() => {}}
              buttonStyle={styles.button}
            />
          </View>
        </View>

        <View style={{margin: 20}}>
          <Button
            title="Apple Pay"
            onpress={() => {}}
            icon={<Icon.AntDesign name="apple1" size={20} color="white" />}
            buttonStyle={{
              borderRadius: 5,
              padding: 13,
            }}
          />

          <Button
            title="Pay"
            onpress={() => navigation.navigate('StatusScreen')}
            buttonStyle={{
              backgroundColor: '#40E064',
              borderRadius: 5,
              marginTop: 20,
              padding: 13,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Popups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 238,
  },
  tataText: {
    fontSize: 50,
    fontWeight: '900',
    color: Colors.color,
    padding: 30,
  },
  paraText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.color,
    marginTop: 20,
  },
  ManciaText:{
    fontSize: 12,
    fontWeight: '600',
    color: Colors.blackColor,
    marginLeft: 20,
  },
  button:{
    backgroundColor: Colors.CoolGray,
    width: 100,
    height: 40,
  },
  centeredView: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: Colors.CharcoalBlue,
    padding: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: Colors.CharcoalBlue,
  },
  para: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors.jetBlack,
    marginTop: 10,
  },
  carCard: {
    backgroundColor: Colors.Bone,
    borderRadius: 40,
  },
  infoBox: {
    backgroundColor: Colors.Alabaster,
    margin: 10,
    padding: 20,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressSection: {
    marginTop: 20,
  },
  boldText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.blackColor,
  },
  normalText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.blackColor,
  },
  line: {
    height: 1.4,
    width: '100%',
    backgroundColor: Colors.blackColor,
    marginVertical: 10,
    marginTop: 10,
  },
  line2: {
    height: 1.4,
    width: '100%',
    backgroundColor: Colors.blackColor,
    marginVertical: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.blackColor,
  },
  serviceRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
});
