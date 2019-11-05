import React from "react";
import "./App.css";
import { ChatkitProvider } from "@pusher/chatkit-client-react";
import { tokenProvider, instanceLocator } from "./config";

// Components
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";

const userId = "eadev";

function App(props) {
	return (
		<div className="App">
			<ChatkitProvider
				instanceLocator={instanceLocator}
				tokenProvider={tokenProvider}
				userId={userId}>
				<RoomList />
				<MessageList />
				<SendMessageForm />
				<NewRoomForm />
			</ChatkitProvider>
		</div>
	);
}

export default App;
