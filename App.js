// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native';
import { StatusBar } from 'react-native';

import {
	useDimensions,
	useDeviceOrientation
} from '@react-native-community/hooks';

export default function App() {
	console.log('App executed!');

	const { landscape } = useDeviceOrientation();

	return (
		<SafeAreaView style={[styles.container, containerStyle]}>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: '100%',
					height: landscape ? '100%' : '30%'
				}}
			></View>
		</SafeAreaView>
	);
}

const containerStyle = {
	backgroundColor: 'orange'
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: StatusBar.currentHeight
	}
});
