import express from "express";

// ! Imports Routes
import { envs } from "./libs/envs.js";
import { AppRoutesV1 } from "./v1/routes/index.js";

const app = express();

// ! middlewares
app.use(express.json());   // when we send information in format json
// app.use(express.urlencoded({ extended: false })); // when we send information in format form html


// ! Routes
app.use('/api/v1', AppRoutesV1.routes)


// ! listen port
app.listen(envs.PORT, () => {
    console.log("server on port", envs.PORT);
});