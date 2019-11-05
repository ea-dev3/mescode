import { TokenProvider } from "@pusher/chatkit-client-react";

const instanceLocator = "v1:us1:d33316fe-cd7c-4d03-8eab-01eb30d96382";
const tokenProvider = new TokenProvider({
	url:
		"https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d33316fe-cd7c-4d03-8eab-01eb30d96382/token"
});

export { tokenProvider, instanceLocator };
