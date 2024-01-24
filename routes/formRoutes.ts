// routes/formRoutes.ts
import express from 'express';
import { createForm, getForms, submitForm } from '../controllers/formController';

const router = express.Router();

router.post('/create', createForm);
router.get('/get/:id', getForms);
router.post('/submit', submitForm);

export default router;
