module.exports.config = {
  name: "ردود_المطور",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
  description: "البوت سوف يرد إذا تم ذكر المالك أو البوت عن طريق المنشن ",
  commandCategory: "المطور",
  usages: "",
  usePrefix:false,
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "@ᎠᎯᏒᏦ ᏢᎾᏯᎬᏒ") {
    var aid = ["61569409418704"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["توقف عن عمل منشن لمطوري، فهو مشغول🤦‍♂️", "مطوريᎠᎯᏒᏦ ᏢᎾᏯᎬᏒ🖤🪽 غير متصل حاليا 😢","منشن آخر على مالكي و, سوف أقوم بلكمك على وجهك 🙂👊","مشغول ألا تفهم 😒","آسف، اكن لان أسمح لأي أحد أن يقوم بإزعاجه 🙄","هل تحب مطوري ولهذا السبب قمت بعمل منشن عليه? لماذا لا ترسل له طلب صداقة  https://www.facebook.com/profile.php?id=61569409418704 😏"," منشن آخر على مطوري، وسوف أركل مؤخرتك اللعينة"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
      }
