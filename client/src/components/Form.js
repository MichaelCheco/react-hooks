import React, { useState } from 'react';
function Form() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<form>
			<input
				type="text"
				value={firstName}
				onChange={e => setFirstName(e.target.value)}
				placeholder="first name"
				name="firstName"
				required
			/>
			<input
				type="text"
				value={lastName}
				onChange={e => setLastName(e.target.value)}
				placeholder="last name"
				name="lastName"
				required
			/>
			<input
				type="text"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="email"
				name="email"
				required
			/>
			<input
				type="text"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="password"
				name="password"
				required
			/>
			<button type="submit">Submit</button>
		</form>
	);
}
// class Form extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			firstName: '',
// 			lastName: '',
// 			email: '',
// 			password: '',
// 		};
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 	}
// 	handleInputChange(event) {
// 		this.setState({
// 			[event.target.name]: event.target.value,
// 		});
// 	}
// 	render() {
// 		const { firstName, lastName, email, password } = this.state;
// 		return (
// 			<form>
// 				<input
// 					value={firstName}
// 					onChange={this.handleInputChange}
// 					placeholder="First name"
// 					type="text"
// 					name="firstName"
// 					required
// 				/>
// 				<input
// 					value={lastName}
// 					onChange={this.handleInputChange}
// 					placeholder="Last name"
// 					type="text"
// 					name="lastName"
// 					required
// 				/>
// 				<input
// 					value={email}
// 					onChange={this.handleInputChange}
// 					placeholder="Email address"
// 					type="email"
// 					name="email"
// 					required
// 				/>
// 				<input
// 					value={password}
// 					onChange={this.handleInputChange}
// 					placeholder="Password"
// 					type="password"
// 					name="password"
// 					required
// 				/>
// 				<button type="submit">Submit</button>
// 			</form>
// 		);
// 	}
// }
export default Form;
