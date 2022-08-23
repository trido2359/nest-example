import { DataSource, DataSourceOptions } from 'typeorm';
import { Todo } from './src/entities/todo.entity';
import { todo1661268343148 } from './src/migrations/1661268343148-todo'

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: 'localhost',
  port: 3304,
  username: 'root',
  password: '123456',
  database: 'nestexample',
  logging: true,
  synchronize: false,
  entities: [Todo],
  migrations: [todo1661268343148],
} as DataSourceOptions);
