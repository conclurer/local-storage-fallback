export interface IStorageAdapter {
    getItem(key: string): string | undefined;
    // tslint:disable-next-line
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void
}
