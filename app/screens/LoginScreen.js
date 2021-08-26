import React from 'react';

import { Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

import { Formik } from 'formik';
import * as Yup from 'yup';

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

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors }) => (
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
						<AppText style={{ color: 'red' }}>
							{errors.email}
						</AppText>
						<AppTextInput
							autoCapitalize="none"
							autoCurrent={false}
							icon="lock"
							placeholder="Password"
							textContentType="password"
							onChangeText={handleChange('password')}
							secureTextEntry
						/>
						<AppText style={{ color: 'red' }}>
							{errors.password}
						</AppText>
						<AppButton title="Login" onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
};
