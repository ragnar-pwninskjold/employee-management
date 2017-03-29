import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return (

		<Modal
			animationType="slide"
			onRequestClose={() => {}}
			transparent
			visible={visible}
		>
			<View style={containerStyle}>
				<CardItem style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardItem>
				<CardItem>
					<Button onPress={onAccept}>Yep</Button>
					<Button onPress={onDecline}>No, nvm</Button>
				</CardItem>
			</View>
		</Modal>

	);

};

const styles = {
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18, 
		textAlign: 'center',
		lineHeight: 40
	}
};

export { Confirm };
