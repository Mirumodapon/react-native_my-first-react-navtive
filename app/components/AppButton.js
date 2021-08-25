import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Touchable
} from 'react-native';

import colors from '../config/colors';

export default (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.onPress}>
			<Text style={styles.text}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		width: '100%'
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
});
