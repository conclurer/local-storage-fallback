import {FallbackStorage} from '../src/fallback-storage.class';
import test = require('tape');
import Test = test.Test;

const storage = new FallbackStorage();

test('works in node env', (t: Test) => {
    // tslint:disable-next-line
    t.equals((<any>storage).adapter.constructor.name, 'MemoryStorage');
    storage.setItem('test', 1);
    t.is(storage.getItem('test'), '1');
    t.end();
});
