import swaggerPlugin, { FastifyDynamicSwaggerOptions } from "@fastify/swagger";

export const swaggerOptions: FastifyDynamicSwaggerOptions = {
	openapi: {
		info: {
			title: "Awesome API",
			description: "Awesome API Documentation",
			version: "1.0.0",
		},
		servers: [
			{
				url: "http://localhost",
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
				},
			},
		},
		tags: [
			{
				name: "Root",
				description: "Root endpoints",
			},
		],
	},
};

export { swaggerPlugin };