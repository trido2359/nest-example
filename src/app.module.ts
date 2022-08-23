import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './modules/todo/todo.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { Todo } from './entities/todo.entity';

console.log(__dirname + 'src/entities/*.entity.ts');


@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3304,
      username: 'root',
      password: '123456',
      database: 'nestexample',
      synchronize: true,
      // autoLoadEntities: true,
      entities: [Todo],
      migrations: [__dirname + 'src/migrations/*{.ts}'],
      migrationsTableName: 'migrations'
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
