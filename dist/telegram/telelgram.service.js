"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TelelgramService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelelgramService = void 0;
const common_1 = require("@nestjs/common");
const telegram_constants_1 = require("./telegram.constants");
const TelegramBot = require('node-telegram-bot-api');
const TELEGRAM_TOKEN = "7058109056:AAEpRRkL34ZqDGo2hbFaeiw0v67rjmHYYGM";
let TelelgramService = TelelgramService_1 = class TelelgramService {
    constructor() {
        this.logger = new common_1.Logger(TelelgramService_1.name);
        this.onReceiveMessage = (msg) => {
            this.logger.debug(msg);
            const chatId = msg.chat.id;
            const messageText = msg.text;
            const responseMessage = `You said: "${messageText}"`;
            this.sendMessageToUser(chatId, responseMessage);
        };
        this.handleCallbackQuery = (query) => {
            const callbackData = query.data;
            const chatId = query.message.chat.id;
            switch (callbackData) {
                case 'introduction':
                    this.sendIntroduction(chatId);
                    break;
                case 'option2':
                    this.handleOption2(chatId);
                    break;
                case 'option3':
                    this.handleOption3(chatId);
                    break;
                default:
                    this.sendMessageToUser(chatId, 'Invalid option selected');
                    break;
            }
        };
        this.sendIntroduction = (chatId) => {
            const introductionMessage = "Welcome to the bot! This is a simple introduction.";
            this.sendMessageToUser(chatId, introductionMessage);
        };
        this.handleOption2 = (chatId) => {
            this.sendMessageToUser(chatId, "Option 2 selected");
        };
        this.handleOption3 = (chatId) => {
            this.sendMessageToUser(chatId, "Option 3 selected");
        };
        this.sendMessageToUser = (userId, message, options) => {
            this.bot.sendMessage(userId, message, options);
        };
        const chatId = telegram_constants_1.TEST_USER_ID;
        const responseMessage = 'Hello! I am your bot';
        this.bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
        this.bot.on("message", this.onReceiveMessage);
        this.sendMessageToUser(telegram_constants_1.TEST_USER_ID, `Server started at ${new Date()}`);
        const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Option 1', callback_data: 'introduction' }],
                    [{ text: 'Option 2', callback_data: '2' }],
                    [{ text: 'Option 3', callback_data: '3' }]
                ]
            }
        };
        this.sendMessageToUser(chatId, responseMessage, keyboard);
    }
};
exports.TelelgramService = TelelgramService;
exports.TelelgramService = TelelgramService = TelelgramService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TelelgramService);
//# sourceMappingURL=telelgram.service.js.map