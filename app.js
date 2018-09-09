const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const filePath = './links.md';

const readMDFile = (errCallBack, callBack) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      errCallBack(err);
    } else {
      callBack(data);
    }
  });
};

let arr = [];
readMDFile((err) => console.log(err), callBack = (data) => {
  let file = data;
  let search = /\[.*https?:.*\)/ig;
  let searching = file.match(search);

  searching.forEach(hrefAndText => {
    hrefAndText = hrefAndText.replace(/.$/, '');
    hrefAndText = hrefAndText.replace(/^\[/, '');
    hrefAndText = hrefAndText.split(/\]\(/);
    arr.push(hrefAndText);
  });
  fetching();
});


const fetching = () => {
  arr.forEach(element => {
    let url = element[1];
    fetch(url)
      .then(res => fetchResult(res.url, res.status, res.statusText))
      .catch(err => console.log(err));
  });
};

let fetchStatus = [];
const fetchResult = (url, status, statusText) => {
  fetchStatus.push([url, status, statusText]);
  console.log(fetchStatus);
};


module.exports = {
  readMDFile,
  fetching
};

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


/* 
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
    fetching();
});

const fetching  = () => {
    arr.forEach(element => {
        let url = element[1];
        fetch(url)
        .then(res => console.log(res.url, res.status, res.statusText))
    });
}
*/