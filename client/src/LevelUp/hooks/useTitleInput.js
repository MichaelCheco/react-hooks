import React from 'react';

export function useTitleInput(initialValue) {
	const [value, setValue] = React.useState(initialValue);
	React.useEffect(() => {
		document.title = value;
	});
	return [value, setValue];
}
