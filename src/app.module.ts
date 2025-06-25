import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TablesModule } from './tables/tables.module';
import { ConfigModule } from '@nestjs/config';
import { NeonDatabaseModule } from './database/neon.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NeonDatabaseModule,
    TablesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
