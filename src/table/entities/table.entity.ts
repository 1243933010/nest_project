import {Entity,Column,PrimaryGeneratedColumn,Generated,CreateDateColumn,OneToMany} from 'typeorm'
import { Tags } from './tag.entity'

@Entity()
export class Table {
    @PrimaryGeneratedColumn()
    id:number

    // @PrimaryGeneratedColumn()
    // tags:Array<object>
    @OneToMany(()=>Tags,(tags)=>tags.table)
    tags:Tags[]

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
