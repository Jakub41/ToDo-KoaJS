import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Profile } from './profile';
@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true, nullable: true })
    email: string;

    @Column('text', { nullable: true })
    password: string;

    @Column('bool', { default: false })
    confirmed: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Profile, profile => profile.user, { cascade: true })
    profile: Profile;
}
