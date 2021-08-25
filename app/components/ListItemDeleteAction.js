import React from 'react';

import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({ onPress }) => (
	<TouchableWithoutFeedback onPress={onPress}>
		<View style={styles.delete}>
			<MaterialCommunityIcons name="trash-can" size="35" color="white" />
		</View>
	</TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
	delete: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
