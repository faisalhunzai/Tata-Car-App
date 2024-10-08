import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from './Icon';

interface CustomCheckBoxProps {
  label?: string;
  checked?: boolean;
  onValueChange?: (value: boolean) => void;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ label, checked = false, onValueChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
        {isChecked && <Icon.AntDesign name="check" size={18} color="black" />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius:5
  },
  checkedCheckbox: {
    backgroundColor: '#FFFFFF',

  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckBox;
