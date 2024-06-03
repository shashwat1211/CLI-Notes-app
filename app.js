const fs = require("fs")

const loadNotes = ()=>{
    try{
        const notesBuffer = fs.readFileSync("notes.json");
        const notes = notesBuffer.toString();
        const notesJson = JSON.parse(notes);
        return notesJson
    }catch(error){
        return [];
    }
}

const saveNotes=(notes)=>{
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json" , notesJson);
}

const addNote =(title, body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find(note=>{
        return note.title === title
    })
    if(duplicateNote)return console.log("Note already exist!!");
    const note = {title,body};
    notes.push(note);
    saveNotes(notes);
}
const removeNote=(title)=>{
    const notes = loadNotes()
    const filteredNotes = notes.filter(note=>{
        return note.title !== title;
    })
    if(filteredNotes.length < notes.length){
        saveNotes(filteredNotes)
        return console.log("Note removed")
    }else{
        return console.log("Note Doesn't exist")
    }
}
const listNotes=()=>{
    const notes = loadNotes();
    console.log("Notes are :")
    console.log("-----------------")
    notes.map(note=>{
        console.log(note.title)
    })
}
const readNote=(title)=>{
    const notes = loadNotes();
    const note = notes.find(note=>{
        return note.title === title
    })
    if(!note){
        return console.log("Note not found")
    }
    console.log(note.title)
    console.log("-----------------")
    console.log(note.body)
}
const updateNote = (title , body)=>{
    const notes = loadNotes();
    const updatedNotes = notes.map(note=>{
        if(note.title===title){
            return {...note , body:body}
        }
        return note
    })
    saveNotes(updatedNotes)
}


module.exports = {addNote , removeNote, listNotes, readNote, updateNote}