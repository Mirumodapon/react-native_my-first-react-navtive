import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';

import {
	Modal,
	TextInput,
	TouchableWithoutFeedback,
	View,
	Button,
	FlatList
} from 'react-native';
import colors from '../config/colors';
import defaultStyle from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

export default ({ icon, items, placeholder, onSelectItem, selectedItem }) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
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
					<AppText style={{ flex: 1 }}>
						{(selectedItem && selectedItem.label) || placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
						style={{}}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="close"
						onPress={() => setModalVisible(false)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</React.Fragment>
	);
};
