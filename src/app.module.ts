import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './modules/todo/todo.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { dataSource } from '../ormconfig';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource,
    }),
    AuthModule,
    TodoModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    AuthService,
    UsersService,
  ],
})
export class AppModule {}
