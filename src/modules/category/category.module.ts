import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TokenMiddleware } from 'src/middleware/token.middleware';


@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity])],
    providers: [CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService]
})
export class CategoryModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(TokenMiddleware)
          .forRoutes(CategoryController)
      }
}
