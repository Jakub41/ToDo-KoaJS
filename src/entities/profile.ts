import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from './user';

@Entity('profile')
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { nullable: true })
    first_name: string;

    @Column('text', { nullable: true })
    last_name: string;

    @Column('text', { nullable: true })
    date_of_birth: string;

    @Column('text', { nullable: true })
    avatar_url: string;

    @Column('text', { nullable: true })
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User, user => user.profile, { eager: true, onDelete: 'CASCADE', nullable: false })
    @JoinColumn()
    user: User;
}
