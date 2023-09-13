import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox, Rating } from '@rneui/themed';
import React, { useState } from 'react';

export default function Home({ navigation }) {

    const [checked, setChecked] = useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        <View style={styles.container}>
            <Button
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

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
