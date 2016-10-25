import {IStorageAdapter} from './storage.interface';
const TEST_KEY = '__test';

export function hasStorage(adapter: IStorageAdapter): boolean {
    try {
        adapter.setItem(TEST_KEY, '1');
        adapter.removeItem(TEST_KEY);
        return true;
    } catch (e) {
        return false;
    }
}
