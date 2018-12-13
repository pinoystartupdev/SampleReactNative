/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';

type Props = {};

export default class App extends Component<> {
    render() {
            return (
                <View style={styles.container}>
                        <FlatList
                            data={[
                                    {key: 'Devin'},
                                    {key: 'Jackson'},
                                    {key: 'James'},
                                    {key: 'Joel'},
                                    {key: 'John'},
                                    {key: 'Jillian'},
                                    {key: 'Jimmy'},
                                    {key: 'Julie'},
                            ]}
                            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                        />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
