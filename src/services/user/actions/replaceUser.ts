import { User } from "../types";

export default async function replaceUser(newUser: User): Promise<User> {
	console.log(`Replaced user ${newUser.id} with name ${newUser.name}`);
	return newUser;
}
