const crypto = require('crypto'),
      algorithm = 'aes256';
const cipher = crypto.createCipher(algorithm, 'teekkkariusOnTodella123Tyolasta567!KaikkiToimii');
let crypted = cipher.update('138', 'utf8', 'hex');
crypted += cipher.final('hex');
console.log(crypted);
