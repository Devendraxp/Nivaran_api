import express from "express";
import apiServiceRoute from "./routes/apiService.routes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/apiService", apiServiceRoute);
app.get("/", (_, res) => res.send("Server is healthy... running properly !!"));

// Custom error handler (must be placed after all routes)
app.use(errorHandler);

// Handle 404 (route not found)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
    statusCode: 404,
    data: null
  });
});

export { app };
