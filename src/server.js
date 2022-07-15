import express from 'express';
import renderer from './helpers/renderer';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('dist'));

app.get('*', (req, res) => {
//   const content = renderer(req);
let content = `
<html>
  <body>
    <div id="root">成功成功!!!</div>
    <script src="./bundle.js"></script>
  </body>
</html>
`
  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});