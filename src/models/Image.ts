import { Schema, model, Document } from 'mongoose';

interface IImage extends Document {
    title: string;
    description: string;
    imgPath: string;
}

const imgSchema = new Schema({
    title: String,
    description: String,
    imgPath: String
});

export default model<IImage>('Image', imgSchema);
