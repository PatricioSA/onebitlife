import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';


export default function Start(){

return(
    <View>
        <ScrollView showVerticalScrollIndicator={false}>
            <View>
                <Image source={require('../../assets/icons/logo3.png')}></Image>
                <Text>Vamos transformar sua vida {'\n'} em jogo, buscando sempre {'\n'} o melhor nivel</Text>
            </View>
        </ScrollView>
    </View>
)
}