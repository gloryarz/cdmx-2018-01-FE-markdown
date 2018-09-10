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
  return new Promise(() => {
    data.forEach(element =>{
        const hrefText = element[0];
        const href = element[1]
        console.log(absolutePath, href, hrefText);
    })
  });
};

Promise.all([isAnMDFile(), readMDFile()])
  .then(data => data)
  .then(data => getData(data))
  .then(data => getOptions(data))
  .then(data => console.log(data))
  .catch(err => console.log(err));


/*
isAnMDFile().then(data => data)
.then(function(data){
    return readMDFile(data)
})
.then(data => console.log(data))
  .catch(err => console.log(err));
*/

/*
readMDFile.then(data => console.log(data))
  .catch(err => console.log(err));
*/

/*
const readMDFile = () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      getData(data);
      console.log('readMDFile');
    }
  });
};

let arr = [];
const getData = (data) => {
  let file = data;
  let search = /\[.*https?:.*\)/ig;
  let searching = file.match(search);

  searching.forEach(hrefAndText => {
    hrefAndText = hrefAndText.replace(/.$/, '');
    hrefAndText = hrefAndText.replace(/^\[/, '');
    hrefAndText = hrefAndText.split(/\]\(/);
    arr.push(hrefAndText);
  });
  console.log('getData');
  fetching();
};

const fetching = () => {
  arr.forEach(element => {
    let url = element[1];
    fetch(url)
      .then(res => fetchResult(res.url, res.status, res.statusText))
      .then(console.log('fetch'))
      .catch(err => console.log(err));
  });
};

let fetchStatus = [];
const fetchResult = (url, status, statusText) => {
  fetchStatus.push([url, status, statusText]);
  console.log('fetchResult');
};

const options = () => {
     readMDFile();
     console.log(absolutePath, 'how', arr);
     setTimeout((el) => {
       console.log(absolutePath, arr);
     }, 1000); 
   };

let userValue = 'ahhh';

const userInput = () => {
  if (userValue === 'better') {
    console.log('better');
  } else {
    options();
  }
};
userInput();

module.exports = {
  readMDFile, 
  getData,
  fetching,
  fetchResult,
  options

};*/

/*
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
};

*/


// Prueba de promesas

/*
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const filePath = './links.md';


const absolutePath = path.resolve(filePath);

const readMDFile = () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      getData(data);
      console.log('readMDFile');
    }
  });
};

let arr = [];
const getData = (data) => {
  let file = data;
  let search = /\[.*https?:.*\)/ig;
  let searching = file.match(search);

  searching.forEach(hrefAndText => {
    hrefAndText = hrefAndText.replace(/.$/, '');
    hrefAndText = hrefAndText.replace(/^\[/, '');
    hrefAndText = hrefAndText.split(/\]\(/);
    arr.push(hrefAndText);
  });
  console.log('getData');
  fetching();
};

const fetching = () => {
  arr.forEach(element => {
    let url = element[1];
    fetch(url)
      .then(res => fetchResult(res.url, res.status, res.statusText))
      .then(console.log('fetch'))
      .catch(err => console.log(err));
  });
};

let fetchStatus = [];
const fetchResult = (url, status, statusText) => {
  fetchStatus.push([url, status, statusText]);
  console.log('fetchResult');
};
fetchResult();

const options = () => {
 // readMDFile();
  console.log(absolutePath, 'how', arr);
  setTimeout((el) => {
    console.log(absolutePath, arr);
  }, 1000); 
};

let userValue = 'ahhh';

const userInput = () => {
  if (userValue === 'better') {
    console.log('better');
  } else {
    options();
  }
};
userInput();
 
 */