import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Colors from '../components/Colors';

const StatusScreen = () => {

  const details = [
    { id: '1', label: 'Nome della ditta', value: 'TATA' },
    { id: '2', label: 'Categoria de veicolo', value: 'Small Car' },
    { id: '3', label: 'Targa del veicolo', value: 'Fl-3456' },
    { id: '4', label: 'Serizio', value: 'Lavaggio interno' },
    { id: '5', label: 'Mancia Cleaner', value: 'Si' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Prenotazione confermata</Text>
        <Text style={styles.paraText}>Grazie per aver prenotato con noi.</Text>
        <Text style={styles.para}>Siediti e rilassati, la tua auto sta per essere pulita.</Text>
      </View>

      <View style={styles.cardContainer}>
        <Image source={require('../../Asset/Image/A3.png')} style={styles.image} />
        <View style={styles.card}>
          <Text style={styles.title}>Dettagli</Text>

        
          {details.map((item) => (
            <View key={item.id} style={styles.row}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      <Button
       title='Rintraccia tuo ordine'
       onpress={()=>{}}
       buttonStyle={styles.rintracciaButton}
      />
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  rintracciaButton:{
    width :'100%',
    padding: 18,
    borderRadius: 8,
    marginTop: 70, 
    backgroundColor:Colors.LimeGreen
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.CharcoalBlue,
  },
  paraText: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.GrayNickel,
  },
  para: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.GrayNickel,
    textAlign: 'center',
    marginTop: 5,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  card: {
    backgroundColor: Colors.color,
    borderRadius: 10,
    padding: 20,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.jetBlack,
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.jetBlack,
  },
  value: {
    fontWeight: '400',
    fontSize: 12,
    color: Colors.jetBlack,
  },
});
