import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

const Review = props =>{
    return(
        <View style = {styles.screen}>
            <View style={styles.left}>
                <Text><Ionicons name='ios-star-outline' size={25} /></Text>
                <Text>4.8</Text>
            </View>
            <View style={styles.right}>
                <Text style={{fontWeight:'bold'}}>Awesome App!</Text>
                <Text>Awesome App really helpfull and life saving app.</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignItems:'flex-start',
    },
    left:{
        flex:1,
        padding:10
    },
    right:{
        flex:2,
        padding:10
    }
})
export default Review;