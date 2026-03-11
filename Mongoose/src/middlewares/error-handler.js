export const errorHandler = (err, req, res, next) => {
    const status = error.status || 500;
    res.status(status).json({ message: error.message });
};
