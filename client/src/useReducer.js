import React, { useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'TOGGLE':
			return {
				...state,
				toggle: !state.toggle,
			};
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			};
		default:
			break;
	}
}

function Example() {
	const [{toggle, count}, dispatch] = useReducer(reducer, {
		toggle: false,
		count: 0,
	});
	return (
		<div>
			<button onClick={() => dispatch({ type: 'TOGGLE' })}>
				{toggle ? 'This is on!' : 'This is off!'}
			</button>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>
				{count}
			</button>
		</div>
	);
}

function Usage() {
	return <Example />;
}

export default Usage;
