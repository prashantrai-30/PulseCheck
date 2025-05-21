import express from 'express';

import { createPolicy,getAllPolicy,getPolicyById } from '../controllers/policycontrollers.js'

const router = express.Router();

router.post('/',createPolicy);
router.get('/',getAllPolicy);
router.get('/:id',getPolicyById);

export default router;