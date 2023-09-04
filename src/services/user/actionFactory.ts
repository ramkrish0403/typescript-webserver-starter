import { ActionType } from "./types";
import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	replaceUser,
	updateUser,
} from "./actions";

type ActionMap = {
	createUser: typeof createUser;
	deleteUser: typeof deleteUser;
	getUser: typeof getUser;
	getUsers: typeof getUsers;
	replaceUser: typeof replaceUser;
	updateUser: typeof updateUser;
};

const actions: ActionMap = {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	replaceUser,
	updateUser,
};

const actionFactory = <T extends ActionType>(
	actionType: T,
): ActionMap[T] => {
	return actions[actionType];
};

export default actionFactory;
