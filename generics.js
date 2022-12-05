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
const baseURL = "http://example.com/";
//for posts
const fetchPosts = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseURL}${path}`);
    return response.json();
});
//for users
const fetchUsers = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseURL}${path}`);
    return response.json();
});
//fetch both
const fetchBoth = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseURL}${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchPosts("post/");
    const user = yield fetchUsers("user/");
    const postsFromBoth = yield fetchBoth("post/");
    //   postsFromBoth[0].id;
}))();
