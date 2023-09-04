import {
	FastifyInstance,
	FastifyRequest,
	FastifyReply,
	RawServerDefault,
	RawRequestDefaultExpression,
	RawReplyDefaultExpression,
	RouteOptions,
	RouteHandlerMethod,
} from "fastify";
import { pick } from "lodash";
import { FromSchema } from "json-schema-to-ts";
import { userSchema } from "../schemas";
import { actionFactory } from "..";

const bodySchema = {
	type: userSchema.type,
	additionalProperties: false,
	required: ["name"],
	properties: pick(userSchema.properties, ["name"]),
} as const;

type RequestBody = FromSchema<typeof bodySchema>;

const responseSchema = {
	201: {
		type: "object",
		additionalProperties: false,
		required: ["status", "message", "data"],
		properties: {
			status: { type: "boolean" },
			message: { type: "string" },
			data: userSchema,
		},
	} as const,
};
type ResponseBody201 = FromSchema<(typeof responseSchema)[201]>;

const handler: RouteHandlerMethod<
	RawServerDefault,
	RawRequestDefaultExpression,
	RawReplyDefaultExpression,
	{ Body: RequestBody }
> = async function (
	this: FastifyInstance,
	request: FastifyRequest<{ Body: RequestBody }>,
	reply: FastifyReply,
) {
	// fastify server instance is available as `this` in handler
	const { body } = request;
	const createUser = actionFactory("createUser");
	const user = await createUser(body.name);
	reply.code(201);
	const response: ResponseBody201 = {
		status: true,
		message: "Success",
		data: user,
	};
	return response;
};

const route: RouteOptions<
	RawServerDefault,
	RawRequestDefaultExpression,
	RawReplyDefaultExpression,
	{ Body: RequestBody }
> = {
	method: "POST",
	url: "/users",
	schema: {
		body: bodySchema,
		response: responseSchema,
	} as const,
	handler,
};

export default route;
