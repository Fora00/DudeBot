"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DudeText = exports.DudeId = exports.DudeTag = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const BRUNO_ID = process.env.BRUNO_ID;
const CHIARA_ID = process.env.CHIARA_ID;
const TIA_ID = process.env.TIA_ID;
const FORA_ID = process.env.FORA_ID;
const EMA_ID = process.env.EMA_ID;
const ANGELO_ID = process.env.ANGELO_ID;
exports.DudeTag = {
    angelo_tag: `[Angelo](tg://user?id=${ANGELO_ID})`,
    chiara_tag: `[Chiara](tg://user?id=${CHIARA_ID})`,
    tia_tag: `[@nostalgiaz](tg://user?id=${TIA_ID})`,
    ema_tag: `[@Pulvi88](tg://user?id=${EMA_ID})`,
    bruno_tag: `[Bruno](tg://user?id=${BRUNO_ID})`,
    fora_tag: `[@Uroboro00](tg://user?id=${FORA_ID})`,
};
exports.DudeId = {
    angelo_id: ANGELO_ID,
    chiara_id: CHIARA_ID,
    tia_id: TIA_ID,
    ema_id: EMA_ID,
    bruno_id: BRUNO_ID,
    fora_id: FORA_ID,
};
exports.DudeText = {
    links: `🚀*I DUDELINK DI CUI AVETE BISOGNO*🚀

  🗂*Drive*-> [LINK](https://drive.google.com/folderview?id=1PgYdS77QVUMm8H1M881i9mNrfhpZ7tKg);

  🗓*Calendar*-> [LINK](https://calendar.google.com/calendar/u/0?cid=amo4OGdsa3RmbzFjcXNjNHBlZDBuNGtnanNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ);

  📚*Notion*->[LINK](https://www.notion.so/DUDEXPRESS-CORE-43d17af5dee0403aa6aa3faeff7158dd)`,
};
