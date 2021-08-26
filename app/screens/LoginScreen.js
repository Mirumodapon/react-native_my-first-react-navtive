import React from 'react';

import { Image } from 'react-native';
import Screen from '../components/Screen';

import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password')
});

export default (props) => {
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
			<AppForm
				initialValue={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					name="email"
					placeholder="Email"
					icon="email"
					autoCapitalize="none"
					autoCurrent={false}
					keyboardType="email-address"
					textContentType="emailAddress"
				/>
				<AppFormField
					name="password"
					autoCapitalize="none"
					autoCurrent={false}
					icon="lock"
					placeholder="Password"
					textContentType="password"
					secureTextEntry
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
};
