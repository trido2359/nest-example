import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { Todo } from '../../entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async create(createTodoDTO: CreateTodoDTO): Promise<Todo> {
    return null;
  }

  async get(todoID: string): Promise<any> {
    return null;
  }

  async list(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  async update(postID: number, createTodoDTO: CreateTodoDTO): Promise<any> {
    return null;
  }

  async delete(todoID: number): Promise<any> {
    return null;
  }
}
