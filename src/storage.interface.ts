export interface IStorageAdapter {
    getItem(key: string): string | null;
    // tslint:disable-next-line
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void
}
