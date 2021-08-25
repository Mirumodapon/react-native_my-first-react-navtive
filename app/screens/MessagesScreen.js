import React from 'react';

import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

import Screen from '../components/Screen';
import ListingDetailsScreen from './ListingDetailsScreen';

const messages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/icon.png')
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/icon.png')
	}
];

export default (props) => {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message Selected', item)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
};
