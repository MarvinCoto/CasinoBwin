//importo la librería que acabo de instalar
import dotenv from "dotenv";

// Ejecuto "Dotenv"
// me ayudará a acceder al .env
dotenv.config();

export const config = {
    db: {
        URI: process.env.DB_URI || "mongodb+srv://MarvinCoto:marvinjavierCoto1@cluster0.vxund.mongodb.net/CasinoVirtualbwin",
    },
    server: {
        port: process.env.PORT || 4000,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES,
    },
    ADMIN:{
        emailAdmin: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },
    email: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    },
};