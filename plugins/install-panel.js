let handler = async (m, { conn, args, text, usedPrefix, command}) => {
let jasa = `
🌟🌟🌟 PROMO SPESIAL! 🌟🌟🌟
🔥🔥🔥 PANEL INSTALASI HANYA 25K! 🔥🔥🔥

Butuh bantuan untuk menginstal panel dengan mudah dan cepat? Jangan khawatir! HANZ MD hadir untuk memberikan solusi terbaik untuk Anda.

✨ Tawaran Istimewa ✨
🌈 Jasa instalasi panel seharga 25K saja!
💥 Dapatkan panel yang Anda inginkan tanpa ribet!
💻 Kami akan menangani semua langkah instalasi untuk Anda.
🌟 Tingkatkan pengalaman Anda dalam mengelola bot dan aplikasi dengan mudah!

✅ Keuntungan Jasa Instalasi kami:
🔹 Profesional dan Terpercaya
🔹 Proses Instalasi yang Cepat
🔹 Bisa disesuaikan dengan kebutuhan Anda
🔹 Bantuan teknis yang responsif

Jadi, tunggu apa lagi? Manfaatkan promo spesial ini sekarang juga!

📲 Hubungi kami melalui WhatsApp:
wa.me/4520384964

🌟🌟🌟 ZYKO MD - Solusi Terbaik untuk Anda! 🌟🌟🌟
`
m.reply(jasa)
}
handler.help = ['jasainstallpannel', 'installpanel']
handler.tags = ['ownerstore']
handler.command = /^(jasainstallpannel|installpanel)$/i;
export default handler;
