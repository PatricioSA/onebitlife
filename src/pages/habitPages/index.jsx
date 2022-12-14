import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import SelectHabit from "../../components/habitPages/SelectHabits";
import SelectFrequency from "../../components/habitPages/SelectFrequency";
import Notification from "../../components/habitPages/notification";
import TimeDatePicker from "../../components/habitPages/timeDataPicker";

export default function HabitPage({ route }) {

    const navigation = useNavigation();
    const [habitInput, setHabitInput] = useState();
    const [frequencyInput, setFrequencyInput] = useState();
    const [notificationToggle, setNotificationToggle] = useState();
    const [dayNotification, setDayNotification] = useState();
    const [timeNotidication, setTimeNotification] = useState();

    const { create, habit } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.backPageBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('../../assets/icons/arrowBack.png')}
                            style={styles.arrowBack}
                        />
                    </TouchableOpacity>
                    <View style={styles.mainContent}>
                        <Text style={styles.title}>Configurações {'\n'} de hábito</Text>
                        <Text style={styles.inputText}>Área</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.area}>{habit?.habitArea}</Text>
                        </View>

                        <Text style={styles.inputText}>Hábito</Text>
                        <SelectHabit habit={habit} habitInput={setHabitInput} />

                        <Text style={styles.inputText}>Frequência</Text>
                        <SelectFrequency
                            habitFrequency={habit.habitFrequency}
                            frequencyInput={setFrequencyInput}
                        />

                        {frequencyInput === 'Mensal' ? null : (
                            <Notification
                                notificationToggle={notificationToggle}
                                setNotificationToggle={setNotificationToggle}
                            />
                        )}

                        {notificationToggle ? (
                            frequencyInput === 'Mensal' ? null : (
                                <TimeDatePicker
                                    frequency={frequencyInput}
                                    dayNotification={dayNotification}
                                    timeNotification={setDayNotification}
                                    setTimeNotification={setTimeNotification}
                                />
                            )
                        ) : null}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21, 21, 21, 0.98)',
    },

    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25,
    },

    arrowBack: {
        width: 40,
        height: 40,
    },

    mainContent: {
        width: 250,
        alignSelf: 'center',
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    },

    inputText: {
        color: 'white',
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5,
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    area: {
        color: '#BBBBBB',
        fontSize: 15,
    }
});