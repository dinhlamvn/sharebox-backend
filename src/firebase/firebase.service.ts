import { Injectable } from "@nestjs/common";
import * as serviceAccount from '../../sharebox_dev_service_account.json';
import admin from 'firebase-admin';
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://sharebox-dev-502a2-default-rtdb.firebaseio.com'
});
const db = admin.database();

@Injectable()
export class FirebaseService {
    
    async read(): Promise<string> {
        const ref = db.ref('shares');
        return ref.once('value').then((snapshot) => snapshot.val());
    }
}