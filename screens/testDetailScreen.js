import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';
import Tests, { Descriptions } from "../data/dumy-data"
import { Ionicons } from '@expo/vector-icons';
const TestDetailScreen = props => {
    const id = props.navigation.getParam('testId')
    const selectedTest = Descriptions.find(test => test.id === id)
    return (
        <View style={styles.screen}>
            <Text>{selectedTest.description}</Text>
        </View>);
};
TestDetailScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('testId');
    const selectedTest = Descriptions.find(test => test.id === id);
    return {
        headerTitle: selectedTest.name,
        headerRight: (<HeaderButtons>
            <Ionicons
                name="ios-star"
                size={23} color={Platform.OS === 'android' ? 'white' : '#4a148c'}
                style={{padding:10}} />
        </HeaderButtons>
        )
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default TestDetailScreen;