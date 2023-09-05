import swaggerUIPlugin, { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

export const swaggerUIOptions: FastifySwaggerUiOptions = {
	routePrefix: "/docs",
	uiConfig: {
		docExpansion: "full",
		deepLinking: false,
	},
	uiHooks: {
		onRequest: function (_request, _reply, next) {
			next();
		},
		preHandler: function (_request, _reply, next) {
			next();
		},
	},
	staticCSP: true,
	transformStaticCSP: (header) => header,
	transformSpecification: (swaggerObject, _request, _reply) => {
		return swaggerObject;
	},
	transformSpecificationClone: true,
};

export { swaggerUIPlugin };
