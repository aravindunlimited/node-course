const fs = require('fs')
const chalk = require('chalk')

var createNotes = (filename, text) =>
{
    const notes = loadNote()
    if (!fileExist(notes, filename)) 
    try {
        if (text > '' ) fs.writeFileSync(filename + '.txt', text)
        else fs.openSync(filename + '.txt','w')
        notes.push({title: filename}) 
        saveNote(notes)
    } catch(e)
    {
        throw e
    }
else console.log(filename + ' is already created') }

var readNotes =   (filename)=> {
    const notes = loadNote()
    if (fileExist(notes, filename)) {
    try {
        var text = fs.readFileSync(filename + '.txt')
    return(text.toString())
}  catch(e)
{
    throw e
}}
else console.log(filename + ' doesnt exist')
}

var writeNotes = (filename, text) => {
    const notes = loadNote()
    if (fileExist(notes, filename)) {
    try {
        fs.appendFileSync(filename + '.txt', text)
}   catch(e)
{
    throw e
}}
else console.log(filename + ' doesnt exist')
}

var deleteNotes =   (filename) => {
    const notes = loadNote()
    if (fileExist(notes, filename)) {
    try {
        fs.unlinkSync(filename + '.txt')
        saveNote(remNote(notes, filename)) 

}   catch(e)
{
    throw e
}}
else console.log(chalk.red.inverse(filename + ' doesnt exist'))
}

var listNotes = () => {
    try {
        const lists = loadNote()
        console.log(lists)
        lists.forEach(element => { 
            console.log(element.title)
        })
    } catch(e) { throw e} }

    
const fileExist = (notes, filename) => {
    debugger
    const dupl = notes.find((test) => test.title === filename   )
    if (dupl)  return true
    else return false
}

const remNote = (notes, filename) => {
    const dupl = notes.filter((test) => test.title !== filename )
    return(dupl)
}

const loadNote = () => JSON.parse(fs.readFileSync('noterepo.json').toString())

const saveNote = (notes) => {

    fs.writeFileSync('noterepo.json', JSON.stringify(notes))

}

module.exports = {
    create: createNotes,
    delete: deleteNotes,
    read: readNotes,
    write: writeNotes,
    list: listNotes}