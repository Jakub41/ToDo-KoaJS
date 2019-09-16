import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user';

@Entity('profile')
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int', { nullable: true })
    age: number;

    @OneToOne(() => User, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user: User;
}
