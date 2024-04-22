import { Registro } from "../../Dominio/RegistroVendedor";

export interface ImensajeService{
    enviarMensaje(registroVendedor:Registro):string;
}