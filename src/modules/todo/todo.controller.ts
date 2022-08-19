import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Body,
  Put,
  Query,
  Delete,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO } from './dto/create-todo.dto';
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  // Create a todo
  @Post('/')
  async create(@Res() res, @Body() createTodoDTO: CreateTodoDTO) {
    const newTodo = await this.todoService.create(createTodoDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been submitted successfully!',
      todo: newTodo,
    });
  }

  // Fetch a particular todo using ID
  @Get('/:todoID')
  async get(@Res() res, @Param('todoID') todoID) {
    const todo = await this.todoService.get(todoID);

    if (!todo) {
      throw new NotFoundException('Todo does not exist!');
    }

    return res.status(HttpStatus.OK).json(todo);
  }

  // Fetch all todos
  @Get('/')
  async list(@Res() res) {
    const todos = await this.todoService.list();

    return res.status(HttpStatus.OK).json(todos);
  }

  // Edit a particular todo using ID
  @Put('/')
  async update(
    @Res() res,
    @Query('todoID') todoID,
    @Body() createTodoDTO: CreateTodoDTO,
  ) {
    const editedTodo = await this.todoService.update(todoID, createTodoDTO);
    if (!editedTodo) {
      throw new NotFoundException('Todo does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been successfully updated',
      todo: editedTodo,
    });
  }

  // Delete a todo using ID
  @Delete('/delete')
  async delete(@Res() res, @Query('todoID') todoID) {
    const deletedTodo = await this.todoService.delete(todoID);

    if (!deletedTodo) {
      throw new NotFoundException('Todo does not exist!');
    }

    return res.status(HttpStatus.OK).json({
      message: 'Todo has been deleted!',
      todo: deletedTodo,
    });
  }
}
