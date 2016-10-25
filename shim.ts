import {FallbackStorage} from './src/fallback-storage.class';

if (!('localStorage' in window)) {
    // tslint:disable-next-line
    (<any>window).localStorage = new FallbackStorage();
}
