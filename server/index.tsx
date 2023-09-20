import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '../client/src/App';
import path from 'path';
import fs from 'fs';

const port = 8080;
const expressApp = express();

expressApp.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});

expressApp.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(<App />);
  const html = fs.readFileSync(
    path.join(__dirname, '..', 'client/build/index.html'),
    {
      encoding: 'utf8',
    }
  );
  // SSR
  const modifiedHtml = html.replace(
    /<div id=\"root\"><\/div>/g,
    `<div id="root">${component}</div>`
  );

  res.send(modifiedHtml);
});

expressApp.use(express.static(path.join(__dirname, '..', 'client/build')));

export { expressApp };
