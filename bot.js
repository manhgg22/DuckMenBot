const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');

// Thay token mới của anh vào đây
const bot = new TelegramBot('7971005513:AAHuP0jgcqqXdsAJilan9NTNZX9n0NYWP40', { polling: true });

// Thay chat ID của anh vào đây
const chatId = '6410461585';

// Kiểm tra khi có tin nhắn đến
bot.on('message', (msg) => {
    console.log('Nhận tin nhắn:', msg.text);
    console.log('Chat ID:', msg.chat.id);
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
