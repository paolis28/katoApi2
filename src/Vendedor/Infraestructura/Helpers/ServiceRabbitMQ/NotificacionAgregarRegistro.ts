import amqplib from 'amqplib';
import { Registro } from '../../../Dominio/RegistroVendedor';
import INotificationNewRegistro from '../../../Dominio/services/InotiicacionNuevoRegistro';

export class NotificationNewRegistro implements INotificationNewRegistro{
    private url:any;
    private exch: any;

    constructor(){
        this.url="amqp://Kato:kato@34.231.168.155";
        this.exch="colaKato";
    }

    async enviarNotificacion(registro: Registro): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const ch = await conn.createChannel();
        const status = await ch.publish(this.exch, "kato123", Buffer.from("Pago realizado"));
        return status;     
    }
} 