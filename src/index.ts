import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* IMPORTACIONES DE ROUTER */
import projectRoutes from "./routes/projectRoutes";

/* CONFIGURACIONES */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* RUTAS */
app.get("/", (req, res) => {
  res.send("Esta es la ruta a Inicio");
});

app.use("/projects", projectRoutes);

/* SERVER */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`El servidor corre en ${port}`)
});