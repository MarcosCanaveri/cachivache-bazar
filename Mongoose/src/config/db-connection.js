import { connect } from 'mongoose';

export const initMongoDB = async () => {
    try {
        await connect(process.env.MONGO_URL);
    } catch (error) {
        throw new Error(error);
    }
};

initMongoDB().then(() => 
    console.log('MongoDB connected successfully')).catch((err) => console.log(err));
