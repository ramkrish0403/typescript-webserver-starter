const userSchema = {
	type: "object",
	additionalProperties: false,
	properties: {
		id: { type: "string" },
		name: { type: "string" },
		age: { type: "integer" },
		hobbies: { type: "array", items: { type: "string" } },
		favoriteFood: { enum: ["pizza", "taco", "fries"] },
	},
	required: ["name", "age", "id"],
} as const;

export default userSchema;
