import { AddRegistroController } from "./controller/AgregarRegistro.Controller";
import { AddRegistroCasoUso } from "../Aplicacion/AgregarRegistroCasoUso";
import { NotificacionRegistroCasoUso } from "../Aplicacion/Services/NotificacionNuevoRegistro";
import { SqlRepositorio } from "./sqlVendedorRepositorio";
import { MessageServiceSocket } from "./Helpers/ServiceMessage/MensageServiceSocket";
import { NotificationNewRegistro } from "./Helpers/ServiceRabbitMQ/NotificacionAgregarRegistro";

export const sqlRepositorio = new SqlRepositorio();
export const notificationNewRegistro = new NotificationNewRegistro();
export const messageServiceSocket = new MessageServiceSocket();

export const notificacionRegistroCasoUso = new NotificacionRegistroCasoUso(notificationNewRegistro);
export const addRegistroCasoUso = new AddRegistroCasoUso(
    sqlRepositorio,
    notificacionRegistroCasoUso,
    messageServiceSocket
)
export const addRegistroController = new AddRegistroController(addRegistroCasoUso);


