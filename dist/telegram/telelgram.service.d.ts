export declare class TelelgramService {
    private readonly bot;
    private logger;
    constructor();
    onReceiveMessage: (msg: any) => void;
    handleCallbackQuery: (query: any) => void;
    sendIntroduction: (chatId: string) => void;
    handleOption2: (chatId: string) => void;
    handleOption3: (chatId: string) => void;
    sendMessageToUser: (userId: string, message: string, options?: any) => void;
}
