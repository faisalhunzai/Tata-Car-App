import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CustomCheckBox from './checkbox'; 
import { Icon } from './Icon';

interface CustomDropdownWithCheckboxProps {
  title: string;
  description: string;
}

const CustomDropdownWithCheckbox: React.FC<CustomDropdownWithCheckboxProps> = ({
  title,
  description,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.dropdownContainer}>
      <CustomCheckBox checked={isChecked} onValueChange={handleCheckboxChange} />
      <Text style={styles.checkText}>{title}</Text>
      <TouchableOpacity onPress={handleCheckboxChange}>
        <Icon.AntDesign name="down" size={20} color="black" style={styles.icon} />
        
      </TouchableOpacity>
      {isChecked && (
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomDropdownWithCheckbox;

const styles = StyleSheet.create({
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
    marginLeft: 10,
  },
  description: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
});
