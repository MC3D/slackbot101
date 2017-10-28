'use strict';

var imageUrl = 'https://i.pinimg.com/236x/16/65/fa/1665faf21233366fcba5553b0c66cbf4--clemson-football-clemson-tigers.jpg';

module.exports = function(bot) {
  bot.registerListener(null, function(bot, message, slackbotCallback) {
    var resp = {};
    let user = 'U7QUL4YSD';

    if (message.user !== user) {
      return;
    }
    resp.text = null;
    resp.attachments = [
        {
            title: 'Go Clemson!',
            image_url: imageUrl,
        }
    ];

    return slackbotCallback(null, resp);
  });
};
