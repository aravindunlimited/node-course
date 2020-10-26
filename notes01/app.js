const valid = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const Notes = require('./Notes.js')
yargs.version('1.1.0')
yargs.command({
    command: 'create',
    describe: 'Add the stuffs',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true
        },
        entries: {
            describe: 'Note Entries',
            demandOption: false
        }
    },
    handler(argv) {
        console.log(argv)
        Notes.create( argv.title.toString(), argv.entries)

    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete the stuffs',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler(argv) {
        Notes.delete( argv.title)

    }
})
yargs.command({
    command: 'write',
    describe: 'write the file',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true
        },
        entries: {
            describe: 'Note Entries',
            demandOption: true
        }
    },
handler(argv) {
        Notes.write(argv.title, argv.entries)

    }
})

yargs.command({
    command: 'read',
    describe: 'read the stuffs',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler(argv) {
        console.log(Notes.read( argv.title))

    }
})

yargs.command({
    command: 'list',
    describe: 'list the stuffs',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: false
        }
    },
    handler() {
        Notes.list()

    }
})

console.log(yargs.argv)


