import React from "react";
import { withChatkit } from "@pusher/chatkit-client-react";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));

const NewRoomForm = withChatkit(props => {
	const classes = useStyles();
	return (
		<>
			{props.chatkit.isLoading ? (
				"Loading"
			) : (
				<form className={classes.container} noValidate autoComplete="off">
					<TextField
						id="filled-basic"
						className={classes.textField}
						multiline
						rows="2"
						label="Add room"
						margin="normal"
						variant="filled"
					/>
				</form>
			)}
		</>
	);
});

export default NewRoomForm;
