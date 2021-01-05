import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzasModule } from './pizzas/pizzas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://user:1234@pizza-app.cu1rl.mongodb.net/pizza-api?retryWrites=true&w=majority`
    ),
    PizzasModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
