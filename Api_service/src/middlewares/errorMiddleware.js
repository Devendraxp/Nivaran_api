import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/**
 * Global error handler middleware for Express
 */
export const errorHandler = (err, req, res, next) => {
  // Log the error for server-side debugging (optional, you can remove this)
  console.error(`ERROR 💥: ${err}`);
  
  // If the error is our custom ApiError, use its properties
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode)
      .json({
        success: false,
        message: err.message,
        errors: err.errors,
        statusCode: err.statusCode,
        data: null
      });
  }
  
  // For unexpected errors, return a generic server error
  return res
    .status(500)
    .json({
      success: false,
      message: "Something went wrong",
      errors: [err.message || "Unknown error"],
      statusCode: 500,
      data: null
    });
};