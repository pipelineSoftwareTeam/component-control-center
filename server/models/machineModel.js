// Mongoose import
import mongoose, { Schema } from 'mongoose';

// Data types import
import { requiredString, requiredNumber } from './dataModels';

const machineModel = {
	workCenter: requiredString,
	machineModel: requiredString,
	serialNumber: requiredNumber,
	manufacturer: requiredString,
	machineType: requiredString,
	noOfPallets: requiredNumber,
	image: requiredString,
	nextService: Date,
	notes: String,
	components: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Component',
		},
	],
};

const machineSchema = new Schema(machineModel, { timestamps: true });

const machineSchemaModel = mongoose.model('Machine', machineSchema);

export default machineSchemaModel;
