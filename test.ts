import { CacheManager } from './cache';

const cache = new CacheManager();

async function wait(ttl: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000 * ttl);
  });
}

async function main() {
  cache.set('asdf', 1, 3);
  console.log(cache.get('asdf'));
  cache.set('ssss', 1);
  cache.expire('ssss', 0);
  await wait(0);
  console.log(cache.get('ssss'));
  console.log(cache.get('asdf'))
  await wait(3);
  console.log(cache.get('asdf'));
}
main()