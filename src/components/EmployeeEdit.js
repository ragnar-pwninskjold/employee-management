import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardItem, Button, Confirm } from './common';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {

	state = { showModal: false };
	
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onAccept() {
		this.props.employeeDelete({uid: this.props.employee.uid});
		this.setState({ showModal: false });
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardItem>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardItem>
					<CardItem>
					<Button onPress={this.onTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardItem>

				<CardItem>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Fire Employee</Button>
				</CardItem>

				<Confirm 
				 visible={this.state.showModal}
				 onAccept={this.onAccept.bind(this)}
				 onDecline={this.onDecline.bind(this)}
				>
					You really wanna fire them?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };


};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);