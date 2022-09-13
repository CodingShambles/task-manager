import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Author } from './Author';

@Entity()
export class Task{
	@PrimaryGeneratedColumn()
	public Id: string = uuid();

	@Column()
	public Sequential: number;

	@Column({
		length: 100
	})
	public Title: string;

	@Column({
		length: 1000
	})
	public Description: string;

	@Column()
    public DateCreated: Date;

	@Column()
	public DateCompleted: Date;
	
	@Column()
	public Author: Author;
}