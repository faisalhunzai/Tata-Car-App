import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomCheckBox from './CheckBoxComponent'; 

interface ServiceCardProps {
  isChecked: boolean;
  onCheckboxChange:() => void;
  serviceName: string;
  price: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  isChecked, 
  onCheckboxChange, 
  serviceName, 
  price, 
  description 
}) => {
  return (
    <View style={styles.lastCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CustomCheckBox 
          checked={isChecked} 
          onValueChange={onCheckboxChange} 
        />
        <Text style={styles.serviceText}>{serviceName}</Text>
      </View>
      <Text style={styles.priceText}>{price}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lastCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginVertical: 10,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1D202B',
    marginVertical: 5,
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#1D202B',
  },
});

export default ServiceCard;
