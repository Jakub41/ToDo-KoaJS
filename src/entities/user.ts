import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { nullable: true })
    name: string;

    @Column('text', { nullable: true })
    last_name: string;

    @Column('text', { unique: true, nullable: true })
    email: string;

    @Column('bool', { default: false })
    confirmed: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
