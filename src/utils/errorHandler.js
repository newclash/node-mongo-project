export const errorHandler = (err, _, res, next) => {
  console.error("Error:", err.message);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });

  next();
};
