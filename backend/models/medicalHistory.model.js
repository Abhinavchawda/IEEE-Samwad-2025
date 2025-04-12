import { Schema, model } from "mongoose";

const medicalHistorySchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		existingMedicalConditions: {
			type: [String],
			default: []
		},
		geneticProblems: {
			type: [String],
			default: []
		},
		smokes: {
			type: Boolean,
			required: true
		},
		consumesIntoxicants: {
			type: Boolean,
			required: true
		},
		exercisesRegularly: {
			type: Boolean,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const MedicalHistory = model("MedicalHistory", medicalHistorySchema);

export default MedicalHistory;
