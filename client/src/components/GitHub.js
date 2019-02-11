import React, { useState, useEffect } from 'react';
function GitHubUsers() {
	const [users, setUsers] = useState([]);

	useEffect(async () => {
		fetch('https://api.github.com/users')
			.then(res => res.json())
			.then(data => {
				setUsers(data);
			});
	}, []); // empty array because we only run 1x
	return (
		<div>
			{users.map(user => (
				<div key={user.id}>
					<h5>{user.login}</h5>
				</div>
			))}
		</div>
	);
}

export default GitHubUsers;
