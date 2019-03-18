import React, { useContext } from 'react';
import { AppContext } from './useContext';
function Usage() {
	const userInfo = useContext(AppContext);
	console.log(userInfo, 'U');
	return <h1>{userInfo.name}</h1>;
}
export default Usage;
