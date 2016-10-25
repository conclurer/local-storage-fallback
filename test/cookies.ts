import './helpers/setup-browser-env';
import {FallbackStorage} from '../src/fallback-storage.class';
import test = require('tape');
import Test = test.Test;

const storage = new FallbackStorage();

test('uses cookie storage', (t: Test) => {
    // tslint:disable-next-line
    t.equals((<any>storage).adapter.constructor.name, 'CookieStorage');
    t.end();
});

test('get/set with cookie storage', (t: Test) => {
    storage.setItem('test', 1);
    t.is(storage.getItem('test'), '1');
    t.end();
});

test('remove with cookie storage', (t: Test) => {
    storage.setItem('test', 2);
    storage.removeItem('test');
    t.is(storage.getItem('test'), null);
    t.end();
});

test('clear with cookie storage', (t: Test) => {
    storage.setItem('test', 2);
    storage.clear();
    t.is(storage.getItem('test'), null);
    t.end();
});
