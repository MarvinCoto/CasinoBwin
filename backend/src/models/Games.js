/*
   Campos:
       name
       category
       minimumBet
       maximumBet
*/

import { Schema, model } from "mongoose";

const gamesSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String
    },
    minimumBet: {
        type: Number,
        require: true,
        min: 0
    },
    maximumBet: {
        type: Number,
        require: true,
        min: 0
    }
}, 
{
    timestamps: true,
    strict: false
});

export default model("games", gamesSchema)