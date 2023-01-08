import dotenv from 'dotenv';
dotenv.config();

const ANGELO_ID = process.env.ANGELO_ID;
const ANGELO_M_ID = process.env.ANGELO_M_ID;
const CHIARA_ID = process.env.CHIARA_ID;
const EMA_ID = process.env.EMA_ID;
const FORA_ID = process.env.FORA_ID;
const TIA_ID = process.env.TIA_ID;
const VERONICA_ID = process.env.VERONICA_ID;

export const DudeTag = {
  angelo_tag: `[Tappa](tg://user?id=${ANGELO_ID})`,
  angelo_m_tag: `[Angelo M](tg://user?id=${ANGELO_M_ID})`,
  chiara_tag: `[Chiara](tg://user?id=${CHIARA_ID})`,
  ema_tag: `[Ema](tg://user?id=${EMA_ID})`,
  fora_tag: `[Fora](tg://user?id=${FORA_ID})`,
  tia_tag: `[Tia](tg://user?id=${TIA_ID})`,
  veronica_tag: `[Vero](tg://user?id=${VERONICA_ID})`,
};
export const DudeId = {
  angelo_id: ANGELO_ID,
  angelo_m_id: ANGELO_M_ID,
  chiara_id: CHIARA_ID,
  ema_id: EMA_ID,
  fora_id: FORA_ID,
  tia_id: TIA_ID,
  veronica_id: VERONICA_ID,
};

export const DudeText = {
  links: `🚀*I DUDELINK DI CUI AVETE BISOGNO*🚀

  🗂*Drive*-> [LINK](https://drive.google.com/folderview?id=1PgYdS77QVUMm8H1M881i9mNrfhpZ7tKg);

  🗓*Calendar*-> [LINK](https://calendar.google.com/calendar/u/0?cid=amo4OGdsa3RmbzFjcXNjNHBlZDBuNGtnanNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ);

  📚*Notion*->[LINK](https://www.notion.so/DUDEXPRESS-CORE-43d17af5dee0403aa6aa3faeff7158dd);
  
  ✒️*Editor*->[LINK](https://dudexpress.it/editor); `,

  week: `🚀*LA SETTIMANA DEI DUDE*🚀
  -> *lun*: review guest/core
  -> *mar*:  storie offerte
  -> *mer*: rubrica ig angelo T
  -> *gio*: review core
  -> *ven*: review guest/core
  -> *sab*: ig sconti 
  -> *dom*: storie meme

Chiaranente tutto adattabile a bisogno `,
};
