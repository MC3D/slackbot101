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
    let user = '333U7RC4A4MR';

    console.log('mesg', message.user);
    if (message.user !== user) {
      return;
    }

    resp.text = getRandomResponse();
    slackbotCallback(null, resp);
  });
};
