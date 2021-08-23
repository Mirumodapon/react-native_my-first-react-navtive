import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

import colors from '../config/colors';

export default function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.backgrond}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require('../assets/logo-red.png')}
				/>
				<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgrond: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: colors.primary
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: colors.secondary
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center'
	},
	logo: {
		width: 100,
		height: 100
	}
});
