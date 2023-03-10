import {Entity,Column,PrimaryGeneratedColumn,Generated,CreateDateColumn} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar',length:255})
    name:string

    @Column({})
    password:string

    @Generated('uuid')
    uuid:string

    @CreateDateColumn({type:"timestamp"})
    createTime:Date
}
