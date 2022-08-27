import { DataSource, DataSourceOptions } from 'typeorm';
import { Todo } from './src/entities/todo.entity';
import { todo1661268343148 } from './src/migrations/1661268343148-todo';

export const dataSource = {
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nestexample',
  logging: true,
  synchronize: false,
  entities: [Todo],
  migrations: [todo1661268343148]
};

export const connectionSource = new DataSource(dataSource as DataSourceOptions);
