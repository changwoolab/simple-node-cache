export declare class CacheManager {
    private cache;
    set(key: string, value: any, ttl?: number): boolean;
    del(key: string): boolean;
    expire(key: string, ttl: number): boolean;
    get(key: string): any;
    clear(): boolean;
    size(): number;
    keys(): string[];
    private deleteAfterTtl;
}
