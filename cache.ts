interface Cache {
  [key: string]: {
    value: any;
    ttl?: number;
  };
}

export class CacheManager {
  private cache: Cache = {};

  set(key: string, value: any, ttl?: number): boolean {
    if (this.cache[key]) throw new Error('duplicated key');
    this.cache[key] = { value };
    if (ttl) this.expire(key, ttl);
    return true;
  }

  del(key: string): boolean {
    delete this.cache[key];
    return true;
  }

  expire(key: string, ttl: number): boolean {
    try {
      this.cache[key].ttl = ttl;
      this.deleteAfterTtl(key, ttl);
      return true;
    } catch {
      return false;
    }
  }

  get(key: string): any {
    return this.cache[key] ? this.cache[key].value : undefined;
  }

  clear(): boolean {
    this.cache = {};
    return true;
  }

  size(): number {
    return Object.keys(this.cache).length;
  }

  keys(): string[] {
    return Object.keys(this.cache);
  }

  private async deleteAfterTtl(key: string, ttl: number) {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000 * ttl);
      });
      if (this.cache[key].ttl === ttl) delete this.cache[key];
    } catch {}
  }
}
