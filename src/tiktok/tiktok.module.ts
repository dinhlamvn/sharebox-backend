import { Module } from "@nestjs/common";
import { TiktokService } from "./tiktok.service";
import { ApiModule } from "src/api/api.module";

@Module({
    imports: [ApiModule],
    providers: [TiktokService],
    exports: [TiktokService]
})
export class TiktokModule {}