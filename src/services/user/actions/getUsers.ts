import { User } from "../types";

export default async function getUsers(): Promise<User[]> {
	const users = [
		{
			id: "1",
			name: "John Doe",
			age: 42,
		},
		{
			id: "2",
			name: "Jane Doe",
			age: 43,
		},
	];
	console.log(`Got ${users.length} users: ${users.map((user) => user.id)}`);
	return users;
}
