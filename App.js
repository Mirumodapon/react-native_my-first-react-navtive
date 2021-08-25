// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Text, View } from 'react-native';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	console.log('App executed!');

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text
				style={{
					fontSize: 30,
					fontFamily: 'Courier',
					fontStyle: 'italic',
					fontWeight: 'bold',
					color: 'tomato',
					textTransform: 'capitalize',
					textDecorationLine: 'line-through',
					textAlign: 'center',
					lineHeight: 60
				}}
			>
				I love react native. My first React native app! here's some more
				text.
			</Text>
		</View>
	);
}
