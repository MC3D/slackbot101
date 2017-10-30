'use strict';

var shuffle = require('lodash/shuffle');

let responses = [
  'https://cdn.funpics.me/wp-content/uploads/2017/02/dad-joke-meme-6.jpg',
  'https://cdn.funpics.me/wp-content/uploads/2017/02/dad-joke-meme-7.jpg',
  'https://i.pinimg.com/736x/4a/d2/7c/4ad27c7b10504d3cd3115d58618a6be7--popular-memes-meme-guy.jpg',
  'https://media.rbl.ms/image?u=%2Ffiles%2F2016%2F06%2F11%2F6360121079068928901117248723_beethoven-dad-joke.png&ho=https%3A%2F%2Faz616578.vo.msecnd.net&s=639&h=77d57667a68aa2d0f7068e805c71819177f622ff59105bad3ececf3b04ba3592&size=980x&c=2235467248',
  'http://www.kappit.com/img/pics/201510_0912_hhegf.jpg'
]

var randomResponses = [];

function getRandomResponse() {
  if (!randomResponses.length > 0) {
    randomResponses = shuffle(responses);
  }
  return randomResponses.shift();
}

module.exports = function(bot) {
  bot.registerListener(null, function(bot, message, slackbotCallback) {
    var resp = {};
    let user = 'U04KDNC3D';
    let channel = 'C69L2CJV8';

    if (message.user !== user || message.channel !== channel) {
      return;
    }

    resp.text = null;
    resp.attachments = [
        {
            title: '#dadJokes',
            image_url: getRandomResponse(),
        }
    ];

    return slackbotCallback(null, resp);

  });
};
