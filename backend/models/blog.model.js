import { Schema, model } from "mongoose";

// Assuming the user model has an ObjectId reference
const blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true
		},
		content: {
			type: String,
			required: true
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: "User", // Referencing the User model
			required: true
		}
	},
	{
		timestamps: true // Automatically manages createdAt and updatedAt fields
	}
);

const Blog = model("Blog", blogSchema);

export default Blog;
