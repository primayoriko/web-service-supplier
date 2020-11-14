import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

export class Supply {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    type: string;

    @Column()
    description: string;

}