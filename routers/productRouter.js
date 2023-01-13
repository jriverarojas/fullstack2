const express = require("express");
const productRouter = express.Router();

productRouter
    .route("/")
    .get((req, res, next) => {
        res.status(200).json({
            status: "ok",
            action: "get all products"
        })
     })
     .post((req, res, next) => {
         console.log(req.body);
         res.status(200).json({
            status: "ok",
            action: "post a product"
        })
     });

module.exports = productRouter;