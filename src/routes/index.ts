import { Router  } from 'express';
import multer from '../libs/multer';
import { createImage, deleteImage, getImage, getImages, updateImage } from '../controllers/image.controller';

const router = Router();

router.route('/images')
    .get(getImages)
    .post(multer.single('image'), createImage);

router.route('/images/:id')
    .get(getImage)
    .delete(deleteImage)
    .put(updateImage);

export default router;
