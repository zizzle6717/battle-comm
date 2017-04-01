'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';
import {AlertActions} from '../../library/alerts';
import {Form, Input, Select, FileUpload} from '../../library/validations'
import {UserActions} from '../../library/authentication';
import ViewWrapper from '../ViewWrapper';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
		'addAlert': AlertActions.addAlert,
		'createUser': UserActions.create
    }, dispatch);
};

class RegistrationPage extends React.Component {
    constructor() {
        super();

        this.state = {
            'credentials': {},
			'passwordRepeat': ''
        }

		this.handleInputMatch = this.handleInputMatch.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showAlert = this.showAlert.bind(this);
    }

    componentDidMount() {
        document.title = "Battle-Comm | Register";
    }

	handleInputMatch(e) {
		this.setState({
			'passwordRepeat': e.target.value
		})
	}

	handleInputChange(e) {
		let credentials = this.state.credentials;
		credentials[e.target.name] = e.target.value;
		this.setState({
			'credentials': credentials
		})
	}

	handleSubmit(e) {
		this.props.createUser(this.state.credentials).then((response) => {
			let homeState = this.props.user.roleConfig.homeState;
			this.showAlert('registrationSuccess');
			browserHistory.push(homeState);
		}).catch((error) => {
			if (error.message === 'Username taken') {
				this.showAlert('invalidUsername');
			}
			if (error.message === 'Email taken') {
				this.showAlert('invalidEmail');
			}
		});
	}

	showAlert(selector) {
		const alerts = {
			'registrationSuccess': () => {
				this.props.addAlert({
					'title': 'Registration Success',
					'message': 'You have successfully registered an account and were automatically logged in.',
					'type': 'success',
					'delay': 3000
				});
			},
			'invalidUsername': () => {
				this.props.addAlert({
					'title': 'Invalid Username',
					'message': 'An account with that username is already in use.',
					'type': 'error',
					'delay': 3000
				});
			},
			'invalidEmail': () => {
				this.props.addAlert({
					'title': 'Invalid Email',
					'message': 'An account with that email is already in use.',
					'type': 'error',
					'delay': 3000
				});
			},
		}

		return alerts[selector]();
	}

    render() {
        return (
			<ViewWrapper>
				<div className="row">
					<h1 className="push-bottom-2x">Register</h1>
					<hr />
					<div className="small-12 medium-6 medium-offset-3 large-4 large-offset-4 columns">
						<Form name="registrationForm" submitText="Register" handleSubmit={this.handleSubmit}>
							<div className="row">
								<div className="form-group small-12 columns">
									<label className="required">Username</label>
									<Input type="text" name="username" value={this.state.credentials.username || ''} handleInputChange={this.handleInputChange} validate="username" required={true} />
								</div>
							</div>
							<div className="row">
								<div className="form-group small-12 columns">
									<label className="required">Email</label>
									<Input type="text" name="email" value={this.state.credentials.email || ''} handleInputChange={this.handleInputChange} validate="email" required={true} />
								</div>
							</div>
							<label className="required">User Role</label>
							<Select name="role" value={this.state.credentials.role} handleInputChange={this.handleInputChange} required={true}>
								<option value="">--Select--</option>
								<option value="siteAdmin">Site Admin</option>
								<option value="providerAdmin">Provider Admin</option>
								<option value="contactAdmin">Contact Admin</option>
							</Select>
							<div className="row">
								<div className="form-group small-12 columns">
									<label className="required">Password</label>
									<Input type="password" name="password" value={this.state.credentials.password || ''} handleInputChange={this.handleInputChange} validate="password" required={true} inputMatch={this.state.passwordRepeat}/>
								</div>
							</div>
							<div className="row">
								<div className="form-group small-12 columns">
									<label className="required">Repeat Password</label>
									<Input type="password" name="passwordRepeat" value={this.state.passwordRepeat || ''} handleInputChange={this.handleInputMatch} validate="password" required={true} inputMatch={this.state.credentials.password}/>
								</div>
							</div>
						</Form>
						<div className="form-group small-12">
							Already have an account? <Link key="login" to="/login" activeClassName="active" onClick={this.closeMenu}>Go to Login</Link>
						</div>
					</div>
				</div>
			</ViewWrapper>
		);
    }
}

export default connect(null, mapDispatchToProps)(RegistrationPage);
