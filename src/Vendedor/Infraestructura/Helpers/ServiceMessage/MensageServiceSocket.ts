import io from "socket.io-client";
import { Registro } from "../../../Dominio/RegistroVendedor";
import { ImensajeService } from "../../../Aplicacion/Services/IMensajeService";

export class MessageServiceSocket implements ImensajeService{
    enviarMensaje(registro: Registro): string {
        const socket = io("https://websocket-rive.onrender.com");

        socket.on("connect", ()=>{
            console.log("Conectado al servidor socket");
            
            socket.emit("newClient", "Pago Realizado");
        });

        socket.on("disconnect", ()=>{
            console.log("Disconnect from server");
        });

        return "Mensaje enviado";
    }
}