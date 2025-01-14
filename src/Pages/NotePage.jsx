import {useState, useEffect, useContext} from "react";
import Controls from "../components/Controls";
import Notecard from "../components/Notecard";
import { NoteContext } from "../context/NoteContext";

const NotesPage = () => {
    const {notes} = useContext(NoteContext);

    
    return (
    <div>
        {notes.map(note => (
            <Notecard key={note.$id} note={note} />
        ))}
        <Controls />
    </div>
    )
}

export default NotesPage;
