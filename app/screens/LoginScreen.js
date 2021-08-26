import React, { useState } from 'react';

import { Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default (props) => {
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();

	return (
		<Screen style={{ padding: 10 }}>
			<Image
				style={{
					width: 80,
					height: 80,
					alignSelf: 'center',
					marginTop: 50,
					marginBottom: 20
				}}
				source={require('../assets/logo-red.png')}
			/>
			<AppTextInput
				placeholder="Email"
				icon="email"
				autoCapitalize="none"
				autoCurrent={false}
				keyboardType="email-address"
				textContentType="emailAddress"
				onChangeText={(text) => setEmail(text)}
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCurrent={false}
				icon="lock"
				placeholder="Password"
				textContentType="password"
				onChangeText={(text) => setPass(text)}
				secureTextType
			/>
			<AppButton title="Login" onPress={() => console.log(email, pass)} />
		</Screen>
	);
};
