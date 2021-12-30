import React from 'react';
import Tests from "../data/dumy-data"
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { HeaderButtons } from 'react-navigation-header-buttons';
import TestList from '../components/testList';
import { Ionicons } from '@expo/vector-icons';
const TestsScreen = props => {
    return (
        <View style={styles.screen}>
            <TestList Tests={Tests} navigation={props.navigation} />
        </View>
    )
};
TestsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Lab Name',
        headerLeft: (
            <HeaderButtons>
                <Ionicons
                    name="ios-menu"
                    size={23} color={Platform.OS === 'android' ? 'white' : '#4a148c'}
                    style={{ padding: 10 }}
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center'
    }
}
)
export default TestsScreen;