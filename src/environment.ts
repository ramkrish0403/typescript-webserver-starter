import "dotenv/config";

type EnvironmentType =
	| "development"
	| "production"
	| "test"
	| "staging"
	| "ci"
	| "local"
	| "devcontainer";
type AppType = "webserver" | "worker";
type NodeEnv = "development" | "production";

const env: Readonly<{
	PORT: number;
	NODE_ENV: NodeEnv;
	APP_ENV: EnvironmentType;
	IS_KUBERNETES: boolean;
	APP_TYPE: AppType;
	HOST: string;
	// APP_API_URL: string;
}> = {
	PORT: parseInt(process.env.PORT || "3000"),
	NODE_ENV: (process.env.NODE_ENV as NodeEnv) || "production",
	APP_ENV: (process.env.APP_ENV as EnvironmentType) || "development",
	IS_KUBERNETES: process.env.IS_KUBERNETES === "true" || false,
	APP_TYPE: (process.env.APP_TYPE as AppType) || "webserver",
	HOST: process.env.HOST || "localhost",
	// APP_API_URL: process.env.APP_API_URL || "http://localhost",
};
process.env.NODE_ENV = env.NODE_ENV;

export default env;
