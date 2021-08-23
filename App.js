// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	console.log('App executed!');

	return <ViewImageScreen />;
}
