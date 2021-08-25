import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';

export default ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
	}
});
