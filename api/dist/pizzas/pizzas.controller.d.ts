import { PizzasService } from './pizzas.service';
import { Pizza } from './schemas/pizzas.schema';
export declare class PizzasController {
    private readonly pizzasService;
    constructor(pizzasService: PizzasService);
    getPizzas(): Promise<Array<Pizza>>;
}
