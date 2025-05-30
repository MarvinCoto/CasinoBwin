// Importo todo lo de la librería de Express
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import gamesRoutes from "./src/routes/games.js"
import clientsRoutes from "./src/routes/clients.js"
import categoriesRoutes from "./src/routes/categories.js"

//Creo una constante que es igual a la librería que importé
const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
      // Permitir envío de cookies y credenciales
      credentials: true
    })
);

//Backend is working

//Que acepte datos en json
app.use(express.json());

//Que postman acepte guardar cookies
app.use(cookieParser());

//Definimos las rutas de las funciones que tendrá la página web

app.use("/api/games", gamesRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/categories", categoriesRoutes)

//Exporto la constante para poder usar express en otros archivos
export default app;