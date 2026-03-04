import { connect } from 'mongoose';

import const initMongoDB = async () => {
    try {
        await connect(process.env.MONGO_URL);
    } catch (error) {
    }
};