import React, { createContext } from 'react';
import Usage from './Usage';

export const AppContext = createContext();
const ContextApp = () => {
	return (
		<AppContext.Provider value={{ name: 'Michael' }}>
			<Usage />
		</AppContext.Provider>
	);
};

export default ContextApp;
