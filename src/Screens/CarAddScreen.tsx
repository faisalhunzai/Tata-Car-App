import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCheckBox from '../components/checkbox'
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const CarAddScreen = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleCheckboxChange = (value: boolean) => {
        setIsChecked(value);
    };
    const navigation = useNavigation();

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
                <Text style={styles.carText}>Auto Mercedes-Benz E220 2022</Text>
                <Text style={styles.carParaText}>Targa GG486TR</Text>
            </View>

            <View style={styles.lastCard}>
                <View style={{flexDirection:'row'}}>
                <CustomCheckBox
                    checked={isChecked}
                    onValueChange={handleCheckboxChange}
                />
                <Text style={styles.serviceText}>Basic</Text>
                </View>
                <Text style={styles.priceText}>130,00€</Text>
                <Text style={{fontSize :12, fontWeight :'400', color :'#1D202B'}}>5 Lavaggi utilizzabili in 3 mesi</Text>
            </View>

            <View style={styles.lastCard}>
                <View style={{flexDirection:'row'}}>
                <CustomCheckBox
                    checked={isChecked}
                    onValueChange={handleCheckboxChange}
                />
                <Text style={styles.serviceText}>Premium</Text>
                </View>
                <Text style={styles.priceText}>260,00€</Text>
                <Text style={{fontSize :12, fontWeight :'400', color :'#1D202B'}}>5 Lavaggi utilizzabili in 3 mesi</Text>
            </View>

            <View style={styles.lastCard}>
                <View style={{flexDirection:'row'}}>
                <CustomCheckBox
                    checked={isChecked}
                    onValueChange={handleCheckboxChange}
                />
                <Text style={styles.serviceText}>Gold</Text>
                </View>
                <Text style={styles.priceText}>290,00€ </Text>
                <Text style={{fontSize :12, fontWeight :'400', color :'#1D202B'}}>5 Lavaggi utilizzabili in 3 mesi</Text>
            </View>

            <Button
             title='prenota ora'
             onpress={() => navigation.navigate('PopupScreen')}
             buttonStyle={{
                 width :'90%',
                 backgroundColor: '#1D202B',
                 padding: 25,
                 borderRadius: 12,
                 marginTop :15
             }}
            />

            <View>
                <Text style={{fontSize :8, fontWeight :'400', color :'#000000'}}>i pacchetti lavaggio sono spendibili solo sulla macchina richiesta e non per{'\n'} l’intera flotta garage.</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default CarAddScreen

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
        width: '95%',
        height:285,
        backgroundColor: '#605D5D94',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
        paddingBottom: 0,
    },
    background: {
        width: '97%',
        
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
    },
    carText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginTop: 0,
    },
    carParaText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginTop: 0,
    },
    carImage: {
            width :360,
            height :198
    },
    lastCard: {
       padding :18,
        width: '90%',
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        flexWrap :'wrap',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 10,
    },
    serviceText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1D202B',
        marginLeft: 10, 
    },
    priceText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1D202B',
    },
})

