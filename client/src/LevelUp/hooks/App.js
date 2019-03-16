import React, { useState, useEffect, createContext, useMemo } from 'react';
import ReFactor, { Toggler } from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();
const App = () => {
	const [name, setName] = useTitleInput('');
	const reverseWord = word => {
		console.log('function called');
		return word
			.split('')
			.reverse()
			.join('');
	};
	const title = 'Level Up Dishes';
	const TitleReversed = useMemo(() => reverseWord(title), [title]);
	return (
		<UserContext.Provider
			value={{
				user: true,
			}}>
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
		</UserContext.Provider>
	);
};

export default App;
