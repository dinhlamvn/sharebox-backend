import { Injectable } from "@nestjs/common";
import admin from 'firebase-admin';
import { Database } from "firebase-admin/lib/database/database";
import { Common } from "src/common/common";
import { ServiceAccountService } from "src/service_account/service-account.service";

@Injectable()
export class FirebaseService {

    private readonly db: Database;

    constructor(serviceAccountService: ServiceAccountService) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccountService.getServiceAccount()),
            databaseURL: Common.getDatabaseURL()
        });
        this.db = admin.database();
    }

    async push(refName: string, data: any) {
        const ref = this.db.ref(refName);
        return ref.push(data);
    }

    async pushInChild(refName: string, child: string, data: any) {
        return this.db.ref(refName).child(child).set(data);
    }
}