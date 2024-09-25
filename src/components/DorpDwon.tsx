import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ViewStyle, FlatList, StyleProp, TextStyle } from 'react-native';
import { Icon } from './Icon';

interface DropdownItem {
  label?: string;
  value?: string;
}

interface CustomDropdownProps {
  data?: DropdownItem[];
  iconSource?: any;
  iconText?: string;
  style?: StyleProp<ViewStyle>;
  styleText?:  StyleProp<TextStyle>;
  iconStyle?:  StyleProp<ViewStyle>;
  onValueSelect?:  ((value?: DropdownItem) => void) | undefined
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ data = [], iconSource, iconText, style,styleText,iconStyle ,onValueSelect}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectItem = (item: DropdownItem) => {
   item.value && setSelectedValue(item.value);
  item &&  onValueSelect(item)
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
  
      <View style={[styles.iconContainer,style ]}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={[styles.iconText, styleText]}>{selectedValue || iconText}</Text>
        <TouchableOpacity onPress={toggleDropdown}>
          <Icon.AntDesign name='down' size={20} color={'black'} style={[iconStyle]} />
        </TouchableOpacity>
      </View>

      
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.dropdownItem} onPress={() => selectItem(item)}>
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EEEDEB',
    padding: 5,
    borderRadius: 10,
  },
  icon: {
    padding: 10,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  dropdown: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 5,
    padding: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  selectedValue: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
