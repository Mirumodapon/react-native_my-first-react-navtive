// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View } from 'react-native';

export default function App() {
	console.log('App executed!');

	return (
		<View
			style={{
				backgroundColor: 'white',
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				alignItems: 'center'
			}}
		>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: 100,
					height: 120,
					alignSelf: 'flex-end'
				}}
			/>
			<View
				style={{
					backgroundColor: 'gold',
					width: 100,
					height: 180
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
