import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Author{
	@PrimaryGeneratedColumn()
	public Id: string = uuid();

	@Column()
	public Name: string;
}