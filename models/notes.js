import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    dateCreated: Date,
    note: String,
})

const NoteInstance = mongoose.model("NoteInstance", noteSchema)

export default NoteInstance