import express from "express";
import {Signale} from "signale";
import {vendedorRouter} from "./Vendedor/Infraestructura/VendedorRoutes";
import {InicializarBaseDatos} from "./Conexion/Base";
import cors from "cors"

const options ={
    secrets:["([0-9]{4}-?)+"]
}


const example = express();
example.disable("x-powered-by");

const logger = new Signale(options);
const app = express();

app.use(cors());
app.use(express.json());
app.use("/mensaje", vendedorRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


async function iniciarServidor(){
    try {
        await InicializarBaseDatos();
        app.listen(3001, ()=>{
            logger.success("Servidor corriendo en el puerto 3001");
        })
    } catch (error) {
        logger.error("Error al iniciar el servidor", error);
    }
}

iniciarServidor();