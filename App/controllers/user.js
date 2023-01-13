import { response,request } from "express";

export const usuariosGet = async (req = request, res = response) => {
    return res.json ({
        nombre:"Juanda",
        edad: 18
    })
}

export const postUsuario = async (req = request, res = response) => {

    const { nombre, desc } = req.body;

    return res.json({
        status:true,
        nombre,
        desc,
        msg:"completado"
    })
}

export const PutUsuario = async (req = request, res = response) => {

    const id  = req.params.id;

    const { nombre } = req.body;


    return res.json({
        status:true,    
        nombre,
        id,
        msg:"Actualizado"
    })
}

export const DeleteUsuario = async (req = request, res = response) => {

    const id  = req.params.id;

    return res.json({
        status:true,    
        msg:`Usuario con el id ${id} borrado`
    })
}