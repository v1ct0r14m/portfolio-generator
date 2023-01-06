const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {

    profileDataArr.forEach((profileItem) => console.log(profileItem));    
};

printProfileData(profileDataArgs);

const message = 'hello node'

if (true === true) {
    const message = 'hello es6'
    let sum = 5
    sum +=10
    console.log(message)
    console.log(sum)
}

console.log(message)
console.log(sum)
