import dotenv from 'dotenv'
import { Telegraf } from 'telegraf'
import pullDude from './pullDudexpress.mjs'
import cron from 'node-cron'
import express from 'express'
const app = express();


dotenv.config()
const TELEGRAM_KEY = process.env.TELEGRAM_KEY
const CHAT_ID = process.env.CHAT_ID

const bot = new Telegraf(TELEGRAM_KEY)
bot.start((context) => {
	context.reply('Ciao dudes ogni mattina alle 9.00 vi invierò una nuova recensione se presente')
})
bot.hears('new', async context=>{
	const targetReview = await pullDude().then(r => r)
    if (new Date(targetReview.pubDate)== new Date()) {
        context.reply(targetReview.link[0]);
    } else {
        context.reply("Nessuna nuova review ");
    }
})

cron.schedule("0 7 * * *", function () {
    pullDude()
     .then(  function (result) {
        console.log(result);
     const res = `${result.title} è l'ultima recensione uscita (${result.link[0]})`;

     bot.telegram.sendMessage(CHAT_ID, res, {
     parse_mode: "markdown", disable_web_page_preview: false })}).catch(err => console.log(err));
    })
bot.launch()

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}`);
});