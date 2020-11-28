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
    },
    timeDateContainer: {
        marginTop: 20,
        marginLeft: 10
    },
    hora:{
        marginTop: 80,
 
    }
})



export const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);


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
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Appointment</Text>
                </View>

                <View style={styles.timeDateContainer}>
                    <View>
                        <Text style={styles.title}>Pick Date</Text>
                        <Text tyle={styles.title}
                            onPress={showDatepicker}>Month
                        </Text>

                    </View>

                    <View style={styles.hora}>
                        <Text style={styles.title}>Pick Time</Text>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                                display="spinner"
                            />
                        )}
                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}
