import express from 'express';

import {
	getUsers,
	login,
	register,
	updateUser,
	updatePassword,
	deleteUser,
} from '../controllers/authController.js';

// import protectRoute from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/login', login);
router.post('/register', register);
router.put('/:id', updateUser);
router.put('/password/:id', updatePassword);
router.delete('/:id', deleteUser);

export default router;
