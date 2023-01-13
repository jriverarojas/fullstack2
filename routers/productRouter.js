const express = require("express");
const productRouter = express.Router();

productRouter
    .route("/")
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "get all products"
        });
     })
     .post((req, res) => {
         res.status(200).json({
            status: "ok",
            action: "post a product",
            params: req.body
        })
     });
productRouter
    .route("/:id")
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "get a product",
            id: req.params.id
        })

    })
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a product",
            id: req.params.id
        })

    })
    .delete((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "delete a product",
            id: req.params.id
        })

    })

module.exports = productRouter;