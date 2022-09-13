import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Author,} from './Author';
import { Task } from './Task';

@Entity()
export class Comment{
	@PrimaryGeneratedColumn()
	public Id: string = uuid();

	@Column()
	public Author: Author;

	@Column()
    public Task: Task;
}
