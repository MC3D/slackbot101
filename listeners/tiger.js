'use strict';

var shuffle = require('lodash/shuffle');

let responses = [
  'https://i.pinimg.com/236x/16/65/fa/1665faf21233366fcba5553b0c66cbf4--clemson-football-clemson-tigers.jpg',
  'https://i.pinimg.com/736x/c0/b3/b0/c0b3b038b507ebb9731f88c2b9afbe09--clemson-football-clemson-tigers.jpg',
  'https://i.pinimg.com/736x/0c/93/7a/0c937a710878ee2b064ac5c99d973b4a--clemson-football-clemson-tigers.jpg',
  'https://i.pinimg.com/236x/e3/f7/fd/e3f7fdba976b0e739979c63548fa664f--puppy-dog-eyes-dog-cat.jpg'
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
    let user = 'U04F86RME';
    let channel = 'C69L2CJV8';

    if (message.user !== user || message.channel !== channel) {
      return;
    }

    resp.text = null;
    resp.attachments = [
        {
            title: 'Let\'s go Tigers!',
            image_url: getRandomResponse(),
        }
    ];

    return slackbotCallback(null, resp);

  });
};
