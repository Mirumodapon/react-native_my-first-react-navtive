import React from 'react';

import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppTextInput from './AppTextInput';

export default ({ name, ...props }) => {
	const { setFieldTouched, touched, handleChange, errors } =
		useFormikContext();

	return (
		<>
			<AppTextInput
				{...props}
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
			/>
			{touched[name] && <ErrorMessage error={errors[name]} />}
		</>
	);
};
