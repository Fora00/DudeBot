"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const telegraf_1 = require("telegraf");
const pullDude_js_1 = require("./pullDude.js");
const node_cron_1 = __importDefault(require("node-cron"));
const express_1 = __importDefault(require("express"));
const helper_js_1 = require("./helper.js");
const constants_js_1 = require("./constants.js");
const app = (0, express_1.default)();
dotenv_1.default.config();
const TELEGRAM_KEY = process.env.TELEGRAM_KEY;
const CHAT_ID = process.env.CHAT_ID;
const PORT = process.env.PORT || 3000;
const bot = new telegraf_1.Telegraf(TELEGRAM_KEY);
const { angelo_tag, chiara_tag, tia_tag, fora_tag, ema_tag, veronica_tag, angelo_m_tag } = constants_js_1.DudeTag;
bot.start((context) => {
    context.reply('Ciao dudes ogni mattina alle 11.00 vi invierò una nuova recensione se presente');
});
bot.command('new', (context) => __awaiter(void 0, void 0, void 0, function* () {
    const targetReview = yield (0, pullDude_js_1.pullDude)().then((r) => r);
    if ((0, helper_js_1.testDate)(targetReview.pubDate)) {
        context.reply(targetReview.link[0]);
    }
    else {
        context.reply(`Nessuna nuova review, l'ultima review uscita è ${targetReview.link[0]}`);
    }
}));
bot.command('links', (ctx) => {
    ctx.reply(constants_js_1.DudeText.links, {
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
    });
});
bot.command('plan', (ctx) => {
    ctx.reply(constants_js_1.DudeText.week, {
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
node_cron_1.default.schedule('0 11 * * *', function () {
    (0, pullDude_js_1.pullDude)()
        .then((targetReview) => {
        let res = '';
        if ((0, helper_js_1.testDate)(targetReview.pubDate)) {
            res = `${targetReview.title} è l'ultima recensione uscita (${targetReview.link[0]}) ! ${angelo_tag},${angelo_m_tag},${chiara_tag},${ema_tag},${fora_tag},${tia_tag},${veronica_tag}`;
        }
        else
            return;
        bot.telegram.sendMessage(CHAT_ID, res, {
            parse_mode: 'Markdown',
            disable_web_page_preview: false,
        });
    })
        .catch((err) => console.log(err));
}, {
    scheduled: true,
    timezone: 'Europe/Rome',
});
node_cron_1.default.schedule('0 10 15 1-12 *', () => {
    const res = `${angelo_tag},${angelo_m_tag},${chiara_tag},${ema_tag},${fora_tag},${tia_tag},${veronica_tag} vi ricordate di mandare tra 5 giorni i testi delle recensioni a fora?`;
    bot.telegram.sendMessage(CHAT_ID, res, {
        parse_mode: 'Markdown',
        disable_web_page_preview: false,
    });
}, {
    scheduled: true,
    timezone: 'Europe/Rome',
});
node_cron_1.default.schedule('0 10 20 1-12 *', () => {
    const res = `${angelo_tag},${angelo_m_tag},${chiara_tag},${ema_tag},${fora_tag},${tia_tag},${veronica_tag} avete mandato i testi delle recensioni a fora?`;
    bot.telegram.sendMessage(CHAT_ID, res, {
        parse_mode: 'Markdown',
        disable_web_page_preview: false,
    });
}, {
    scheduled: true,
    timezone: 'Europe/Rome',
});
bot.launch();
app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}`);
});
