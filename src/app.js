import express from "express";
import morgan from "morgan";
import TasksRoutes from "./routes/tasks.routes";
import cors from "cors";

// settings
const app = express();
app.set("port", process.env.PORT || 3000);
// middlewares
app.use(
  cors({
    origin: "http:/localhost:3000",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Application" });
});

app.use("/api/tasks", TasksRoutes);
export default app;
