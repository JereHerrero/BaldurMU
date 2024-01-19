require("dotenv").config()

module.exports = {
  TOKEN: process.env.
    TOKEN || "",

  PREFIX: process.env.PREFIX || ".",


  embed: {
    color: process.env.color || "#343A40",
    wrongcolor: process.env.wrongcolor || "#8a0808",
    footertext: "BaldurMU Online | ",
    footericon: "🔥",
  },


  //Emoji server: https://discord.gg/ZFHraMFYXs
  emoji: {
    ERROR: "<:cross:1176882913837600838>",
    SUCCESS: "<:Tick:1176883117362000022>",
    disabled: "<a:disabled1:1176883225667309578>",
    enabled: "<a:enabled:1176883430605197353>",
    cleared: "<:clear:1176883559307415654>",
    time: "<:timeout:1176883653595386007>",
    search: "<a:Search:1176883779814563910>",
    ping: "<:ping:1176883963663503361>",
    bot: "<:bot:1176884112808755251>",
  },
  // others
  mongodb: process.env.mongodb || "",

  filters: {
    clear: "dynaudnorm=f=200",
    lightbass: "bass=g=8,dynaudnorm=f=200",
    heavybass: "bass=g=20,dynaudnorm=f=200",
    bassboost: "bass=g=8,dynaudnorm=f=200",
    custombassboost: "bass=g=1,dynaudnorm=f=200",
    customspeed: "atempo=1.0",
    purebass: "bass=g=20,dynaudnorm=f=200,asubboost",
    "8d": "apulsator=hz=0.08",
    vaporwave: "aresample=48000,asetrate=48000*0.8",
    nightcore: "aresample=48000,asetrate=48000*1.25",
    phaser: "aphaser=in_gain=0.4",
    tremolo: "tremolo",
    vibrato: "vibrato=f=6.5",
    reverse: "areverse",
    treble: "treble=g=5",
    surrounding: "surround",
    pulsator: "apulsator=hz=1",
    subboost: "asubboost",
    karaoke: "stereotools=mlev=0.03",
    flanger: "flanger",
    gate: "agate",
    haas: "haas",
    mcompand: "mcompand",
    earrape: "bass=g=50",
    bassboost1: "bass=g=1,dynaudnorm=f=200",
    bassboost2: "bass=g=2,dynaudnorm=f=200",
    bassboost3: "bass=g=3,dynaudnorm=f=200",
    bassboost4: "bass=g=4,dynaudnorm=f=200",
    bassboost5: "bass=g=5,dynaudnorm=f=200",
    bassboost6: "bass=g=6,dynaudnorm=f=200",
    bassboost7: "bass=g=7,dynaudnorm=f=200",
    bassboost8: "bass=g=8,dynaudnorm=f=200",
    bassboost9: "bass=g=9,dynaudnorm=f=200",
    bassboost10: "bass=g=10,dynaudnorm=f=200",
    bassboost11: "bass=g=11,dynaudnorm=f=200",
    bassboost12: "bass=g=12,dynaudnorm=f=200",
    bassboost13: "bass=g=13,dynaudnorm=f=200",
    bassboost14: "bass=g=17,dynaudnorm=f=200",
    bassboost15: "bass=g=15,dynaudnorm=f=200",
    bassboost16: "bass=g=16,dynaudnorm=f=200",
    bassboost17: "bass=g=17,dynaudnorm=f=200",
    bassboost18: "bass=g=18,dynaudnorm=f=200",
    bassboost19: "bass=g=19,dynaudnorm=f=200",
    bassboost20: "bass=g=20,dynaudnorm=f=200",
  },
  links: {
    DiscordServer: `https://discord.gg/`
  },
  options: {
    embedFooter: true,
    nowplayingMsg: true
  },
  numberEmojis: [
    `0️⃣`,
    `1️⃣`,
    `2️⃣`,
    `3️⃣`,
    `4️⃣`,
    `5️⃣`,
    `6️⃣`,
    `7️⃣`,
    `8️⃣`,
    `9️⃣`,
    `🔟`,
  ],
};
