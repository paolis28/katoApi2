import { DataType, Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Registro",
    timestamps:false
})
class RegistroModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_venta!:number;
}

export default RegistroModel;