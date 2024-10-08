
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {Icon} from '../components/Icon'

interface CustomCheckboxProps {
    label: string;
    checked: boolean;
    onChange: (newValue: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => onChange(!checked)}
        >
            <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
                {checked && <Icon.AntDesign name="check" size={16} color="#fff" />}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#41B06E',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius :30
    },
    checkedCheckbox: {
        backgroundColor: '#41B06E',
    },
    label: {
        fontSize: 10,
        color: '#fff',
        fontWeight :'100'
    },
});

export default CustomCheckbox;
