const {writeFileSync} = require('fs')
for (let i=0; i<10000; i++) {
    writeFileSync(`./content/big.txt`, `howdy y'all ${i}\n`, {flag: 'a'})
}