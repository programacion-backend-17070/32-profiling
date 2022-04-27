const router = require('express').Router()

function isPrime(num) {
  if ([2, 3].includes(num)) {
    return true
  }

  if ([2, 3].some(n => num % n == 0)) {
    return false
  }

  let i = 5, w = 2
  while((i ** 2) <= num) {
    if (num % i == 0) {
      return false
    }
    i += w
    w = 6-w
  } 

  return true
}
router.get('/', (req, res) => {
  const num = Number(req.query.max) || 1000
  const primes = []
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  res.json(primes)
})

module.exports = router