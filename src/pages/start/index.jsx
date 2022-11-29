import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';


export default function Start() {
    return (
        <View style={styles.container}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View>
                    <Image source={require('../../assets/icons/logo3.png')}></Image>
                    <Text>
                        Vamos transformar sua vida {'\n'} em jogo, buscando sempre {'\n'}
                        o melhor nivel.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: "rgba(21, 21, 21 0.98)"
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
});