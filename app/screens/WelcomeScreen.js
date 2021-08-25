import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../config/colors';

export default function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.backgrond}
			source={require('../assets/background.jpg')}
			blurRadius={10}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require('../assets/logo-red.png')}
				/>
				<Text style={styles.tagsline}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="Login" />
				<AppButton title="Register" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgrond: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	buttonContainer: { padding: 20, width: '100%' },
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	tagsline: {
		fontSize: 25,
		fontWeight: '600',
		padding: 20
	}
});
