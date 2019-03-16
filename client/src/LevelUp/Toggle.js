import React, { Component, useState } from 'react';

export default class ReFactor extends Component {
	state = {
		isToggled: false,
	};
	toggle = () => {
		this.setState(state => {
			return { isToggled: !state.isToggled };
		});
	};
	render() {
		return (
			<div>
				<button onClick={this.toggle}>Toggle</button>
				{this.state.isToggled && <h2>Hello</h2>}
			</div>
		);
	}
}

export const Toggler = () => {
	const [isToggled, setIsToggled] = useState(false);

	// const toggle = () => {
	// 	setIsToggled(!isToggled);
	// };
	return (
		<div>
			<button onClick={() => setIsToggled(!isToggled)}>Toggle hook</button>
			<h2>{isToggled && <h2>Hello</h2>}</h2>
		</div>
	);
};
