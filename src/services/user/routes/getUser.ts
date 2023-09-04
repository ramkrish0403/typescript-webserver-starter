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
import { FromSchema } from "json-schema-to-ts";
import { userSchema } from "../schemas";
import { actionFactory } from "..";

type RequestParams = {
	userId: string;
};

const responseSchema = {
	200: {
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
type ResponseBody200 = FromSchema<(typeof responseSchema)[200]>;

const handler: RouteHandlerMethod<
	RawServerDefault,
	RawRequestDefaultExpression,
	RawReplyDefaultExpression,
	{ Params: RequestParams }
> = async function (
	this: FastifyInstance,
	request: FastifyRequest<{ Params: RequestParams }>,
	reply: FastifyReply,
) {
	// fastify server instance is available as `this` in handler
	const { params } = request;
	const getUser = actionFactory("getUser");
	const user = await getUser(params.userId);
	reply.code(200);
	const response: ResponseBody200 = {
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
	{ Params: RequestParams }
> = {
	method: "GET",
	url: "/user/:userId",
	schema: {
		response: responseSchema,
	} as const,
	handler,
};

export default route;
