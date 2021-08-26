import React from 'react';
import colors from '../config/colors';

import AppText from './AppText';

export default ({ error }) => {
	if (!error) return null;
	return <AppText style={{ color: colors.danger }}>{error}</AppText>;
};
