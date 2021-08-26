import React from 'react';

import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
	{
		id: 1,
		title: 'red jacket',
		price: '100',
		image: require('../assets/chair.jpg')
	},
	{
		id: 2,
		title: 'chair',
		price: '400',
		image: require('../assets/chair.jpg')
	}
];

export default () => {
	return (
		<Screen style={{ padding: 20, backgroundColor: colors.light }}>
			<FlatList
				data={listings}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'$' + item.price}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
};
