const fs = require('fs')

const profileDataArgs = process.argv.slice(2)

const [name, github] = profileDataArgs

const generatePage = require('./src/page-template.js')

fs.writeFile('index.html', generatePage(name,github), err => {

    if (err) throw new Error(err)

    console.log('portfolio complete... check out index.html to see the output')
})





//reference module work:
//const printProfileData = profileDataArr => {
    // this...
   // for (let i = 0; i < profileDataArr.length; i += 1) {
   //   console.log(profileDataArr[i]);
   // }
  
   // console.log('================');
    // is the same as this
   //profileDataArr.forEach((profileItem) => console.log(profileItem));    
//};

//printProfileData(profileDataArgs);

//const message = 'hello node'

//if (true === true) {
  //  const message = 'hello es6'
  //  let sum = 5
  //  sum +=10
  //  console.log(message)
  //  console.log(sum)
//}

//console.log(message)
//console.log(sum)
