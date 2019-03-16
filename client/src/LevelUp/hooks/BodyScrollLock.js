import React, { useLayoutEffect } from 'react';

function useBodyScrollLock() {
	useLayoutEffect(() => {
		const originalOverflow = window.getComputedStyle(document.body).overflow;
		console.log(originalOverflow);
		document.body.style.overflow = 'hidden';
		return function cleanup() {
			document.body.style.overflow = originalOverflow;
		};
	}, []);
}
export default useBodyScrollLock;

// Implementation 👇

const DishForm = () => {
	useBodyScrollLock();
	return (
		<div className="dish-card">
			<form>
				<div className="form-row">
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" />
				</div>
			</form>
		</div>
	);
};
export default DishForm;
