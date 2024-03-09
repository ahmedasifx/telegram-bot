# Telegram Bot Service with NestJS

This service is built using NestJS framework for creating a Telegram bot. It interacts with users through Telegram's messaging platform, allowing users to send messages and receive responses, as well as interact with inline keyboard buttons.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your_username/telegram-bot-service.git
    ```

2. Install dependencies:
    ```bash
    cd telegram-bot-service
    npm install
    ```

3. Create a `.env` file in the root directory and add your Telegram bot token:
    ```plaintext
    TELEGRAM_TOKEN=YOUR_TELEGRAM_BOT_TOKEN_HERE
    ```

4. Run the service:
    ```bash
    npm run start
    ```

## Features

- Responds to messages sent by users.
- Provides inline keyboard buttons for user interaction.
- Differentiates between button clicks to perform different actions.

## Usage

1. Start the service as described in the setup instructions.
2. Interact with the bot using your Telegram account.
3. Click on the provided inline keyboard buttons to trigger different actions.
4. Enjoy using the bot!

## Contributing

Contributions are welcome! If you have any ideas for improvements, feature requests, or bug reports, feel free to open an issue or submit a pull request.

## Built with

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
