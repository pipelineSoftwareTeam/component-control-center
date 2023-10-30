// Imports
import asyncHandler from 'express-async-handler';
import HTTP_STATUS from '../data/httpStatus.js';
// import _ from 'lodash';
// import bycrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// Database
import Machine from '../models/machineModel.js';
import images from '../data/images.js';

// Helper functions

// Managing machine data

// @description   Get all Machines
// @route         GET /api/machines/
// @access        Private
const getMachines = asyncHandler(async (req, res) => {
	try {
		const machines = await Machine.find();
		res.send(machines);
	} catch (error) {
		res.status(HTTP_STATUS.BAD);
		res.json({ message: `Process ended with error ${error.message}` });
	}
});

// @description   Get Machine by ID
// @route         GET /api/machines/:id
// @access        Private
const getMachineById = asyncHandler(async (req, res) => {
	res.send('Get machine by ID route');
});

// @description   Add Machine
// @route         POST /api/machines/
// @access        Public
const addMachine = asyncHandler(async (req, res, next) => {
	try {
		const newMachine = await Machine.create({
			workCenter: req.body.workCenter,
			machineModel: req.body.machineModel,
			serialNumber: req.body.serialNumber,
			manufacturer: req.body.manufacturer,
			machineType: req.body.machineType,
			noOfPallets: req.body.noOfPallets,
			image: images[req.body.machineModel],
			nextService: req.body.nextService,
			notes: req.body.notes,
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
// @route         PUT /api/Machines/:id
// @access        Public
const updateMachine = asyncHandler(async (req, res, next) => {
	res.send('Update Machine route');
});

// @description   Update Machine
// @route         DELETE /api/Machines/:id
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
