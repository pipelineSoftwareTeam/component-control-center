// Imports
import asyncHandler from 'express-async-handler';
// import HTTP_STATUS from '../data/httpStatus.js';
// import _ from 'lodash';
// import bycrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// Database
// import Component from '../models/componentModel.js'

// Helper functions

// Managing component data

// @description   Get all components
// @route         GET /api/component/
// @access        Private
const getComponents = asyncHandler(async (req, res) => {
	res.send('Get all components route');
});

// @description   Get component by ID
// @route         GET /api/component/:id
// @access        Private
const getComponentById = asyncHandler(async (req, res) => {
	res.send('Get component by ID route');
});

// @description   Add component
// @route         POST /api/component/
// @access        Public
const addComponent = asyncHandler(async (req, res, next) => {
	res.send('Add new component route');
});

// @description   Update component
// @route         PUT /api/component/:id
// @access        Public
const updateComponent = asyncHandler(async (req, res, next) => {
	res.send('Update component route');
});

// @description   Update component
// @route         DELETE /api/component/:id
// @access        Public
const deleteComponent = asyncHandler(async (req, res, next) => {
	res.send('Delete component route');
});

export {
	getComponents,
	getComponentById,
	addComponent,
	updateComponent,
	deleteComponent,
};
