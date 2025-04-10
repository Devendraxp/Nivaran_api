import express from "express";
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 8080;
import apiServiceRoute from "./routes/apiService.routes.js";

app.use(express.json());
// For parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/apiService", apiServiceRoute);
app.get("/", (_, res) => res.send("Server is healthy... running properly !!"));

export { app };
