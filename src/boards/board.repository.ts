import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './boards-status.enum';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private readonly dataSource: DataSource) {
    const baseRepository = dataSource.getRepository(Board);
    super(
      baseRepository.target,
      baseRepository.manager,
      baseRepository.queryRunner,
    );
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
