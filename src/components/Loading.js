import React from 'react';

const Loading = () => {
	return (
		<li className="not-found" style={{ listStyleType: "none" }}>
			<h3>Loading...</h3>
			<p>Connecting to API... Please wait a second...</p>
		</li>
	);
}

export default Loading;