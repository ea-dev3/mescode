import React from "react";
import "./App.css";

// Components
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";

function App() {
	return (
		<div className="App">
			<RoomList />
			<MessageList />
			<SendMessageForm />
			<NewRoomForm />
		</div>
	);
}

export default App;
