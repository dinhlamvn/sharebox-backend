import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { FirebaseModule } from './firebase/firebase.module';
import { TiktokModule } from './tiktok/tiktok.module';

@Module({
  imports: [ScheduleModule.forRoot(), TasksModule, FirebaseModule, TiktokModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
