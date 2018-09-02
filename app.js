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
    let file = data;
    let search = /\[.*https?:.*\)/ig;
    let searching = file.match(search);

    searching.forEach(element => {
        console.log(element)
    });
});


/*
read( callBack = (data) => {
    let file = data;
    let search = /\[.*https?:.*\)/g;
    let searching = file.match(search);
    // console.log(searching) 
    
    searching.forEach(element => {
                let name = /\[.*\]/g;
        let urls = /https?:.*\)/g;
        let getName = element.match(name);
        let geturls = element.match(urls)
        console.log(geturls, getName)
    });
});
*/


module.exports = {
    read
};