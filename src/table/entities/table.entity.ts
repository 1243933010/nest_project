import {Entity,Column,PrimaryGeneratedColumn,Generated,CreateDateColumn} from 'typeorm'

@Entity()
export class Table {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar',length:255})
    name:string

    @Column({type:'varchar',length:255})
    desc:string

    // @Column({})
    // password:string

    @Generated('uuid')
    uuid:string

    @CreateDateColumn({type:"timestamp"})
    createTime:Date
}
