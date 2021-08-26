import React from 'react';
import Icon from '../components/Icon';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { FlatList, View } from 'react-native';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItem = [
	{
		title: 'my listenings',
		icon: { name: 'format-list-bulleted', backgroundColor: colors.primary }
	},
	{
		title: 'My Message',
		icon: { name: 'email', backgroundColor: colors.secondary }
	}
];

export default (props) => {
	return (
		<Screen style={{ backgroundColor: colors.light }}>
			<View style={{}}>
				<ListItem
					title="Name"
					subTitle="email@example.com"
					image={require('../assets/icon.png')}
				/>
			</View>
			<View style={{ marginTop: 30, marginBottom: 15 }}>
				<FlatList
					data={menuItem}
					keyExtractor={(item) => item.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							imageComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Log out"
				imageComponent={
					<Icon name="logout" backgroundColor="#ffe66d" />
				}
			/>
		</Screen>
	);
};
