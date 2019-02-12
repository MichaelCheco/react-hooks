import React, { Component } from 'react';
import './App.css';
import GitHubUsers from './components/GitHub';
import Next from './ReactNext';
import ShowsForm from './ReactNext/ShowsForm';
// import Form from './components/Form';
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<ShowsForm />
				</header>
			</div>
		);
	}
}

export default App;