import { Pizza, PizzaDocument } from './schemas/pizzas.schema';
import { Model } from 'mongoose';
export declare class PizzasService {
    private readonly pizzaModel;
    constructor(pizzaModel: Model<PizzaDocument>);
    getPizzas(): Promise<Array<Pizza>>;
}
