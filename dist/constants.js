"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DudeText = exports.DudeId = exports.DudeTag = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ANGELO_ID = process.env.ANGELO_ID;
const ANGELO_M_ID = process.env.ANGELO_M_ID;
const CHIARA_ID = process.env.CHIARA_ID;
const EMA_ID = process.env.EMA_ID;
const FORA_ID = process.env.FORA_ID;
const TIA_ID = process.env.TIA_ID;
const VERONICA_ID = process.env.VERONICA_ID;
exports.DudeTag = {
    angelo_tag: `[Tappa](tg://user?id=${ANGELO_ID})`,
    angelo_m_tag: `[Angelo M](tg://user?id=${ANGELO_M_ID})`,
    chiara_tag: `[Chiara](tg://user?id=${CHIARA_ID})`,
    ema_tag: `[Ema](tg://user?id=${EMA_ID})`,
    fora_tag: `[Fora](tg://user?id=${FORA_ID})`,
    tia_tag: `[Tia](tg://user?id=${TIA_ID})`,
    veronica_tag: `[Vero](tg://user?id=${VERONICA_ID})`,
};
exports.DudeId = {
    angelo_id: ANGELO_ID,
    angelo_m_id: ANGELO_M_ID,
    chiara_id: CHIARA_ID,
    ema_id: EMA_ID,
    fora_id: FORA_ID,
    tia_id: TIA_ID,
    veronica_id: VERONICA_ID,
};
exports.DudeText = {
    links: `🚀*DudeLinks*🚀

  🗂*Drive* -> [LINK](https://drive.google.com/folderview?id=1PgYdS77QVUMm8H1M881i9mNrfhpZ7tKg);

  📚*Notion* -> [LINK](https://www.notion.so/DUDEXPRESS-CORE-43d17af5dee0403aa6aa3faeff7158dd);

  👨‍🔬*GUEST*  -> [LINK](https://swamp-market-b6a.notion.site/DUDEXPRESS-GUESTS-6b705fabf6624dc4b22137eb28fd3c4c);
  
  ✍️*Editor* -> [LINK](https://dudexpress.it/editor); 
  
  🎞*Filler*  -> [LINK](https://drive.google.com/drive/folders/1R3S0r3KIZBUYRBvNkKDFfF5CMeny9DBP?usp=share_link)
  `,
    week: `🚀*DudeWeeks*🚀
    *lun*: review guest/core
    *mar*: storie offerte
    *mer*: rubrica 
    *gio*: review core
    *ven*: review guest/core
    *sab*: fb/ig recap
    *dom*: ig riddle

Chiaranente tutto adattabile a bisogno `,
    tags: `🚀*DudeTags*🚀
 *@everyone*: pinga tutti
 *@social*: pinga Angelo T, Chiara e Veronica
 *@tech*: pinga Fora e Mattia
 *@edit*: pinga Ema e Angelo M
`,
};
