import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb://localhost/gallery-image-db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}
