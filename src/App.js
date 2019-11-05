import React from "react";
import "./App.css";

// Chatkit
import { ChatkitProvider } from "@pusher/chatkit-client-react";
import { tokenProvider, instanceLocator, userId, otherUserId } from "./config";

// Components
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";
import Login from "./components/Login";
import Chat from "./components/Chat";
import UserList from "./components/UserList";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));

// const otherUserId = "eadev";

function App(props) {
	return (
		<div className="App">
			{userId && otherUserId ? (
				<ChatkitProvider
					instanceLocator={instanceLocator}
					tokenProvider={tokenProvider}
					userId={userId}>
					<UserList userId={userId} />
					<Chat otherUserId={otherUserId} />
				</ChatkitProvider>
			) : (
				<Login />
			)}
			<div className="App__backdrop"></div>
		</div>
	);
}

export default App;

{
	/* <Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<RoomList />
							<NewRoomForm />
							<UserList userId={userId} />
						</Grid>

						<Grid item xs={12} md={8}>
							<MessageList userId={userId} />
							<SendMessageForm />
						</Grid>
					</Grid> */
}
