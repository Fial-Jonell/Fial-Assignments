const express = require('express');
const app = express();
const port = 9090;


class AssignmentController {
  static isPrime(number) {
  
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }


  static checkPrime(req, res) {
    const number = parseInt(req.params.number, 10);
    
    if (isNaN(number)) {
      return res.status(400).json({ error: 'Invalid number' });
    }

    const isPrime = AssignmentController.isPrime(number);

    res.json({ prime: isPrime });
  }
}

app.get('/assignments/prime/:number', AssignmentController.checkPrime);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
