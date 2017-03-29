import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardItem, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({email, password});
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
			Log in
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardItem>
					<Input 
				    label="Email"
				    placeholder="email@gmail.com"
				    onChangeText={this.onEmailChange.bind(this)}
				    value={this.props.email}
					/>
				</CardItem>

				<CardItem>
					<Input 
					label="Password"
					placeholder="password"
					onChangeText={this.onPasswordChange.bind(this)}
					value={this.props.password}
					secureText={true}
					/>
				</CardItem>

				<Text style={styles.errorTextStyle}>{this.props.error}</Text>

				<CardItem>
					{this.renderButton()}
				</CardItem>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = state => {
	const { email, password, error, loading } = state.auth;

	return {
		email, password, error, loading
	};
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser 
})(LoginForm);

