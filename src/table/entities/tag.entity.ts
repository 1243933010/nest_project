import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, Generated, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { Table } from './table.entity'
@Entity()
export class Tags {
    @PrimaryGeneratedColumn()
    id: number
 
    @Column()
    tags:string
 
    @Column()
    color:string

    @ManyToOne(()=>Table,(table)=>table.tags)

    @JoinColumn()
    table:Table
 
} 