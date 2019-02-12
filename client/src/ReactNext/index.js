import React, { useState } from 'react';

function Next() {
	const [inputValue, setInputValue] = useState();

	const handleChanges = e => {
		const {
			target: { value },
		} = e;
		setInputValue(value);
	};
	return (
		<div>
			<input
				type="text"
				name="inputText"
				value={inputValue}
				onChange={handleChanges}
			/>
		</div>
	);
}

export default Next;
