import { createConnection, DataSource } from "typeorm";

createConnection({
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  host: 'localhost',
  migrations: ['./migrations/*.ts'],
  synchronize: true,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts']
});

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  host: 'localhost',
  migrations: ['./migrations/*.ts'],
  synchronize: true,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts']
});
