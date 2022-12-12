import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CreateHabit({habitArea, borderColor}) {

    function handleCreate() {
        console.log(`Botão clicado da área: ${habitArea}`);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, {borderColor: borderColor}]}
            onPress={handleCreate}
        >
            <Text>
                Adicionar meta {habitArea === 'Mente' ? 'da' : 'do'} {habitArea}
            </Text>
        </TouchableOpacity>
    )
}