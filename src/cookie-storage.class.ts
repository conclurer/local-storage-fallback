import cookie = require('cookie');
import {IStorageAdapter} from './storage.interface';

export class CookieStorage implements IStorageAdapter {
    protected prefix: string;

    public constructor(prefix: string = 'lS_') {
        this.prefix = prefix;
    }

    public getItem(key: string): string | null {
        const cookies = cookie.parse(document.cookie);
        if (!cookies || !cookies.hasOwnProperty(this.prefix + key)) {
            return null;
        }

        return cookies[this.prefix + key];
    }

    // tslint:disable-next-line
    public setItem(key: string, value: any): void {
        document.cookie = cookie.serialize(this.prefix + key, value, {
            path: '/'
        });
    }

    public removeItem(key: string): void {
        document.cookie = cookie.serialize(this.prefix + key, '', {
            path: '/',
            maxAge: -1
        });
    }

    public clear(): void {
        let cookies = cookie.parse(document.cookie);
        for (let key in cookies) {
            if (key.indexOf(this.prefix) === 0) {
                this.removeItem(key.substr(this.prefix.length));
            }
        }
    }
}

export function hasCookies(): boolean {
    const TEST_KEY = '__test';
    let storage = new CookieStorage();

    try {
        storage.setItem(TEST_KEY, '1');
        let value = storage.getItem(TEST_KEY);
        storage.removeItem(TEST_KEY);

        return value === '1';
    } catch (e) {
        return false;
    }
}
