const fs = require('fs')

const ourReadStream = fs.createReadStream(`${__dirname}/bigText.txt`);

ourReadStream.on('data', (data) => {
    console.log(data);
})
console.log(`hello`)
