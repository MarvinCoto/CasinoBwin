import express from "express";
import gamesController from "../controllers/gamesController.js"

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

router.route("/")
.get(gamesController.getGames)
.post(gamesController.createGames)

router.route("/:id")
.put(gamesController.updateGames)
.delete(gamesController.deleteGames);

export default router;