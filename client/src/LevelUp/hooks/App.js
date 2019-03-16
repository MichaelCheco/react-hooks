import React, { useState, useEffect } from 'react';
import ReFactor, { Toggler } from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
const App = () => {
	const [name, setName] = useTitleInput('');
	return (
		<div className="main-wrapper">
			<h1>Level Up Dishes</h1>
			<Toggler />
			<form
				onSubmit={e => {
					e.preventDefault();
				}}>
				<input
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<button type="submit" />
			</form>
		</div>
	);
};

export default App;
