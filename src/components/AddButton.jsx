import Plus from "../icons/Plus";
import colors from "../assets/colors.json";
import { db } from "../appwrite/databases";
import { useRef, useContext } from "react";
import { NoteContext } from "../context/NoteContext";
 
const AddButton = () => {
    const { setNotes } = useContext(NoteContext);
    const statingPos = useRef(10);

    const addNote = async () => {
        const payload = {
            position: JSON.stringify({
                x: statingPos.current,
                y: statingPos.current,
            }),
            colors: JSON.stringify(colors[2]),
        }

        statingPos.current += 10;

        const response = await db.notes.create(payload);
        setNotes((prevState) => [response, ...prevState]);
    };


    return (
        <div id="add-btn" onClick={addNote}>
            <Plus />
        </div>
    );
};

export default AddButton;