//Array de métodos (C R U D)
const gamesController = {};
import gamesModel from "../models/Games.js"

// SELECT
gamesController.getGames = async (req, res) => {
    const games = await gamesModel.find().populate('idCategory')
    res.json(games)
}

// INSERT
gamesController.createGames = async (req, res) => {
    const { name, idCategory, minimumBet, maximumBet } = req.body;
    const newGame = new gamesModel({ name, idCategory, minimumBet, maximumBet });
    await newGame.save();

    res.json({ message: "game saved"});
}

// DELETE
gamesController.deleteGames = async (req, res) => {
    await gamesModel.findByIdAndDelete(req.params.id)
    res.json({ message: "game deleted"})
}

// UPDATE 
gamesController.updateGames = async (req, res) => {
    //Solicito todos los valores 
    const {name, idCategory, minimumBet, maximumBet} = req.body;
    //Actualizo
    await gamesModel.findByIdAndUpdate(req.params.id, {name, idCategory, minimumBet, maximumBet}, {new: true});
    //Muestro un mensaje que todo se actualizó
    res.json({message: "game updated"});
};

export default gamesController;