import React, { createContext } from 'react';
import Usage from './Usage';

export const AppContext = createContext();
console.log(AppContext, 'A');
const ContextApp = () => {
	return (
		<AppContext.Provider value={{ name: 'Michael' }}>
			<Usage />
		</AppContext.Provider>
	);
};

export default ContextApp;
