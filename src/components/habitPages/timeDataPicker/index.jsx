import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DataTimePiccker from '@react-native-community/datetimepicker';

export default function TimeDatePicker({ frequency, dayNotification, timeNotification, setDayNotifixation, setTimeNotification, }) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState('-');

    const [noticationDate, setNotificationDate] = useState();
    const [noticationTime, setNotificationTime] = useState();

    const data = [
        { key: 'Domingo', value: 'Dom' },
        { key: 'Segunda', value: 'Seg' },
        { key: 'Terça', value: 'Ter' },
        { key: 'Quarta', value: 'Qua' },
        { key: 'Quinta', value: 'Qui' },
        { key: 'Sexta', value: 'Sex' },
        { key: 'Sábado', value: 'Sab' },
    ]

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => showMode('time')}>
                <Text style={styles.buttonText}>Selecione a hora</Text>
            </TouchableOpacity>

            <View style={styles.textContainer}>
                {frequency === 'Diário' ? (
                    <Text style={styles.notificationText}>Dia do hábito: Diário</Text>
                ) : null}

                {frequency === 'Semanal' ? (
                    <Text style={styles.notificationText}>Dia do hábito: {noticationDate}</Text>
                ) : null}

                <Text style={styles.notificationText}>Horário do hábito: {noticationTime}</Text>
            </View>

            {show && (
                <DataTimePiccker
                    testID="DateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    textContainer: {
        marginVertical: 20,
    },

    notificationText: {
        fontSize: 18,
        color: 'white',
    },
})