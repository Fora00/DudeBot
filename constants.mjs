import dotenv from 'dotenv';
dotenv.config();

const BRUNO_ID = process.env.BRUNO_ID;
const CHIARA_ID = process.env.CHIARA_ID;
const TIA_ID = process.env.TIA_ID;
const FORA_ID = process.env.FORA_ID;
const EMA_ID = process.env.EMA_ID;
const ANGELO_ID = process.env.ANGELO_ID;

export const DudeTag = {
  angelo_tag: `[Angelo](tg://user?id=${ANGELO_ID})`,
  chiara_tag: `[Chiara](tg://user?id=${CHIARA_ID})`,
  tia_tag: `[@nostalgiaz](tg://user?id=${TIA_ID})`,
  ema_tag: `[@Pulvi88](tg://user?id=${EMA_ID})`,
  bruno_tag: `[Bruno](tg://user?id=${BRUNO_ID})`,
  fora_tag: `[@Uroboro00](tg://user?id=${FORA_ID})`,
};
export const DudeId = {
  angelo_id: ANGELO_ID,
  chiara_id: CHIARA_ID,
  tia_id: TIA_ID,
  ema_id: EMA_ID,
  bruno_id: BRUNO_ID,
  fora_id: FORA_ID,
};
