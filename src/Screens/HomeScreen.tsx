import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import TextInputComponent from '../components/TextInputComponent';
import Button from '../components/Button';
import Data from '../Utilites/jsons/cars.json';
import imageData from '../Utilites/jsons/image.json';
import backgroundImage from '../Utilites/jsons/BackgroundImage.json';
import cardData from '../Utilites/jsons/CardData.json';
import ActionSheet, {FlatList, SheetManager} from 'react-native-actions-sheet';
import {ListRenderItem} from 'react-native';
import {Icon} from '../components/Icon';
import CustomDropdown, { DropdownItem } from '../components/DorpDwon';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';
import metroConfig from '../../metro.config';
import {CarTypePopup} from '../components/PopUps/CarTypePopUp';

interface CardItem {
  id: string;
  service: string;
  category: string;
}

const data: CardItem[] = [
  {
    id: '1',
    service: 'Lavaggio interno ed esterno',
    category: 'category',
  },
  {
    id: '2',
    service: 'Lavaggio a mano',
    category: 'category',
  },
  {
    id: '3',
    service: 'Lavaggio a mano',
    category: 'category',
  },
];

const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [activeLine, setActiveLine] = useState<number>(0);
  const navigation = useNavigation();
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    if (scrollX > 200) {
      setActiveLine(2);
    } else if (scrollX > 100) {
      setActiveLine(1);
    } else {
      setActiveLine(0);
    }
  };

  

  const renderItem: ListRenderItem<CardItem> = ({item}) => (
    <View key={item.id} style={styles.cards}>
      <Image
        source={require('../../Asset/Image/6.png')}
        style={styles.cardImage}
      />

      <View style={styles.cardContent}>
        <View style={styles.row}>
          <Text style={styles.heading2}>Servizi:</Text>
          <Text style={styles.para}>{item.service}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading2}>Categoria:</Text>
          <Text style={styles.para}>{item.category}</Text>
        </View>

        <Button
          title="Prenota"
          onpress={() => {
            console.log("testing");
            
            if (item.id == '3') {
              SheetManager.show('sheet');
            } else {
              navigation.replace('LoginScreen');
            }
          }}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../Asset/Image/wash.jpg')}
            style={styles.imageBackground}>
            <View>
              <Text style={styles.title}>TATA</Text>
              <Text style={styles.paraText}>
                Puliamo la tua auto{'\n'}
                dove e quando vuoi tu.
              </Text>
              <TextInputComponent
                placeholder="Dov'è la tua auto?"
                value={search}
                onChangeText={setSearch}
                placeholderTextColor={'black'}
                style={{backgroundColor: 'white', color: 'black'}}
              />
            </View>
          </ImageBackground>

          <Text style={styles.head}>Il tuo garage</Text>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
            onScroll={handleScroll}
            scrollEventThrottle={16}>
            {Data.map(item => (
              <View key={item.id} style={styles.card}>
                <View style={styles.flexcard}>
                  <View>
                    <Text style={styles.heading}>{item.Title}</Text>
                    <Text style={styles.para1}>{item.Text}</Text>
                    <Text style={styles.para1}>{item.Para}</Text>
                  </View>
                  <Image
                    source={require('../../Asset/Image/iamge.png')}
                    resizeMode="contain"
                    style={styles.cardImageSmall}
                  />
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.indicators}>
            <Text
              style={[
                styles.line,
                activeLine === 0 && styles.activeLine,
              ]}></Text>
            <Text
              style={[
                styles.line,
                activeLine === 1 && styles.activeLine,
              ]}></Text>
            <Text
              style={[
                styles.line,
                activeLine === 2 && styles.activeLine,
              ]}></Text>
          </View>

          {imageData.map(item => (
            <ImageBackground
              key={item.id}
              source={{uri: item.backgroundImage}}
              style={styles.backgournd}
              resizeMode={'cover'}>
              <View>
                <Text style={styles.iamgeTitle}>{item.title}</Text>
                <Text style={styles.iamgepara}>{item.paragraph}</Text>
              </View>
            </ImageBackground>
          ))}

          {backgroundImage.map(item => (
            <ImageBackground
              key={item.id}
              source={{uri: item.backgroundImage}}
              style={styles.backgournd}
              resizeMode={'contain'}>
              <View>
                <Text style={styles.iamgeTitle2}>{item.title}</Text>
                <Text style={styles.iamgepara2}>{item.paragraph}</Text>
              </View>
            </ImageBackground>
          ))}

          <Text style={styles.backgourndTitle}>I nostri numeri</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 20}}>
            {cardData.map(item => (
              <View key={item.id} style={styles.lastcard}>
                <Text style={styles.liters}>{item.liters}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            ))}
          </View>

          <View>
            <Text style={styles.lastHeading}>Diventa un Cleaner</Text>
          </View>
          <ImageBackground
            source={require('../../Asset/Image/backgournd1.jpg')}
            style={styles.lastimage}
            resizeMode={'cover'}>
            <View style={{gap: 30}}>
              <Text style={styles.backgourndImageText}>
                Unisciti al team{'\n'} cleaner e guadagna.
              </Text>
              <Text style={styles.backgourndImagePara}>
                Lasciati guidare dalla{'\n'} piattaforma con la più grande{'\n'}
                rete di clienti fidelizzati.
              </Text>
              <Button
                title="Registrati e guadagna con noi"
                onpress={() => {}}
                buttonStyle={styles.imageButton}
                titleStyle={{color: 'black'}}
              />
            </View>
          </ImageBackground>

            <ActionSheet id="sheet" containerStyle={styles.component}>
              <View>
                <CustomDropdown
                  iconSource={require('../../Asset/Image/6.png')}
                  iconText="Marca"
                />
                <CustomDropdown
                  iconSource={require('../../Asset/Image/6.png')}
                  iconText="Modello"
                />
                <CustomDropdown
                  iconSource={require('../../Asset/Image/6.png')}
                  iconText="Targa"
                />
                <View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setIsCardVisible(!isCardVisible);
                        SheetManager.hide('sheet');
                      }}>
                      <CustomDropdown
                        iconSource={require('../../Asset/Image/6.png')}
                        iconText="Scegli La categoria"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Button
                    title="Conerma"
                    onpress={() => {}}
                    buttonStyle={{
                      backgroundColor: '#1D202B',
                      padding: 17,
                      borderRadius: 12,
                    }}
                    titleStyle={{
                      color: '#ffffff',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  />
                </View>
              </View>
            </ActionSheet>
        </View>
      </ScrollView>
      {isCardVisible && (
        <CarTypePopup
          onOuterPress={() => {
            setIsCardVisible(false);
            SheetManager.show("sheet")
          }}
          onValueSelect={(value:DropdownItem)=>{
            setIsCardVisible(false);
            SheetManager.show("sheet")
            console.log('Value selected:', value);
          }}
        />
      )}  
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: '900',
    color: Colors.color,
  },
  heading2: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.blackColor,
  },
  paraText: {
    color: Colors.color,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 40,
  },
  input: {
    borderWidth: 2,
    width: '100%',
    marginTop: 10,
  },
  head: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.blackColor,
    marginTop: 10,
    marginLeft: 25,
    marginBottom: 10,
  },
  horizontalScroll: {
    paddingHorizontal: 10,
  },
  cards: {
    marginBottom: 20,
    padding: 20,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: Colors.cardColor,
    overflow: 'hidden',
  },
  cardImage: {
    padding: 20,
    borderRadius: 10,
    marginLeft: 40,
  },
  cardContent: {
    marginTop: 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    gap: 40,
  },
  heading: {
    fontWeight: '700',
    fontSize: 25,
    color: Colors.blackColor,
  },
  para: {
    color: Colors.blackColor,
    fontSize: 10,
    fontWeight: '400',
  },
  para1: {
    color: Colors.blackColor,
    fontSize: 10,
    fontWeight: '400',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#EEEDEB',
    padding: 10,
    margin: 5,
    borderRadius: 6,
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexcard: {
    flexDirection: 'row',
  },
  cardImageSmall: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  button: {
    backgroundColor: Colors.ButtonColor,
    borderRadius: 20,
    marginTop: 20,
  },
  line: {
    width: 40,
    height: 6,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  activeLine: {
    backgroundColor: 'black',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backgournd: {
    flex: 1,
    padding: 40,
    margin: 20,
  },
  iamgeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  iamgeTitle2: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginTop: 20,
  },
  iamgepara: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
  iamgepara2: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.color,
    marginTop: 40,
  },
  backgourndTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#1D202B',
    padding: 20,
  },
  lastcard: {
    backgroundColor: Colors.boxColor,
    padding: 13,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  liters: {
    fontSize: 45,
    fontWeight: '600',
    color: Colors.color,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.color,
  },
  lastHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1D202B',
    padding: 20,
  },
  lastimage: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  backgourndImageText: {
    fontSize: 25,
    fontWeight: '500',
    color: Colors.color,
  },
  backgourndImagePara: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.color,
  },
  imageButton: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
  component: {
    padding: 20,
  },
  cardes: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCard: {
    color: Colors.blackColor,
    fontSize: 14,
    fontWeight: '500',
  },
  carText: {
    color: Colors.blackColor,
    marginTop: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  cardtext: {
    color: Colors.color,
    fontSize: 18,
  },
});
