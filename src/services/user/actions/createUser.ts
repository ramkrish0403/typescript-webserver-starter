import { User } from "../types";

export default async function createUser(name: string): Promise<User> {
	const user = {
		id: "1",
		name: name,
		age: 20,
	};
	console.log(`Created user ${user.id} with name ${user.name}`);
	return user;
}
