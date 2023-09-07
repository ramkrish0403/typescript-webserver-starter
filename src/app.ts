/*
Fastify:
https://fastify.dev/docs/latest/Guides/
https://fastify.dev/docs/latest/Guides/Plugins-Guide
https://www.youtube.com/watch?v=hx6jy3MzQzw

Type Provider:
https://github.com/fastify/fastify-type-provider-json-schema-to-ts
*/
import fastify, { FastifyInstance } from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import {
	swaggerPlugin,
	swaggerOptions,
	swaggerUIPlugin,
	swaggerUIOptions,
} from "./swagger";

// import plugins
import { userPlugin as UserPlugin } from "./services/user";

const fastifyOptions = {
	logger: true,
	// http2: true,
};
// const app = fastify(fastifyOptions);
const app: FastifyInstance =
	fastify(fastifyOptions).withTypeProvider<JsonSchemaToTsProvider>();

// Add top level fastify decorators

// Add top level fastify hooks

// Register swagger
app.register(swaggerPlugin, swaggerOptions);
app.register(swaggerUIPlugin, swaggerUIOptions);

// Register route plugins
app.register(UserPlugin);

// Declare a route
app.get("/ping", async () => {
	return { status: true, message: "pong" };
});

export default app;
