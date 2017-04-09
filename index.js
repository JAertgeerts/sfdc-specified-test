'use strict';
const fs = require('fs');
const xml2js = require('xml2js');

module.exports = (config,logger) => {
  if(typeof config.dir === 'undefined' || config.dir === null
  || typeof config.suffix === 'undefined' || config.suffix === null) {
    throw new Error('Not enough config options');
  }

  const parseStringAsync = data => {
    return new Promise(function (resolve, reject) {
      try {
        let parser = new xml2js.Parser();
        parser.parseString(data, function(err, result){
          if (err) reject(err);
          resolve(result);
        });
      } catch (err) {
        reject(err);
      }
    });
  };
  
  return new Promise((resolve, reject) => {
  
    parseStringAsync(fs.readFileSync(config.dir + '/package.xml'))
    .then(function(result,err){
      if(err) {return reject(new Error(err));}
      let testClasses = result.Package.types.filter((element) =>
        element.name[0] === 'ApexClass' 
      ).map((element) =>
        element.members
      ).reduce((a,b) =>
        a.concat(b)
      );
      if(testClasses.indexOf('*') === -1) {
        testClasses = testClasses.map((element) => element + config.suffix).join(',');
      } else {
        testClasses = fs.readdirSync(config.dir + '/classes',{encoding:'utf8'})
        .filter((filename) => filename.endsWith(config.suffix+'.cls'))
        .map((filename) => filename.replace(/\.cls$/,''))
        .join(',');
      }
      logger(testClasses);
      resolve(testClasses);
    }).catch((err)=>
      reject(new Error(err))
    );
  });
};