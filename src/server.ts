/*
Graceful server documentation:
https://github.com/gquittet/graceful-server
https://www.npmjs.com/package/@gquittet/graceful-server
*/
import GracefulServer from "@gquittet/graceful-server";
import app from "./app";
import env from "./environment";

const closeAsyncTest = async (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("closeAsyncTest: done");
            resolve();
        }, 1000);
    });
};

// Reference for options: https://www.npmjs.com/package/@gquittet/graceful-server#igracefulserveroptions
const gracefulServer = GracefulServer(app.server, {
	timeout: 10000,
	// Add here your async functions to run before shutdown, like closing database connections, etc.
	closePromises: [closeAsyncTest],
	kubernetes: env.IS_KUBERNETES,
});

gracefulServer.on(GracefulServer.READY, () => {
	console.log("Server is ready");
});

gracefulServer.on(GracefulServer.SHUTTING_DOWN, () => {
	console.log("Server is shutting down");
});

gracefulServer.on(GracefulServer.SHUTDOWN, (error) => {
	console.log("Server is down because of", error.message);
});

// Define the start erver!
const startServer = async (): Promise<void> => {
	try {
		await app.listen({ port: env.PORT });
		app.log.info(`server listening on ${app.server.address()}`);
        // Connect to database
        // Connect to redis
        // Start cron jobs
        // Set server ready
		gracefulServer.setReady();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

export default startServer;
