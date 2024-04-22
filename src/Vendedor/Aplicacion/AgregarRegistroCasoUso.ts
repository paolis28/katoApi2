import { Registro } from "../Dominio/RegistroVendedor";
import { RegistroRepositorio } from "../Dominio/RegistroRepositorio";
import { NotificacionRegistroCasoUso } from "./Services/NotificacionNuevoRegistro";
import { MessageServiceSocket } from "../Infraestructura/Helpers/ServiceMessage/MensageServiceSocket";

export class AddRegistroCasoUso{
    constructor(
        readonly registroRepositorio:RegistroRepositorio, 
        readonly notificacionRegistroCasoUso:NotificacionRegistroCasoUso,
        readonly messageServiceSocket:MessageServiceSocket
    ){}

    async run(id_venta:number):Promise<Registro | null>{
        try {
            console.log("log en el useCase", id_venta);
            
            const registro:any = await this.registroRepositorio.crearRegistro(
                id_venta
            ); 
            if(registro){
                this.notificacionRegistroCasoUso.run(registro);
                this.messageServiceSocket.enviarMensaje(registro);
            }
            console.log("resgrito caso uso",registro);
            
            return registro;
        } catch (error) {
            console.log("Error en addRegistroCasoUso", error);
            return null;
        }
    }
}