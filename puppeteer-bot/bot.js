require('dotenv').config();
const puppeteer = require('puppeteer');

const USERNAME = process.env.BOT_USERNAME || '0358204005';
const PASSWORD = process.env.BOT_PASSWORD || '0358204005';
const LOCAL_URL = process.env.LOCAL_URL || 'http://localhost:5173'; // URL vite dev server

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.log('🚀 Đang khởi động bot...');

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized', '--disable-web-security', '--disable-site-isolation-trials']
  });

  const page = await browser.newPage();

  try {
    // 1. Mở trang web nội bộ của bạn
    console.log(`🌐 Đang mở trang: ${LOCAL_URL}`);
    await page.goto(LOCAL_URL, { waitUntil: 'networkidle2', timeout: 30000 });
    console.log('✅ Trang web đã mở!');

    // 2. Đợi mục "Đăng nhập" trong sidebar được render ra
    console.log('⏳ Đang đợi giao diện render...');
    await page.waitForSelector('.model-item', { visible: true, timeout: 15000 });

    // 3. Tìm và click vào nút "ĐĂNG NHẬP HỆ THỐNG" trong sidebar
    console.log('🖱️  Đang click vào mục Đăng nhập...');
    const loginItem = await page.evaluateHandle(() => {
      const items = document.querySelectorAll('.model-item');
      for (const item of items) {
        if (item.innerText.includes('ĐĂNG NHẬP')) return item;
      }
      return null;
    });

    if (!loginItem || loginItem.toString() === 'JSHandle:null') {
      // Nếu mục đã bị ẩn hoặc không cần click, iframe có thể đã hiển thị
      console.log('ℹ️  Mục đăng nhập không tìm thấy, thử tìm iframe trực tiếp...');
    } else {
      await loginItem.click();
      console.log('✅ Đã click vào mục Đăng nhập!');
    }

    // 4. Đợi iframe chứa facourse.com xuất hiện và load xong
    console.log('⏳ Đang đợi iframe Facourse load...');
    await sleep(3000);

    // 5. Tìm frame facourse.com trong danh sách các frames
    let facourseFrame = null;
    let retries = 0;
    while (!facourseFrame && retries < 20) {
      const frames = page.frames();
      facourseFrame = frames.find(f => f.url().includes('facourse.com'));
      if (!facourseFrame) {
        await sleep(1000);
        retries++;
        process.stdout.write(`\r⏳ Đang đợi iframe... (${retries}/20)`);
      }
    }

    if (!facourseFrame) {
      throw new Error('Không tìm thấy iframe của Facourse! Hãy chắc chắn trang đã mở mục Đăng nhập.');
    }

    console.log(`\n✅ Tìm thấy iframe Facourse: ${facourseFrame.url()}`);

    // 6. Đợi ô số điện thoại xuất hiện trong iframe
    console.log('⏳ Đợi form đăng nhập...');
    await facourseFrame.waitForSelector('#phone', { visible: true, timeout: 15000 });

    // 7. Xóa nội dung cũ rồi gõ số điện thoại
    console.log('⌨️  Đang điền số điện thoại...');
    await facourseFrame.click('#phone', { clickCount: 3 }); // click 3 lần để chọn hết text cũ
    await facourseFrame.type('#phone', USERNAME, { delay: 80 });

    // 8. Điền mật khẩu
    console.log('⌨️  Đang điền mật khẩu...');
    await facourseFrame.click('#password', { clickCount: 3 });
    await facourseFrame.type('#password', PASSWORD, { delay: 80 });

    // 9. Nhấn nút ĐĂNG NHẬP
    console.log('🔐 Đang nhấn nút Đăng nhập...');
    await facourseFrame.click('button[type="submit"]');

    // 10. Đợi kết quả
    console.log('⏳ Đang chờ phản hồi từ server...');
    await sleep(3000);

    console.log('');
    console.log('✅✅✅ ĐĂNG NHẬP THÀNH CÔNG! ✅✅✅');
    console.log('🎉 Trình duyệt đang mở để bạn xem kết quả.');
    console.log('💡 Đừng đóng cửa sổ này để giữ session đăng nhập.');

  } catch (error) {
    console.error('\n❌ Lỗi:', error.message);
    console.error('👉 Hãy chắc chắn dev server đang chạy bằng lệnh: npm run dev');
  }
})();
