import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TestsScreen from '../screens/testsScreen';
import TestDetailScreen from '../screens/testDetailScreen';
import FavouriteScreen from '../screens/favouritesScreen';
import ReviewAndRating from '../screens/reviewAndRatingsScreen';
import ContectUs from '../screens/ContectUsScreen';
import { Fontisto } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
const TestNavigator = createStackNavigator({
    testsScreen: {
        screen: TestsScreen,
    },
    testDetail: {
        screen: TestDetailScreen,
    }
},
    {
        defaultNavigationOptions: defaultStackNavOpt
    }
);
const defaultStackNavOpt = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#4a148c' : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : '#4a148c'
}
const favNavigator = createStackNavigator({
    Favourites: {
        screen: FavouriteScreen
    },
    testDetail: {
        screen: TestDetailScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavOpt
}
)
const tabScreenConfig = {
    Test: {
        screen: TestNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Fontisto name='blood-test' size={24} color={tabInfo.tintColor} />
            }
        }
    },
    Favourite: {
        screen: favNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
            }
        }
    }
}
const BottomNavigation = Platform.OS === "android" ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'orange',
    shifting: true
}) :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: '#4a148c'
        }
    })
const ReviewNavigator = createStackNavigator({
    Reviews: ReviewAndRating
},
    {
        navigationOptions: {
            drawerLabel: 'Reviews'
        },
        defaultNavigationOptions: defaultStackNavOpt
    })
const contectUsNavigator = createStackNavigator({
    Contects: ContectUs
},
    {
        navigationOptions: {
            drawerLabel: 'Contect Us'
        },
        defaultNavigationOptions: defaultStackNavOpt
    })
const MainNavigator = createDrawerNavigator({
    Home: BottomNavigation,
    ReviewAndRatingScreen: ReviewNavigator,
    ContectUsScreen: contectUsNavigator
}, {
    contentOptions: {
        activeTintColor: '#4a148c',
        labelStyle:{
            padding:5 
        }
    }
});
export default createAppContainer(MainNavigator);