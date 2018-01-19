import { Injectable } from '@angular/core';

export interface KeyValuePair {
    key: string;
    value: string;
}

@Injectable()
export class HttpHeaderService {

    private headers: KeyValuePair[] = [];

    public getHeaders(): KeyValuePair[] {
        return this.headers;
    }

    public setHeader(key: string, value: string) {
        this.headers = [...this.headers.filter(p => p.key !== key), { key, value }];
    }

}