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

/*
read( callBack = (data) => {
    // console.log(data)
    let file = data;
    let search = /\[.*\]\(https?:.*\)/g;
    let searching = file.match(search);
    // console.log(searching) 

    searching.forEach(element => {
        let name = /\[.*\]/g;
        let urls = /\(https?:.*\)/g;
        let getName = element.match(name);
        let geturls = element.match(urls)
        //console.log(getName)
        console.log(__filename, geturls, getName)
    });

});
*/

read( callBack = (data) => {
    // console.log(data)
    let file = data;
    let search = /\bhttps?:.*\b/g;
    let searching = file.match(search);
    // console.log(searching) 
    
    searching.forEach(element => {
        console.log(__filename, element)
    });

});


module.exports = {
    read
};