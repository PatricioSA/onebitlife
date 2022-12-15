import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function SelectFrequency({ habitFrequency, frequencyInput }) {

    const [selected, setSelected] = useState(
        habitFrequency ? habitFrequency : '-'
    );

    const data = [
        {key: 'Diário', value: 'Diário'},
        {key: 'Semanal', value: 'Semanal'},
        {key: 'Mensal', value: 'Mensal'},
    ];

    useEffect(() => {
        frequencyInput(habitFrequency ? habitFrequency : undefined);
    }, []);

    return (
        <View style={{marginBottom: 20}}>
            <SelectList
                setSelected={setSelected}
                data={data}
                search={false}
                onSelect={() => {
                    alert(selected);
                    frequencyInput(selected);
                }}
                boxStyles={styles.boxStyles}
                inputStyles={styles.inputStyles}
                dropdownStyles={styles.dropdownStyles}
                dropdownItemStyles={styles.dropdownItemStyles}
                dropdownTextStyles={styles.dropdownTextStyles}
                arrowicon={
                    <Image
                        source={require('../../../assets/icons/arrowDropdown.png')}
                        style={styles.arrow}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxStyles: {
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    inputStyles: {
        color: 'white',
    },

    dropdownStyles: {
        borderWidth: 0,
    },

    dropdownItemStyles: {
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 10,
        marginBottom: 15,
    },

    dropdownTextStyles: {
        color: '#BBBBBB',
    },

    arrow: {
        width: 20,
        height: 20,
    },
})