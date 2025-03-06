const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');

// Lấy token từ biến môi trường (GitHub Secrets)
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Chat ID của anh
const chatId = '6410461585';

// Nhận tin nhắn
bot.on('message', (msg) => {
    console.log('Nhận tin nhắn:', msg.text);
    bot.sendMessage(chatId, '✅ Bot đang hoạt động! Bạn vừa nhắn: ' + msg.text);
});

// Nhắc uống thuốc lúc 5h chiều mỗi ngày
schedule.scheduleJob('0 17 * * *', () => {
    bot.sendMessage(chatId, '💊 Nhắc nhở: Đến giờ uống thuốc rồi!');
});

// Nhắc mang laptop vào 8h tối Chủ Nhật, Thứ Hai và Thứ Năm
schedule.scheduleJob('0 20 * * 0,1,4', () => {
    bot.sendMessage(chatId, '💻 Nhớ mang laptop đi làm ngày mai nhé!');
});

console.log('Bot đang chạy...');
