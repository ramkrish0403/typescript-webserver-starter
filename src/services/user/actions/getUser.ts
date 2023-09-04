import { User } from "../types";

export default async function getUser(id: string): Promise<User> {
	const user = {
		id: id,
		name: "John Doe",
		age: 42,
	};
	console.log(`Got user ${user.id} with name ${user.name}`);
	return user;
}
