import React from 'react';

import { Formik } from 'formik';

export default ({ initialValue, onSubmit, validationSchema, children }) => {
	return (
		<Formik
			initialValues={initialValue}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
};
