import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TablesModule } from './tables/tables.module';
import { MysqlDatabaseModule } from './database/docker-mysql-database.module';
import { SharedModule } from './shared/shared.module';
import { EnvService } from './shared/services/env.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MysqlDatabaseModule,
    TablesModule,
    AuthModule,
    SharedModule,
  ],

  controllers: [AppController],
  providers: [EnvService, AppService],
  exports: [EnvService],
})
export class AppModule {}
