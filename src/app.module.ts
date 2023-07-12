import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ScheduleModule.forRoot(), TasksModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
