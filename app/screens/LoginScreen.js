import React from 'react';

import { Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

import { Formik } from 'formik';

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

			<Formik
				initialValues={{ email: '', passward: '' }}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							placeholder="Email"
							icon="email"
							autoCapitalize="none"
							autoCurrent={false}
							keyboardType="email-address"
							textContentType="emailAddress"
							onChangeText={handleChange('email')}
						/>
						<AppTextInput
							autoCapitalize="none"
							autoCurrent={false}
							icon="lock"
							placeholder="Password"
							textContentType="password"
							onChangeText={handleChange('password')}
							secureTextType
						/>
						<AppButton title="Login" onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
};
