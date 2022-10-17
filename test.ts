import { CacheManager } from './cache'

const cache = new CacheManager();

cache.set('asdf', 1);
console.log(cache.get('asdf'));
cache.del('asdf');
console.log(cache.get('asdf'));