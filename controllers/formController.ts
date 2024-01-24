// controllers/formController.ts
import { Request, Response } from 'express';
import Form from '../models/Form';
import CollectedData from '../models/CollectedData';

export const createForm = async (req: Request, res: Response) => {
     try {
          const { title, fields } = req.body;
          const form = new Form({ title, fields });
          await form.save();
          res.status(201).json({ message: 'Form created successfully' });
     } catch (error) {
          res.status(500).json({ message: 'Internal Server Error' });
     }
};

export const getForms = async (req: Request, res: Response) => {
     try {
          const forms = await Form.findById(req.params.id);
          res.status(200).json(forms);
     } catch (error) {
          res.status(500).json({ message: 'Internal Server Error' });
     }
};

export const submitForm = async (req: Request, res: Response) => {
     try {
          const collectedData = new CollectedData(req.body);
          await collectedData.save();
          res.status(200).json({ message: 'Form submitted successfully' });
     } catch (error) {
          res.status(500).json({ message: 'Internal Server Error' });
     }
};
