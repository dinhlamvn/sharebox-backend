import { Module } from "@nestjs/common";
import { FirebaseService } from "./firebase.service";
import { ServiceAccountModule } from "src/service_account/service-account.module";

@Module({
    imports: [ServiceAccountModule],
    providers: [FirebaseService],
    exports: [FirebaseService]
})
export class FirebaseModule {}