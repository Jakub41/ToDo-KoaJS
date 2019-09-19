import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user';

@Entity('profile')
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int', { nullable: true })
    age: number;

    @OneToOne(() => User, user => user.profile, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user: User;
}
