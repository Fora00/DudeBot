export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TELEGRAM_KEY: string;
      CHAT_ID: string;
      FORA_ID: string;
      TIA_ID: string;
      CHIARA_ID: string;
      EMA_ID: string;
      BRUNO_ID: string;
      ANGELO_ID: string;
    }
  }
}
