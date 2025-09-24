// Handle routes that are not found
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// General error handler
export const errorHandler = (err, req, res, next) => {
  // If status code was already set, keep it. Otherwise default to 500.
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    // Stack only shown in development
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
