import {useState, useEffect} from "react";
import Notecard from "../components/Notecard";
import { databases } from "../appwrite/config";

const NotesPage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        const response = await databases.listDocuments(import.meta.env.VITE_DATABASE_ID, import.meta.env.VITE_COLLECTION_NOTES_ID);
        setNotes(response.documents);
        console.log(response);
    }

    return (
    <div>
        {notes.map(note => (
            <Notecard key={note.$id} note={note}/>
        ))}
    </div>
    )
}

export default NotesPage;
