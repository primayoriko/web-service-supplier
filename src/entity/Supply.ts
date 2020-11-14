import {
    Column,
    Entity,
    ObjectID,
    ObjectIdColumn,
    ObjectType
} from "typeorm";

@Entity()
export class Supply {
    @ObjectIdColumn({ select: false })
    id: ObjectID;

    @Column({ unique: true })
    name: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    other: Object;
}