const { zokou } = require(__dirname + "/../framework/zokou");
const conf = require(__dirname + "/../set");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({
  nomCom: "menu",
  categorie: "General"
}, async (_msg, sock, data) => {
  let { ms, repondre, prefixe, nomAuteurMessage } = data;
  let { cm } = require(__dirname + "/../framework/zokou");

  // Determine bot mode
  let mode = s.MODE.toLowerCase() === "yes" ? "Public" : "Private";

  // Group commands by category
  let grouped = {};
  for (const command of cm) {
    if (!grouped[command.categorie]) grouped[command.categorie] = [];
    grouped[command.categorie].push(command.nomCom);
  }

  // Set timezone and get date/time
  moment.tz.setDefault("Africa/Dar_es_Salaam");
  const time = moment().format("HH:mm:ss");
  const date = moment().format("DD/MM/YYYY");

  // Menu header
╭─「 *DRAGON AI* 」
│👤 *User:* +255763111390
│📆 *Date:* 16/06/2025
│⏰ *Time:* 22:28:06
│📟 *Mode:* Public
│🔢 *Total Commands:* 347
╰───────────────⬣

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎┌─「 *SEARCH* 」
│ 🌹.fullpp
│ 🌹.blocklist
│ 🌹.img
│ 🌹.insult
│ 🌹.gpt1
└─────────────⬣

┌─「 *GENERAL* 」
│  🌹.owner
│  🌹.dev
│  🌹.support
│  🌹.url
│  🌹.about
│  🌹.anti/delete2
│  🌹.bible
│  🌹.poll
│  🌹.telegramsc
│  🌹.cast2
│  ❤️.love
│  🌹.getall
│  🏌️.go
│  ✌️.channel
│  ⌚.rtime
│  ✌️.channel1
│ ➤ .rahzayn
│ ➤ .vision
│ ➤ .group1
│ ➤ .script
│ ➤ .rahmani
│ ➤ .me
│ ➤ .problem
│ ➤ .repo
│ ➤ .deploy
│ ➤ .deployer
│ ➤ .agents
│ ➤ .gay
│ ➤ .areact
│ ➤ .deployer
│ ➤ .pair
│ ➤ .broadcast
│ ➤ .menu
│ ➤ .scan
│ ➤ .script
│ ➤ .test
│ ➤ .alive
│ ➤ .test2
│ ➤ .poll
│ ➤ .uptime
│ ➤ .version
│ ➤ .vv
│ ➤ .wallpaper2
└─────────────⬣

┌─「 *TRADE-PLACE* 」
│ ➤ .currencylist
│ ➤ .forex
│ ➤ .fxstatus
│ ➤ .fxpairs
│ ➤ .stocktickers
│ ➤ .fxexchange
└─────────────⬣

┌─「 *WEEB* 」
│ ➤ .waifu
│ ➤ .neko
│ ➤ .shinobu
│ ➤ .megumin
│ ➤ .cosplay
│ ➤ .waifu
│ ➤ .neko
│ ➤ .shinobu
│ ➤ .megumin
│ ➤ .cosplay
│ ➤ .couplepp
└─────────────⬣

┌─「 *GAMES* 」
│ ➤ .guesscapital
│ ➤ .chifumi
│ ➤ .quizz
│ ➤ .chifumi
│ ➤ .quizz
│ ➤ .tictactoe
└─────────────⬣

┌─「 *AI* 」
│ ➤ .lulcat
│ ➤ .sadcat
│ ➤ .nokia
│ ➤ .unforgivable
│ ➤ .1917
│ ➤ .cartoon
│ ➤ .underwater
│ ➤ .watercolor
│ ➤ .gfx
│ ➤ .gfx2
│ ➤ .gfx3
│ ➤ .gfx4
│ ➤ .gfx5
│ ➤ .gfx6
│ ➤ .pooh
│ ➤ .oogway
│ ➤ .drake
│ ➤ .biden
│ ➤ .drip
│ ➤ .clown
│ ➤ .ad
│ ➤ .blur
│ ➤ .meme
│ ➤ .pet
│ ➤ .alert
│ ➤ .caution
│ ➤ .gta
└─────────────⬣

┌─「 *FUN* 」
│ ➤ .profile
│ ➤ .hack
│ ➤ .ranime
│ ➤ .fancy
│ ➤ .ranime
│ ➤ .status
│ ➤ .rank
│ ➤ .toprank
└─────────────⬣

┌─「 *OTHER* 」
│ ➤ .cad
│ ➤ .butimg
│ ➤ .buttxt
│ ➤ .but
└─────────────⬣

┌─「 *CONVERSION* 」
│ ➤ .url1
│ ➤ .emomix
│ ➤ .sticker
│ ➤ .scrop
│ ➤ .take
│ ➤ .write
│ ➤ .photo
│ ➤ .trt
│ ➤ .url
│ ➤ .emomix
└─────────────⬣

┌─「 *SEARCH* 」
│ ➤ .google
│ ➤ .imdb
│ ➤ .movie
│ ➤ .define
│ ➤ .lyrics
│ ➤ .img
│ ➤ .google
│ ➤ .imdb
│ ➤ .movie
│ ➤ .playy
│ ➤ .play2
│ ➤ .video2
│ ➤ .song
│ ➤ .stickersearch
│ ➤ .define
│ ➤ .lyrics1
│ ➤ .weather
└─────────────⬣

┌─「 *IA* 」
│ ➤ .chat
│ ➤ .gpt2
│ ➤ .ai
│ ➤ .gpt
│ ➤ .book
│ ➤ .gemini2
│ ➤ .raheem
│ ➤ .dalle
│ ➤ .gpt
│ ➤ .chart
│ ➤ .calcul
└─────────────⬣

┌─「 *GROUP* 」
│ ➤ .antitag
│ ➤ .welcome
│ ➤ .goodbye
│ ➤ .antipromote
│ ➤ .antidemote
│ ➤ .forward
│ ➤ .kickall
│ ➤ .onlyadmin
│ ➤ .tagall
│ ➤ .link
│ ➤ .promote
│ ➤ .demote
│ ➤ .remove
│ ➤ .del
│ ➤ .info
│ ➤ .antilink
│ ➤ .antibot
│ ➤ .group
│ ➤ .gname
│ ➤ .gdesc
│ ➤ .gpp
│ ➤ .hidetag
│ ➤ .automute
│ ➤ .autounmute
│ ➤ .fkick
│ ➤ .nsfw
│ ➤ .add
│ ➤ .disap-off
│ ➤ .disap
│ ➤ .req
│ ➤ .disap90
│ ➤ .reject
│ ➤ .disap7
│ ➤ .disap1
│ ➤ .approve
│ ➤ .vcf
│ ➤ .invite
│ ➤ .revoke
│ ➤ .antiword
│ ➤ .antilink-all
│ ➤ .tagadmin
│ ➤ .vcf
│ ➤ .warn
└─────────────⬣

┌─「 *DOWNLOAD* 」
│ ➤ .apk
│ ➤ .igdl
│ ➤ .fbdl
│ ➤ .tiktoklite
│ ➤ .fbdl2
│ ➤ .instagram
│ ➤ .facabook
│ ➤ .tiktok
│ ➤ .facebook2
└─────────────⬣

┌─「 *AUDIO-EDIT* 」
│ ➤ .deep
│ ➤ .bass
│ ➤ .reverse
│ ➤ .slow
│ ➤ .smooth
│ ➤ .tempo
│ ➤ .nightcore
└─────────────⬣

┌─「 *USER* 」
│ ➤ .fact
│ ➤ .quotes
│ ➤ .fact
│ ➤ .quote
│ ➤ .dit
│ ➤ .itta
│ ➤ .say
└─────────────⬣

┌─「 *MENU* 」
│ ➤ .bugmenu
│ ➤ .quranmenu
└─────────────⬣

┌─「 *IMAGE-EDIT* 」
│ ➤ .shit
│ ➤ .wasted
│ ➤ .wanted
│ ➤ .trigger
│ ➤ .trash
│ ➤ .rip
│ ➤ .sepia
│ ➤ .rainbow
│ ➤ .hitler
│ ➤ .invert
│ ➤ .jail
│ ➤ .affect
│ ➤ .beautiful
│ ➤ .blur
│ ➤ .circle
│ ➤ .facepalm
│ ➤ .greyscale
│ ➤ .joke
└─────────────⬣

┌─「 *NEW* 」
│ ➤ .report
│ ➤ .vv3
└─────────────⬣

┌─「 *LOGO* 」
│ ➤ .design
│ ➤ .hacker
│ ➤ .dragonball
│ ➤ .naruto
│ ➤ .didong
│ ➤ .wall
│ ➤ .summer
│ ➤ .neonlight
│ ➤ .greenneon
│ ➤ .glitch
│ ➤ .devil
│ ➤ .boom
│ ➤ .water
│ ➤ .snow
│ ➤ .transformer
│ ➤ .thunder
│ ➤ .harrypotter
│ ➤ .cat
│ ➤ .whitegold
│ ➤ .lightglow
│ ➤ .thor
│ ➤ .neon
│ ➤ .purple
│ ➤ .gold
│ ➤ .arena
│ ➤ .incandescent
│ ➤ .gif×1
└─────────────⬣

┌─「 *AI* 」
│ ➤ .gpt
└─────────────⬣

┌─「 *HENTAI* 」
│ ➤ .waifues
│ ➤ .trap
│ ➤ .neko
│ ➤ .girls
└─────────────⬣

┌─「 *MUSIC* 」
│ ➤ .lyrics
└─────────────⬣

┌─「 *FINANCE* 」
│ ➤ .math
└─────────────⬣

┌─「 *MODS* 」
│ ➤ .telesticker
│ ➤ .crew
│ ➤ .left
│ ➤ .join
│ ➤ .jid
│ ➤ .block
│ ➤ .unblock
│ ➤ .ban
│ ➤ .bangroup
│ ➤ .sudo
│ ➤ .save
│ ➤ .mention
│ ➤ .left
│ ➤ .reboot
└─────────────⬣

┌─「 *HEROKU-CLIENT* 」
│ ➤ .anticall
│ ➤ .readstatus
│ ➤ .antidelete
│ ➤ .downloadstatus
│ ➤ .startmessage
│ ➤ .readmessage
│ ➤ .pm-permit
│ ➤ .chatbot
│ ➤ .greet
│ ➤ .antivv
│ ➤ .publicmode
│ ➤ .autorecord
│ ➤ .autotyping
│ ➤ .alwaysonline
│ ➤ .privatemode
│ ➤ .autolikestatus
│ ➤ .chatbot
│ ➤ .settings
└─────────────⬣

┌─「 *RECHERCHE* 」
│ ➤ .apk
└─────────────⬣

┌─「 *DOWNLOAD* 」
│ ➤ .play
│ ➤ .video
│ ➤ .tourl
└─────────────⬣

┌─「 *GOD-FIRST* 」
│ ➤ .surah
│ ➤ .biblelist
└─────────────⬣

┌─「 *REACTION* 」
│ ➤ .bully
│ ➤ .cuddle
│ ➤ .cry
│ ➤ .hug
│ ➤ .awoo
│ ➤ .kiss
│ ➤ .lick
│ ➤ .pat
│ ➤ .smug
│ ➤ .bonk
│ ➤ .yeet
│ ➤ .blush
│ ➤ .smile
│ ➤ .wave
│ ➤ .highfive
│ ➤ .handhold
│ ➤ .nom
│ ➤ .bite
│ ➤ .glomp
│ ➤ .slap
│ ➤ .kill
│ ➤ .kick
│ ➤ .happy
│ ➤ .wink
│ ➤ .poke
│ ➤ .dance
│ ➤ .cringe
└─────────────⬣

┌─「 *SETTINGS* 」
│ ➤ .anticall
│ ➤ .autoreact
│ ➤ .autoreadstatus
│ ➤ .privatemode
│ ➤ .autorecord
│ ➤ .autotyping
│ ➤ .alwaysonline
└─────────────⬣

┌─「 *CODING* 」
│ ➤ .terminate
└─────────────⬣

┌─「 *CONTROL* 」
│ ➤ .update
│ ➤ .getallvar
│ ➤ .setvar
└─────────────⬣

┌─「 *GÉNÉRAL* 」
│ ➤ .vv2
└─────────────⬣

> 🤖 *DRAGON AI– Smart Assistant Ready to Help You!*
    // view channel https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r
