import { FromSchema } from "json-schema-to-ts";
import { userSchema } from "../schemas";

// interface User extends FromSchema<typeof userSchema> {}
type User = FromSchema<typeof userSchema>;

export default User;
