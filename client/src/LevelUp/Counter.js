import React, { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				count: state.count + 1,
			};
		case 'MINUS':
			return {
				count: state.count - 1,
			};
		case 'RESET':
			return {
				count: 0,
			};
		default:
			throw new Error();
	}
};
const initialState = { count: 0 };
export const Counter = () => {
	const [{ count }, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<button onClick={() => dispatch({ type: 'ADD' })}>+</button>
			<button onClick={() => dispatch({ type: 'MINUS' })}>-</button>
			<button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
			<h4>{count}</h4>
		</div>
	);
};
