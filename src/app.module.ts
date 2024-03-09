import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from './telegram/telegram.module';
import { TelelgramService } from './telegram/telelgram.service';

@Module({
  imports: [TelegramModule],
  controllers: [AppController],
  providers: [AppService, TelelgramService],
})
export class AppModule {}
