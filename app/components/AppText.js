import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';

export default ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const platfromStyle = Platform.select({
	ios: {
		fontSize: 30,
		fontFamily: 'Avenit'
	},
	android: {
		fontSize: 18,
		fontFamily: 'Roboto'
	}
});

const styles = StyleSheet.create({
	text: {
		color: 'tomato',
		...platfromStyle
	}
});
