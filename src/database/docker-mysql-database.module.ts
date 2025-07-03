import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'userpassword',
      database: 'mydatabase',
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize: true, // тільки для розробки
    }),
  ],
})
export class MysqlDatabaseModule {}
