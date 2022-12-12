import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

import LifeStatus from '../../components/common/lifeStatus';
import DefaultButton from '../../components/common/defaultButton';
import { useNavigation } from '@react-navigation/native';

export default function Start() {
    const navigation = useNavigation();

    const handleNavAppExplanation = () => {
        navigation.navigate('AppExplanation');
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../assets/icons/logo3.png')}
                        style={styles.logo}
                    />
                    <LifeStatus/>
                    <Text style={styles.description}>
                        Vamos transformar sua vida {'\n'} em jogo, buscando sempre {'\n'}
                        o melhor nivel.
                    </Text>
                    <DefaultButton
                        buttonText={'Continuar'}
                        handlePress={handleNavAppExplanation}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 0,
    },

    description: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 30,
    }
});