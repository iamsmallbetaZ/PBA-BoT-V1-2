let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome set successfully\n@user (Mention)\n@subject (Title Grup)\n@desc (Description Grup)')
  } else throw `uhm.. where's the text?\n\nExample:\n${usedPrefix + command} π²ππΏπππππΈ @user group @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

