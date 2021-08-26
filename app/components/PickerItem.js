import React from 'react';
import { TouchableOpacity } from 'react-native';

import AppText from './AppText';

export default ({ label, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<AppText style={{ padding: 20 }}>{label}</AppText>
		</TouchableOpacity>
	);
};
