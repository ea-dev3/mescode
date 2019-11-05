import React from "react";
import { withChatkit } from "@pusher/chatkit-client-react";

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
	return (
		<div>
			{DUMMY_DATA.map((mssg, index) => {
				return (
					<div key={index}>
						<span>{mssg.senderId}</span>
						<div>{mssg.text}</div>
					</div>
				);
			})}
		</div>
	);
});

export default MessageList;
