import express  from "express";
import bodyParser from "body-parser";
import { connection } from "./database/db.js";
import routes from "./routes/routes.js"
import cors from "cors";

const app=express();


app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json({
    extended:true
}));

app.use("/",routes);

connection();

const PORT=5000;

app.listen(PORT,() => console.log(`server started on port ${PORT}`));