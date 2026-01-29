import express, { Express, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import SwaggerUi from "swagger-ui-express";
import Document from "../swagger.json";
import router from "./routes";
import httpStatus from "http-status";
import chat from "./services/chat";
import { createServer } from "http";
import { Server } from "socket.io";
import "./services/cronJob";
import setupSocket from "./services/notificationSocket";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT; 
const server = createServer(app);

const allowedOrigins = ["http://localhost:5000", "https://ramip-farm.onrender.com"]; 

export const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true
  }
});

chat(io);
setupSocket(io);

// IMPORTANT: CORS must come FIRST, before any body parsing
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors());

app.use(morgan(process.env.NODE_ENV || "dev"));
app.use(compression());
app.use(cookieParser());

// Body parsing with webhook exception
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === "/api/cart/webhook") {
    express.raw({ type: "application/json" })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(Document));
app.use("/api", router);

app.get("**", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: "Welcome to the Farm-RAMIP BackEnd."
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});

export default app;