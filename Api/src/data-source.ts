import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entity/Task"
import { Author } from './entity/Author';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
		const non: number = 1234;
		console.log(`merda: ${non}`);
    })
    .catch((exception) => console.log(exception))
