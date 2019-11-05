import React, { useState, useEffect } from "react";
import Moment from "react-moment";

// Chatkit
import { withChatkitOneToOne } from "@pusher/chatkit-client-react";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// Assets
import defaultAvatar from "../assets/default-avatar.png";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "100%"
	},
	button: {
		margin: theme.spacing(1)
	}
}));

function Chat(props) {
	const [pendingMessage, setPendingMessage] = useState("");
	const messageList = React.createRef();
	const classes = useStyles();

	const handleMessageKeyDown = event => {
		if (event.key === "Enter") {
			handleSendMessage();
		}
	};

	const handleMessageChange = event => {
		setPendingMessage(event.target.value);
	};

	const handleSendMessage = () => {
		if (pendingMessage === "") {
			return;
		}
		// TODO: Send message to Chatkit
		props.chatkit.sendSimpleMessage({ text: pendingMessage });
		setPendingMessage("");
	};

	useEffect(() => {
		messageList.current.scrollTop = messageList.current.scrollHeight;
	});

	// TODO: Show messages from Chatkit
	const messages = props.chatkit.messages.map(m => ({
		id: m.id,
		isOwnMessage: m.sender.id === props.chatkit.currentUser.id,
		createdAt: m.createdAt,
		// This will only work with simple messages.
		// To learn more about displaying multi-part messages see
		// https://pusher.com/docs/chatkit/reference/javascript#messages
		textContent: m.parts[0].payload.content
	}));

	return (
		<div className="Chat">
			<div className="Chat__titlebar">
				<img
					src={defaultAvatar}
					className="Chat__titlebar__avatar"
					alt="avatar"
				/>
				<div className="Chat__titlebar__details">
					{/*TODO: Get other user's name from Chatkit */}
					<span>
						{props.chatkit.isLoading
							? "Loading..."
							: props.chatkit.otherUser.name}
					</span>
				</div>
			</div>
			<div className="Chat__messages" ref={messageList}>
				{messages.map(m => (
					<Message key={m.id} {...m} />
				))}
			</div>
			<div className="Chat__compose">
				<TextField
					id="filled-multiline-flexible"
					label=""
					multiline
					rowsMax="2"
					placeholder="Type a message..."
					value={pendingMessage}
					onChange={handleMessageChange}
					onKeyDown={handleMessageKeyDown}
					className={classes.textField}
					margin="normal"
					variant="filled"
				/>
				<Button
					variant="outlined"
					color=""
					className={classes.button}
					endIcon={<Icon>send</Icon>}
					onClick={handleSendMessage}>
					Send
				</Button>
			</div>
		</div>
	);
}

function Message({ isOwnMessage, isLatestMessage, createdAt, textContent }) {
	return (
		<div
			className={
				isOwnMessage
					? "Chat__messages__message__wrapper Chat__messages__message__wrapper--self"
					: "Chat__messages__message__wrapper Chat__messages__message__wrapper--other"
			}>
			<div className="Chat__messages__message__wrapper__inner">
				<div
					className={
						isOwnMessage
							? "Chat__messages__message Chat__messages__message--self"
							: "Chat__messages__message Chat__messages__message--other"
					}>
					<div className="Chat__messages__message__content">{textContent}</div>
					<div className="Chat__messages__message__time">
						<Moment
							calendar={{
								sameDay: "LT",
								lastDay: "[Yesterday at] LT",
								lastWeek: "[last] dddd [at] LT"
							}}>
							{createdAt}
						</Moment>
					</div>
					<div
						className={
							isOwnMessage
								? "Chat__messages__message__arrow alt"
								: "Chat__messages__message__arrow"
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default withChatkitOneToOne(Chat);
