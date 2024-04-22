import { Registro } from "../Dominio/RegistroVendedor";
import { RegistroRepositorio } from "../Dominio/RegistroRepositorio";
import RegistroModel from "./models/RegistroModel";

export class SqlRepositorio implements RegistroRepositorio{
    async crearRegistro(id_venta: number): Promise<Registro | null> {
        try {
            const registroCreado = await RegistroModel.create({id_venta});
            console.log("registro de sqlrepo", registroCreado);
            
            return new Registro(registroCreado.id_venta)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en AddAdmin", error);
            return null;
        }
    }
}