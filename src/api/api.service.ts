import { Injectable } from "@nestjs/common";
import axios from "axios";
import { ApiRequestOptions } from "src/model/api-request-options";
import curlirize from 'axios-curlirize';

@Injectable()
export class ApiService {

    constructor() {
        curlirize(axios);
    }

    async get(url: string, requestOptions?: ApiRequestOptions) {
        return await axios.get(url, {
            params: requestOptions?.params,
            headers: requestOptions?.headers,
        });
    }
}