import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

import { Swipeable } from 'react-native-gesture-handler';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({
	title,
	image,
	imageComponent,
	subTitle,
	onPress,
	renderRightActions
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{image && <Image style={styles.image} source={image} />}
					{imageComponent}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subTitle && (
							<AppText style={styles.subTitle} numberOfLines={1}>
								{subTitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						color={colors.medium}
						style={{}}
						name="chevron-right"
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		padding: 15,
		backgroundColor: colors.white
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10
	},
	title: {
		fontWeight: '500'
	},
	subTitle: {
		color: colors.medium
	}
});
