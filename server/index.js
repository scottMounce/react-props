const express = require('express');
const app = express();
const port = 3010;
app.use(express.static(__dirname + '/../client/dist'));



app.get('/', () => {
  res.send('hello');
})


app.listen(port, function () {
  console.log('listening on port :', port)
});