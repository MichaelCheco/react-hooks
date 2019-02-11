import React, { Component } from 'react';
import './App.css';
import GitHubUsers from './components/GitHub';
// import Form from './components/Form';
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<GitHubUsers />
				</header>
			</div>
		);
	}
}

export default App;
