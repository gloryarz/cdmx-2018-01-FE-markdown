const fs = require('fs');

const read = (errCallBack, callBack) => {
    fs.readFile('./links.md', 'utf8', (err, data) => {
        if (err) {
            errCallBack(err)
        } else {
            callBack(data)
        }
    })
};

let arr = []
read( (err) => console.log(err), callBack = (data) => {
    let file = data;
    let search = /\[.*https?:.*\)/ig;
    let searching = file.match(search);

    searching.forEach(element => {
        element = element.replace(/.$/, '');
        element = element.replace(/^\[/, '');
        element = element.split(/\]\(/);
        arr.push(element)
       
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