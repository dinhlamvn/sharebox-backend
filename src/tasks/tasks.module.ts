import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TiktokModule } from "src/tiktok/tiktok.module";
import { FirebaseModule } from "src/firebase/firebase.module";

@Module({
    imports: [TiktokModule, FirebaseModule],
    providers: [TasksService]
})
export class TasksModule {}