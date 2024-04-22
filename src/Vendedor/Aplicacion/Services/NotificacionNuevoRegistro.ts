import { Registro } from "../../Dominio/RegistroVendedor";
import { NotificationNewRegistro } from "../../Infraestructura/Helpers/ServiceRabbitMQ/NotificacionAgregarRegistro";


export class NotificacionRegistroCasoUso{
    constructor(readonly serviceNotification:NotificationNewRegistro){}

    async run(registroVendedor:Registro){
        await this.serviceNotification.enviarNotificacion(registroVendedor);
    }
}