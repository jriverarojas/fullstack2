const express = require("express");
const authRouter = express.Router();
const { login } = require("../controllers/Auth");
authRouter
    .route("/login")
    .post(login);
module.exports = authRouter;