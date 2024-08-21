import React from "react";
import Notecard from "../components/Notecard";
import {fakeData as notes} from "../assets/fakeData";

const NotesPage = () => {
    return (
    <div>
        {notes.map(note => (
            <Notecard key={note.$id} note={note}/>
        ))}
    </div>
    )
}

export default NotesPage;
