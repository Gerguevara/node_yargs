const color = require('colors') //  imporsts colors dependency
const fs = require('fs');   // import filewritew funtion

// function list

module.exports.list = (base,limit)=>{
  console.log("==================".cyan);
  console.log(`====Table: ${base}=====`.cyan);
  console.log("==================".cyan);
  for (var i = 0; i < limit; i++) {
    console.log(`${i} for ${base} is: ${i * base}\n`.cyan);

  }
}

// function create file

module.exports.createFile = (base,limit=10)=>{
return new Promise((resolve, reject) => {
if(!Number(base) || base == undefined ||!Number(limit) || limit == undefined){
  reject ('Please set the number againg!')
}
  let data = ''
  for (var i = 0; i <limit; i++) {
    data +=  `${i} for ${base} is: ${i * base}\n`
  }

  fs.writeFile(`tabla/tabla-${base}.txt`, data , (err) => {
    if (err)
    reject('Something was wrong durin the saving')
    else
    resolve(`tabla/${base}.txt`)
  });
}
);
}


//module.exports = { createFile }; // also it could be exported using this way
