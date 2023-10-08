import express from 'express';

import {
	getComponents,
	getComponentById,
	addComponent,
	updateComponent,
	deleteComponent,
} from '../controllers/componentController.js';

// import protectRoute from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getComponents);
router.get('/:id', getComponentById);
router.post('/', addComponent);
router.put('/:id', updateComponent);
router.delete('/:id', deleteComponent);

export default router;
