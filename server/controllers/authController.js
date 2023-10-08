// Imports
import asyncHandler from 'express-async-handler';
// import HTTP_STATUS from '../data/httpStatus.js';
// import _ from 'lodash';
// import bycrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// Database
// import User from '../models/userModel.js';

// Helper functions

// Managing login and registration

// @description   Get users list
// @route         GET /api/auth
// @access        Private
const getUsers = asyncHandler(async (req, res) => {
	res.send('Get users route');
});

// @description   Login user
// @route         POST /api/auth/login
// @access        Public
const login = asyncHandler(async (req, res, next) => {
	res.send('Login user route');
});

// @description   Register user
// @route         POST /api/auth/register
// @access        Public
const register = asyncHandler(async (req, res, next) => {
	res.send('Register user route');
});

// @description   Update user details
// @route         PUT /api/auth/:id
// @access        Private
const updateUser = asyncHandler(async (req, res, next) => {
	res.send('Update user route');
});

// @description   Update user password
// @route         PUT /api/auth/password/:id
// @access        Private
const updatePassword = asyncHandler(async (req, res, next) => {
	res.send('Update password route');
});

// @description   Delete user
// @route         DELETE /api/auth/:id
// @access        Private
const deleteUser = asyncHandler(async (req, res, next) => {
	res.send('Delete user route');
});

export { getUsers, login, register, updateUser, updatePassword, deleteUser };
