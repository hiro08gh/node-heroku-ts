import * as express from 'express';
import * as helmet from 'helmet';

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('localhost:5000');
});
