import { Registro } from "./RegistroVendedor";

export interface RegistroRepositorio{
    crearRegistro(
        id_venta:number
    ):Promise<Registro | null>
}