import { Controller, Get } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { Pizza } from './schemas/pizzas.schema';

@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Get()
  async getPizzas(): Promise<Array<Pizza>> {
    return this.pizzasService.getPizzas();
  }
}
