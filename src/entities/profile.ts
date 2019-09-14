import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('profile')
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int', { nullable: true })
    age: number;
}
