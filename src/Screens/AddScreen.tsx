import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomCheckBox from '../components/checkbox';
import {Icon} from '../components/Icon';
import Button from '../components/Button';
import {ScrollView} from 'react-native-actions-sheet';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';
//write proper name for screens in a way that reflects their purpose or functionality.
const AddScreen: React.FC = () => {
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleCheckboxChange1 = (value: boolean) => {
    setIsChecked1(value);
  };

  const handleCheckboxChange2 = (value: boolean) => {
    setIsChecked2(value);
  };

  const handleCheckboxChange3 = (value: boolean) => {
    setIsChecked3(value);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Il mio garage</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.background}>
            <Image
              source={require('../../Asset/Image/6.png')}
              style={styles.carImage}
              resizeMode={'contain'}
            />
          </View>
          <View style={{marginTop:10}}>
          <Text style={styles.carText}>Auto Mercedes-Benz E220 2022</Text>
          <Text style={styles.carParaText}>Targa GG486TR</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Scegli tipologia lavaggio</Text>
        </View>

        <View style={styles.dropdownContainer}>
          <CustomCheckBox
            checked={isChecked1}
            onValueChange={handleCheckboxChange1}
          />
          <Text style={styles.checkText}>Lavaggio interno</Text>
          <Icon.AntDesign
            name="down"
            size={20}
            color="black"
            style={styles.icon}
          />
          {isChecked1 && (
            <View style={styles.description}>
              <Text style={styles.descriptionText}>
                Aspirazione dell’abitacolo, pulizia cruscotto, portiere e vetri
                interni.{'\n'}
                Il lavaggio avrà una durata di circa 30 minuti.{'\n'}
                La durata del lavaggio può variare a seconda della condizione
                della vettura.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.dropdownContainer}>
          <CustomCheckBox
            checked={isChecked2}
            onValueChange={handleCheckboxChange2}
          />
          <Text style={styles.checkText}>Lavaggio esterno</Text>
          <Icon.AntDesign
            name="down"
            size={20}
            color="black"
            style={styles.icon}
          />
          {isChecked2 && (
            <View style={styles.description}>
              <Text style={styles.descriptionText}>
                Lavaggio della carrozzeria e dei vetri esterni.{'\n'}
                Il lavaggio avrà una durata di circa 15 minuti.{'\n'}
                La durata del lavaggio può variare a seconda delle condizioni
                del veicolo.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.dropdownContainer}>
          <CustomCheckBox
            checked={isChecked3}
            onValueChange={handleCheckboxChange3}
          />
          <Text style={styles.checkText}>Pulizia completa</Text>
          <Icon.AntDesign
            name="down"
            size={20}
            color="black"
            style={styles.icon}
          />
          {isChecked3 && (
            <View style={styles.description}>
              <Text style={styles.descriptionText}>
                Lavaggio completo sia dell’interno che dell’esterno.{'\n'}
                Il lavaggio avrà una durata di circa 45 minuti.{'\n'}
                La durata del lavaggio può variare in base alle condizioni del
                veicolo.
              </Text>
            </View>
          )}
        </View>
        <View style={styles.line} />
        <TouchableOpacity onPress={() => navigation.navigate('AddScreens')}>
          <View style={styles.lastCard}>
            <View >
              <Text style={styles.lastText}>Pacchetto lavaggio completo</Text>
              <Text style={styles.paraText}>
                10 Lavaggi usufuibili nell’arco di 3 mesi
              </Text>
            </View>
            <Icon.AntDesign name="right" size={20} color={'black'} />
          </View>
        </TouchableOpacity>

        <Button
          title="Prenota ora"
          onpress={() => {}}
          buttonStyle={{
            width: '90%',
            padding: 20,
            marginTop: 20,
            borderRadius: 15,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    padding: 10,
    backgroundColor: '#000',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#fff',
  },
    card: {
    width :'94%',
    height :258,
    backgroundColor: '#605D5D94',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: 0,
  },
  background: {
    width: '97%',
    backgroundColor: Colors.color,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding :14,
    marginTop: 5,
  },
  carText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginTop: 0,
  },
  carParaText: {
    fontSize: 15,
    fontWeight: '300',
    color: '#fff',
    marginLeft:50
  },
  carImage: {
  width :286,
  height :165
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1D202B',
    marginVertical: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  checkText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1D202B',
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    marginLeft: 5,
  },
  description: {},
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1D202B',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '90%',
  },
  lastCard: {
    padding: 20,
    width: '90%',
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 10,
  },
  lastText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1D202B',
  },
  paraText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#1D202B',
  },
});
