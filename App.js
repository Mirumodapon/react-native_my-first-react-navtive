// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight
} from 'react-native';

export default function App() {
	console.log('App executed!');

	const handlePress = () => console.log('Text pressed');

	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello React Native!</Text>
			<Text numberOfLines={1} onPress={handlePress}>
				This is second line - A really really long text. Now i wanna
				make this even longer and see what happens.
			</Text>
			<Text>Touchable without Feedback</Text>
			<TouchableWithoutFeedback
				onPress={() => console.log('Image tapped')}
			>
				<Image
					source={{
						url: 'https://mirumo.org/static/media/Icon.af44acbc.jpg',
						width: 200,
						height: 200
					}}
				/>
			</TouchableWithoutFeedback>
			<Text>Touchable Opacity</Text>
			<TouchableOpacity onPress={() => console.log('Image tapped!')}>
				<Image
					source={{
						url: 'https://mirumo.org/static/media/Icon.af44acbc.jpg',
						width: 200,
						height: 200
					}}
				/>
			</TouchableOpacity>
			<Text>Touchable Hightlight</Text>
			<TouchableHighlight onPress={() => console.log('Image tapped!')}>
				<Image
					source={{
						url: 'https://mirumo.org/static/media/Icon.af44acbc.jpg',
						width: 200,
						height: 200
					}}
				/>
			</TouchableHighlight>
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
