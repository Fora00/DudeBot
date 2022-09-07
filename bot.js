import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import pullDude from './pullDudexpress.mjs';
import { DudeId, DudeTag } from './constants.mjs';
import cron from 'node-cron';
import express from 'express';
const app = express();
dotenv.config();

const TELEGRAM_KEY = process.env.TELEGRAM_KEY;
const CHAT_ID = process.env.CHAT_ID;
const PORT = process.env.PORT || 3000;
const bot = new Telegraf(TELEGRAM_KEY);

const { angelo_tag, bruno_tag, chiara_tag, tia_tag, fora_tag, ema_tag } = DudeTag;
const { angelo_id, bruno_id, chiara_id, tia_id, fora_id, ema_id } = DudeId;

bot.start((context) => {
  context.reply('Ciao dudes ogni mattina alle 9.00 vi invierò una nuova recensione se presente');
});

bot.hears('new', async (context) => {
  const targetReview = await pullDude().then((r) => r);
  if (new Date(targetReview.pubDate) >= new Date().toDateString()) {
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
      if (new Date(result.pubDate) >= new Date().toDateString()) {
        res = `${result.title} è l'ultima recensione uscita (${result.link[0]}) ! ${fora_tag},${ema_tag},${bruno_tag},${angelo_tag},${chiara_tag},${tia_tag}`;
      } else {
        res = `nessuna nuova review  ${angelo_tag}, ${chiara_tag}, i dudes sono nelle vostre mani per i social!`;
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
