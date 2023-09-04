import {
	FastifyInstance,
	// FastifyPluginOptions,
	FastifyPluginAsync,
} from "fastify";
import { createUser, getUser } from "./routes";

const userPlugin: FastifyPluginAsync = async (
	fastify: FastifyInstance,
	// opts: FastifyPluginOptions,
): Promise<void> => {
	fastify.route(createUser);
	fastify.route(getUser);
};

export default userPlugin;
