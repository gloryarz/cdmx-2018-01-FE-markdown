const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const filePath = './links.md';

const absolutePath = path.resolve(filePath);

const isAnMDFile = () => {
  return new Promise((resolve, reject) => {
    if (filePath.includes('.md')) {
      resolve(filePath);
    } else {
      reject('No es un archivo .md');
    }
  });
};

const readMDFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject('Hay un problema para leer tu archivo', err);
      } else {
        resolve(data);
      }
    });
  });
};

const getData = (data) => {
  return new Promise((resolve, reject) => {
    const file = data;
    const search = /\[.*https?:.*\)/ig;
    const searching = file[1].match(search);
    const arr = []; 
    searching.forEach(hrefAndText => {
      hrefAndText = hrefAndText.replace(/.$/, '');
      hrefAndText = hrefAndText.replace(/^\[/, '');
      hrefAndText = hrefAndText.split(/\]\(/);
      arr.push(hrefAndText);
    });
    resolve(arr);
  });  
};

const getOptions = (data) => {
  return new Promise((resolve, reject) => {
    const arrObj = [];   
    data.forEach(element =>{ 
      const hrefText = element[0].slice(0, 50);
      const href = element[1];
      const result = {
        path: absolutePath,
        url: href,
        urlTxt: hrefText
      };
      arrObj.push(result);
    });
    resolve(arrObj);
  });
};

const fetching = (data) => {
  return new Promise(() => {
    data.forEach(obj => {
      const path = obj.path; 
      const urlTxt = obj.urlTxt;  
      fetch(obj.url)
        .then(res => console.log(path, res.url, res.status, res.statusText, urlTxt))
        .catch(err => console.log(err));
    });
  });
};


const userValue = 'options';
const promises = Promise.all([isAnMDFile(), readMDFile()])
  .then(data => data)
  .then(data => getData(data))
  .then(data => getOptions(data));


if (userValue === 'options') {
  promises.then(data => {
    data.forEach(obj => {
      console.log(obj.path, obj.url, obj.urlTxt);
    });
  })
    .catch(err => console.log(err));
} else if (userValue === 'validate') {
  promises.then(data => fetching(data))
    .then(data => console.log(data))
    .catch(err => console.log(err));
} else if (userValue === 'stats') {

}


/*

module.exports = {
  readMDFile, 
  getData,
  fetching,
  fetchResult,
  options

};*/