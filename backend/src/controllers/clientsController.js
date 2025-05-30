//Array de métodos (C R U D)
const clientsController = {};
import clientsModel from "../models/Clients.js"
import bcryptjs from "bcryptjs"; // Encriptar

// SELECT
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find()
    res.json(clients)
}

clientsController.registerClient = async (req, res) => {

    //1-Pedimos las cosas que vamos a guardar
    const {
        name,
        email,
        password,
        age,
        country,
        isVerified,
    } = req.body;

    try {
        //Verificar si el cliente ya existe
        const existClient = await clientsModel.findOne({email})
        if(existClient) {
            return res.json({message: "Client already exists"})
        }

        //Encriptar la contrasela
        const passwordHash = await bcryptjs.hash(password, 10)

        //Guardamos en la base de datos
        const newClient = new clientsModel ({
            name,
            email,
            password: passwordHash,
            age,
            country,
            isVerified: isVerified || false,
        })

        await newClient.save()

        res.json({ message: "client saved"});

    } catch (error) {
        res.json({message: "error" + error})
    }
};

// DELETE
clientsController.deleteClients = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({ message: "client deleted"})
}

// UPDATE 
clientsController.updateClients = async (req, res) => {
    //Solicito todos los valores 
    const {
        name,
        email,
        password,
        age,
        country,
        isVerified,} = req.body;

        const passwordHash = await bcryptjs.hash(password, 10)

    //Actualizo
    await clientsModel.findByIdAndUpdate(req.params.id, {name, email, password: passwordHash, age, country, isVerified: isVerified || false,}, {new: true});
    //Muestro un mensaje que todo se actualizó
    res.json({message: "client updated"});
};

export default clientsController;