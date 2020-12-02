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
<<<<<<< HEAD
    // @PrimaryColumn()
    // id: number;

    @PrimaryColumn()
=======
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
>>>>>>> b221111409eb4b178e8dd96b2dbb7e9a909c0bb1
    name: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    description: string;
}