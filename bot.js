import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import pullDude from './pullDudexpress.mjs';
import cron from 'node-cron';
import express from 'express';
const app = express();
dotenv.config();

const TELEGRAM_KEY = process.env.TELEGRAM_KEY;
const CHAT_ID = process.env.CHAT_ID;
const BRUNO_ID=process.env.BRUNO_ID
const CHIARA_ID=process.env.CHIARA_ID
const TIA_ID=process.env.TIA_ID
const FORA_ID=process.env.FORA_ID
const EMA_ID=process.env.EMA_ID
const ANGELO_ID=process.env.ANGELO_ID
const PORT = process.env.PORT || 3000;
const bot = new Telegraf(TELEGRAM_KEY);

bot.start((context) => {
  context.reply('Ciao dudes ogni mattina alle 9.00 vi invierò una nuova recensione se presente');
});

bot.hears('new', async (context) => {
  const targetReview = await pullDude().then((r) => r);
  if (new Date(targetReview.pubDate) >= new Date()) {
    context.reply(targetReview.link[0]);
  } else {
    context.reply('Nessuna nuova review ');
  }
});

bot.hears('id', (ctx) => {
  ctx.reply(ctx.from.id);
});

cron.schedule('0 7 * * *', function () {
  pullDude()
    .then(function (result) {
      const res = '';
      if (new Date(review.pubDate) >= new Date()) {
        res = `${result.title} è l'ultima recensione uscita (${result.link[0]}) ! [@Uroboro00](tg://user?id=${FORA_ID}),  [@nostalgiaz](tg://user?id=${TIA_ID}), [Angelo](tg://user?id=${ANGELO_ID}), [Chiara](tg://user?id=${CHIARA_ID}), [@Pulvi88](tg://user?id=${EMA_ID}) , [Bruno](tg://user?id=${BRUNO_ID})`;
      } else {
        res =
          `nessuna nuova review  [Angelo](tg://user?id=${ANGELO_ID}), [Chiara](tg://user?id=${CHIARA_ID}), i dudes sono nelle vostre mani per i social!`;
      }
      bot.telegram.sendMessage(CHAT_ID, res, {
        parse_mode: 'markdown',
        disable_web_page_preview: false,
      });
    })
    .catch((err) => console.log(err));
});
bot.launch();

app.listen(PORT, function () {
  console.log(`Server is running at port ${PORT}`);
});
