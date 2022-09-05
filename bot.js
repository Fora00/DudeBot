import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import pullDude from './pullDudexpress.mjs';
import cron from 'node-cron';
import express from 'express';
const app = express();

dotenv.config();
const TELEGRAM_KEY = process.env.TELEGRAM_KEY;
const CHAT_ID = process.env.CHAT_ID;

const bot = new Telegraf(TELEGRAM_KEY);
bot.start((context) => {
  context.reply('Ciao dudes ogni mattina alle 9.00 vi invierò una nuova recensione se presente');
});
bot.hears('new', async (context) => {
  const targetReview = await pullDude().then((r) => r);
  if (new Date(targetReview.pubDate) == new Date()) {
    context.reply(targetReview.link[0]);
  } else {
    context.reply('Nessuna nuova review ');
  }
});

bot.hears('test', () => {
  bot.telegram.sendMessage(
    CHAT_ID,
    " It's me, a test  <strong><a href='tg://user?id=11614517'>@nostalgiaz</a> ti evoco </strong> <a href='tg://resolve?domain=angi7523'>@angi7523</a> sei stato evocato",
    {
      parse_mode: 'html',
    }
  );
});
bot.hears('id', (ctx) => {
  ctx.reply(ctx.from.id);
});

// 174784018 -> fora
// 11614517 -> tia
// 158594735 -> chiara

cron.schedule('0 7 * * *', function () {
  pullDude()
    .then(function (result) {
      console.log(result);
      const res = `${result.title} è l'ultima recensione uscita (${result.link[0]}) ! [@Uroboro00](tg://user?id=174784018),  [@nostalgiaz](tg://user?id=11614517), [Angelo](tg://user?id=1602351576), [Chiara](tg://user?id=158594735), @Pulvi88 , Bruno`;

      bot.telegram.sendMessage(CHAT_ID, res, {
        parse_mode: 'markdown',
        disable_web_page_preview: false,
      });
    })
    .catch((err) => console.log(err));
});
bot.launch();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is running at port ${PORT}`);
});
