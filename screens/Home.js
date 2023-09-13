import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox, Rating, Tab, FAB } from '@rneui/themed';
import React, { useState } from 'react';

export default function Home({ navigation }) {

    const [checked, setChecked] = useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    const [index, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <Button
                color="secondary"
                title={'I am a button to press'}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            />

            <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                // Use ThemeProvider to make change for all checkbox
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="red"
            />

            <Rating showRating fractions="{1}" startingValue="{3.3}" />

            <Tab value={index} onChange={setIndex} dense>
                <Tab.Item>I am Tab 1</Tab.Item>
                <Tab.Item>I am Tab 2</Tab.Item>
            </Tab>

            <FAB
                size="small"
                title="Floating Action Button (FAB)"
                icon={{
                    name: "place",
                    color: "white",
                }}
            />

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
});
