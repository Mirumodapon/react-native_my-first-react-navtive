import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

import ListItem from '../components/ListItem';

export default () => {
	return (
		<View>
			<Image
				style={styles.image}
				source={require('../assets/chair.jpg')}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/icon.png')}
						title="Mirumo"
						subTitle="5 listener"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},
	detailsContainer: { padding: 20 },
	title: { fontSize: 24, fontWeight: '500' },
	price: {
		color: colors.secondary,
		fontSize: 20,
		marginVertical: 10,
		fontWeight: 'bold'
	},
	userContainer: {
		marginVertical: 40
	}
});
