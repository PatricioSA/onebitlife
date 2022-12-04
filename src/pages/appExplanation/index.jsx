import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import DefaultButton from '../../components/common/defaultButton';

export default function AppExplanation() {

    function handleSetShowHome() {
        console.log('Botão clicado!');
    }

    return (
        <View style={StyleSheet.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={StyleSheet.title}>
                        Antes, deixa {'\n'} eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de
                        foma individual.
                    </Text>
                    <DefaultButton>
                        buttonText={'Continuar'}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
                    </DefaultButton>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21, 21, 21, 0.98)',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 40,
    },
    descriptionCta: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
});