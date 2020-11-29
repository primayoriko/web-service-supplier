import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    // PrimaryColumn,
    // ObjectID,
    // ObjectIdColumn,
    // ObjectType
} from "typeorm";

@Entity()
export class Supply {
    // @ObjectIdColumn({ select: false })
    // id: ObjectID;
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    description: string;
}