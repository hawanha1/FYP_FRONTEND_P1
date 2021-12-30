import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const ListInput = () => {
    return (
        <View style={styles.row}>
            <View style={styles.icon}>
                <Ionicons name="ios-search" size={20} />
            </View>
            <TextInput placeholder='Search' style={styles.input} />
        </View>)
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        borderRadius: 5,
        width: '90%',
        marginLeft: 17
    },
    input: {
        flex: 1,
        fontSize: 20,
        padding: 5
    },
    icon: {
        justifyContent:'center',
        padding:5
    }
}
)
export default ListInput;