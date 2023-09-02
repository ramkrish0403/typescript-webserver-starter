/*
https://fastify.dev/docs/latest/Guides/
https://fastify.dev/docs/latest/Guides/Plugins-Guide
https://www.youtube.com/watch?v=hx6jy3MzQzw
*/
import fastify from "fastify";

const app = fastify({
	logger: true,
	// http2: true,
});

// Add top level fastify decorators

// Add top level fastify hooks

// Register your plugins

// Declare a route
app.get("/ping", async () => {
	return { status: true, message: "pong" };
});

export default app;
