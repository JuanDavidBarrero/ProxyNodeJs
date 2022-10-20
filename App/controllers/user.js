import { response,request } from "express";

export const usuariosGet = async (req = request, res = response) => {
    return res.json ({
        nombre:"Juanda",
        edad: 18
    })
}