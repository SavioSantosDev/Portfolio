import { Router } from 'express';
import multer from 'multer';

import CasesController from './controllers/CasesController';
import uploadConfig from './config/upload';


const router = Router();
const upload = multer(uploadConfig);

const fieldsUpload = upload.fields([
  { name: 'banner', maxCount: 1 },
  { name: 'images', maxCount: 8 }
]);

router.post('/cases', fieldsUpload, CasesController.create);
router.get('/cases', CasesController.list);
router.get('/cases/:id', CasesController.show);
router.put('/cases/:id', CasesController.update);
router.delete('/cases/:id', CasesController.delete);

export default router;
