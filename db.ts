import "reflect-metadata";
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "crud",
  synchronize: true,
  logging: true,
  entities: [__dirname + '/models/*.{ts,js}'],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;