import {
    Column,
    Entity,
    PrimaryColumn
    // ObjectID,
    // ObjectIdColumn,
    // ObjectType
} from "typeorm";

@Entity()
export class Supply {
    // @ObjectIdColumn({ select: false })
    // id: ObjectID;
    @PrimaryColumn()
    name: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    description: string;
}