const {readFile, writeFile} = require('fs')
// can also do the below
// const fs = require('fs')
// fs.readFile

console.log(`start`)

readFile(`./content/first.txt`, `utf8`, (err,result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile(`./content/second.txt`, `utf8`, (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            `./content/result-async.txt`,
            `here is the result: ${first}, ${second}`, 
            {flag: 'a'},
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log(`done with this write task`)
            }
        )
    })
})

console.log(`starting next task`)