import {IStorageAdapter} from './storage.interface';

export class MemoryStorage implements IStorageAdapter {
    protected data: {[key: string]: string} = {};

    public getItem(key: string): string | undefined {
        return this.data.hasOwnProperty(key) ? this.data[key] : undefined;
    }

    // tslint:disable-next-line
    public setItem(key: string, value: any): void {
        this.data[key] = String(value);
    }

    public removeItem(key: string): void {
        delete this.data[key];
    }

    public clear(): void {
        this.data = {};
    }
}
