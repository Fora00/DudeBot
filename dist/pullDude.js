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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullDude = void 0;
const xml2js_1 = __importDefault(require("xml2js"));
const axios_1 = __importDefault(require("axios"));
const pullDude = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data: xmlData } = yield axios_1.default.get('https://dudexpress.it/rss');
    const res = yield xml2js_1.default.parseStringPromise(xmlData);
    //console.log("⭐️",targetReview);
    return res.rss.channel[0].item[0];
});
exports.pullDude = pullDude;
