import {MemoryStorage} from '../../src/memory-storage.class';

class FakeLocalStorage extends MemoryStorage {
}

// tslint:disable-next-line
let g = <any>global;
let storage = new FakeLocalStorage();

g.window.localStorage = g.window.sessionStorage = storage;
