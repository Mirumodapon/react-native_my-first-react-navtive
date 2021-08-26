// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { TextInput, View, Text, Switch } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';

import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
	console.log('App executed!');

	const [isNew, setIsNew] = useState(false);

	const categories = [
		{ label: 'Furniture', value: 1 },
		{ label: 'Clothing', value: 2 },
		{ label: 'Cameras', value: 3 }
	];

	const [category, setCategory] = useState();

	return <MessagesScreen />;
}
