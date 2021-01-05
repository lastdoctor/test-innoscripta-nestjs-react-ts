import { Injectable } from '@nestjs/common';
import { Pizza, PizzaDocument } from './schemas/pizzas.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PizzasService {
  constructor(
    @InjectModel(Pizza.name) private readonly pizzaModel: Model<PizzaDocument>
  ) {}

  async getPizzas(): Promise<Array<Pizza>> {
    return await this.pizzaModel.find({});
  }
}
