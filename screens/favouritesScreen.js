import React from 'react';
import TestList from '../components/testList'
import Tests from '../data/dumy-data'
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native'
const FavouriteScreen = props => {
    return (
        <View style={styles.screen}>
            <TestList Tests={Tests.filter(test => test.id === 1 || test.id === 2)} navigation={props.navigation} />
        </View>
    )
};
FavouriteScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Favourite',
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
export default FavouriteScreen;