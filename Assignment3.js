const express = require('express');
const app = express();
const port = 9090;

const calculateFactorial = (num) => {
  if (num < 0) return 'Error: Factorial is not defined for negative numbers';
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

app.get('/assignments/factorial/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (isNaN(number)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  const result = calculateFactorial(number);
  res.json({ number, factorial: result });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
