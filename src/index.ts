process.on("unhandledRejection", (error, promise) => {
	console.log("We forgot to handle a promise rejection here:", promise);
	console.error("The error was:", error);
});

process.on("uncaughtException", (error) => {
	console.error("uncaughtException: ", error);
	console.log("Exiting the process");

	process.exit(1); // exit application
});

import startServer from "./server";

// Start the server
startServer();
