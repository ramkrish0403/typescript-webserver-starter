import { User } from "../types";

export default async function updateUser(newUser: User): Promise<User> {
	console.log(`Updated user ${newUser.id} with name ${newUser.name}`);
	return newUser;
}
