const { cmd } = require('../lib');

//server
let ec = {}
const pullBotData=()=>ec=require('../EveloCode.js')
setTimeout(pullBotData, 1000)
setInterval(()=>{pullBotData()},5000)
/**
* ec.EveloCode_aliveimage
* ec.EveloCode_alivemessage
*/



cmd({
        pattern: "alive2",
        category: "paka",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {


await Void.sendMessage(citel.chat, { image: { url: ec.EveloCode_aliveimage}, caption:  ec.EveloCode_alivemessage}, { quoted: citel })

    })
