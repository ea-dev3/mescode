import React, { useState, useEffect } from "react";
import { withChatkit } from "@pusher/chatkit-client-react";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import { log } from "util";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(0.5)
		}
	}
}));

const DUMMY_DATA = [
	{
		senderId: "123456",
		text: "Hey,men"
	},
	{
		senderId: "123465",
		text: "This is dope my G"
	},
	{
		senderId: "123456",
		text: "I love this feeling"
	}
];

const MessageList = withChatkit(props => {
	const [messages, setMessages] = useState([]);
	const [currentRoom, setCurrentRoom] = useState({});
	// useEffect(() => {
	// 	return () => {
	// 		props.chatkit.chatManager
	// 			.connect()
	// 			.then(currentUser => {
	// 				return currentUser.subscribeToRoom({
	// 					roomId: "e9f1befc-40bd-4dcd-acb1-0aa2a3516057",
	// 					hooks: {
	// 						onNewMessage: message => {
	// 							setMessages([...messages, message]);
	// 							console.log(message);
	// 						}
	// 					}
	// 				});
	// 			})
	// 			.then(currentRoom => setCurrentRoom({ currentRoom }))
	// 			.catch(err => console.error(err));
	// 	};
	// }, [messages]);
	console.log(props.chatkit.currentUser, props.chatkit.chatManager, messages);

	return (
		<>
			{props.chatkit.isLoading ? (
				"Loading..."
			) : (
				<Chip
					avatar={
						<Avatar
							alt={props.chatkit.currentUser.name}
							src={props.chatkit.currentUser.avatarURL}
						/>
					}
					label={props.chatkit.currentUser.name}
				/>
			)}
		</>
	);
});

export default MessageList;
