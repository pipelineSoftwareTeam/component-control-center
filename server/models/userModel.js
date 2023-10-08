// Mongoose import
import mongoose, { Schema } from 'mongoose';

// Data types import
import {
	requiredNameString,
	requiredEmailString,
	requiredPasswordString,
	requiredString,
} from './dataTypes.js';

// User model
const userModel = {
	fName: requiredNameString,
	lName: requiredNameString,
	email: requiredEmailString,
	jobRole: requiredString,
	password: requiredPasswordString,
};

// Create new schema
const userSchema = new Schema(userModel, { timestamps: true });

// Create mongoose model
const userSchemaModel = mongoose.model('User', userSchema);

export default userSchemaModel;
