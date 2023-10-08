import express from 'express';

import {
	getMachines,
	getMachineById,
	addMachine,
	updateMachine,
	deleteMachine,
} from '../controllers/machineController.js';

// import protectRoute from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getMachines);
router.get('/:id', getMachineById);
router.post('/', addMachine);
router.put('/:id', updateMachine);
router.delete('/:id', deleteMachine);

export default router;
