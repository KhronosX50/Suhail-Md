const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_12_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS3N0bERyQ0E3b2trQXMrelU3dk0ycHNIR0dUY2lYaUJsRkVYcWxpZ1ZNVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDM0Njc4OTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQkYzREE2OTBENTJFODIzN0U1RTdFQ0MwRkI4ODlENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxOTA3NDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieE9RZVlrcUlSS1NwSWdzSEdpQWZCUVwiLFxuICBcInBob25lSWRcIjogXCI2NDg0YmU1OS1iNzNjLTRkNTMtYjUyNC02MDFiZmIyZmIzZjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICA0MixcbiAgICAgIDEyNSxcbiAgICAgIDE2NixcbiAgICAgIDEzMyxcbiAgICAgIDQzLFxuICAgICAgMjQyLFxuICAgICAgMSxcbiAgICAgIDEyNixcbiAgICAgIDE0MSxcbiAgICAgIDE2NCxcbiAgICAgIDE2OSxcbiAgICAgIDM5LFxuICAgICAgNzEsXG4gICAgICAyMjUsXG4gICAgICAxNzMsXG4gICAgICAxODQsXG4gICAgICA1MCxcbiAgICAgIDQ2LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICA4OSxcbiAgICAgIDE4MixcbiAgICAgIDEwOSxcbiAgICAgIDIxMyxcbiAgICAgIDEyNixcbiAgICAgIDkzLFxuICAgICAgOCxcbiAgICAgIDcyLFxuICAgICAgNzMsXG4gICAgICA3MyxcbiAgICAgIDEzMCxcbiAgICAgIDE4MCxcbiAgICAgIDIwOCxcbiAgICAgIDIwOCxcbiAgICAgIDExMyxcbiAgICAgIDM0LFxuICAgICAgMTY1LFxuICAgICAgNTMsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVQSEw0M0ZOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM0Njc4OTY0OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDAxNzUyMTY3NDI1MzE6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnllMGJVRUVJMkZwck1HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5dE96cTc3NjBDM1BhdE95bFZUTkYvMXFwaGhRa0licTRJMVU0RFFNS0FZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIksvZk8vTlBuaDJZQkF4YklxYXFSQmh0UWFSVWtDbjhYcGtxeWtQUlQrZUlNL1pDbnFobXpWVmJlVnUvUzkrSVdwMExRaTZIR1FKYlJsbzRDeGVoeERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9mUTJYVTVrRjVGMFBqaFVVU1VQNm51NnFDeUU5SmR5blhtUE4zVlBKcnZFcGJoWkxveGJQdVR4MjJhM0JRNUFrWHlISG1mNFFSTlVxQkVqS25nRkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzQ2Nzg5NjQ6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTkwNzM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGFlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEYWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMM3VMREt2b1JCTVZXVkF3d00xVzZZVUNpQlRmZXRxNmJWL2doOStPdEw0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODYyMjE5MTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
