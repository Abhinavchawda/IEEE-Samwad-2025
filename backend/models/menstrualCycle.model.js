import { Schema, model } from "mongoose";

const menstrualCycleSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		cycleLength: {
			type: Number,
			required: true,
			min: 1
		},
		periodDuration: {
			type: Number,
			required: true,
			min: 1
		},
		flowType: {
			type: String,
			enum: ["light", "moderate", "heavy"],
			required: true
		},
		lastMenstrualPeriod: {
			type: Date,
			required: true
		},
		irregularities: {
			type: String,
			default: ""
		}
	},
	{
		timestamps: true
	}
);

const MenstrualCycle = model("MenstrualCycle", menstrualCycleSchema);

export default MenstrualCycle;
