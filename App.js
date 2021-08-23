// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native';
import { Alert } from 'react-native';

export default function App() {
	console.log('App executed!');

	const handlePress = () =>
		Alert.alert('Title', 'Message', [
			{ text: 'Yes', onPress: () => console.log('yes pressed') },
			{ text: 'No', onPress: () => console.log('no pressed') }
		]);

	const handlePress2 = () =>
		Alert.prompt('Title', 'Message', (text) => console.log(text));

	return (
		<SafeAreaView style={styles.container}>
			<Button
				title="Click me - alert"
				onPress={handlePress}
				color="orange"
			/>
			<Button title="Click me - prompt" onPress={handlePress2} />
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
