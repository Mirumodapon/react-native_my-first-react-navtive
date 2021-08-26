import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import { TextInput, View } from 'react-native';
import colors from '../config/colors';
import defaultStyle from '../config/styles';
import AppText from './AppText';

export default ({ icon, placeholder, ...otherProps }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				backgroundColor: colors.light,
				borderRadius: 25,
				width: '100%',
				padding: 15,
				marginVertical: 10,
				alignItems: 'center'
			}}
		>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={colors.medium}
					style={{
						marginRight: 10
					}}
				/>
			)}
			<AppText style={{ flex: 1 }}>{placeholder}</AppText>
			<MaterialCommunityIcons
				name="chevron-down"
				size={20}
				color={colors.medium}
				style={{}}
			/>
		</View>
	);
};
