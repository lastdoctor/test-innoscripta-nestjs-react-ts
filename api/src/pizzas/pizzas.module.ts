import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzasController } from './pizzas.controller';
import { PizzasService } from './pizzas.service';
import { Pizza, PizzaSchema } from './schemas/pizzas.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pizza.name, schema: PizzaSchema }]),
  ],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
