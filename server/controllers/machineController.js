// Imports
import asyncHandler from 'express-async-handler';
import HTTP_STATUS from '../data/httpStatus.js';
// import _ from 'lodash';
// import bycrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// Database
// import Machine from '../models/machineModel.js'
import images from '../data/images.js';

// Helper functions

// Managing machine data

// @description   Get all Machines
// @route         GET /api/Machine/
// @access        Private
const getMachines = asyncHandler(async (req, res) => {
	res.send('Get all Machines route');
});

// @description   Get Machine by ID
// @route         GET /api/Machine/:id
// @access        Private
const getMachineById = asyncHandler(async (req, res) => {
	res.send('Get machine by ID route');
});

// @description   Add Machine
// @route         POST /api/Machine/
// @access        Public
const addMachine = asyncHandler(async (req, res, next) => {
	try {
		const {
			workCenter,
			machineModel,
			serialNumber,
			manufacturer,
			machineType,
			noOfPallets,
			nextService,
			notes,
		} = req.body;

		const newMachine = await Machine.create({
			workCenter: workCenter,
			machineModel: machineModel,
			serialNumber: serialNumber,
			manufacturer: manufacturer,
			machineType: machineType,
			noOfPallets: noOfPallets,
			image: images[machineModel],
			nextService: nextService,
			notes: notes,
			components: [],
		});

		res.status(HTTP_STATUS.CREATED).json({
			workCenter: newMachine.workCenter,
			machineModel: newMachine.machineModel,
			serialNumber: newMachine.serialNumber,
			manufacturer: newMachine.manufacturer,
			machineType: newMachine.machineType,
			noOfPallets: newMachine.noOfPallets,
			image: images[newMachine.machineModel],
			nextService: newMachine.nextService,
			notes: newMachine.notes,
			components: [],
		});
	} catch (error) {
		res.status(HTTP_STATUS.BAD);
		res.json({ message: `Process ended with error ${error.message}` });
	}
});

// @description   Update Machine
// @route         PUT /api/Machine/:id
// @access        Public
const updateMachine = asyncHandler(async (req, res, next) => {
	res.send('Update Machine route');
});

// @description   Update Machine
// @route         DELETE /api/Machine/:id
// @access        Public
const deleteMachine = asyncHandler(async (req, res, next) => {
	res.send('Delete Machine route');
});

export {
	getMachines,
	getMachineById,
	addMachine,
	updateMachine,
	deleteMachine,
};
