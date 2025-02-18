const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a failure by throwing an error
      throw new Error('Something went wrong!');
    } else {
      res.send('Hello World!');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});