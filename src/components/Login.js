import React from "react";

export default function Login(props) {
	return (
		<div className="Login">
			<h1 className="Login__title">Welcome to MesCode </h1>
			<div className="Login__button" onClick={() => login("user1", "user2")}>
				Log in as <b>User 1</b>
			</div>
			<div className="Login__button" onClick={() => login("user2", "user1")}>
				Log in as <b>User 2</b>
			</div>
		</div>
	);
}

function login(userId, otherUserId) {
	window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}
