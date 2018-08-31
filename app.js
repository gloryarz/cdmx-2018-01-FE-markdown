const fs = require('fs');

const read = (callBack) => {
    fs.readFile('./links.md', 'utf8', (err, data) => {
        if (err) {
            console.log('Tienes un error');
        } else {
            callBack(data)
        }
    })
};

read( callBack = (data) => {
     console.log(data)

});



module.exports = {
    read
};