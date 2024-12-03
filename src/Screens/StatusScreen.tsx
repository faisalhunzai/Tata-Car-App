import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Button from '../components/Button';

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
       buttonStyle={{
        width :'100%',
         padding: 18,
         borderRadius: 8,
         marginTop: 70, 
         backgroundColor: '#40E064'

       }}
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
  text: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    color: '#1D202B',
  },
  paraText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#777474',
  },
  para: {
    fontSize: 12,
    fontWeight: '400',
    color: '#777474',
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
    backgroundColor: '#fff',
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
    color: '#333333',
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
    color: '#333333',
  },
  value: {
    fontWeight: '400',
    fontSize: 12,
    color: '#333333',
  },
});
