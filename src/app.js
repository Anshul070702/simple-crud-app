import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Product } from "./models/products.models.js";
const app = express();

// setting middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(cookieParser());

// routes
import productRoute from "./routes/product.routes.js";

app.use("/api/products", productRoute);

export { app };
