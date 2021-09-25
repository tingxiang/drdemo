const express = require('express');
const rendertron = require('rendertron-middleware');

const app = express();
const PORT = process.env.PORT || 8080;
const DIST_FOLDER = process.cwd() + '/public';
const BOTS = rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i');

app.set('view engine', 'html');

app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://render-tron.appspot.com/render',
  userAgentPattern: BOT_UA_PATTERN
}));

// Static Assets
app.get('*.*', express.static('public'));

// Point all routes to index...
app.get('*', (req, res) => {
  res.set('Vary', 'User-Agent');
  res.sendFile(DIST_FOLDER + '/index.html');
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Node Express server listening on ${PORT}`);
});
