import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
