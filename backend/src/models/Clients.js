/*
   Campos:
       name
       email
       password
       age
       country
*/

import { Schema, model } from "mongoose";

const clientsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        min: 0
    },
    country: {
        type: String,
        require: true
    }
}, 
{
    timestamps: true,
    strict: false
});

export default model("clients", clientsSchema)