const { AES, enc } = require('crypto-js')
const SECRET = 'secret'
module.exports = {
  encrypt: (txt) => AES.encrypt(txt, SECRET).toString(),
  decrypt: (hash) => AES.decrypt(hash, 'secret').toString(enc.Utf8)
}