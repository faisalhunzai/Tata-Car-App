import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../Colors';
import CustomDropdown, { DropdownItem } from '../DorpDwon';
import CarsData from '../../Utilites/jsons/Carsdata.json';
import { ReactNode } from 'react';

const {height} = Dimensions.get("screen")

interface  Props {
    onOuterPress:()=>void
    onValueSelect:(values:DropdownItem)=>void
}


export const CarTypePopup:React.FC<Props> = ({onOuterPress,onValueSelect}) => {
  return (
    <TouchableOpacity style={styles.popupContainer} onPress={onOuterPress}>

    <View style={styles.cardes}>
      <View>
        <Text style={styles.textCard}>Scegli la categoria auto</Text>

        {CarsData.map(item => {
          //  const boldText = item.text.split(":")[0];
          //  const text = item.text.slice(boldText.length + 1);

          return (
            <View key={item.id}>
              {/* <Text style={styles.boldText}>{boldText}:</Text> */}
              <Text style={styles.carText}>{item.text}</Text>
            </View>
          );
        })}

        <View>
          <CustomDropdown
            data={[
              {
                label: 'Categoria Small',
                value: 'Categoria Small',
              },
              {
                label: 'Categoria Medium',
                value: 'ategoria Medium',
              },
              {
                label: 'Categoria Large',
                value: 'Categoria Large',
              },
              {label: 'Categoria SUV', value: 'Categoria SUV'},
              {
                label: 'Categoria Premium',
                value: 'Categoria Premium',
              },
            ]}
            iconText="Scegli la tua categoria"
            style={{
              backgroundColor: 'black',
              padding: 10,
              marginTop: 30,
            }}

            styleText={styles.cardtext}
            iconStyle={{color: Colors.color}}
            onValueSelect={(value)=>{
                value &&  onValueSelect(value)
                
            }}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    popupContainer:{
        position:"absolute",
        backgroundColor:Colors.semiTransparentBlack,  
        height,
        justifyContent:"center",
        marginTop:-60,  
    },
  cardes: {
    backgroundColor: '#f9f9f9',
    padding: 20,
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
  cardtext: {
    color: Colors.color,
    fontSize: 18,
  },
  carText: {
    color: Colors.blackColor,
    marginTop: 20,
  },
});
