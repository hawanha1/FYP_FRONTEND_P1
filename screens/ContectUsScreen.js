import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
const ContectUsScreen = props => {
    return (
        <View style={styles.screen}>
            <View>
                <Text style={{ textAlign: 'left', fontSize: 35, fontWeight: 'bold' }}>P.K Contacts</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={{ flex: 1, fontSize: 18 }}>Customer Services</Text>
                    <Text style={{ flex: 1, fontSize: 18, color: '#f0f' }}>(+92)(311) 435 67211</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15,borderRadius:10 }}>
                <View>
                    <Text style={{ backgroundColor: '#ccc', padding: 10 }}>Customer Services - Lahore</Text>
                    <Text style={{ padding: 10 }}><Text><Ionicons name='ios-call' size={25} /></Text> (+92)(311) 435 6722</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15,borderRadius:10 }}>
                <View>
                    <Text style={{ backgroundColor: '#ccc', padding: 10 }}>Booking Desk</Text>
                    <Text style={{ padding: 10 }}><Text><Ionicons name='ios-mail' size={25} /></Text> laBox.booking@gmail.com</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15,borderRadius:10 }}>
                <View>
                    <Text style={{ backgroundColor: '#ccc', padding: 10 }}>Booking Desk - Punjab</Text>
                    <Text style={{ padding: 10 }}><Text><Ionicons name='ios-mail' size={25} /></Text> laBox.booking-punjab@gmail.com</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15,borderRadius:10 }}>
                <View>
                    <Text style={{ backgroundColor: '#ccc', padding: 10 }}>SI Desk</Text>
                    <Text style={{ padding: 10 }}><Text><Ionicons name='ios-mail' size={25} /></Text> laBox.si@gmail.com</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15,borderRadius:10 }}>
                <View>
                    <Text style={{ backgroundColor: '#ccc', padding: 10 }}>SI Desk - Punjab</Text>
                    <Text style={{ padding: 10 }}><Text><Ionicons name='ios-mail' size={25} /></Text> laBox.si-punjab@gmail.com</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
    }
});
ContectUsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Contact Us',
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
export default ContectUsScreen;