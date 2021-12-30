import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import BarLines from '../components/barLines';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Review from '../components/Review';
const ReviewAndRatingScreen = props => {
    return (
        <View style={styles.screen}>
            <View styles={styles.heading}>
                <Text style={{ fontSize: 25, padding: 5 }}>All Reviews</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.totalRating}>
                    <View style={styles.leftTotalRating}>
                        <Text style={{ fontSize: 52.5, paddingLeft: 35 }}>4.8</Text>
                        <Text style={{ padding: 10 }}>
                            <Ionicons size={25} name='ios-star-outline' fontSize={25} />
                            <Ionicons size={25} name='ios-star-outline' fontSize={25} />
                            <Ionicons size={25} name='ios-star-outline' fontSize={25} />
                            <Ionicons size={25} name='ios-star-outline' fontSize={25} />
                            <Ionicons size={25} name='ios-star-outline' fontSize={25} />
                        </Text>
                        <Text style={{ fontSize: 25, padding: 10 }}>4.5(52,289)</Text>
                    </View>
                    <View style={styles.rightTotalRating}>
                        <BarLines count={5} percent={90} reviewCount={15984} />
                        <BarLines count={4} percent={95} reviewCount={4587} />
                        <BarLines count={3} percent={80} reviewCount={3689} />
                        <BarLines count={2} percent={85} reviewCount={2689} />
                        <BarLines count={1} percent={70} reviewCount={1689} />
                    </View>
                </View>
                <View style={styles.review}>
                    <Review />
                    <Review />
                    <Review />
                </View>
            </View>
        </View>);
};
ReviewAndRatingScreen.navigationOptions = navData => {
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
        alignItems: 'center'
    },
    body:{
        flexDirection:'column',
        flex:1
    },
    heading: {
        flex: 1,
        alignItems: 'center'
    },
    totalRating: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
    },
    leftTotalRating: {
        flex: 1,
        backgroundColor: '#FF8C00',
    },
    rightTotalRating: {
        flex: 1,
        backgroundColor: '#FF8C00'
    },
    review: {
        width:'100%',
        flex:1,
        alignItems:'flex-start'
    }
});
export default ReviewAndRatingScreen;