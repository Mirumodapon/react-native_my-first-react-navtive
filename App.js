// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native';

export default function App() {
	console.log('App executed!');

	const handlePress = () => console.log('Button pressed');

	return (
		<SafeAreaView style={styles.container}>
			<Button title="Click me" onPress={handlePress} color="orange" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
