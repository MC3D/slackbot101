'use strict';

var shuffle = require('lodash/shuffle');

let responses = [
  'If called by a panther, don\'t anther.',
  'Some tortures are physical and some are mental, but the one that is both is dental.',
  'Candy is dandy, but liquor is quicker.',
  'When I ponder my mind, I consistently find it is glued on food.',
  'Too much Chablis can make you whablis.'
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
    let user = 'U0L3UC4E8';
    let channel = 'C69L2CJV8';

    if (message.user !== user || message.channel !== channel) {
      return;
    }

    resp.text = getRandomResponse();
    slackbotCallback(null, resp);
  });
};
