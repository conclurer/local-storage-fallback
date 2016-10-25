import {IStorageAdapter} from './storage.interface';
import {hasStorage} from './has-storage.function';
import {hasCookies, CookieStorage} from './cookie-storage.class';
import {MemoryStorage} from './memory-storage.class';

export class FallbackStorage implements IStorageAdapter {
    protected adapter: IStorageAdapter;

    public constructor(forceAdapter?: IStorageAdapter) {
        if (!forceAdapter) {
            if (typeof window !== 'undefined' && hasStorage(window.localStorage)) {
                // use localStorage
                this.adapter = window.localStorage;
            }
            else if (hasCookies()) {
                // use cookies
                this.adapter = new CookieStorage();
            }
            else {
                // use memory
                this.adapter = new MemoryStorage();
            }
        }
    }

    public getItem(key: string): string | null {
        return this.adapter.getItem(key);
    }

    // tslint:disable-next-line
    public setItem(key: string, value: any): void {
        this.adapter.setItem(key, value);
    }

    public removeItem(key: string): void {
        this.adapter.removeItem(key);
    }

    public clear(): void {
        this.adapter.clear();
    }
}
