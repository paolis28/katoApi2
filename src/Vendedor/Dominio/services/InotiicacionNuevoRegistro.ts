import { Registro } from "../RegistroVendedor";

export default interface INotificationNewRegistro{
    enviarNotificacion(registro:Registro):Promise<boolean>;
}