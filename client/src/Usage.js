import React, { useContext } from 'react';
import { AppContext } from './useContext';
function Usage() {
	const { name } = useContext(AppContext);
	console.log(name, 'U');
	return <h1>{name}</h1>;
}
export default Usage;
