import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ButtonComponent from './ButtonComponent';
import TestGridTiles from '../components/TestGridTiles'
import ListInput from '../components/listInput'
const TestList = props => {
    const renderGridItem = itemData => {
        return <TestGridTiles
            name={itemData.item.name}
            color={itemData.item.backgroudColor}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: "testDetail",
                    params: {
                        testId: itemData.item.id
                    }
                }
                )
            }
            } />
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.Tests}
            renderItem={renderGridItem}
            numColumns={2}
            ListFooterComponent={() => <ButtonComponent />}
            ListHeaderComponent={() => <ListInput />} />
    )
}

export default TestList;