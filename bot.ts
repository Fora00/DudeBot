import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { pullDude } from './pullDude.js';
import cron from 'node-cron';
import express from 'express';
import { testDate } from './helper.js';
import { DudeTag, DudeText } from './constants.js';
import { exec } from 'child_process';

const app = express();
dotenv.config();

const TELEGRAM_KEY = process.env.TELEGRAM_KEY;
const CHAT_ID = process.env.CHAT_ID;
const PORT = process.env.PORT || 3000;
const bot = new Telegraf(TELEGRAM_KEY);

const { angelo_tag, chiara_tag, tia_tag, fora_tag, ema_tag, veronica_tag, angelo_m_tag } = DudeTag;

bot.start((context) => {
  context.reply('Ciao dudes ogni mattina alle 11.00 vi invierò una nuova recensione se presente');
});

bot.command('new', async (context) => {
  const targetReview = await pullDude().then((r: any) => r);

  if (testDate(targetReview.pubDate)) {
    context.reply(targetReview.link[0]);
  } else {
    context.reply(`Nessuna nuova review, l'ultima review uscita è ${targetReview.link[0]}`);
  }
});

bot.command('links', (ctx) => {
  ctx.reply(DudeText.links, {
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  });
});
bot.command('plan', (ctx) => {
  ctx.reply(DudeText.week, {
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  });
});

bot.hears('id', (ctx) => {
  ctx.reply(ctx.from.id.toString());
});

bot.hears('chat_id', (ctx) => {
  ctx.reply(`${ctx.chat.id} -> ${ctx.from.id}`);
});

bot.hears('@team_social', (ctx) => {
  ctx.reply(`${angelo_tag},${chiara_tag},${veronica_tag}`, { parse_mode: 'Markdown' });
});
bot.hears('@team_tech', (ctx) => {
  ctx.reply(`${fora_tag},${tia_tag}`, { parse_mode: 'Markdown' });
});
bot.hears('@team_edit', (ctx) => {
  ctx.reply(`${ema_tag}, ${angelo_m_tag}`, { parse_mode: 'Markdown' });
});
bot.hears('@everyone', (ctx) => {
  ctx.reply(`${angelo_tag},${chiara_tag},${veronica_tag},${fora_tag},${tia_tag},${ema_tag}, ${angelo_m_tag}`, {
    parse_mode: 'Markdown',
  });
});

bot.hears('kill', async (ctx) => {
  ctx.reply('Killing bot');
  try {
    // Log in to Railway.app
    await exec('railway login');

    // Select the project
    await exec('railway use dudeBot-review');

    // Undeploy the project
    await exec('railway undeploy');

    console.log('Project undeployed successfully');
  } catch (error) {
    console.error(error);
  }
});

bot.hears('revive', async (ctx) => {
  ctx.reply('reviving bot');
  try {
    // Log in to Railway.app
    await exec('railway login');

    // Select the project
    await exec('railway use dudeBot-review');

    // Undeploy the project
    await exec('railway deploy');

    console.log('Project undeployed successfully');
  } catch (error) {
    console.error(error);
  }
});

cron.schedule(
  '0 11 * * *',
  function () {
    pullDude()
      .then((targetReview) => {
        let res = '';
        if (testDate(targetReview.pubDate)) {
          res = `${targetReview.title} è l'ultima recensione uscita (${targetReview.link[0]}) ! ${angelo_tag},${angelo_m_tag},${chiara_tag},${ema_tag},${fora_tag},${tia_tag},${veronica_tag}`;
        } else return;
        bot.telegram.sendMessage(CHAT_ID, res, {
          parse_mode: 'Markdown',
          disable_web_page_preview: false,
        });
      })
      .catch((err) => console.log(err));
  },
  {
    scheduled: true,
    timezone: 'Europe/Rome',
  }
);

cron.schedule('0 7 * * *', async function () {
  try {
    // Log in to Railway.app
    await exec('railway login');

    // Select the project
    await exec('railway use dudeBot-review');

    // Deploy the project
    await exec('railway deploy');

    console.log('Project deployed successfully');
  } catch (error) {
    console.error(error);
  }
});

cron.schedule('0 22 * * *', async function () {
  try {
    // Log in to Railway.app
    await exec('railway login');

    // Select the project
    await exec('railway use dudeBot-review');

    // Undeploy the project
    await exec('railway undeploy');

    console.log('Project undeployed successfully');
  } catch (error) {
    console.error(error);
  }
});

bot.launch();

app.listen(PORT, function () {
  console.log(`Server is running at port ${PORT}`);
});
