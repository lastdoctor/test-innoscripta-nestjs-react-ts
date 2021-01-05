import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PizzaDocument = Pizza & Document;

@Schema()
export class Pizza {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  img: string;

  @Prop()
  priceUsd: string;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
