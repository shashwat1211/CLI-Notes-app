const  yargs  = require('yargs');
const {addNote, removeNote, listNotes, readNote, updateNote} = require('./app.js')
// console.log(yargs);
yargs.version("1.1.0")

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe:"Note Body",
            demandOption : true,
            type : "string"
        }
    },
    handler: ({title ,body})=>{
        addNote(title,body);
    }
});
yargs.command({
    command:"remove",
    describe:"Delete a note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        }
    },
    handler: ({title})=>{
        removeNote(title)
    }
})
yargs.command({
    command:"list" ,
    describe:"List all notes",
    handler:()=>{
        listNotes();
    }
})
yargs.command({
    command:"read",
    describe:"Read a note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption : true,
            type:"string"
        }
    },
    handler:({title})=>{
        readNote(title)
    }
})
yargs.command({
    command:"update",
    describe:"Update a note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption : true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption : true,
            type:"string"
        }
    },
    handler:({title,body})=>{
    updateNote(title , body)
    }
})
yargs.argv
