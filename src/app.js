import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import router from './routes';
import { createRole } from "./libs/initialSetup";

// nuevo
const app=express();
createRole();

app.set ('port', process.env.PORT || 4001)

app.use(morgan("dev"));
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', router);


export default app;