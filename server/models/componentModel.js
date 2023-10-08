// Mongoose import
import mongoose, { Schema } from 'mongoose';

// Data types import
import { requiredString, requiredNumber } from './dataModels';

const componentModel = {
	partNumber: requiredString,
	partName: requiredString,
	partsPerYear: requiredNumber,
	status: requiredString,
	handed: Boolean,
	partsPerBillet: requiredNumber,
	material: {
		billetNumber: requiredString,
		spec: requiredString,
		size: {
			grip: requiredNumber,
			height: requiredNumber,
			width: requiredNumber,
			billetNotes: String,
		},
	},
	operations: [
		{
			opNumber: requiredNumber,
			programNumber: requiredNumber,
			runTime: requiredNumber,
			partsPerRun: requiredNumber,
			workholding: requiredString,
			fixtures: [String],
		},
	],
	jobNotes: String,
};

const componentSchema = new Schema(componentModel, { timestamps: true });

const componentSchemaModel = mongoose.model('Component', componentSchema);

export default componentSchemaModel;
