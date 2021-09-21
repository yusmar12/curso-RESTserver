const { response , request} = require('express')

const usuariosGet = (req = request, res = response) => {
    const {query, nombre = "unNamed", apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'get API - Controller',
        query,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API - Controller',
        nombre,
        edad
    })
}
const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.status(404).json({
        msg: 'put API - Controller',
        id
    })
}
const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    })
}
const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}