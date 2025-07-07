import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TablesModule } from './tables/tables.module';
import { MysqlDatabaseModule } from './database/docker-mysql-database.module';
import { SharedModule } from './shared/shared.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './shared/filters/global-exception.filter';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MysqlDatabaseModule,
    TablesModule,
    AuthModule,
    SharedModule,
  ],

  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },

    AppService,
  ],
})
export class AppModule {}
