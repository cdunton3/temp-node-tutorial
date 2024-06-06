const EventEmitter = require(`events`)

const customEmitter = new EventEmitter()

customEmitter.on(`response`, (name, id, id2)=>{
    console.log(`data received ${name} ${id} ${id2}`)
})
customEmitter.on(`response`, ()=>{
    console.log(`data acquired`)
})
customEmitter.emit(`response`, `john`, 34, 23)