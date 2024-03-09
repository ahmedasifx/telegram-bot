import { Injectable, Logger } from '@nestjs/common';
import {TEST_USER_ID} from "./telegram.constants"
const TelegramBot = require('node-telegram-bot-api');

const TELEGRAM_TOKEN = "7058109056:AAEpRRkL34ZqDGo2hbFaeiw0v67rjmHYYGM"

@Injectable()
export class TelelgramService {

    private readonly bot:any
    private logger = new Logger(TelelgramService.name);

    constructor(){

        const chatId = TEST_USER_ID;
        const responseMessage= 'Hello! I am your bot';

        this.bot=new TelegramBot(TELEGRAM_TOKEN,{polling:true});

        this.bot.on("message",this.onReceiveMessage)

        this.sendMessageToUser(TEST_USER_ID,`Server started at ${new Date()}`);

        const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Option 1', callback_data: 'introduction'  }],
                    [{ text: 'Option 2', callback_data: '2' }],
                    [{ text: 'Option 3', callback_data: '3' }]
                ]
            }
        };
        this.sendMessageToUser(chatId, responseMessage, keyboard);
    }

    onReceiveMessage = (msg:any)=>{
        this.logger.debug(msg)

        const chatId = msg.chat.id;
        const messageText = msg.text;
        const responseMessage = `You said: "${messageText}"`;
        this.sendMessageToUser(chatId, responseMessage);
       
    }
    

    handleCallbackQuery = (query: any) => {
        const callbackData = query.data;
        const chatId = query.message.chat.id;

        // Handle different callback data
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
                // Handle unrecognized callback data
                this.sendMessageToUser(chatId, 'Invalid option selected');
                break;
        }
    }

    sendIntroduction = (chatId: string) => {
        const introductionMessage = "Welcome to the bot! This is a simple introduction.";
        this.sendMessageToUser(chatId, introductionMessage);
    }

    handleOption2 = (chatId: string) => {
        // Handle Option 2 functionality
        this.sendMessageToUser(chatId, "Option 2 selected");
    }

    handleOption3 = (chatId: string) => {
        // Handle Option 3 functionality
        this.sendMessageToUser(chatId, "Option 3 selected");
    }

    sendMessageToUser = (userId: string, message: string, options?: any) => {
        this.bot.sendMessage(userId, message, options);
    }



}
