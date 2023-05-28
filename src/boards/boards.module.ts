import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  providers: [BoardsService, BoardRepository],
  controllers: [BoardsController],
})
export class BoardsModule {}
