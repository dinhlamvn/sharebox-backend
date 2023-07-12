import { Module } from "@nestjs/common";
import { ServiceAccountService } from "./service-account.service";

@Module({
    providers: [ServiceAccountService],
    exports: [ServiceAccountService]
})
export class ServiceAccountModule {}