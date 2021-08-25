import React, { useState } from 'react';

import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';

import Screen from '../components/Screen';

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
	const [msg, setMsg] = useState(messages);
	const [refreshing, setRefreshing] = useState(false);
	const handleDelete = (message) => {
		// delete the message from messages
		const newMsg = msg.filter((m) => m.id !== message.id);
		setMsg(newMsg);
	};

	return (
		<Screen>
			<FlatList
				data={msg}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message Selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => setMsg(messages)}
			/>
		</Screen>
	);
};
