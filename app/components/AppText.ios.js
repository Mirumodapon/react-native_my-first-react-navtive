import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';

export default ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: 'tomato',
		fontSize: 30,
		fontFamily: 'Avenit'
	}
});
