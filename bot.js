const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "~";






client.on('message', async message => {
 message.author.bot
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("**:writing_hand: ماهي المده التي تدخل فيها الدسكورد (كل يوم ,كل يومين . كل سبوع)و **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.edit(`**مده استعمالك للدسكورد**`)
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        e.edit(`**معك مايك ؟**`)
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()
e.edit("**جاري التقديم علي طلبك...**").then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**المده التي يدخل فيها الدسكورد : \n ${lan}\n مده دخولك للدسكورد :\n ${md} \n معه مايك ؟ :\n ${br}  **`)  
          .setFooter(`MineCubes.`)
.setTimestamp()
});
}        
})
})
})
})
})
}

    
  let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

  let args = msg.content.split(" ").slice(1);

  if (command == 'apply' || command == 'deny')

      let ownerrole = msg.guild.roles.find('name', '• ♛ MineCubes Owner ♛');
      if (command == 'accept') {
        if (!msg.member.roles.has(ownerrole)) return;
        let person = msg.mentions.members.first()
        if (!person) return msg.reply(`عليك بمنشن احد الاشخاص`)
        if (!person.roles.has('443324027046723585')) return msg.reply(`هذا الشخص ليس مقدم`)
        msg.reply(`تم قبول الشخص بنجاح`)
        person.addRole('471760400019619870').catch(console.error);
      }
	
      if (command == 'deny') {
        if (!msg.member.roles.has(ownerrole)) return;
        let person = msg.mentions.members.first()
        if (!person) return msg.reply(`عليك بمنشن احد الاشخاص`)
        if (!person.roles.has('443324027046723585')) return msg.reply(`هذا الشخص ليس مقدم`)
        msg.reply(`تم قبول الشخص بنجاح`)
      }


client.on('ready', () => {
  console.log(`Logged in t8dem as ${client.user.tag}!`);
});




    const devs = ['326922071185817603' , '' , '' , ''];
const adminprefix = "~";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'sp')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }}
  )

client.on('ready', () => {
  console.log(`Logged in al7alh as ${client.user.tag}!`);
});



client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('~bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "MineCube";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
})




client.login('NDcxMDE2Njc1OTMyODk3Mjgw.DjetDQ.nUCqeDh4_LPtzS6_i9vWy2XYZW8')
