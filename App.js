// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View } from 'react-native';

export default function App() {
	console.log('App executed!');

	return (
		<View
			style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row' }}
		>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: 100,
					height: 100
				}}
			/>
			<View
				style={{
					backgroundColor: 'gold',
					width: 100,
					height: 100
				}}
			/>
			<View
				style={{
					backgroundColor: 'tomato',
					width: 100,
					height: 100
				}}
			/>
		</View>
	);
}
