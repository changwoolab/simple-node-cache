"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
class CacheManager {
    constructor() {
        this.cache = {};
    }
    set(key, value, ttl) {
        if (this.cache[key])
            throw new Error('duplicated key');
        this.cache[key] = { value };
        if (ttl)
            this.expire(key, ttl);
        return true;
    }
    del(key) {
        delete this.cache[key];
        return true;
    }
    expire(key, ttl) {
        try {
            this.cache[key].ttl = ttl;
            this.deleteAfterTtl(key, ttl);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    get(key) {
        return this.cache[key] ? this.cache[key].value : undefined;
    }
    clear() {
        this.cache = {};
        return true;
    }
    size() {
        return Object.keys(this.cache).length;
    }
    keys() {
        return Object.keys(this.cache);
    }
    deleteAfterTtl(key, ttl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new Promise((resolve) => {
                    setTimeout(resolve, 1000 * ttl);
                });
                if (this.cache[key].ttl === ttl)
                    delete this.cache[key];
            }
            catch (_a) { }
        });
    }
}
exports.CacheManager = CacheManager;
