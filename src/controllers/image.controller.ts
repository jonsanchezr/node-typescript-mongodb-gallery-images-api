import { Request, response, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import Image from '../models/Image';

export async function getImages(req: Request, res: Response): Promise<Response> {
    const images = await Image.find();
    return res.json(images);
}

export async function getImage(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const image = await Image.findById(id);
    return res.json(image);
}

export async function createImage(req: Request, res: Response): Promise<Response> {
    const {title, description} = req.body;
    const newImage = {
        title,
        description,
        imgPath: req.file?.path
    };
    const image = new Image(newImage);
    await image.save();

    return res.json({
        message: 'Image successfully saved',
        image
    });
}

export async function deleteImage(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const image = await Image.findByIdAndRemove(id);
    if (image) {
        await fs.unlink(path.resolve(image.imgPath));
    }
    return res.json({
        message: 'Image deleted'
    });
}

export async function updateImage(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const {title, description} = req.body;
    const updatedImage = await Image.findByIdAndUpdate(id, {title, description}, {new: true});
    return res.json({
        message: 'Image updated',
        updatedImage
    })
}
