// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View } from 'react-native';
import AppText from './app/components/AppText';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	console.log('App executed!');

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<AppText>I love react native.</AppText>
		</View>
	);
}
