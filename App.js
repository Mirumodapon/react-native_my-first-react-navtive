// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View } from 'react-native';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	console.log('App executed!');

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: 100,
					height: 100,
					padding: 20
				}}
			>
				<View
					style={{
						backgroundColor: 'gold',
						width: 40,
						height: 40
					}}
				></View>
			</View>
			<View
				style={{
					backgroundColor: 'tomato',
					width: 100,
					height: 100,
					margin: 20
				}}
			></View>
		</View>
	);
}
