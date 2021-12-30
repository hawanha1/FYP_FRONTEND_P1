import React from 'react'
import { View, Text } from 'react-native'

const BarLines = props => {
    return (
        <View style={{ margin: 15, position: 'relative' }}>
            <Text
                numberOfLines={1}
                style={{
                    flex: 1,
                    position: 'absolute',
                    top:0,
                    left: 0,
                }}>
                {props.count}
            </Text>
            <View
                style={{
                    width: `${((100 * props.percent) / 100).toFixed(1)}%`,
                    backgroundColor: 'black',
                    height: 2,
                }}>
            </View>
            <Text
                numberOfLines={1}
                style={{
                    flex: 1,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 5,
                }}>
                {props.reviewCount}
            </Text>
        </View>
    )
}
export default BarLines;