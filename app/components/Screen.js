import React from 'react';

import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default ({ children, style }) => (
	<SafeAreaView style={[styles.screen, style]}>
		<View style={[style, { flex: 1 }]}>{children}</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1
	}
});
