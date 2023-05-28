import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', // DB 계정
  password: 'postgres', // DB 비밀번호
  database: 'board-app', // DB 이름

  entities: [__dirname + '/../**/*.entity.{js,ts}'],

  synchronize: true,
};
