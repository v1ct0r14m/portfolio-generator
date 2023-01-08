const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there is an error, reject promis and send error to promise's 'catch()' method
            if (err) {
                reject(err)
                //return out of the function to make sure the promise doesn't accidentally execute 'resolve()' function
                return
            }
            //if everything worked, resolve the promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'file created'
            })
        })
    })
}

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {

            if (err) {
                reject(err)

                return
            }
            
            resolve({
                ok: true,
                message: 'stylesheet copied'
            })
        })
    })
}

module.exports = { writeFile, copyFile }