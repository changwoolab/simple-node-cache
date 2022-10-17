import { CacheManager } from './cache';

const cache = new CacheManager();

async function wait(ttl: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000 * ttl);
  });
}

async function main() {
  cache.set('asdf', 1);
  cache.del('ffffff');
  console.log(cache.get('asdf'));
  cache.set('ssss', 1);
  console.log(cache.keys());
  cache.clear();
  console.log(cache.get('asdf'));
  console.log(cache.size());
  console.log(cache.keys());
}
main();
