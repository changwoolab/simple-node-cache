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
const cache_1 = require("./cache");
const cache = new cache_1.CacheManager();
function wait(ttl) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => {
            setTimeout(resolve, 1000 * ttl);
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        cache.set('asdf', 1);
        cache.del('ffffff');
        console.log(cache.get('asdf'));
        cache.set('ssss', 1);
        console.log(cache.keys());
        cache.clear();
        console.log(cache.get('asdf'));
        console.log(cache.size());
        console.log(cache.keys());
    });
}
main();
