module.exports.config = {
	name: "المطور",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊", //don't change the credits please
	description: "معلومات البوت و المطور.",
	commandCategory: "خدمات",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Africa/Casablanca").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.ibb.co/xD1NVfy/462650700.jpg",];
var callback = () => api.sendMessage({body:`➢

مـٰعـ๋͜‏ـۂݪوُمـٰات اݪبـوُت وُ اݪمـٰطُوُࢪ ⁞✦⁽☻🔥₎“ٰۦ

-‘๑’- إسـٰٖـ๋͜ــمـٰ اݪبـوُت ⁽ཻ🖤₎: ${global.config.BOTNAME}
 
 ⍣ ೋ مـٰطُوُࢪ اݪبـوُت 🖤🪽⇣: 
   ᎠᎯᏒᏦ ᏢᎾᏯᎬᏒ  

*ೃ༄ ࢪابـطُ فــ͡ـيسـٰٖـ๋͜ــبـوُڪ اݪمـٰطُوُࢪ 🖤🪽ֆ:https://www.facebook.com/profile.php?id=6156940941870484

❂ آلرٰمـژ 💁‍♂️🔥“: ${global.config.PREFIX}

✫ ﺂﻟﺑﻟﮃ ‌‌🌐: 
ليبيا🇱🇾

➟ ּمــدۃ اڸــٺــڜــڠــېْــڸ

✬ ̨اڸــﯧْــﯜم هــﯡۥ: ${juswa} 

➳ ۛ ּاڷــبــﯟټ ּٻــڃــڕﮯ ۖ إبــٺــداء̍ا مــن ۗ ${hours}:${minutes}:${seconds}.

✫ ۛ ּﯡڣــﮯ ۖ ا̍ڶــڼۨــﮪــٰٱ̍ڀــۃ ̨ڜــﯖــڕٰ̍ا̍ ﻋــڷــےۧ ̨إڛۣــٿــڂۡــدٰا̍مۘ ۗ ${global.config.BOTNAME} اڸــبــﯣٺ!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };