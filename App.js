// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
	console.log('App executed!');

	return <MessagesScreen />;
}
