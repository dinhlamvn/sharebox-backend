import { Injectable } from "@nestjs/common";
import { ServiceAccount } from "firebase-admin";
import * as serviceAccountDev from '../../service_accounts/sharebox_dev_service_account.json';
import * as serviceAccountProd from '../../service_accounts/sharebox_prod_service_account.json';
import { Common } from "src/common/common";

@Injectable()
export class ServiceAccountService {

    getServiceAccount(): ServiceAccount {
        const serviceAccount =  Common.isProduction() ? serviceAccountProd : serviceAccountDev;
        return serviceAccount as ServiceAccount;
    }
}