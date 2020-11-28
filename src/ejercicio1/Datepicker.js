import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerTitle: {
        marginTop: 20,
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    }
})



export const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Agendar una cita</Text>
                </View>
                <View>
                    <Text style={styles.title}>Pick Date</Text>
                    <View>
                        <Button onPress={showDatepicker} title="Show date picker!" />
                    </View>

                    <Text style={styles.title}>Pick Time</Text>
                    <View>
                        <Button onPress={showTimepicker} title="Show time picker!" />
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
            </SafeAreaView>
        </>
    )
}
