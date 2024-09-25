import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-actions-sheet';
import moment from 'moment';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const PopupScreen = () => {
  const navigation =useNavigation();
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const time = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
    '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const [currentDay, setCurrentDay] = useState(moment().format('dddd'));
  const [currentTime, setCurrentTime] = useState(moment().format('h:mm A'));

  const Day = moment().day();
  const Week = [...week.slice(Day), ...week.slice(0, Day)];

  const Time = time.filter(t => moment(t, 'h:mm A').isAfter(moment(currentTime, 'h:mm A')));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDay(moment().format('dddd'));
      setCurrentTime(moment().format('h:mm A'));
    },);

    return () => clearInterval(intervalId);
  }, []);

  const timesToShow = Time.length > 0 ? Time : time;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Asset/Image/map.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.card}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.titleText}>Lavaggio interno</Text>
          </View>
          <View style={styles.box}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../Asset/Image/6.png')}
                style={styles.carImage}
                resizeMode={'cover'}
              />
            </View>

            <View>
              <Text style={styles.text}>Giorno</Text>
            </View>

            <ScrollView horizontal={true}>
              {Week.map((item, index) => (
                <View 
                  key={index} 
                  style={styles.weekContainer}>
                  <Text 
                    style={[
                      styles.weeks, 
                      currentDay === item && styles.selectedText 
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </ScrollView>

            <View>
              <Text style={styles.text}>Fascia oraria</Text>
            </View>

            <ScrollView horizontal={true}>
              {timesToShow.map((item, index) => (
                <View key={index} style={styles.weekContainer}>
                  <Text  style={[
                      styles.time, 
                      currentTime === item && styles.selectedText
                    ]}>{item}</Text>
                </View>
              ))}
            </ScrollView>

            <View>
              <Button
                title="Conferma"
                onpress={() => navigation.navigate('Popups')}
                buttonStyle={{
                  padding: 18,
                  borderRadius: 10,
                  marginTop :10
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  box: {
    backgroundColor: 'white',
    padding: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  card: {
    backgroundColor: '#303030',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  titleText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
    padding: 15,
  },
  carImage: {
    width: 286,
    height: 165,
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333333',
    marginTop: 20,
  },
  weeks: {
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 10,
    borderColor: '#EEEDEB',
    color: 'black',
    borderRadius: 10,
  },
  time: {
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 10,
    borderColor: '#EEEDEB',
    color: 'black',
    borderRadius: 10,
  },
  weekContainer: {
    flexDirection: 'row', 
    padding: 10,
  },
  selectedText: {
    color: 'white', 
    backgroundColor: 'black',
  },
});
