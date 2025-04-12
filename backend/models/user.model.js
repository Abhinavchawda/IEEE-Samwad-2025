import { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},
		phoneNumber: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		height: {
			type: Number,
			required: true
		},
		weight: {
			type: Number,
			required: true
		},
		dob: {
			type: Date,
			required: true
		},
		sex: {
			type: String,
			enum: ["M", "F", "O"],
			required: true
		},
		city: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const User = model("User", userSchema);

export default User;
