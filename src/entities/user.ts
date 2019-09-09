import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { nullable: true })
    name: string;

    @Column('text', { nullable: true })
    last_name: string;

    @Column('text', { nullable: false, unique: true })
    email: string;

    @Column('text', { nullable: false })
    password: string;

    @Column('text', { nullable: true })
    bio: string;

    @Column('text', { nullable: true })
    profile_picture: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
